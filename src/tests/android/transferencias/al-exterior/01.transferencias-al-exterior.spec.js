import CommonActions from "../../../../page-objects/android/common-actions/CommonActions";
import MenuNavigation from "../../../../page-objects/android/navigation/MenuNavigation";
import TransferenciasNavigation from "../../../../page-objects/android/navigation/Transferencias/TransferenciasNavigation";
import { searchEntry } from "../../../../helpers/fileEditor.helper";
import { files, dataConditions, dataTypes, dataSubtypes, dataStatus } from "../../../../constants/_data_generation";
import transferenciaController from "../../../../controllers/Transferencias/transferencia.controller";

/* Nota:    La transferencia exterior utilizan cuentas ya registradas para el usuario de testing,
            si se desea una nueva cuenta es necesario ingresarla manualmente*/

// Test de seccion de Transferencias y Transferencias Al Exterior
describe('Generacion de Transferencias',() =>{
    it('Generacion de Transferencias Al Exterior', async()=>{
        const data = searchEntry(files.data, [dataConditions.typeIs(dataTypes.transferencias),dataConditions.subtypeIs(dataSubtypes.AlExterior), dataConditions.statusIs(dataStatus.pending)]);
        await MenuNavigation.navegarAInicioSesion();
        await CommonActions.login();
        for (let i=0; i < data.length; i++){
            if (data[i].status === dataStatus.pending){
                await MenuNavigation.navegarSeccionTransferencia();
                await transferenciaController.transferenciaAlExteriorSeccion();
                await TransferenciasNavigation.transferenciaAlExterior(data[i]);
            }
        }
        await CommonActions.logout();
    });
});