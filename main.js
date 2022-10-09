window.sr = ScrollReveal({reset:true});

sr.reveal('.sobreMim', {duration : 1500})
sr.reveal('.skills'),{duration : 1500}
sr.reveal('.hobbies'),{duration: 1500}
sr.reveal('.formacao'),{duration : 1500}
sr.reveal('.projetos'),{duration : 1500}


function typeWritter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 150 * i)
    });  
} 
    typeWritter(document.querySelector(".title_texto_nome"))

   