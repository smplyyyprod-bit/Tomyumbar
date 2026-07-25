/**
 * TomYumBar — Cinematic intro overlay
 * ------------------------------------------------------------------
 * Plays once per page load, full-screen, above everything. Hands off
 * to the hero only once BOTH are true:
 *   1. the intro clip has ended
 *   2. the first hero video (#heroVideoA, loaded independently by
 *      js/hero-video.js) is buffered enough to play smoothly
 * — buffered, not playing: js/hero-video.js loads clip one eagerly
 * but holds off calling .play() until window.TYB_startHeroVideo() is
 * called below, at the exact moment of handoff, so the hero visibly
 * starts from its first frame right as the intro ends rather than
 * having been playing underneath it the whole time. Respects
 * prefers-reduced-motion by skipping the intro entirely.
 * ------------------------------------------------------------------
 */

(function heroIntro() {
  const overlay = document.getElementById("introOverlay");
  const introVideo = document.getElementById("introVideo");
  const hero = document.getElementById("hero");
  const heroVideo = document.getElementById("heroVideoA");
  if (!overlay || !introVideo || !hero) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Always land on the hero itself, never wherever a leftover URL hash
  // (e.g. #menu from a previous nav click) would otherwise scroll to.
  // A single call isn't reliable — the browser's own hash-scroll can
  // land at unpredictable points during initial load (raced this: it
  // varies with how long fonts/video requests take), so this keeps
  // re-winning that race for a short window instead of trusting one
  // fixed moment. Harmless to real scrolling either way: during the
  // intro proper, html.intro-active already blocks scrolling entirely;
  // for reduced-motion visitors (who can scroll immediately) the window
  // is short enough that it's over before anyone would act on it.
  function forceScrollTopFor(ms) {
    window.scrollTo(0, 0);
    const deadline = Date.now() + ms;
    const tick = () => {
      window.scrollTo(0, 0);
      if (Date.now() < deadline) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
  forceScrollTopFor(1200);

  if (prefersReducedMotion || !heroVideo) {
    overlay.remove();
    hero.classList.add("is-visible");
    document.documentElement.classList.add("hero-revealed");
    return;
  }

  document.documentElement.classList.add("intro-active");

  const fadeMs = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--intro-fade")) || 1000;
  // Absolute worst-case fallback (slow/broken network) so the site can
  // never get stuck behind the intro indefinitely — well outside normal
  // operation, just a last-resort safety net.
  const MAX_WAIT_MS = 6000;

  let introEnded = false;
  let heroReady = false;
  let transitioned = false;
  let graceTimer = null;

  function tryTransition() {
    if (transitioned || !introEnded || !heroReady) return;
    transitioned = true;
    if (graceTimer) clearTimeout(graceTimer);

    // Same leftover-hash guard as above, reapplied right at the reveal
    // moment in case anything scrolled in the meantime.
    forceScrollTopFor(1200);

    overlay.classList.add("is-fading");
    hero.classList.add("is-visible");
    document.documentElement.classList.add("hero-revealed");
    if (typeof window.TYB_startHeroVideo === "function") window.TYB_startHeroVideo();

    window.setTimeout(() => {
      introVideo.pause();
      introVideo.removeAttribute("src");
      introVideo.load();
      overlay.remove();
      document.documentElement.classList.remove("intro-active");
    }, fadeMs);
  }

  function markHeroReady() {
    if (heroReady) return;
    heroReady = true;
    tryTransition();
  }

  function markIntroEnded() {
    introEnded = true;
    tryTransition();
  }

  // Prefer canplaythrough (smoothest handoff); fall back to canplay if
  // canplaythrough hasn't fired shortly after — it's known to be slow
  // or inconsistent on some browsers/connections.
  if (heroVideo.readyState >= 4 || heroVideo.error) {
    markHeroReady();
  } else if (heroVideo.readyState >= 3) {
    graceTimer = window.setTimeout(markHeroReady, 800);
  } else {
    heroVideo.addEventListener("canplaythrough", markHeroReady, { once: true });
    heroVideo.addEventListener(
      "canplay",
      () => {
        graceTimer = window.setTimeout(markHeroReady, 800);
      },
      { once: true }
    );
    // If the hero clip fails outright (bad network, missing file, host
    // issue), don't sit waiting for a readiness signal that will never
    // arrive — treat the failure as "ready" and let the hero fall back
    // to its poster image instead of stalling the whole handoff.
    heroVideo.addEventListener("error", markHeroReady, { once: true });
  }

  // Guard against the intro clip finishing (or erroring) before this
  // script runs — e.g. a slow script load against an already-cached,
  // very short clip — in which case the "ended"/"error" event already
  // fired and a listener attached now would never see it.
  if (introVideo.ended || introVideo.error) {
    markIntroEnded();
  } else {
    introVideo.addEventListener("ended", markIntroEnded, { once: true });
    introVideo.addEventListener("error", markIntroEnded, { once: true });
  }

  // Manual escape hatch: tapping the overlay or pressing Escape jumps
  // straight to the hero, regardless of what the video elements are
  // doing. A splash intro should never be able to trap someone.
  function skipIntro() {
    introEnded = true;
    heroReady = true;
    tryTransition();
  }
  overlay.addEventListener("click", skipIntro);
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") skipIntro();
  });

  window.setTimeout(skipIntro, MAX_WAIT_MS);
})();
