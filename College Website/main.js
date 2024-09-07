//change navbar style on scroll

window.addEventListener('scroll',()=>{
    document.getElementById('nav').classList.toggle('window-scroll',window.scrollY > 100)
});


// show/hide faq answer 

const faqs = document.querySelectorAll('.article');

faqs.forEach(article => {
    article.addEventListener('click', ()=> {
        article.classList.toggle('open');

        //change icon
        const icon = article.querySelector('.faq__icon i');
        if(icon.className === 'fa-solid fa-plus'){
           icon.className = "fa-solid fa-minus";
        }else{
            icon.className = "fa-solid fa-plus";
        }
    });
});