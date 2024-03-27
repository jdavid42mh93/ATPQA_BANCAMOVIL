import { dataConditions, dataInstructions, dataStatus, files } from "../../constants/_data_generation";
import { UIAutomatorSelectores, buttons, buttonsSelectores, datosGenerales } from "../../constants/common";
import { labels, programacionSelectores } from "../../constants/programacion/programacionSelectores";
import { editEntry } from "../../helpers/fileEditor.helper";
import CommonActions from "../../page-objects/android/common-actions/CommonActions";
import programacionController from "./programacion.controller";

class ProgramacionTransferencia {
    get getBeneficiarioSelector(){
        return $(programacionSelectores.beneficiario);
    }

    get getDescripcionSelector(){
        return $(programacionSelectores.descripcion);
    }

    get getMontoSelector(){
        return $(programacionSelectores.monto);
    }

    async seleccionarBeneficiario(beneficiario){
        await CommonActions.getTextOpcion(beneficiario);
    }

    async ingresarDescripcion(){
        await this.getDescripcionSelector.click();
        await this.getDescripcionSelector.addValue(datosGenerales.descripcion);
        await driver.hideKeyboard();
    }

    async ingresarMonto(){
        await this.getMontoSelector.click();
        await this.getMontoSelector.addValue(datosGenerales.monto);
    }
    
    async programacionTransferenciaForm(elemento){
        try{
            // Seleccionar cuenta debito
            await CommonActions.getCuentaDebitoSelector.waitForDisplayed({timeout:30000});
            await CommonActions.getCuentaDebitoSelector.click();
            // Seleccionar cuenta debito opcion
            await CommonActions.seleccionarCuentaDebito(elemento.cuenta_debito);

            // Seleccionar cuenta beneficiaria
            await this.getBeneficiarioSelector.waitForDisplayed();
            await this.getBeneficiarioSelector.click();
            // Seleccionar cuenta beneficiaria opcion
            await this.seleccionarBeneficiario(elemento.numero_cuenta_beneficiario);

            await $(UIAutomatorSelectores.scrollTextIntoView(labels.Finaliza))  //Scroll hasta encontrar la palabra Finaliza

            // Ingresar descripcion
            await this.ingresarDescripcion();

            // Ingresar monto
            await this.ingresarMonto();

            // Seleccionar fecha inicio
            await programacionController.getFechaInicioSelector.click();

            // Ingresar fecha de inicio
            await programacionController.buscarFecha(elemento.fecha_inicio);

            await programacionController.seleccionarDia(elemento.fecha_inicio);
            await $(buttonsSelectores.button(buttons.OK)).click();

            // Ingresar dia de pago
            await programacionController.ingresarDiaPago(elemento.dia_pago);

            // Seleccionar fecha de fin
            await programacionController.getFechaFinSelector.click();

            // Ingresar fecha de fin
            await programacionController.buscarFecha(elemento.fecha_fin);

            await programacionController.seleccionarDia(elemento.fecha_fin);
            await $(buttonsSelectores.button(buttons.OK)).click();

            // Click en boton Continuar
            await CommonActions.clickBtnContinuar();
            // Click en boton Continuar
            await CommonActions.clickBtnContinuar();

            // Clck en boton Finalizar
            await CommonActions.clickBtnFinalizar();

            // Editar registro en archivo programacion.txt
            editEntry(files.programacion,    
                [dataConditions.caseIs(elemento.case)],
                [dataInstructions.assignStatus(dataStatus.active)]);
        }catch(error){
            console.error('Error al ingresar los datos en programacion de transferencias seccion', error)
        }
    }
}

export default new ProgramacionTransferencia();