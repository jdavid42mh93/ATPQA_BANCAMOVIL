import CommonActions from "../../../page-objects/android/common-actions/CommonActions";

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

// Test de seccion de pagos
describe('Navegar a seccion de Pagos',() =>{
    it('Click en el botón de Pagos', async()=>{
        await CommonActions.navigateToPaymentsSection();
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
