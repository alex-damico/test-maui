let observer;
window.initializeScroll = (dotNetRef) => {
    observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            dotNetRef.invokeMethodAsync('LoadMoreArticles');
        }
    }, { threshold: 1.0 });

    observer.observe(document.getElementById('load-more-trigger'));

    const urlParams = new URLSearchParams(window.location.search);
    const scrollPosition = urlParams.get('scrollPosition');
    if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition, 10));
    }
};

window.getScrollPosition = () => {
    return window.scrollY;
};
