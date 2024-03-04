import CommonActions from "../../../page-objects/android/common-actions/CommonActions";
import MenuNavigation from "../../../page-objects/android/navigation/MenuNavigation";
import TransferenciasNavigation from "../../../page-objects/android/navigation/Transferencias/TransferenciasNavigation";

/*  Nota:   este escenario de prueba requiere codigo de verificacion enviado a telefono o correo electronico
            del usuario para completar la transferencia*/

// Test de inicio de sesion 
describe('Iniciar sesion con usuario y contraseña',() =>{
    it('Ingresar usuario y contraseña', async()=>{
        await MenuNavigation.navegarAInicioSesion();
        await CommonActions.login();
    });
});


// Test de seccion de Transferencias y Transferencias Eventuales
describe('Navegar a la section de Transferencias',() =>{
    it('Click en el boton de Transferencias', async()=>{
        await MenuNavigation.navegarSeccionTransferencia();
    });
    it('Click en el boton de Transferencias Eventuales', async()=>{
        await TransferenciasNavigation.transferenciaEventuales();
    });
});

// Test de logout
describe('Cerrar sesión',() =>{
    it('Click en el boton de menu lateral y cerrar sesión', async()=>{
        await CommonActions.logout();
    });
});
