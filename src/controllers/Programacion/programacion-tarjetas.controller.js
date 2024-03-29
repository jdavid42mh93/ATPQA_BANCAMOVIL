import { dataConditions, dataInstructions, dataStatus, files } from "../../constants/_data_generation";
import { UIAutomatorSelectores, buttons, buttonsSelectores, datosGenerales, labels } from "../../constants/common";
import { programacionTarjetasSelectores } from "../../constants/programacion/programacionTarjetasSelectores";
import { editEntry } from "../../helpers/fileEditor.helper";
import CommonActions from "../../page-objects/android/common-actions/CommonActions";
import programacionController from "./programacion.controller";

class ProgramacionTarjetas{

    get getMontoSelector(){
        return $(programacionTarjetasSelectores.montoAPagar);
    }

    get getBeneficiarioSelector(){
        return $(programacionTarjetasSelectores.beneficiario);
    }

    get getDescripcionSelector(){
        return $(programacionTarjetasSelectores.descripcionPago);
    }

    get getDiaPagoSelector(){
        return $(programacionTarjetasSelectores.diaPago);
    }

    async ingresarMonto(){
        await this.getMontoSelector.click();
        await this.getMontoSelector.addValue(datosGenerales.monto);
        await driver.hideKeyboard();
    }

    async ingresarDescripcion(){
        await this.getDescripcionSelector.doubleClick();
        await this.getDescripcionSelector.addValue(datosGenerales.descripcion);
        await driver.hideKeyboard();
    }

    async ingresarDiaPago(diaPago){
        await this.getDiaPagoSelector.doubleClick();
        await this.getDiaPagoSelector.addValue(diaPago);
        await driver.hideKeyboard();
    }

    async programacionTarjetasForm(elemento){
        try {
            // Seleccionar cuenta de debito
            await CommonActions.getCuentaDebitoSelector.waitForDisplayed();
            await CommonActions.getCuentaDebitoSelector.click();
            // Seleccionar cuenta de debito opcion
            await CommonActions.selectCheckedOpcion(elemento.cuenta_debito);
            
            // Ingresar monto
            await this.ingresarMonto();

            await $(UIAutomatorSelectores.scrollTextIntoView(labels.Finaliza));

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

            // Ingresar Descripcion
            await this.ingresarDescripcion();

            await $(UIAutomatorSelectores.scrollTextIntoView(labels.CorreoElectronico));

            // Seleccioanr beneficiario
            await this.getBeneficiarioSelector.click();
            // Seleccionar beneficiario opcion
            await CommonActions.selectTextOpcion(elemento.numero_tarjeta);

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
        } catch (error) {
            console.error('Error al ingresar los datos en la seccion de programacion de tarjetas', error)
        }
        
    }
}

export default new ProgramacionTarjetas();