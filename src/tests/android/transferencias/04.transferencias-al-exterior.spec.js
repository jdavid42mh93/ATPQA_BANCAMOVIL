import CommonActions from "../../../page-objects/android/common-actions/CommonActions";
import MenuNavigation from "../../../page-objects/android/navigation/MenuNavigation";
import Commons from "../../../page-objects/android/navigation/Transferencias/Commons";

// Test de inicio de sesion 
describe('Iniciar sesion con usuario y contraseña',() =>{
    it('Ingresar usuario y contraseña', async()=>{
        await MenuNavigation.navegarAInicioSesion();
        await CommonActions.login();
    });
});

// Test de navegacion a la seccion de transferencia y transferencia al exterior 
describe('Transferencia Al Exterior desde el archivo data.txt', () => {
    it('Navegar a la seccion de transferencia al exterior y completar el formulario', async() => {
        await MenuNavigation.navegarSeccionTransferencia();
        await driver.pause(5000);
        await Commons.transferenciaAlExterior();
        await driver.pause(5000);
    });
});

// Test de cierre de sesion
describe('Cerrar sesión',() =>{
    it('Click en el boton de menu lateral y cerrar sesión', async()=>{
        await CommonActions.logout();
        await driver.pause(5000);
    });
});