import { buttons, loginSelectors } from "../../../constants/common";

// Seccion Login Screen
class LoginScreen{
    get getInputUser(){
        return $(loginSelectors.usuario);
    }

    get getInputPassword(){
        return $(loginSelectors.contrasena);
    }

    get getBtnIngresar(){
        return $(buttons.ingresar);
    }

    get getBtnOmitir(){
        return $(buttons.omitir);
    }
    
    async login(){
        try{
            const username = process.env.TEST_USERNAME;
            const password = process.env.TEST_PASSWORD;
            await this.getInputUser.waitForDisplayed({timeout:10000, timeoutMsg:'El elemento no esta visisble despues de 10 segundos'});
            await this.getInputUser.addValue(username);
            await this.getInputPassword.waitForDisplayed({timeout:10000, timeoutMsg:'El elemento no esta visisble despues de 10 segundos'});
            await this.getInputPassword.addValue(password);
            await this.getBtnIngresar.click();
            await this.getBtnOmitir.waitForDisplayed({timeout:20000, timeoutMsg:'El elemento no esta visible despues de 20 segundos'})
            await this.getBtnOmitir.click();
        }catch(error){
            console.error('Error en inicio de sesion', error)
        }
    }
}

export default new LoginScreen();