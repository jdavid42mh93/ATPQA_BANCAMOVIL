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
        const username = process.env.TEST_USERNAME;
        const password = process.env.TEST_PASSWORD;
        await this.getInputUser.addValue(username);
        await this.getInputPassword.addValue(password);
        await this.getBtnIngresar.click();
        await this.getBtnOmitir.click();
    }
}

export default new LoginScreen();