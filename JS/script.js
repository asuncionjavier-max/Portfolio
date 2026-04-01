
    const button = document.getElementById('dark-light')
    const light = document.querySelector('body')

    button.addEventListener("click", function cambioColor(event){
    event.preventDefault();
    console.log("El botón funciona y la clase se está activando");
    light.classList.toggle('dark-mode')
    })