const shareOpen = document.getElementById('share-open');
const shareClose = document.getElementById('share-close');
const footer = document.querySelector('.footer');
const shareBar = document.querySelector('.share-bar'); 
const avatar = document.querySelector('.avatar');
const author = document.querySelector('.author');
const OpenButton = document.querySelector('.actionDestop-open');

function share() {
    // open and clode social media sharin bar depending on screen size
    if(window.innerWidth < 376){
        // open social media sharing bar
        shareOpen.addEventListener('click', ()=> {
            OpenButton.classList.toggle('hide');
            shareBar.classList.toggle('hide-sharebar');
            avatar.classList.toggle('hide');
            author.classList.toggle('hide');        
        })

        // open social media sharing bar
        shareClose.addEventListener('click', ()=> {
            OpenButton.classList.toggle('hide');
            shareBar.classList.toggle('hide-sharebar');
            avatar.classList.toggle('hide');
            author.classList.toggle('hide');
        })
    } else {
        // open social media sharing bar
        shareOpen.addEventListener('click', ()=> {
            shareBar.classList.toggle('hide-sharebar');
        })

        // open social media sharing bar
        shareClose.addEventListener('click', ()=> {
            shareBar.classList.toggle('hide-sharebar');
        })
    }
}
share();
