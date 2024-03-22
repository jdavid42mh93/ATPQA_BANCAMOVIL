import { dataConditions, dataStatus, dataTypes, files } from "../../../constants/_data_generation";
import recargasElectronicasController from "../../../controllers/Recargas/recargas-electronicas.controller";
import { searchEntry } from "../../../helpers/fileEditor.helper";
import CommonActions from "../../../page-objects/android/common-actions/CommonActions";
import MenuNavigation from "../../../page-objects/android/navigation/MenuNavigation";

// Test de seccion de Avances en efectivo
describe('Generacion de Avances', () => {
    it('Generacion de Avances en Efectivo', async() => {
        const data = searchEntry(files.recargas, [dataConditions.typeIs(dataTypes.recargas), dataConditions.statusIs(dataStatus.pending)]);
        await MenuNavigation.navegarAInicioSesion();
        await CommonActions.login();
        for (let i=0; i < data.length; i++){
            if (data[i].status === dataStatus.pending){
                await CommonActions.clickBtnToggleMenu();
                await MenuNavigation.navegarSeccionRecargaElectronica();
                await recargasElectronicasController.recargarElectronicaForm(data[i]);
            }
        }
        await CommonActions.logout();
    });
});