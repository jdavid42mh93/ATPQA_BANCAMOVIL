import { commonsSelectores, opciones } from "../../../../constants/common";

// Seccion de Pagos
class BeneficiariosNavigation{
    async seleccionarBeneficiarios(){
        await $(commonsSelectores.textOpcion(opciones.Beneficiarios)).click();
    }
}

export default new BeneficiariosNavigation();
