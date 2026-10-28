
window.addEventListener('load', () => {
    const loader = document.getElementById('loader-wrapper');
    if(loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 600);
        }, 500); 
    }
});
