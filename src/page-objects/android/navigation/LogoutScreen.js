import { buttons, logoutSelectors } from "../../../constants/common";

// Seccion Logout Screen
class LogoutScreen{
    get getToogleMenu(){
        return $(buttons.toggleButton);
    }

    get getBtnExit(){
        return $(logoutSelectors.salir);
    }

    async logout(){
        await this.getToogleMenu.click();
        await this.getBtnExit.click();
    }
}

export default new LogoutScreen();