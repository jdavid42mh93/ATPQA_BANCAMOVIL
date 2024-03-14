import { editEntry } from "../../helpers/fileEditor.helper";
import { files, dataConditions, dataInstructions, dataStatus } from "../../constants/_data_generation";
import { opcionesPago, pagosServiciosRegistradosSelectores, servicios, textos } from "../../constants/pagos/pagosServiciosRegistrados";
import { pagosSelectors } from "../../constants/pagos/pagosSelectores";
import { UIAutomatorSelectores } from "../../constants/common";
import CommonActions from "../../page-objects/android/common-actions/CommonActions";

// Seccion de pagos de servicios registrados del usuario
class PagosServiciosRegistrados {
// Funciones para obtener los selectores de pagos de servicios registrados
    get getGrupoServicioSelector() {
        return $(pagosSelectors.gruposServicios)
    }

    get getBeneficiarioSelector() {
        return $(pagosServiciosRegistradosSelectores.beneficiario)
    }

    get getServicioSelector() {
        return $(pagosSelectors.servicio)
    }

    get getTipoPagoSelector() {
        return $(pagosServiciosRegistradosSelectores.tipoPago)
    }

    get getServicioOpcioSelector() {
        return $(servicios.servicioAgua)
    }

    async seleccionarGrupoServicio(grupoServicio) {
        await $(pagosSelectors.grupoServicioOpcion(grupoServicio)).waitForDisplayed();
        await $(pagosSelectors.grupoServicioOpcion(grupoServicio)).click();
    }

    async seleccionarServicio(servicio) {
        await $(pagosServiciosRegistradosSelectores.servicioOpcion(servicio)).waitForDisplayed();
        await $(pagosServiciosRegistradosSelectores.servicioOpcion(servicio)).click();
    }

    async seleccionarBeneficiario(beneficiario) {
        await $(pagosServiciosRegistradosSelectores.beneficiarioOpcion(beneficiario)).waitForDisplayed();
        await $(pagosServiciosRegistradosSelectores.beneficiarioOpcion(beneficiario)).click();
    }

    async seleccionarTipoPago(tipoPago) {
        await $(pagosServiciosRegistradosSelectores.tipoPagoOpcion(tipoPago)).waitForDisplayed();
        await $(pagosServiciosRegistradosSelectores.tipoPagoOpcion(tipoPago)).click();
    }

// Funcion para ingresr los datos de la transferencia en el formulario
    async pagosServiciosRegistradosForm(elemento){
        try{
            // Seleccionar grupo de servicio
            await this.getGrupoServicioSelector.waitForDisplayed();
            await this.getGrupoServicioSelector.click();
            // Seleccionar grupo de servicio opcion
            await this.seleccionarGrupoServicio(elemento.grupo_servicios);

            // Seleccionar servicio
            await this.getServicioSelector.waitForDisplayed();
            await this.getServicioSelector.click();
            // Seleccionar servicio opcion
            await this.seleccionarServicio(elemento.servicio);
            
            // Seleccionar beneficiario
            await this.getBeneficiarioSelector.waitForDisplayed();
            await this.getBeneficiarioSelector.click();
            // Seleccionar beneficiario opcion
            await this.seleccionarBeneficiario(elemento.beneficiario);

            // Seleccionar tipo de pago
            await $(UIAutomatorSelectores.scrollTextIntoView(textos.tipoPago)).click();
            // Seleccioanr tipo de pago opcion
            await this.seleccionarTipoPago(opcionesPago.debitoCuenta);
            
            // Click en boton Continuar
            await CommonActions.clickBtnContinuar();
            await CommonActions.clickBtnContinuar();

            // Click en boton Finalizar
            await CommonActions.clickBtnFinalizar();

           // Editar registro en archivo data.txt
            editEntry(files.data,    
                [dataConditions.caseIs(elemento.case)],
                [dataInstructions.assignStatus(dataStatus.active)]);
        }catch(error){
            console.error('Error en ingresar datos en pagos de servicios registrados', error);
        }
    }
}

export default new PagosServiciosRegistrados ();