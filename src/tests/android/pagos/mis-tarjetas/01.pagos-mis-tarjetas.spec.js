import CommonActions from "../../../../page-objects/android/common-actions/CommonActions";
import MenuNavigation from "../../../../page-objects/android/navigation/MenuNavigation";
import { searchEntry } from "../../../../helpers/fileEditor.helper";
import { files, dataConditions, dataTypes, dataSubtypes, dataStatus } from "../../../../constants/_data_generation";
import PagosNavigation from "../../../../page-objects/android/navigation/Pagos/PagosNavigation";
import pagosController from "../../../../controllers/Pagos/pagos.controller";

// Test de seccion de Pagos y Pagos de Mis Tarjetas
describe('Generacion de Pagos', () => {
    it('Generacion de Pagos de Mis Tarjetas', async() => {
        const data = searchEntry(files.pagos, [dataConditions.typeIs(dataTypes.pagos),dataConditions.subtypeIs(dataSubtypes.MisTarjetas), dataConditions.statusIs(dataStatus.pending)]);
        await MenuNavigation.navegarAInicioSesion();
        await CommonActions.login();
        for (let i=0; i < data.length; i++){
            if (data[i].status === dataStatus.pending){
                await MenuNavigation.navegarSeccionPagos();
                await pagosController.pagosMisTarjetasSeccion();
                await PagosNavigation.pagosMisTarjetas(data[i]);
            }
        }
        await CommonActions.logout();    
    });
});