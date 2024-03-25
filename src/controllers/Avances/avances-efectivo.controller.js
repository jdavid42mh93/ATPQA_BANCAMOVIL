import { dataConditions, dataInstructions, dataStatus, files } from "../../constants/_data_generation";
import { avancesSelectores, beneficiarioOpcion, cuentaEventual, labels } from "../../constants/avances/avancesSelectores";
import { UIAutomatorSelectores, datosGenerales } from "../../constants/common";
import { tarjetas } from "../../constants/pagos/pagosMisTarjetas";
import { formaPago, pagosSelectors } from "../../constants/pagos/pagosSelectores";
import { editEntry } from "../../helpers/fileEditor.helper";
import CommonActions from "../../page-objects/android/common-actions/CommonActions";
import CommonsPagos from "../../page-objects/android/navigation/Pagos/CommonsPagos";
import transferenciaEventualesController from "../Transferencias/transferencia-eventuales.controller";
import transferenciaRegistradaController from "../Transferencias/transferencia-registrada.controller";

class AvancesEfectivos {
    get getTarjetaCreditoSelector(){
        return $(avancesSelectores.tarjetaCredito);
    }

    get getCVVSelector(){
        return $(avancesSelectores.CVV);
    }

    get getAvanceSolicitadoSelector(){
        return $(avancesSelectores.avanceSolicitado);
    }

    get getFormaPagoSelector(){
        return $(avancesSelectores.formaPago);
    }

    get getPlazoSelector(){
        return $(avancesSelectores.plazo);
    }

    get getCuentaSelector(){
        return $(avancesSelectores.cuenta);
    }

    get getCondicionesSwitchSelector(){
        return $(avancesSelectores.condicionesSwitch);
    }

    get getDescripcionAvanceSelector(){
        return $(avancesSelectores.descripcionAvance);
    }

    get getCuentaRegistradaSelector(){
        return $(avancesSelectores.cuentaRegistrada);
    }

// Funciones para obtener los selectores de la opcion e cuenta eventual
    get getNumeroCuentaBeneficiarioSelector(){
        return $(cuentaEventual.numeroCuentaBeneficiaria);
    }

    get getTipoCuentaSelector() {
        return $(cuentaEventual.tipoCuenta);
    }

    get getNombreBeneficiarioSelector(){
        return $(cuentaEventual.nombreBeneficiario);
    }

    get getTipoIdentificacionSelector(){
        return $(cuentaEventual.tipoIdentificacion);
    }

    get getNumeroIdentificacionSelector(){
        return $(cuentaEventual.numeroIdentificacion);
    }

// Funcion para seleccionar una forma de pago
    async seleccionarFormaPago(formaPago){
        await $(pagosSelectors.formaPagoOpcion(formaPago)).waitForDisplayed();
        await $(pagosSelectors.formaPagoOpcion(formaPago)).click();
    }

// Funcion para seleccionar un numero de tarjeta
    async seleccionarNumeroTarjeta(numeroTarjeta){
        await $(tarjetas.tarjetaOpcion(numeroTarjeta)).waitForDisplayed();
        await $(tarjetas.tarjetaOpcion(numeroTarjeta)).click();
    }

// Funcion para seleccionar un numero de meses plazo
    async seleccionarPlazo(plazoOpcion){
        await $(avancesSelectores.plazoOpcion(plazoOpcion)).waitForDisplayed();
        await $(avancesSelectores.plazoOpcion(plazoOpcion)).click();
    }

// Funcion para seleccionar un beneficiario
    async seleccionarBeneficiario(beneficiario) {
        await $(avancesSelectores.seleccionarBeneficiario(beneficiario)).waitForDisplayed();
        await $(avancesSelectores.seleccionarBeneficiario(beneficiario)).click();
    }

// Funcion para seleccionar una cuenta beneficiaria
    async seleccionarCuentaBeneficiaria(cuentaBeneficiaria){
        await $(avancesSelectores.cuentaBeneficiarioOpcion(cuentaBeneficiaria)).waitForDisplayed();
        await $(avancesSelectores.cuentaBeneficiarioOpcion(cuentaBeneficiaria)).click();
    }

// Funcion para ingresar los datos de una cuenta eventual en avance en efectivo
    async seleccionarCuentaEventual(elemento){
        // Seleccionar institucion bancaria
        await transferenciaEventualesController.getInstitucionBancariaSelector.waitForDisplayed();
        await transferenciaEventualesController.getInstitucionBancariaSelector.click();
        // Seleccionar institucion bancaria opcion
        await transferenciaEventualesController.seleccionarInstitucionBancaria(elemento.institucion_bancaria);
        await $(UIAutomatorSelectores.scrollTextIntoView(labels.Condiciones));

        // Ingresear numero de cuenta del beneficiario
        await this.getNumeroCuentaBeneficiarioSelector.doubleClick();
        await this.getNumeroCuentaBeneficiarioSelector.addValue(elemento.numero_cuenta_beneficiario)

        // Seleccionar tipo de cuenta
        await this.getTipoCuentaSelector.doubleClick();

        // Seleccionar opcion de tipo de cuenta
        await transferenciaEventualesController.seleccionarTipoCuenta(elemento.tipo_cuenta);

        // Ingresar nombre beneficiario
        await this.getNombreBeneficiarioSelector.doubleClick();
        await this.getNombreBeneficiarioSelector.addValue(datosGenerales.nombreBeneficiario);

        // Seleccionar tipo de identificacion
        await this.getTipoIdentificacionSelector.waitForDisplayed();
        await this.getTipoIdentificacionSelector.doubleClick();
        // Seleccionar opcion de tipo de identificacion
        await transferenciaEventualesController.seleccionarTipoDocumento(elemento.tipo_documento);

        // Ingresar numero de identificacion
        await this.getNumeroIdentificacionSelector.doubleClick();
        await this.getNumeroIdentificacionSelector.addValue(elemento.numero_identificacion);
        await driver.hideKeyboard();

        // Ingresar descripcion del avance en efectivo
        await this.ingresarDescripcionAvance();
    }

// Funcion para seleccionar un tipo de beneficiario dependiendo del archivo data.txt
    async seleccionarCuentaDeBeneficiario(tipoBeneficiario, elemento){
        switch (tipoBeneficiario) {
            case beneficiarioOpcion.MisCuentas:
                // Seleccionar cuenta beneficiaria
                await this.getCuentaSelector.waitForDisplayed(); 
                await this.getCuentaSelector.click();
                // Seleccionar cuenta beneficiaria opcion
                await this.seleccionarCuentaBeneficiaria(elemento.numero_cuenta_beneficiario);
                break;
            case beneficiarioOpcion.Registrado:
                await $(UIAutomatorSelectores.scrollTextIntoView(labels.Selecciona));   // Scroll hasta encontrar la palabra Selecciona
                // Seleccionar cuenta beneficiaria
                await this.getCuentaRegistradaSelector.waitForDisplayed(); 
                await this.getCuentaRegistradaSelector.click();
                // Seleccionar cuenta beneficiaria opcion
                await transferenciaRegistradaController.seleccionarCuentaBeneficiaria(elemento.numero_cuenta_beneficiario);
                await $(UIAutomatorSelectores.scrollTextIntoView(labels.DescripcionAvance));   // Scroll hasta encontrar la palabra Descripcion del Avance
                // Ingresar descripcion del avance en efectivo
                await this.ingresarDescripcionAvance();
                break;
            case beneficiarioOpcion.Eventual:
                // Seleccionar cuenta beneficiaria
                await this.seleccionarCuentaEventual(elemento);
                break;
            default:
                break;
        }
    }

// Funciones para ingresar descripcion, cvv y monto del avance
    async ingresarDescripcionAvance(){
        await this.getDescripcionAvanceSelector.doubleClick();
        await this.getDescripcionAvanceSelector.addValue(datosGenerales.descripcion);
        await driver.hideKeyboard();
    }

