import LoginScreen from "../navigation/LoginScreen";
import LogoutScreen from "../navigation/LogoutScreen";
import { buttonsSelectores } from "../../../constants/common";

// Clase: contiene funciones para login, logout y omitir pin
class CommonActions{
    get getBtnOmitirSelector(){
        return $(buttonsSelectores.omitir);
    }

    get getBtnContinuarSelector(){
        return $(buttonsSelectores.continuar);
    }

    get getBtnFinalizarSelector(){
        return $(buttonsSelectores.finalizar);
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