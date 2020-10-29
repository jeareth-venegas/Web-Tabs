//Tomado de la practica de los que expusieron



const tabsList = document.querySelectorAll('.tabs-menu');


const content = document.querySelectorAll('.tab-content');


for( let i = 0; i< content.length; i++){
    content[i].classList.add('js-hidden-content'); 
}


content[0].classList.remove('js-hidden-content'); 
tabsList[0].classList.add('js-active');

for(let i = 0; i < tabsList.length; i++){
    tabsList[i].addEventListener('click', (event) =>{ 
        event.preventDefault(); 
        const id = event.currentTarget.getAttribute('href').substring(1); 
        for( let i = 0; i < content.length; i++){
            content[i].classList.add('js-hidden-content');
            if(content[i].getAttribute('id') == id){
                content[i].classList.remove('js-hidden-content');
            }
            
        }
        for(let i = 0; i< tabsList.length; i++){
            tabsList[i].classList.remove('js-active');
        }
        event.currentTarget.classList.add('js-active');
    });
}