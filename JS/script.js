
    const button = document.getElementById('dark-light')
    const body = document.querySelector('body')
    const header = document.getElementById('header')
    const moonSun = document.getElementById('icono-visual')
    const keyframes = document.querySelector('proyectos')

    button.addEventListener("click", function cambioColor(event){
    event.preventDefault();
    body.classList.toggle('light-mode')
    if(body.classList.contains('light-mode')){
     moonSun.src = "https://res.cloudinary.com/dbsvmqrm6/image/upload/v1775120337/1518052_cn6lgn.png"
     keyframes.classList.toggle('anim-light')
    }
else{
    moonSun.src = "https://res.cloudinary.com/dbsvmqrm6/image/upload/v1775079674/sun-white-icon-vector_ppjaus.jpg"
}
})