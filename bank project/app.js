// scroll reveal animation

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true
});

sr.reveal(`.logo`);
sr.reveal(`.request-btn`, { origin: "bottom", delay: 500 });
// sr.reveal(`.request-btn .a`, { origin: "bottom", delay: 500 });
sr.reveal(`.text-description`, { origin: "bottom", delay: 500 });
sr.reveal(`.header-text_contain`, { origin: "bottom", delay: 600 });
sr.reveal(`.grid-text-title`, { origin: "bottom", delay: 600 });
sr.reveal(`.grid-text-subtitle`, { origin: "bottom", delay: 800 });
sr.reveal(`.b`, { origin: "bottom", delay: 900 });
sr.reveal(`.u`, { origin: "bottom", delay: 1000 });
sr.reveal(`.i`, { origin: "bottom", delay: 1100 });
sr.reveal(`.l`, { origin: "bottom", delay: 1200 });
sr.reveal(`.d`, { origin: "bottom", delay: 1300 });
