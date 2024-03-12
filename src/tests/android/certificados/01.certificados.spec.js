import CommonActions from "../../../page-objects/android/common-actions/CommonActions";
import MenuNavigation from "../../../page-objects/android/navigation/MenuNavigation";

// Test de inicio de sesion 
describe('Iniciar sesion con usuario y contraseña',() =>{
    it('Ingresar usuario y contraseña', async()=>{
        await MenuNavigation.navegarAInicioSesion();
        await CommonActions.login();
    });
});

// Test de seccion de pagos
describe('Navegar a la sección de Certificados',() =>{
    it('Click en el botón de Certificados', async()=>{
        await CommonActions.navigateToCertificateSection();
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