    async ingresarCVV(){
        await this.getCVVSelector.doubleClick();
        await this.getCVVSelector.addValue(datosGenerales.cvv);
        await driver.hideKeyboard();
    }

    async ingresarAvanceSolicitado(){
        await this.getAvanceSolicitadoSelector.click();
        await this.getAvanceSolicitadoSelector.addValue(datosGenerales.avance);
        await driver.hideKeyboard();
    }

// Funcion para ingresar datos en el formulario de avance en efectivo
    async avanceEfectivoForm(elemento){
        try{
            // Seleccionar tarjeta de credito
            await this.getTarjetaCreditoSelector.waitForDisplayed();
            await this.getTarjetaCreditoSelector.click();
            // Seleccionar tarjeta de credito opcion
            await CommonsPagos.seleccionarNumeroTarjeta(elemento.numero_tarjeta);

            // Ingresar CVV
            await this.ingresarCVV();

            // Ingresar valor de avance solicitado
            await this.ingresarAvanceSolicitado();

            // Seleccionar forma de pago
            await this.getFormaPagoSelector.waitForDisplayed();
            await this.getFormaPagoSelector.doubleClick();
            // Seleccionar forma de pago opcion
            if(elemento.forma_pago === formaPago.Diferido){
                await CommonsPagos.seleccionarFormaPago(formaPago.Diferido);
                await this.getPlazoSelector.waitForDisplayed();
                await this.getPlazoSelector.click();
                await this.seleccionarPlazo(elemento.meses_plazo);
            }else{
                await CommonsPagos.seleccionarFormaPago(formaPago.Corriente);
            }
            await $(UIAutomatorSelectores.scrollToEnd)  // Scroll hasta el final

            // Seleccionar tipo de beneficiario
            await this.seleccionarBeneficiario(elemento.tipo_beneficiario);

            // Seleccionar cuenta de beneficiario
            await this.seleccionarCuentaDeBeneficiario(elemento.tipo_beneficiario,elemento);

            // Activar condiciones en avance de efectivo
            await this.getCondicionesSwitchSelector.waitForDisplayed();
            await this.getCondicionesSwitchSelector.click();

            // Click en boton Continuar
            await CommonActions.clickBtnContinuar();
            // Click en boton Continuar
            // await CommonActions.clickBtnContinuar();

            // Ingresar codigo de verificacion
            // await CommonActions.ingresarCodigoVerificacion();

            // Click en boton Continuar
            // await CommonActions.clickBtnCONTINUAR();

            // Click en boton Finalizar
            // await CommonActions.clickBtnFinalizar();
    
            // Editar registro en archivo avances.txt
            editEntry(files.avances,    
                    [dataConditions.caseIs(elemento.case)],
                    [dataInstructions.assignStatus(dataStatus.active)]);
        }catch(error){
            console.error('Error en avance en efectivo', error);
        }
    }
}

export default new AvancesEfectivos ();