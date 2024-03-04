import { files, dataConditions, dataTypes, dataSubtypes } from "../../constants/_data_generation";
import { UIAutomatorSelectores, buttonsSelectores } from "../../constants/common";
import { searchEntry } from "../../helpers/fileEditor.helper";
import transferenciaController from "./transferencia.controller";
import { transferenciaEventualesSelectores, 
    institucionBancariaSelectores, 
    tipoDocumento, 
    tipoDocumentoOpcionSelectores, 
    tipoCuenta,
    tipoCuentaOpcionSelectores } from "../../constants/transferencia/transferenciaEventuales";
import { datosGenerales } from "../../constants/common";
import CommonsTransferencias from "../../page-objects/android/navigation/Transferencias/CommonsTransferencias";
import { bancos } from "../../constants/transferencia/transferenciaEventuales";
import { constTransferencias } from "../../constants/transferencia/transferenciaSelectores";

// Seccion de transferencias eventuales
class TransferenciaEventual {
// Funciones para obtener los selectores
    get getInstitucionBancariaSelector() {
        return $(transferenciaEventualesSelectores.insitucionBancaria);
    }

    get getTipoCuentaSelector() {
        return $(transferenciaEventualesSelectores.tipoCuenta);
    }

    get getTipoIdentificacionSelector(){
        return $(transferenciaEventualesSelectores.tipoIdentificacion);
    }

    get getNumeroCuentaBeneficiarioSelector(){
        return $(transferenciaEventualesSelectores.numeroCuentaBeneficiaria);
    }

    get getNumeroIdentificacionSelector(){
        return $(transferenciaEventualesSelectores.numeroIdentificacion);
    }

    get getNombreBeneficiarioSelector(){
        return $(transferenciaEventualesSelectores.nombreBeneficiario);
    }

    get getDescripcionSelector(){
        return $(transferenciaEventualesSelectores.descripcion);
    }

    get getMontoSelector(){
        return $(transferenciaEventualesSelectores.monto);
    }

    get getBotonCerrarSelector(){
        return $(buttonsSelectores.cerrar);
    }

    async ingresarDescripcion(){
        await this.getDescripcionSelector.click();
        await this.getDescripcionSelector.addValue(datosGenerales.descripcion);
        await driver.hideKeyboard();
    }

    async ingresarMonto(){
        await this.getMontoSelector.click();
        await this.getMontoSelector.addValue(datosGenerales.monto);
        await driver.hideKeyboard();
    }

    async selectionarInstitucionBancaria(opcion){
        await $(UIAutomatorSelectores.scrollTextIntoView(opcion));
        switch (opcion) {
            case bancos.bancoPacifico:
                await $(institucionBancariaSelectores.institucionBancariaOpcion(opcion)).waitForDisplayed();
                await $(institucionBancariaSelectores.institucionBancariaOpcion(opcion)).click();
                break;
            default:
                break;
        }
    };

    async seleccionarTipoDocumento(opcion){
        switch (opcion) {
            case tipoDocumento.CI:
                await $(tipoDocumentoOpcionSelectores.tipoDocumentoOpcion(opcion)).waitForDisplayed();
                await $(tipoDocumentoOpcionSelectores.tipoDocumentoOpcion(opcion)).click();
                break;
            case tipoDocumento.PASAPORTE:
                await $(tipoDocumentoOpcionSelectores.tipoDocumentoOpcion(opcion)).waitForDisplayed();
                await $(tipoDocumentoOpcionSelectores.tipoDocumentoOpcion(opcion)).click();
                break;
            case tipoDocumento.RUC:
                await $(tipoDocumentoOpcionSelectores.tipoDocumentoOpcion(opcion)).waitForDisplayed();
                await $(tipoDocumentoOpcionSelectores.tipoDocumentoOpcion(opcion)).click();
                break;
            default:
                break;
        }
    };

    async seleccionarTipoCuenta(opcion){
        switch (opcion) {
            case tipoCuenta.cuentaAhorros:
                await $(tipoCuentaOpcionSelectores.tipoCuentaOpcion(opcion)).waitForDisplayed();
                await $(tipoCuentaOpcionSelectores.tipoCuentaOpcion(opcion)).click();
                break;
            case tipoCuenta.cuentaCorriente:
                await $(tipoCuentaOpcionSelectores.tipoCuentaOpcion(opcion)).waitForDisplayed();
                await $(tipoCuentaOpcionSelectores.tipoCuentaOpcion(opcion)).click();
                break;
            default:
                break;
        }
    }

// Funcion para completar los datos de transferencia exterior
    async transferenciaEventualForm(){
        try{
            const data = searchEntry(files.data, [dataConditions.typeIs(dataTypes.transferencias),dataConditions.subtypeIs(dataSubtypes.Eventuales),]);
            let elemento;
            await transferenciaController.transferenciaEventualesSeccion();
            for (let i=0; i < data.length; i++){
                elemento = data[i];
            };
            // Selecciona institucion bancaria
            await this.getInstitucionBancariaSelector.waitForDisplayed({timeout:30000, timeoutMsg:`El elemento no esta visisble despues de 26 segundos`});
            await this.getInstitucionBancariaSelector.click();
            // Seleccionar opcion de institucion bancaria
            await this.selectionarInstitucionBancaria(elemento.institucion_bancaria);
            // Ingresar numero de cuenta beneficiario
            await this.getNumeroCuentaBeneficiarioSelector.addValue(elemento.cuenta_debito)
            // Seleccionar tipo de cuenta
            await this.getTipoCuentaSelector.waitForDisplayed();
            await this.getTipoCuentaSelector.click();
            // Seleccionar opcion de tipo de cuenta
            await this.seleccionarTipoCuenta(elemento.tipo_cuenta)
            // Seleccionar tipo de identificacion
            await this.getTipoIdentificacionSelector.waitForDisplayed();
            await this.getTipoIdentificacionSelector.click();
            // Seleccionar opcion de tipo de identificacion
            await this.seleccionarTipoDocumento(elemento.tipo_documento);
            await $(UIAutomatorSelectores.scrollTextIntoView(constTransferencias.Monto));  //Scroll hasta encontrar la palabra Monto
            // Ingresar numero de identificacion
            await this.getNumeroIdentificacionSelector.addValue(datosGenerales.numeroIdentificacion);
            // Ingresar nombre beneficiario
            await this.getNombreBeneficiarioSelector.addValue(datosGenerales.nombreBeneficiario)
            // Ingresa Monto y Descripcion
            this.ingresarDescripcion();
            this.ingresarMonto();
            // Click en boton Continuar
            await CommonsTransferencias.getBtnContinuarSelector.waitForDisplayed();
            await CommonsTransferencias.getBtnContinuarSelector.click();
            // Click en boton Continuar
            await CommonsTransferencias.getBtnContinuarSelector.waitForDisplayed();
            await CommonsTransferencias.getBtnContinuarSelector.click();
            // Click en boton Cerrar
            await this.getBotonCerrarSelector.waitForDisplayed();
            await this.getBotonCerrarSelector.click();
            // await CommonActions.getBtnFinalizarSelector.waitUntil(async () => {
            //     return (await CommonActions.getBtnFinalizarSelector).isDisplayed();
            // },{
            //     timeout: 20000
            // });
            // await CommonActions.getBtnFinalizarSelector.click();
        }catch(error){
            console.error('Error en ingresar datos en transferencias eventuales', error);
        }
    }
}

export default new TransferenciaEventual ();