const like = document.querySelectorAll('[data-like]');

like.forEach(e =>{
    e.addEventListener('click', event => {
        if(event.target.dataset.like == 'false'){
            event.target.dataset.like = 'true'
            event.target.classList.remove('fa-regular')
            event.target.classList.add('fa-solid')
            console.log(event.target.classList)
        }else{
            event.target.dataset.like = 'false'
            event.target.classList.remove('fa-solid')
            event.target.classList.add('fa-regular')
        }
    }) 
})