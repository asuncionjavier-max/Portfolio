/* ---MODO CLARO --- */
export function modoClaro(){
    const button = document.getElementById('dark-light')
    const body = document.querySelector('body')
    const moonSun = document.getElementById('icono-visual')
    
    
    button.addEventListener("click", function cambioColor(event){
        event.preventDefault(); 
        body.classList.toggle('light-mode')
        if(body.classList.contains('light-mode')){
            moonSun.src = "https://res.cloudinary.com/dbsvmqrm6/image/upload/v1775120337/1518052_cn6lgn.png"
            localStorage.setItem('lightMode', 'true')
        }
        else{
            moonSun.src = "https://res.cloudinary.com/dbsvmqrm6/image/upload/v1775079674/sun-white-icon-vector_ppjaus.jpg"
            localStorage.setItem('lightMode', 'false')
        }
    })
}

export function cargarPreferenciaMode(){
    const modoGuardado = localStorage.getItem('lightMode')
    const body = document.querySelector('body')
    const moonSun = document.getElementById('icono-visual')

    if(modoGuardado === 'true'){
        body.classList.add('light-mode')
    }if(moonSun){
        moonSun.src = "https://res.cloudinary.com/dbsvmqrm6/image/upload/v1775120337/1518052_cn6lgn.png"

    } 
    else {
        body.classList.remove('lightMode')
    }
}