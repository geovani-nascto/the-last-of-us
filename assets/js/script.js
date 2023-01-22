const trailerButton = document.querySelector('.trailer-button');
const modal = document.querySelector('.modal');
const closeVideo = document.querySelector('.close-video');

trailerButton.addEventListener('click', () => {
    //Add classe
    modal.classList.add('opened');
});

closeVideo.addEventListener('click', function(){
    modal.classList.remove('opened');
})