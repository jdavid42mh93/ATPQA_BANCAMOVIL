import CommonActions from "../../../../page-objects/android/common-actions/CommonActions";
import MenuNavigation from "../../../../page-objects/android/navigation/MenuNavigation";
import TransferenciasNavigation from "../../../../page-objects/android/navigation/Transferencias/TransferenciasNavigation";
import { searchEntry } from "../../../../helpers/fileEditor.helper";
import { files, dataConditions, dataTypes, dataSubtypes, dataStatus } from "../../../../constants/_data_generation";
import transferenciaController from "../../../../controllers/Transferencias/transferencia.controller";

/*  Nota: Los tests utilizan cuentas registradas anteriormente proceden de una transferencia eventual */

// Test de seccion de Transferencias y Transferencias Registradas
describe('Generacion de Transferencias',() =>{
    it('Generacion de Transferencias Registradas', async()=>{
        const data = searchEntry(files.data, [dataConditions.typeIs(dataTypes.transferencias),dataConditions.subtypeIs(dataSubtypes.Registradas), dataConditions.statusIs(dataStatus.pending)]);
        await MenuNavigation.navegarAInicioSesion();
        await CommonActions.login();
        for (let i=0; i < data.length; i++){
            if (data[i].status === dataStatus.pending){
                await MenuNavigation.navegarSeccionTransferencia();
                await transferenciaController.transferenciaRegistradasSeccion();
                await TransferenciasNavigation.transferenciaRegistrada(data[i]);
            }
        }
        await CommonActions.logout();
    });
});