const trailerButton = document.querySelector('.trailer-button');
const modal = document.querySelector('.modal');
const closeVideo = document.querySelector('.close-video');
const video = document.getElementById('video');
const videoLink = video.src;

/* Uma opção mais curta:
function modalAlternate(){
    //toggle = alternar
    modal.classList.toggle('opened');

}*/

trailerButton.addEventListener('click', () => {
    //Add classe
    modal.classList.add('opened');
    video.setAttribute('src', videoLink);
});

closeVideo.addEventListener('click', function(){
    //modalAlternate();
    modal.classList.remove('opened');
    video.setAttribute('src', 'none')
})