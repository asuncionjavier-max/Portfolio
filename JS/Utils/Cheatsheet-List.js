import{cheatsheetLenguajes}from"../data/cheatsheet.js"

export function cheatsheetLenguajesFunc(){
    const cheatsheet = document.getElementById('lenguaje');
    cheatsheet.innerHTML = cheatsheetLenguajes.map(skill=>`
        <div class="skill-Card">
        <a href=${skill.url}><h1>${skill.name}</h1>
         <img src=${skill.icon}>
         </div>`).join("")
}