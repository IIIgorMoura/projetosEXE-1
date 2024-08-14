document.getElementById('btnIframe').addEventListener('click', function() {
    const target = document.getElementById('iframeSection');
    const offsetPosition = target.offsetTop - 150; // 50px acima do elemento

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
});