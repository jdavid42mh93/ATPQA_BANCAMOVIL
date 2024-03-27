import { commonsSelectores, opciones } from "../../../../constants/common";

// Seccion de Pagos
class ProgramacionNavigation{
    async seleccionarProgramacion(){
        await $(commonsSelectores.textOpcion(opciones.Programacion)).click();
    }
}

export default new ProgramacionNavigation();
