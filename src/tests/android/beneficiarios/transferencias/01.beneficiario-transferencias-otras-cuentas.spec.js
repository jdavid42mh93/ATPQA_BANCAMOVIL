import { dataStatus, files, dataConditions, dataTypes, dataSubtypes } from "../../../../constants/_data_generation";
import { default as beneficiariosTransferenciasController } from "../../../../controllers/Beneficiarios/beneficiarios-transferencias.controller";
import { default as beneficiariosController } from "../../../../controllers/Beneficiarios/beneficiarios.controller";
import { default as transferenciaController } from "../../../../controllers/Transferencias/transferencia.controller";
import { searchEntry } from "../../../../helpers/fileEditor.helper";
import { default as CommonActions } from "../../../../page-objects/android/common-actions/CommonActions";
import { default as MenuNavigation } from "../../../../page-objects/android/navigation/MenuNavigation";

// Test de seccion de Beneficiarios
describe('Generacion de Beneficiarios', () => {
    it('Generacion de Beneficiarios con Otras Cuentas', async() => {
        const data = searchEntry(files.beneficiarios, 
            [dataConditions.typeIs(dataTypes.beneficiarios),
                dataConditions.transferTypeIs(dataSubtypes.OtrasCuentas),
                dataConditions.statusIs(dataStatus.pending)]);
        console.log("Data =====>", data);
        console.log("Conditions =====>", [dataConditions.typeIs(dataTypes.beneficiarios),
            dataConditions.transferTypeIs(dataSubtypes.OtrasCuentas),
            dataConditions.statusIs(dataStatus.pending)]);
        await MenuNavigation.navegarAInicioSesion();
        await CommonActions.login();
        for (let i=0; i < data.length; i++){
            if (data[i].status === dataStatus.pending){
                await CommonActions.clickBtnToggleMenu();
                await MenuNavigation.navegarSeccionBeneficiarios();
                await beneficiariosController.seleccionarTipoBeneficiario(data[i].subtype);
                await beneficiariosController.clickBtnNuevoBeneficiario();
                await transferenciaController.transferenciaOtrasCuentasSeccion();
                await beneficiariosTransferenciasController.transferenciasBeneficiarioForm(data[i]);
            }
        }
        await CommonActions.logout();
    });
});