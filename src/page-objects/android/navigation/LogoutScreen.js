import { logoutSelectors } from "../../../constants/common";
import CommonActions from "../common-actions/CommonActions";

// Seccion Logout Screen
class LogoutScreen{
    get getBtnSalirSelector(){
        return $(logoutSelectors.salir);
    }

    async logout(){
        await CommonActions.clickBtnToggleMenu();
        await this.getBtnSalirSelector.click();
    }
}

export default new LogoutScreen();