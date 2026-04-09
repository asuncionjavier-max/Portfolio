import {DeveloperSkills, MarketingSkills} from "../data/skills.js"
export function renderSkillsDev(){
    const skillsContainer = document.getElementById("skills-dev")
    skillsContainer.innerHTML = DeveloperSkills.map(skill =>`<div class="skill-Card" ><h1>${skill.name}</h1><img src="${skill.icon}"><p>${skill.level}<p/></div>`   
    ).join("")
}

export function  renderSkillsMark(){
    const skillMarketing = document.getElementById("skills-mark")
        skillMarketing.innerHTML = MarketingSkills.map(skill =>`<div class="skill-Card" ><h1>${skill.name}</h1><img src="${skill.icon}"> <p>${skill.level}<p/></div>`).join("")
    
}