import { files, dataConditions, dataInstructions, dataStatus } from "../../constants/_data_generation";
import { UIAutomatorSelectores, buttons, buttonsSelectores } from "../../constants/common";
import { editEntry } from "../../helpers/fileEditor.helper";
import { transferenciaEventualesSelectores, 
    institucionBancariaSelectores, 
    tipoDocumentoOpcionSelectores, 
    tipoCuentaOpcionSelectores } from "../../constants/transferencia/transferenciaEventuales";
import { datosGenerales } from "../../constants/common";
import { constTransferencias } from "../../constants/transferencia/transferenciaSelectores";
import CommonActions from "../../page-objects/android/common-actions/CommonActions";

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
        return $(buttonsSelectores.button(buttons.Cerrar));
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

    async seleccionarInstitucionBancaria(insitucionBancaria){
        await $(UIAutomatorSelectores.scrollTextIntoView(insitucionBancaria));
        await $(institucionBancariaSelectores.institucionBancariaOpcion(insitucionBancaria)).waitForDisplayed();
        await $(institucionBancariaSelectores.institucionBancariaOpcion(insitucionBancaria)).click();
    }

    async seleccionarTipoDocumento(tipoDocumento){
        await $(tipoDocumentoOpcionSelectores.tipoDocumentoOpcion(tipoDocumento)).waitForDisplayed();
        await $(tipoDocumentoOpcionSelectores.tipoDocumentoOpcion(tipoDocumento)).click();
    }

    async seleccionarTipoCuenta(tipoCuenta){
        await $(tipoCuentaOpcionSelectores.tipoCuentaOpcion(tipoCuenta)).waitForDisplayed();
        await $(tipoCuentaOpcionSelectores.tipoCuentaOpcion(tipoCuenta)).click();
    }

// Funcion para completar los datos de transferencia exterior
    async transferenciaEventualForm(elemento){
        try{
            // Selecciona institucion bancaria
            await this.getInstitucionBancariaSelector.waitForDisplayed({timeout:30000});
            await this.getInstitucionBancariaSelector.click();
            // Seleccionar opcion de institucion bancaria
            await this.seleccionarInstitucionBancaria(elemento.institucion_bancaria);

            // Ingresar numero de cuenta beneficiario
            await this.getNumeroCuentaBeneficiarioSelector.addValue(elemento.numero_cuenta_beneficiario)
            
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
            await this.getNumeroIdentificacionSelector.addValue(elemento.numero_identificacion);
            
            // Ingresar nombre beneficiario
            await this.getNombreBeneficiarioSelector.addValue(datosGenerales.nombreBeneficiario)
            
            // Ingresa Monto y Descripcion
            this.ingresarDescripcion();
            this.ingresarMonto();
            
            // Click en boton Continuar
            await CommonActions.clickBtnContinuar();
            await CommonActions.clickBtnContinuar();
            
            // Click en boton Cerrar
            await this.getBotonCerrarSelector.waitForDisplayed();
            await this.getBotonCerrarSelector.click();

            // Click en boton Finalizar
            // await CommonActions.getBtnFinalizarSelector.waitUntil(async () => {
            //     return (await CommonActions.getBtnFinalizarSelector).isDisplayed();
            // },{
            //     timeout: 20000
            // });
            // await CommonActions.getBtnFinalizarSelector.click();

            // Editar registro en archivo data.txt
            editEntry(files.data,    
                [dataConditions.caseIs(elemento.case)],
                [dataInstructions.assignStatus(dataStatus.active)]);
        }catch(error){
            console.error('Error en ingresar datos en transferencias eventuales', error);
        }
    }
}

export default new TransferenciaEventual ();