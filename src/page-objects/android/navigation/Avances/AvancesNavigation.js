import { opciones, opcionesMenuLateral } from "../../../../constants/common";

// Seccion de Pagos
class AvanceEfectivoNavigation{
    async seleccionarAvanceEfectivo(){
        await $(opcionesMenuLateral.opcion(opciones.AvanceEfectivo)).click();
    }
}

export default new AvanceEfectivoNavigation();
