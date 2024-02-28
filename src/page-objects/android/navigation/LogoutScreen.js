import { logoutSelectors } from "../../../constants/common";
import MenuNavigation from "./MenuNavigation";


// Seccion Logout Screen
class LogoutScreen{
    get getBtnSalirSelector(){
        return $(logoutSelectors.salir);
    }

    async logout(){
        await MenuNavigation.getToogleMenuSelector.click();
        await this.getBtnSalirSelector.click();
    }
}

export default new LogoutScreen();