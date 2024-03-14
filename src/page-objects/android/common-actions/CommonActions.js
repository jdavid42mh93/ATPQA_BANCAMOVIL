import LoginScreen from "../navigation/LoginScreen";
import LogoutScreen from "../navigation/LogoutScreen";
import { buttons, buttonsSelectores, commonsSelectores, mensajes } from "../../../constants/common";

// Clase: contiene funciones para login, logout y omitir pin
class CommonActions{
    get getBtnOmitirSelector(){
        return $(buttonsSelectores.button(buttons.Omitir));
    }

    get getBtnContinuarSelector(){
        return $(buttonsSelectores.button(buttons.Continuar));
    }

    get getBtnFinalizarSelector(){
        return $(buttonsSelectores.button(buttons.Finalizar));
    }

    get getMensajeConfirmacionSelector() {
        return $(commonsSelectores.mensaje(mensajes.mensajeConfirmacion));
    }

    get getBtnCerrarSelector(){
        return $(buttonsSelectores.button(buttons.Cerrar));
    }

// Funcion para validar mensaje de confirmacion
    async validarConfirmacionOK() {
        await this.getMensajeConfirmacionSelector.waitForDisplayed();
        await expect(this.getMensajeConfirmacionSelector).toHaveText(expect.stringContaining(mensajes.mensajeConfirmacion))
    }

// Funcion para dar clik en el boton Continuar
    async clickBtnContinuar() {
        // Seleccionar boton de continuar
        await this.getBtnContinuarSelector.waitForDisplayed({timeout: 30000});
        await this.getBtnContinuarSelector.click();
    }

// Funcion para dar click en el boton Finalizar
    async clickBtnFinalizar(){
        await this.getBtnFinalizarSelector.waitUntil(async () => {
            return (await this.getBtnFinalizarSelector).isDisplayed();
            },{
                 timeout: 30000
            });
        // await this.validarConfirmacionOK();
        await this.getBtnFinalizarSelector.click();
    }

// Funcion para dar click en el boton Finalizar
    async clickBtnCerrar(){
        await this.getBtnCerrarSelector.waitForDisplayed();
        await this.getBtnCerrarSelector.click();
    }

// Funcion para obtener el selector de mensajes de error
    async mensajeError(mensajeError){
        await $(commonsSelectores.mensaje(mensajeError)).waitForDisplayed({timeout:20000});
    }

    async login(){
        try{
            await LoginScreen.login();
        }catch(error){
            console.error('Error iniciando sesion', error);
        }
    }

    async logout(){
        try{
            await LogoutScreen.logout();
        }catch(error){
            console.error('Error cerrando sesion', error);
        }
    }
}

export default new CommonActions();