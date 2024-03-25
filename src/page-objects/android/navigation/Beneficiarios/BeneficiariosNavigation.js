import { opciones, opcionesMenuLateral } from "../../../../constants/common";

// Seccion de Pagos
class BeneficiariosNavigation{
    async seleccionarBeneficiarios(){
        await $(opcionesMenuLateral.opcion(opciones.Beneficiarios)).click();
    }
}

export default new BeneficiariosNavigation();
