import { dataConditions, dataInstructions, dataStatus, files } from "../../constants/_data_generation";
import { beneficiarioSelectores } from "../../constants/beneficiarios/beneficiariosSelectores";
import { UIAutomatorSelectores, datosGenerales, labels } from "../../constants/common";
import { transferenciaOpcion } from "../../constants/transferencia/transferenciaSelectores";
import { editEntry } from "../../helpers/fileEditor.helper";
import CommonActions from "../../page-objects/android/common-actions/CommonActions";
import transferenciaEventualesController from "../Transferencias/transferencia-eventuales.controller";

class BeneficiarioTransferencias {
    get getTipoCodigoSelector(){
        return $(beneficiarioSelectores.tipoCodigo);
    }

    get getCodigoSwift_ABA(){
        return $(beneficiarioSelectores.codigoSwitft_ABA);
    }

    get getAliasSelector(){
        return $(beneficiarioSelectores.alias);
    }

    get getCuentaBeneficiarioSelector(){
        return $(beneficiarioSelectores.cuentaBeneficiario);
    }

    get getNombreBeneficiarioSelector(){
        return $(beneficiarioSelectores.nombreBeneficiario);
    }

    get getDireccionBeneficiarioSelector(){
        return $(beneficiarioSelectores.direccionBeneficiario);
    }

    get getPaisBeneficiarioSelector(){
        return $(beneficiarioSelectores.paisDelBeneficiario);
    }

    get getCiudadBeneficiarioSelector(){
        return $(beneficiarioSelectores.ciudadDelBeneficiario);
    }

    get getTipoCuentaSelector(){
        return $(beneficiarioSelectores.tipoCuenta);
    }

    get getTipoIdentificacionSelector(){
        return $(beneficiarioSelectores.tipoIdentificacion);
    }

    get getNumeroIdentificacionSelector(){
        return $(beneficiarioSelectores.numeroIdentificacion);
    }

    get getNumeroCuentaBeneficiarioSelector(){
        return $(beneficiarioSelectores.numeroCuenta);
    }

    get getBeneficiarioSelector(){
        return $(beneficiarioSelectores.beneficiario);
    }

    async seleccionarTipoCodigo(tipoCodigo){
        await $(beneficiarioSelectores.tipoCodigoOpcion(tipoCodigo)).waitForDisplayed();
        await $(beneficiarioSelectores.tipoCodigoOpcion(tipoCodigo)).click();
    }

    async seleccionarInstitucionBancaria(insitucionBancaria){
        await $(UIAutomatorSelectores.scrollTextIntoView(insitucionBancaria));
        await $(beneficiarioSelectores.institucionBancariaOpcion(insitucionBancaria)).waitForDisplayed();
        await $(beneficiarioSelectores.institucionBancariaOpcion(insitucionBancaria)).click();
    }

    async seleccionarCodigo(codigo){
        await $(beneficiarioSelectores.codigoOpcion(codigo)).waitForDisplayed({timeout:40000});
        await $(beneficiarioSelectores.codigoOpcion(codigo)).click();
    }

    async seleccionarPais(pais){
        await $(UIAutomatorSelectores.scrollTextIntoView(pais));
        await $(beneficiarioSelectores.paisDelBeneficiarioOpcion(pais)).waitForDisplayed();
        await $(beneficiarioSelectores.paisDelBeneficiarioOpcion(pais)).click();
    }

    async seleccionarCiudad(ciudad){
        await $(UIAutomatorSelectores.scrollTextIntoView(ciudad));
        await $(beneficiarioSelectores.ciudadDelBenerficiarioOpcion(ciudad)).waitForDisplayed();
        await $(beneficiarioSelectores.ciudadDelBenerficiarioOpcion(ciudad)).click();
    }

