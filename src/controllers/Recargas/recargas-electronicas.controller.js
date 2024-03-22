import { dataConditions, dataInstructions, dataStatus, files } from "../../constants/_data_generation";
import { datosGenerales } from "../../constants/common";
import { recargasSelectores, servicios } from "../../constants/recargas/recargasSelectores";
import { editEntry } from "../../helpers/fileEditor.helper";
import CommonActions from "../../page-objects/android/common-actions/CommonActions";
import CommonsPagos from "../../page-objects/android/navigation/Pagos/CommonsPagos";

class RecargasElectronicas {
    get getNumeroCelularSelector(){
        return $(recargasSelectores.numeroCelular);
    }

    get getValorRecargaSelector(){
        return $(recargasSelectores.valorRecarga);
    }

    get getOpcionPagoSelector(){
        return $(recargasSelectores.opcionPago);
    }

    get getCuentaDebitoSelector(){
        return $(recargasSelectores.cuentaDebito);
    }

    async ingresarNumeroRecarga(servicio){
        await this.getNumeroCelularSelector.click();
        if (servicio === servicios.RECARGAS_CNT_DTH || servicio === servicios.RECARGAS_GOLTV) {
            await this.getNumeroCelularSelector.addValue(datosGenerales.numeroIdentificacion);
            await driver.hideKeyboard();
        } else {
            await this.getNumeroCelularSelector.addValue(datosGenerales.numeroCelular);
            await driver.hideKeyboard();
        }
    }

    async seleccionarValorRecarga(valorRecarga){
        await $(recargasSelectores.valorRecargaOpcion(valorRecarga)).waitForDisplayed();
        await $(recargasSelectores.valorRecargaOpcion(valorRecarga)).click();
    }

    async recargarElectronicaForm(elemento){
        try{
            // Seleccionar el grupo de servicio
            await CommonsPagos.getGruposServicioSelector.waitForDisplayed();
            await CommonsPagos.getGruposServicioSelector.click();
            // Seleccionar grupo de servicio opcion
            await CommonsPagos.seleccionarGrupoServicio(elemento.subtype);

            // Seleccionar el servicio
            await CommonsPagos.getServicioSelector.waitForDisplayed();
            await CommonsPagos.getServicioSelector.click();
            // Seleccionar servicio opcion
            await CommonsPagos.seleccionarServicio(elemento.servicio);

            // Ingresar numero de celular
            await this.ingresarNumeroRecarga(elemento.servicio);

            // Seleccionar el valor de la recarga
            await this.getValorRecargaSelector.waitForDisplayed();
            await this.getValorRecargaSelector.click();
            // Seleccionar el valor de la recarga opcion
            await this.seleccionarValorRecarga(elemento.valor_recarga);

            // Seleccionar opcion de pago
            await this.getOpcionPagoSelector.waitForDisplayed();
            await this.getOpcionPagoSelector.click();
            // Seleccion opcion de pago
            await CommonsPagos.seleccionarTipoPago(elemento.opcion_pago);

            // Seleccionar cuenta de debito
            await this.getCuentaDebitoSelector.waitForDisplayed();
            await this.getCuentaDebitoSelector.click();
            // Seleccionar cuenta de debito opcion
            await CommonActions.seleccionarCuentaDebito(elemento.cuenta_debito);

            // Click en boton Continuar
            await CommonActions.clickBtnContinuar();

            // Editar archivo recargas.txt
            editEntry(files.recargas,    
                [dataConditions.caseIs(elemento.case)],
                [dataInstructions.assignStatus(dataStatus.active)]);
        }catch(error){
            console.error('Error al ingresar datos en recargas electronicas', error)
        }
    }
}

export default new RecargasElectronicas();