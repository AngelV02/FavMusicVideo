// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.


var musicVideo = document.getElementById("music-video");

function animateVideo() {
    musicVideo.style.transform = "rotate(360deg)";
    musicVideo.style.transition = "transform 2s ease-in-out";
}

// Call the animateVideo function after the page has loaded
window.onload = function () {
    animateVideo();
};
