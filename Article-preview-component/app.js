const shareOpen = document.getElementById('share-open');
const shareClose = document.getElementById('share-close');
const footer = document.querySelector('.footer');
const shareBar = document.querySelector('.share-bar'); 


function share() {
    // open and clode social media sharin bar depending on screen size
    if(window.innerWidth < 375){
        // open social media sharing bar
        shareOpen.addEventListener('click', ()=> {
            footer.classList.toggle('hide-footer');
            shareBar.classList.toggle('hide-sharebar');
        })

        // open social media sharing bar
        shareClose.addEventListener('click', ()=> {
            footer.classList.toggle('hide-footer');
            shareBar.classList.toggle('hide-sharebar');
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