    async transferenciaOtrasCuentasForm(elemento){
        // Seleccionar institucion Bancaria
        await transferenciaEventualesController.getInstitucionBancariaSelector.waitForDisplayed();
        await transferenciaEventualesController.getInstitucionBancariaSelector.click();
        // Seleccionar institucion Bancaria opcion
        await this.seleccionarInstitucionBancaria(elemento.institucion_bancaria);

        await $(UIAutomatorSelectores.scrollTextIntoView(labels.CorreoElectronico));  //Scroll hasta encontrar la palabra Correo Electronico

        // Seleccionar tipo de cuenta
        await this.getTipoCuentaSelector.waitForDisplayed();
        await this.getTipoCuentaSelector.click();
        // Seleccionar opcion de tipo de cuenta
        await transferenciaEventualesController.seleccionarTipoCuenta(elemento.tipo_cuenta);

        // Ingresar numero de cuenta beneficiario
        await this.getNumeroCuentaBeneficiarioSelector.addValue(elemento.numero_cuenta_beneficiario)

        // Seleccionar tipo de identificacion
        await this.getTipoIdentificacionSelector.waitForDisplayed();
        await this.getTipoIdentificacionSelector.click();
        // Seleccionar opcion de tipo de identificacion
        await transferenciaEventualesController.seleccionarTipoDocumento(elemento.tipo_documento);
  
        // Ingresar numero de identificacion
        await this.getNumeroIdentificacionSelector.addValue(elemento.numero_identificacion);
        
        // Ingresar nombre beneficiario
        await this.getBeneficiarioSelector.addValue(datosGenerales.nombreBeneficiario);

        // Ingresar Alias
        await this.getAliasSelector.addValue(datosGenerales.descripcion);

        // Click boton Continuar
        await CommonActions.clickBtnContinuar();

        // Editar registro en archivo beneficiarios.txt
        editEntry(files.beneficiarios,    
            [dataConditions.caseIs(elemento.case)],
            [dataInstructions.assignStatus(dataStatus.active)]);
    }

    async transferenciasAlExteriorForm(elemento){
        // Seleccionar tipo de codigo
        await this.getTipoCodigoSelector.waitForDisplayed({timeout:30000});
        await this.getTipoCodigoSelector.click();
        // Seleccionar tipo de codigo opcion
        await this.seleccionarTipoCodigo(elemento.tipo_codigo);

        // Seleccionar codigo Swift o ABA
        await this.getCodigoSwift_ABA.waitForDisplayed({timeout:50000});
        await this.getCodigoSwift_ABA.click();

        // Seleccionar codigo opcion
        await this.seleccionarCodigo(elemento.codigo);

        await $(UIAutomatorSelectores.scrollTextIntoView(labels.CorreoElectronico));  //Scroll hasta encontrar la palabra Correo Electronico
        
        // Ingresar numero de cuenta del beneficiario
        await this.getCuentaBeneficiarioSelector.addValue(elemento.numero_cuenta_beneficiario);

        // Ingresar nombre del beneficiario
        await this.getNombreBeneficiarioSelector.addValue(datosGenerales.nombreBeneficiario);

        // Ingresar direccion del beneficiario
        await this.getDireccionBeneficiarioSelector.addValue(datosGenerales.direccion);

        // Seleccionar pais del beneficiario
        await this.getPaisBeneficiarioSelector.waitForDisplayed();
        await this.getPaisBeneficiarioSelector.click();
        // Seleccionar pais del beneficiario opcion
        await this.seleccionarPais(elemento.pais);

        // Seleccionar ciudad del beneficiario
        await this.getCiudadBeneficiarioSelector.waitForDisplayed();
        await this.getCiudadBeneficiarioSelector.click();
        // Seleccionar ciudad del beneficiario opcion
        await this.seleccionarCiudad(elemento.ciudad);

        // Ingresar Alias
        await this.getAliasSelector.addValue(datosGenerales.descripcion);

        // Click boton Continuar
        await CommonActions.clickBtnContinuar();

        // Editar registro en archivo beneficiarios.txt
        editEntry(files.beneficiarios,    
            [dataConditions.caseIs(elemento.case)],
            [dataInstructions.assignStatus(dataStatus.active)]);
    }

    async transferenciasBeneficiarioForm(elemento){
        if (elemento.transfer_type === transferenciaOpcion.otrasCuentas) {
            await this.transferenciaOtrasCuentasForm(elemento);
        } else {
            await this.transferenciasAlExteriorForm(elemento);
        }
    }
}

export default new BeneficiarioTransferencias();