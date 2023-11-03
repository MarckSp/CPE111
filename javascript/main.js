document.addEventListener('DOMContentLoaded', function () {
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    document.querySelector('.logo').addEventListener('click', function (event) {
        event.preventDefault();
        scrollToTop();
    });

});
