import{cheatsheetLenguajes}from"../data/cheatsheet"

function cheatsheetLenguajesFunc(){
    const cheatsheet = document.getElementById('lenguaje');
    cheatsheet.innerHTML = cheatsheetLenguajes.map(skill=>`<a href=${skill.url}<h1>${skill.name}</h1> <img src=${skill.icon}>`).join("")
}