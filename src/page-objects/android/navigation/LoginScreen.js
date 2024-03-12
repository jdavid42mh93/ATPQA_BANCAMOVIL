import { buttons, buttonsSelectores, loginSelectors } from "../../../constants/common";
import CommonActions from "../common-actions/CommonActions";

// Seccion Login Screen. Contiene funciones para obtener los selectores y login en la aplicacion
class LoginScreen{
    get getInitSessionSelector() {
        return $(loginSelectors.signIn);
    }

    get getInputUserSelector(){
        return $(loginSelectors.usuario);
    }

    get getInputPasswordSelector(){
        return $(loginSelectors.contrasena);
    }

    get getBtnIngresarSelector(){
        return $(buttonsSelectores.button(buttons.ingresar));
    }
    
    async login(){
        try{
            const username = process.env.TEST_USERNAME;
            const password = process.env.TEST_PASSWORD;
            await this.getInputUserSelector.waitForDisplayed({timeout:10000, timeoutMsg:`El elemento no esta visisble despues de 10 segundos`});
            await this.getInputUserSelector.addValue(username); 
            await this.getInputPasswordSelector.waitForDisplayed({timeout:10000, timeoutMsg:`El elemento no esta visisble despues de 10 segundos`});
            await this.getInputPasswordSelector.addValue(password);
            await this.getBtnIngresarSelector.click();
            await CommonActions.getBtnOmitirSelector.waitForDisplayed({timeout:20000, timeoutMsg:`El elemento no esta visible despues de 20 segundos`})
            await CommonActions.getBtnOmitirSelector.click();
        }catch(error){
            console.error('Error en inicio de sesion', error)
        }
    }
}

export default new LoginScreen();