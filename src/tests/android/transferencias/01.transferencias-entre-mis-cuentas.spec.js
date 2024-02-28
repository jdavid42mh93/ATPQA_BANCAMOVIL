import CommonActions from "../../../page-objects/android/common-actions/CommonActions";
import MenuNavigation from "../../../page-objects/android/navigation/MenuNavigation";
import TransferenciasNavigation from "../../../page-objects/android/navigation/Transferencias/TransferenciasNavigation";

/*  Nota: Los test utilizan cuentas registradas propias del usuario registradas anteriormente  */

// Test de inicio de sesion 
describe('Iniciar sesion con usuario y contraseña',() =>{
    it('Ingresar usuario y contraseña', async()=>{
        await MenuNavigation.navegarAInicioSesion();
        await CommonActions.login();
    });
});

describe('Ingreso de descripcion y monto desde archivo transferencias.txt', () => {
    it('Ingreso de descripcion y monto', async() => {
        await MenuNavigation.navegarSeccionTransferencia();
        await driver.pause(5000);
        await TransferenciasNavigation.transferenciaEntreMisCuentas();
        await driver.pause(5000);
    });
});

// Test de logout
describe('Cerrar sesión',() =>{
    it('Click en el boton de menu lateral y cerrar sesión', async()=>{
        await CommonActions.logout();
        await driver.pause(5000);
    });
});