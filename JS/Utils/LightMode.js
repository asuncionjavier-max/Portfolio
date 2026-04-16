/* ---MODO CLARO --- */
export function modoClaro(){
    const button = document.getElementById('dark-light')
    const body = document.querySelector('body')
    const moonSun = document.getElementById('icono-visual')
    
    
    button.addEventListener("click", function cambioColor(event){
        event.preventDefault(); 
        body.classList.toggle('light-mode')
        if(body.classList.contains('light-mode')){
            localStorage.setItem('lightMode', 'true')
        }
        else{
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
    }
    else {
        body.classList.remove('lightMode')
    }
}