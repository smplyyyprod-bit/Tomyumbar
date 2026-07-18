/**
 * TomYumBar — Cinematic intro overlay
 * ------------------------------------------------------------------
 * Plays once per page load, full-screen, above everything. Hands off
 * to the hero only once BOTH are true:
 *   1. the intro clip has ended
 *   2. the first hero video (#heroVideoA, loaded independently by
 *      js/hero-video.js) is buffered enough to play smoothly
 * — so the hero is always already playing, from its first frame,
 * by the time it's revealed. Respects prefers-reduced-motion by
 * skipping the intro entirely.
 * ------------------------------------------------------------------
 */

(function heroIntro() {
  const overlay = document.getElementById("introOverlay");
  const introVideo = document.getElementById("introVideo");
  const hero = document.getElementById("hero");
  const heroVideo = document.getElementById("heroVideoA");
  if (!overlay || !introVideo || !hero) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion || !heroVideo) {
    overlay.remove();
    hero.classList.add("is-visible");
    return;
  }

  document.documentElement.classList.add("intro-active");

  const fadeMs = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--intro-fade")) || 1000;
  // Absolute worst-case fallback (slow/broken network) so the site can
  // never get stuck behind the intro indefinitely — well outside normal
  // operation, just a last-resort safety net.
  const MAX_WAIT_MS = 15000;

  let introEnded = false;
  let heroReady = false;
  let transitioned = false;
  let graceTimer = null;

  function tryTransition() {
    if (transitioned || !introEnded || !heroReady) return;
    transitioned = true;
    if (graceTimer) clearTimeout(graceTimer);

    overlay.classList.add("is-fading");
    hero.classList.add("is-visible");

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
  if (heroVideo.readyState >= 4) {
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

  window.setTimeout(() => {
    introEnded = true;
    heroReady = true;
    tryTransition();
  }, MAX_WAIT_MS);
})();
