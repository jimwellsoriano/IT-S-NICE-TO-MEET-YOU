     window.addEventListener('scroll', () =>{
        const header = document.querySelector('header');
        if(window.scrollY > 0){
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    function onOffHeader(selector) {
        const inputElement = document.querySelector(selector);
        if(!inputElement.classList.contains('is-toggled')){
            handlePreviouseInput();
            inputElement.classList.add('is-toggled');
        } else {
            inputElement.classList.remove('is-toggled');
        }
    }

    function handlePreviouseInput(){
        previouseElement = document.querySelector('.is-toggled');
        if(previouseElement){
            previouseElement.classList.remove('is-toggled')
        }
    }
