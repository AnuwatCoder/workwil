document.documentElement.classList.remove('no-js');

(() => {
  const initializePage = () => {
    const preloader = document.getElementById('preloader');
    const loaderText = document.getElementById('loader-text');
    const currentYear = document.getElementById('current-year');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const startedAt = performance.now();
    const minimumDuration = reduceMotion ? 0 : 850;
    let progress = 0;
    let revealing = false;

    const progressTimer = window.setInterval(() => {
      progress += Math.max(1, Math.round((92 - progress) * .12));
      progress = Math.min(progress, 92);
      loaderText.textContent = `PREPARING YOUR WORKSPACE · ${progress}%`;
    }, 70);

    const revealPage = () => {
      if (revealing) return;
      revealing = true;
      const wait = Math.max(0, minimumDuration - (performance.now() - startedAt));

      window.setTimeout(() => {
        window.clearInterval(progressTimer);
        loaderText.textContent = 'WORKSPACE READY · 100%';
        document.body.classList.add('is-ready');
        preloader.classList.add('is-hidden');
        preloader.setAttribute('aria-busy', 'false');

        window.setTimeout(() => {
          document.body.classList.add('typewriter-active');
        }, reduceMotion ? 0 : 650);

        window.setTimeout(() => preloader.remove(), 700);
      }, wait);
    };

    if (document.readyState === 'complete') revealPage();
    else window.addEventListener('load', revealPage, { once: true });

    // Safety fallback: never leave visitors behind the loading screen.
    window.setTimeout(revealPage, 4000);
    currentYear.textContent = new Date().getFullYear();

    // Keep in-page navigation inside the current document when opened via file://.
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', (event) => {
        const target = document.querySelector(link.getAttribute('href'));
        if (!target) return;

        event.preventDefault();
        target.scrollIntoView({
          behavior: reduceMotion ? 'auto' : 'smooth',
          block: 'start'
        });
      });
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePage, { once: true });
  } else {
    initializePage();
  }
})();
