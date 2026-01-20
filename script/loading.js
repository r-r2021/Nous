setTimeout(() => {
    // 1. Hide the loading screen
    const loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.classList.add('hidden');

    // 2. Show the main site (Matches id="site" in your HTML)
    const mainSite = document.getElementById('site');
    mainSite.classList.add('visible');
}, 3200);