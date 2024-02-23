import { loginSelectors } from "../../../constants/common";

// Clase: Navigacion entre el menu
class MenuNavigation{
    get getInitSession() {
        return $(loginSelectors.signIn);
    }
}

export default new MenuNavigation();
