import { opciones, opcionesMenuLateral } from "../../../../constants/common";

// Seccion de Pagos
class RecargasElectronicasNavigation{
    async seleccionarRecargasElectronicas(){
        await $(opcionesMenuLateral.opcion(opciones.RecargasElectronicas)).click();
    }
}

export default new RecargasElectronicasNavigation();
