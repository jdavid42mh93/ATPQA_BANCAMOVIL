import { dataStatus, files, dataConditions, dataTypes } from "../../../../constants/_data_generation";
import programacionTransferenciasController from "../../../../controllers/Programacion/programacion-transferencias.controller";
import programacionController from "../../../../controllers/Programacion/programacion.controller";
import { searchEntry } from "../../../../helpers/fileEditor.helper";
import { default as CommonActions } from "../../../../page-objects/android/common-actions/CommonActions";
import { default as MenuNavigation } from "../../../../page-objects/android/navigation/MenuNavigation";

// Test de seccion de Beneficiarios
describe('Generacion de Programacion', () => {
    it('Generacion de Programacion con Transferencias', async() => {
        const data = searchEntry(files.programacion, 
            [dataConditions.typeIs(dataTypes.programacion),
                dataConditions.subtypeIs(dataTypes.transferencias),
                dataConditions.statusIs(dataStatus.pending)]);
        await MenuNavigation.navegarAInicioSesion();
        await CommonActions.login();
        for (let i=0; i < data.length; i++){
            if (data[i].status === dataStatus.pending){
                await CommonActions.clickBtnToggleMenu();
                await MenuNavigation.navegarSeccionProgramacion();
                await programacionController.seleccionarTipoProgramacion(data[i].subtype);
                await programacionController.clickBtnNuevaProgramacion();
                await programacionTransferenciasController.programacionTransferenciaForm(data[i]);
            }
        }
        await CommonActions.logout();
    });
});