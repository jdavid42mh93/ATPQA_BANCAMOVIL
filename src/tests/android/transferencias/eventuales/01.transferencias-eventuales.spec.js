import CommonActions from "../../../../page-objects/android/common-actions/CommonActions";
import MenuNavigation from "../../../../page-objects/android/navigation/MenuNavigation";
import TransferenciasNavigation from "../../../../page-objects/android/navigation/Transferencias/TransferenciasNavigation";
import { searchEntry } from "../../../../helpers/fileEditor.helper";
import { files, dataConditions, dataTypes, dataSubtypes, dataStatus } from "../../../../constants/_data_generation";
import transferenciaController from "../../../../controllers/Transferencias/transferencia.controller";

/*  Nota:   este escenario de prueba requiere codigo de verificacion enviado a telefono o correo electronico
            del usuario para completar la transferencia*/

// Test de seccion de Transferencias y Transferencias Eventuales
describe('Generacion de Transferencias',() =>{
    it('Generacion de Transferencias Eventuales', async()=>{
        const data = searchEntry(files.transferencias, [dataConditions.typeIs(dataTypes.transferencias),dataConditions.subtypeIs(dataSubtypes.Eventuales), dataConditions.statusIs(dataStatus.pending)]);
        await MenuNavigation.navegarAInicioSesion();
        await CommonActions.login();
        for (let i=0; i < data.length; i++){
            if (data[i].status === dataStatus.pending){
                await MenuNavigation.navegarSeccionTransferencia();
                await transferenciaController.transferenciaEventualesSeccion();
                await TransferenciasNavigation.transferenciaEventuales(data[i]);
            }
        }
        await CommonActions.logout();
    });
});