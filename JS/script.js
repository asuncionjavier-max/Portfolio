import {inyectarHeader, inyectarFooter} from "./Templates/templates.js"
import {modoClaro, cargarPreferenciaMode} from "./Utils/LightMode.js"
import {renderSkillsDev, renderSkillsMark} from "./Utils/SkillsList.js"
import {cheatsheetLenguajesFunc} from"./Utils/Cheatsheet-List.js"
inyectarHeader()
inyectarFooter()
modoClaro()
cargarPreferenciaMode()
renderSkillsDev()
renderSkillsMark()
cheatsheetLenguajesFunc()