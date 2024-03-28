import { commonsSelectores, opciones } from "../../../../constants/common";

// Seccion de Pagos
class RecargasElectronicasNavigation{
    async seleccionarRecargasElectronicas(){
        await $(commonsSelectores.textOpcion(opciones.RecargasElectronicas)).click();
    }
}

export default new RecargasElectronicasNavigation();
