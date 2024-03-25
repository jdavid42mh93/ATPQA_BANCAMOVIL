import { beneficiarioSelectores } from "../../constants/beneficiarios/beneficiariosSelectores";

class Beneficiarios{
    get getNuevoBeneficiarioSelector(){
        return $(beneficiarioSelectores.nuevoBeneficiario);
    }
    
    async clickBtnNuevoBeneficiario(){
        await this.getNuevoBeneficiarioSelector.waitForDisplayed({timeout:30000});
        await this.getNuevoBeneficiarioSelector.click();
    }
    
    async seleccionarTipoBeneficiario(tipoBeneficiario){
        await $(beneficiarioSelectores.beneficiarioOpcion(tipoBeneficiario)).click()
    }
}

export default new Beneficiarios();