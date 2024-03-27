import { commonsSelectores, opciones } from "../../../../constants/common";

// Seccion de Pagos
class AvanceEfectivoNavigation{
    async seleccionarAvanceEfectivo(){
        await $(commonsSelectores.textOpcion(opciones.AvanceEfectivo)).click();
    }
}

export default new AvanceEfectivoNavigation();
