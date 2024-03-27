import { dataConditions, dataInstructions, dataStatus, files } from "../../constants/_data_generation";
import { UIAutomatorSelectores, buttons, buttonsSelectores, labels } from "../../constants/common";
import { programacionPagosServiciosSelectores } from "../../constants/programacion/programacionPagosServiciosSelectores";
import { editEntry } from "../../helpers/fileEditor.helper";
import CommonActions from "../../page-objects/android/common-actions/CommonActions";
import CommonsPagos from "../../page-objects/android/navigation/Pagos/CommonsPagos";
import programacionController from "./programacion.controller";

class ProgramacionPagosServicios {
    get getBeneficiarioSelector(){
        return $(programacionPagosServiciosSelectores.beneficiario);
    }

    get getCuentaDebitoSelector(){
        return $(programacionPagosServiciosSelectores.cuentaDebito);
    }

    get getDiaPagoSelector(){
        return $(programacionPagosServiciosSelectores.diaPago);
    }

    async ingresarDiaPago(diaPago){
        await this.getDiaPagoSelector.doubleClick();
        await this.getDiaPagoSelector.addValue(diaPago);
        await driver.hideKeyboard();
    }

    async programacionPagoServiciosForm(elemento){
        try {
            // Seleccionar el grupo de servicio
            await CommonsPagos.getGruposServicioSelector.waitForDisplayed();
            await CommonsPagos.getGruposServicioSelector.click();
            // Seleccionar grupo de servicio opcion
            await CommonActions.selectCheckedOpcion(elemento.grupo_servicios);

            // Seleccionar el servicio
            await CommonsPagos.getServicioSelector.waitForDisplayed();
            await CommonsPagos.getServicioSelector.click();
            // Seleccionar servicio opcion
            await $(UIAutomatorSelectores.scrollTextIntoView(elemento.servicio));
            await CommonActions.selectCheckedOpcion(elemento.servicio);

            // Seleccionar beneficiario
            await this.getBeneficiarioSelector.click();
            // Seleccionar beneficiario opcion
            await CommonActions.selectCheckedOpcion(elemento.beneficiario);

            // Seleccionar cuenta de debito
            await this.getCuentaDebitoSelector.click();
            // Seleccionar cuenta de debito opcion
            await CommonActions.selectCheckedOpcion(elemento.cuenta_debito);

            await $(UIAutomatorSelectores.scrollTextIntoView(labels.Finaliza));     //scroll hasta encontrar la palabra Finaliza

            // Seleccionar fecha inicio
            await programacionController.getFechaInicioSelector.click();

            // Ingresar fecha de inicio
            await programacionController.buscarFecha(elemento.fecha_inicio);

            await programacionController.seleccionarDia(elemento.fecha_inicio);
            await $(buttonsSelectores.button(buttons.OK)).click();

            // Ingresar dia de pago
            await this.ingresarDiaPago(elemento.dia_pago);

            // Seleccionar fecha de fin
            await programacionController.getFechaFinSelector.click();

            // Ingresar fecha de fin
            await programacionController.buscarFecha(elemento.fecha_fin);

            await programacionController.seleccionarDia(elemento.fecha_fin);
            await $(buttonsSelectores.button(buttons.OK)).click();

            // Click en boton Continuar
            await CommonActions.clickBtnContinuar();
            // Click en boton Continuar
            // await CommonActions.clickBtnContinuar();

            // Clck en boton Finalizar
            // await CommonActions.clickBtnFinalizar();

            // Editar registro en archivo programacion.txt
            editEntry(files.programacion,    
                [dataConditions.caseIs(elemento.case)],
                [dataInstructions.assignStatus(dataStatus.active)]);
        } catch (error) {
            console.error('Error al ingresar los datos en la seccion de programacion de pagos de servicios', error)
        }
    }
}

export default new ProgramacionPagosServicios();