import { opciones, opcionesMenuLateral } from "../../../../constants/common";

// Seccion de Pagos
class ProgramacionNavigation{
    async seleccionarProgramacion(){
        await $(opcionesMenuLateral.opcion(opciones.Programacion)).click();
    }
}

export default new ProgramacionNavigation();
