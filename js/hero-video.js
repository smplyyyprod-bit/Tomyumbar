/**
 * TomYumBar — Hero video playlist
 * ------------------------------------------------------------------
 * Plays 5 clips back-to-back as one continuous loop with no gap:
 * two <video> elements swap an "is-active" class (CSS opacity
 * crossfade) while the standby element preloads the next clip in
 * the background. Order here is the source of truth for playback
 * order — edit HERO_PLAYLIST to reorder, add, or remove clips.
 * ------------------------------------------------------------------
 */

(function heroVideoPlaylist() {
  const HERO_PLAYLIST = [
    "assets/videos/hero-01.mp4",
    "assets/videos/hero-02.mp4",
    "assets/videos/hero-03.mp4",
    "assets/videos/hero-04.mp4",
    "assets/videos/hero-05.mp4",
  ];

  const media = document.getElementById("heroMedia");
  const videoA = document.getElementById("heroVideoA");
  const videoB = document.getElementById("heroVideoB");
  if (!media || !videoA || !videoB || HERO_PLAYLIST.length === 0) return;

  const fadeMs = parseFloat(getComputedStyle(media).getPropertyValue("--hero-fade")) || 400;

  let active = videoA;
  let standby = videoB;
  let activeIndex = 0;
  let armed = false;

  const nextOf = (i) => (i + 1) % HERO_PLAYLIST.length;

  function loadInto(videoEl, index) {
    videoEl.src = HERO_PLAYLIST[index];
    videoEl.load();
  }

  function safePlay(videoEl) {
    const p = videoEl.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
  }

  function onNearEnd(e) {
    const v = e.target;
    if (!armed || !v.duration || Number.isNaN(v.duration)) return;
    if (v.duration - v.currentTime <= fadeMs / 1000) {
      armed = false;
      v.removeEventListener("timeupdate", onNearEnd);
      crossfadeToStandby();
    }
  }

  function armWatcher(videoEl) {
    armed = true;
    videoEl.addEventListener("timeupdate", onNearEnd);
  }

  function crossfadeToStandby() {
    const upcomingIndex = nextOf(activeIndex);
    const afterIndex = nextOf(upcomingIndex);

    safePlay(standby);
    active.classList.remove("is-active");
    standby.classList.add("is-active");

    const finishedVideo = active;
    active = standby;
    standby = finishedVideo;
    activeIndex = upcomingIndex;

    armWatcher(active);

    window.setTimeout(() => {
      finishedVideo.pause();
      finishedVideo.currentTime = 0;
      loadInto(standby, afterIndex);
    }, fadeMs);
  }

  loadInto(active, 0);
  loadInto(standby, nextOf(0));

  active.addEventListener(
    "canplay",
    () => {
      safePlay(active);
      armWatcher(active);
    },
    { once: true }
  );
})();
