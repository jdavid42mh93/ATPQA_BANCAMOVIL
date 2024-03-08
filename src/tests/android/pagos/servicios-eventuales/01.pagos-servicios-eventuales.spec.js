import CommonActions from "../../../../page-objects/android/common-actions/CommonActions";
import MenuNavigation from "../../../../page-objects/android/navigation/MenuNavigation";
import { searchEntry } from "../../../../helpers/fileEditor.helper";
import { files, dataConditions, dataTypes, dataSubtypes } from "../../../../constants/_data_generation";
import PagosNavigation from "../../../../page-objects/android/navigation/Pagos/PagosNavigation";
import CommonsTransferencias from "../../../../page-objects/android/navigation/Transferencias/CommonsTransferencias";
import pagosServiciosEventualesController from "../../../../controllers/Pagos/pagos-servicios-eventuales.controller";

// Test de inicio de sesion 
describe('Iniciar sesion con usuario y contraseña',() =>{
    it('Ingresar usuario y contraseña', async()=>{
        await MenuNavigation.navegarAInicioSesion();
        await CommonActions.login();
    });
});

// Test de seccion de pagos
describe('Navegar a seccion de Pagos',() =>{
    it('Click en el botón de Pagos', async()=>{
        await MenuNavigation.navegarSeccionPagos();
    });
    it('Click en el botón de Servicios Eventuales', async()=>{
        await PagosNavigation.pagosServiciosEventuales();
    });
    it('Seleccionar Servicio Basico Agua', async()=>{
        const data = searchEntry(files.data, [dataConditions.typeIs(dataTypes.pagos),dataConditions.subtypeIs(dataSubtypes.ServiciosEventuales),]);
        await pagosServiciosEventualesController.pagosServiciosEventualesForm(data);
    });
    it('Click en el botón Continuar', async()=>{
        await CommonsTransferencias.clickBtnContinuar();
    });
    it('Click en el botón Finalizar', async()=>{
        await CommonsTransferencias.clickBtnFinalizar();
    });
});

// Test de logout
describe('Cerrar sesión',() =>{
    it('Click en el boton de menu lateral y cerrar sesión', async()=>{
        await CommonActions.logout();
        await driver.pause(5000);
    });
});
