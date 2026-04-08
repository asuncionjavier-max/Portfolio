/*---HEADER---*/
export function inyectarHeader(){
    const header = document.getElementById("header");
    header.innerHTML = ` <header>
        <a href="index.html">AD</a>
        <input type="checkbox" id="menu-toggle">
        <label for="menu-toggle" class="menu-icon">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </label>
        <nav class="menu">
          <a href="#" id="dark-light"><img class="dark-light" id="icono-visual" src="https://res.cloudinary.com/dbsvmqrm6/image/upload/v1775079674/sun-white-icon-vector_ppjaus.jpg" alt="modo claro o ocurso"></a>
          <a href="sobre-mi.html" target="_blank" rel="noopener">Sobre mi</a>
          <a href="#skills">Skills</a>
          <a href="#proyectos">Proyectos</a>
          <a href="form.html" target="_blank"rel="noopener" class="contact">Contacto</a>
        </nav>
      </header>`
}
/*---FOOTER---*/
export function inyectarFooter(){
const footer = document.getElementById("footer");
footer.innerHTML = `<footer>
        <nav>
          <p>
            &copy;<em>
              2026 Javier Asunción Tarrega - FullStack Developer & Marketing
              Assistant</em
            >
          </p>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/javier-asunci%C3%B3n-047499252/"
                target="_blank"rel="noopener"
                >Linkedin</a
              >
            </li>
            <li>
              <a href="https://github.com/asuncionjavier-max" target="_blank"rel="noopener"
                >Github</a
              >
            </li>
          </ul>
        </nav>
      </footer>`
}
