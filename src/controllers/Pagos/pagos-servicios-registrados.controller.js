import { editEntry } from "../../helpers/fileEditor.helper";
import { files, dataConditions, dataTypes, dataSubtypes, dataInstructions, dataStatus } from "../../constants/_data_generation";
import { pagosServiciosRegistradosSelectores } from "../../constants/pagos/pagosServiciosRegistrados";
import { pagosSelectors, serviciosOpciones } from "../../constants/pagos/pagosSelectores";

// Seccion de pagos de servicios registrados del usuario
class PagosServiciosRegistrados {
// Funciones para obtener los selectores de pagos de servicios registrados
    get getGrupoServicioSelector() {
        return $(pagosSelectors.gruposServicios)
    }

    get getBeneficiarioSelector () {
        return $(pagosServiciosRegistradosSelectores.beneficiario)
    }

    get getServicioSelector () {
        return $(pagosSelectors.servicio)
    }

    get getTipoPagoSelector () {
        return $(pagosServiciosRegistradosSelectores.tipoPago)
    }

    async seleccionarGrupoServicio (opcion) {
        switch (opcion) {
            case serviciosOpciones.servicioAgua:
                await $(pagosSelectors.grupoServicioOpcion(opcion)).waitForDisplayed();
                await $(pagosSelectors.grupoServicioOpcion(opcion)).click();
                break;
            case serviciosOpciones.servicioLuz:
                await $(pagosSelectors.grupoServicioOpcion(opcion)).waitForDisplayed();
                await $(pagosSelectors.grupoServicioOpcion(opcion)).click();
                break;
            case serviciosOpciones.servicioTelefono:
                await $(pagosSelectors.grupoServicioOpcion(opcion)).waitForDisplayed();
                await $(pagosSelectors.grupoServicioOpcion(opcion)).click();
                break;
            default:
                break;
        }
    }

// Funcion para ingresr los datos de la transferencia en el formulario
    async pagosServiciosRegistradosForm(data){
        try{
            let elemento;
            for (let i=0; i < data.length; i++){
                elemento = data[i];
            }
            // Seleccionar grupo de servicio
            await this.getGrupoServicioSelector.waitForDisplayed();
            await this.getGrupoServicioSelector.click();
            // Seleccionar grupo de servicio opcion
            await this.seleccionarGrupoServicio(elemento.grupo_servicios);

            // Seleccionar servicio
            await this.getServicioSelector.waitForDisplayed();
            await this.getServicioSelector.click();
            // Seleccionar servicio opcion
            await $(pagosServiciosRegistradosSelectores.servicioOpcion(elemento)).waitForDisplayed();
            await $(pagosServiciosRegistradosSelectores.servicioOpcion(elemento)).click();

            // Seleccionar beneficiario
            await this.getBeneficiarioSelector.waitForDisplayed();
            await this.getBeneficiarioSelector.click();

            // Seleccionar tipo de pago
            await this.getTipoPagoSelector.waitForDisplayed();
            await this.getTipoPagoSelector.click();
            
            editEntry(files.data,[dataConditions.typeIs(dataTypes.transferencias),dataConditions.subtypeIs(dataSubtypes.EntreMisCuentas), dataConditions.statusIs(dataStatus.pending), dataInstructions.case(elemento.case)],[dataInstructions.assignStatus(dataStatus.active)]);
        }catch(error){
            console.error('Error en ingresar datos en transferencias entre mis cuentas', error);
        }
    }
}

export default new PagosServiciosRegistrados ();