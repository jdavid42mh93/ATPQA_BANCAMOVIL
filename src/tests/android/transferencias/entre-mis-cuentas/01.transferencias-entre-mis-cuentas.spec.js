import CommonActions from "../../../../page-objects/android/common-actions/CommonActions";
import MenuNavigation from "../../../../page-objects/android/navigation/MenuNavigation";
import TransferenciasNavigation from "../../../../page-objects/android/navigation/Transferencias/TransferenciasNavigation";
import { searchEntry } from "../../../../helpers/fileEditor.helper";
import { files, dataConditions, dataTypes, dataSubtypes, dataStatus } from "../../../../constants/_data_generation";
import transferenciaController from "../../../../controllers/Transferencias/transferencia.controller";

/*  Nota: Los tests utilizan cuentas propias del usuario registradas anteriormente  */

// Test de seccion de Transferencias y Transferencias Entre Mis Cuentas
describe('Generacion de Transferencias', () => {
    it('Generacion de Transferencias Entre Mis Cuentas', async() => {
        const data = searchEntry(files.transferencias, [dataConditions.typeIs(dataTypes.transferencias),dataConditions.subtypeIs(dataSubtypes.EntreMisCuentas), dataConditions.statusIs(dataStatus.pending)]);
        await MenuNavigation.navegarAInicioSesion();
        await CommonActions.login();
        for (let i=0; i < data.length; i++){
            if (data[i].status === dataStatus.pending){
                await MenuNavigation.navegarSeccionTransferencia();
                await transferenciaController.transferenciaEntreMisCuentasSeccion();
                await TransferenciasNavigation.transferenciaEntreMisCuentas(data[i]);
            }
        }
        await CommonActions.logout();    
    });
});