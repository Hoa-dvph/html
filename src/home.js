function openSignUpModal() {
    document.getElementById('signupModal').style.display = 'flex';
    closeLoginModal();
}

function closeSignUpModal() {
    document.getElementById('signupModal').style.display = 'none';
}

function openLoginModal() {
    document.getElementById('loginModal').style.display = 'flex';
    closeSignUpModal();
}

function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

function switchToSignUp() {
    closeLoginModal();
    openSignUpModal();
}

function switchToLogin() {
    closeSignUpModal();
    openLoginModal();
}

window.onclick = function (event) {
    let signupModal = document.getElementById('signupModal');
    let loginModal = document.getElementById('loginModal');
    if (event.target === signupModal) {
        closeSignUpModal();
    }
    if (event.target === loginModal) {
        closeLoginModal();
    }
}
const trailerButton = document.getElementById('trailerButton');
const trailerModal = document.getElementById('trailerModal');
const trailerVideo = document.getElementById('trailerVideo');
let trailerSrc = "https://www.youtube.com/embed/ad5_EY2P6Vg";
trailerButton.addEventListener('click', function (e) {
    e.preventDefault();
    trailerModal.style.display = "flex";
    trailerVideo.src = trailerSrc + "?autoplay=0";
});


trailerModal.addEventListener('click', function (e) {
    if (e.target === trailerModal) {
        trailerModal.style.display = "none";
        trailerVideo.src = "";
    }
});