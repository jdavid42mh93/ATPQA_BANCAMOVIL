import { editEntry } from "../../helpers/fileEditor.helper";
import { files, dataConditions, dataInstructions, dataStatus } from "../../constants/_data_generation";
import CommonActions from "../../page-objects/android/common-actions/CommonActions";
import { pagosServiciosEventualesSelectores, servicioBasicoAgua } from "../../constants/pagos/pagosServiciosEventuales";
import CommonsPagos from "../../page-objects/android/navigation/Pagos/CommonsPagos";
import { UIAutomatorSelectores, datosGenerales } from "../../constants/common";
import { formaPago, labels, opcionesTipoPago } from "../../constants/pagos/pagosSelectores";
// import MenuNavigation from "../../page-objects/android/navigation/MenuNavigation";

// Seccion de pagos de servicios eventuales
class PagosServiciosEventuales {
// Funciones para obtener los selectores de pagos de servicios eventuales
    get getNumeroSuministroSelector(){
        return $(servicioBasicoAgua.numeroSuministro);
    }

    get getSearchSelector(){
        return $(pagosServiciosEventualesSelectores.search);
    }

    async ingresarNumeroSuministro(){
        await this.getNumeroSuministroSelector.waitForDisplayed();
        await this.getNumeroSuministroSelector.click();
        await this.getNumeroSuministroSelector.addValue(datosGenerales.numeroSuministro);
        await driver.hideKeyboard();
    }

    async clickBtnSearch(){
        await this.getSearchSelector.waitForDisplayed();
        await this.getSearchSelector.click();
    }

// Funcion para ingresr los datos del pago en el formulario
    async pagosServiciosEventualesForm(elemento){
        try{
            // Seleccionar el grupo de servicio
            await CommonsPagos.getGruposServicioSelector.waitForDisplayed();
            await CommonsPagos.getGruposServicioSelector.click();
            // Seleccionar la opcion de grupo de servicio
            await CommonsPagos.seleccionarGrupoServicio(elemento.grupo_servicios);

            // Seleccionar el servicio
            await CommonsPagos.getServicioSelector.waitForDisplayed();
            await CommonsPagos.getServicioSelector.click();
            // Seleccionar la opcion del servicio
            await $(UIAutomatorSelectores.scrollTextIntoView(elemento.servicio));
            await CommonsPagos.seleccionarServicio(elemento.servicio);

            // Ingresar el numero de suministro
            await this.ingresarNumeroSuministro();

            // Buscar el numero de suministro
            await this.clickBtnSearch();

            await $(UIAutomatorSelectores.scrollTextIntoView(labels.tipoPago));

            // Seleccionar tipo de pago
            await CommonsPagos.getTipoPagoSelector.waitForDisplayed();
            await CommonsPagos.getTipoPagoSelector.click();
            // Seleccionar la opcion de tipo de pago
            await CommonsPagos.seleccionarTipoPago(elemento.opcion_pago);

            await $(UIAutomatorSelectores.scrollToEnd); //Scroll hasta el final
            if(elemento.opcion_pago === opcionesTipoPago.debitoCuenta){
                // Selecionar cuenta de debito
                await CommonActions.getCuentaDebitoSelector.waitForDisplayed();
                await CommonActions.getCuentaDebitoSelector.click();
                // Seleccionar cuenta de debito opcion
                await CommonActions.seleccionarCuentaDebito(elemento.cuenta_debito);
            } else {
                // Seleccionar tarjeta de credito
                await CommonsPagos.getTarjetaSelector.waitForDisplayed();
                await CommonsPagos.getTarjetaSelector.click();
                // Seleccionar tarjeta de credito opcion
                await CommonsPagos.seleccionarNumeroTarjeta(elemento.numero_tarjeta);

                await $(UIAutomatorSelectores.scrollToEnd); //Scroll hasta el final

                // Ingresar cvv de la tarjeta
                await CommonsPagos.ingresarCVV();

                // Seleccionar forma de pago
                await CommonsPagos.getFormaPagoSelector.waitForDisplayed();
                await CommonsPagos.getFormaPagoSelector.click();
                // Seleccionar forma de pago opcion
                await CommonsPagos.seleccionarFormaPago(formaPago.Corriente);
            }
            // Click en boton Continuar
            await CommonActions.clickBtnContinuar();
            // Click en boton Continuar
            // await CommonActions.clickBtnContinuar();
            
            // Ingresar codigo de verificacion
            // await CommonActions.ingresarCodigoVerificacion();

            // Click en boton Continuar
            // await CommonActions.clickBtnCONTINUAR();
            // // Click en boton Cerrar
            // await CommonActions.clickBtnCerrar();
            
            // Editar registro en archivo pagos.txt
            editEntry(files.pagos,    
                 [dataConditions.caseIs(elemento.case)],
                 [dataInstructions.assignStatus(dataStatus.active)]);

            // // Temporal: se despliega el menu lateral y se redirige a seccion de pagos
            // await MenuNavigation.getToogleMenuSelector.waitForDisplayed({timeout: 20000});
            // await MenuNavigation.getToogleMenuSelector.click();
            // // Seleccionar opcion de menu lateral
            // await MenuNavigation.seleccionarOpcionMenuLateral(opciones.Resumen);


        }catch(error){
            console.error('Error en ingresar datos en pagos de servicios eventuales', error);
        }
    }
}

export default new PagosServiciosEventuales ();