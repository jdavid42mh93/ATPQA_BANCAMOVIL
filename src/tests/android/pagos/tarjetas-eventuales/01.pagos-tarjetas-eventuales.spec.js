import CommonActions from "../../../../page-objects/android/common-actions/CommonActions";
import MenuNavigation from "../../../../page-objects/android/navigation/MenuNavigation";
import { searchEntry } from "../../../../helpers/fileEditor.helper";
import { files, dataConditions, dataTypes, dataSubtypes, dataStatus } from "../../../../constants/_data_generation";
import PagosNavigation from "../../../../page-objects/android/navigation/Pagos/PagosNavigation";
import pagosController from "../../../../controllers/Pagos/pagos.controller";

// Test de seccion de Pagos y Pagos de Tarjetas Eventuales
describe('Generacion de Pagos', () => {
    it('Generacion de Pagos de Tarjetas Eventuales', async() => {
        const data = searchEntry(files.data, [dataConditions.typeIs(dataTypes.pagos),dataConditions.subtypeIs(dataSubtypes.TarjetasEventuales), dataConditions.statusIs(dataStatus.pending)]);
        await MenuNavigation.navegarAInicioSesion();
        await CommonActions.login();
        for (let i=0; i < data.length; i++){
            if (data[i].status === dataStatus.pending){
                await MenuNavigation.navegarSeccionPagos();
                await pagosController.pagosTarjetasEventualesSeccion();
                await PagosNavigation.pagosTarjetasEventuales(data[i]);
            }
        }
        await CommonActions.logout();    
    });
});