import CommonActions from "../../../page-objects/android/common-actions/CommonActions";
import transferenciaController from "../../../controllers/Transferencias/transferencia.controller";

/*  Autor: Juan Callataxi
    Fecha Creacion: 23 Febrero 2024
    Ultima Modificacion: 23 Febrero 2024    */

// Test de inicio de sesion 
describe('Iniciar sesion con usuario y contraseña',() =>{
    it('Ingresar usuario y contraseña', async()=>{
        await driver.pause(5000);
        await CommonActions.navigateToInitSession();
        await driver.pause(10000);
        await CommonActions.login();
        await driver.pause(20000);
    });
});

describe('Ingreso de descripcion y monto desde archivo transferencias.txt', () => {
    it('Ingreso de descripcion y monto', async() => {
        await CommonActions.navigateToTransferSection();
        await driver.pause(5000);
        await transferenciaController.transferMyAccounts();
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