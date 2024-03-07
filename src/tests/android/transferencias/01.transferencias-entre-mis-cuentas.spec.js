import CommonActions from "../../../page-objects/android/common-actions/CommonActions";
import MenuNavigation from "../../../page-objects/android/navigation/MenuNavigation";
import TransferenciasNavigation from "../../../page-objects/android/navigation/Transferencias/TransferenciasNavigation";
import { searchEntry } from "../../../helpers/fileEditor.helper";
import { files, dataConditions, dataTypes, dataSubtypes } from "../../../constants/_data_generation";

/*  Nota: Los tests utilizan cuentas propias del usuario registradas anteriormente  */

// Test de inicio de sesion 
describe('Iniciar sesion con usuario y contraseña',() =>{
    it('Ingresar usuario y contraseña', async()=>{
        await MenuNavigation.navegarAInicioSesion();
        await CommonActions.login();
    });
});

// Test de seccion de Transferencias y Transferencias Entre Mis Cuentas
describe('Navegar a la section de Transferencias', () => {
    it('Click en el boton de Transferencias', async() => {
        await MenuNavigation.navegarSeccionTransferencia();
    });
    it('Click en el boton de Transferencias Entre Mis Cuentas', async() => {
        const data = searchEntry(files.data, [dataConditions.typeIs(dataTypes.transferencias),dataConditions.subtypeIs(dataSubtypes.EntreMisCuentas),]);
        await TransferenciasNavigation.transferenciaEntreMisCuentas(data);
    });
});

// Test de logout
describe('Cerrar sesión',() =>{
    it('Click en el boton de menu lateral y cerrar sesión', async()=>{
        await CommonActions.logout();
    });
});