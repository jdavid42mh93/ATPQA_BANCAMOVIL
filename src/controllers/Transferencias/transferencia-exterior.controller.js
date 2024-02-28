import { transferenciaAlExteriorSelectores, cuentasBeneficiariasSelectores, motivoEconomicoOpcionSelectores, motivoEconomicoOpcion, constTransferenciasAlExterior, gastoExteriorOpcion } from "../../constants/transferencia/transferenciaSelectores";
import { files, dataConditions, dataTypes, dataSubtypes } from "../../constants/_data_generation";
import { UIAutomatorSelectores } from "../../constants/common";
import { searchEntry } from "../../helpers/fileEditor.helper";
import transferenciaController from "./transferencia.controller";
import { datosGenerales, buttonsSelectores } from "../../constants/common";

// Seccion de transferencias al exterior
class TransferenciaExterior {
// Funciones para obtener los selectores
    get getSeleccionarBeneficiarioSelector() {
        return $(transferenciaAlExteriorSelectores.cuentaBeneficiariaExterior);
    };

    get getCuentaBeneficiariaSelector() {
        return $(cuentasBeneficiariasSelectores.THIRDB);
    };

    get getTransferenciaMotivoEconomicoSelector() {
        return $(transferenciaAlExteriorSelectores.motivoEconomico);
    };

    get getTransferenciaMontoExteriorSelector() {
        return $(transferenciaAlExteriorSelectores.montoExterior);
    };

    get getTransferenciaReferenciaSelector() {
        return $(transferenciaAlExteriorSelectores.referencia);
    };

    get getGastoExteriorSelector(){
        return $(transferenciaAlExteriorSelectores.gastosExterior); 
    };

    get getGastoExteriorOpcionSelector(){
        return $(gastoExteriorOpcion["N-OUR"]);
    };

    get getBtnContinuarSelector(){
        return $(buttonsSelectores.continuar);
    };

    async getMotivoEconomicoOpcion(motivoEconomico){
        switch (motivoEconomico) {
            case motivoEconomicoOpcion["105-IMPORTACIONES"]:
                $(motivoEconomicoOpcionSelectores["105_importaciones"]).click();
                break;
            case motivoEconomicoOpcion["110-ANTICIPOPORIMPORTACIONES"]:
                $(motivoEconomicoOpcionSelectores["110_anticipoImportaciones"]).click();
                break;
            case motivoEconomicoOpcion["201-SERVICIOSDETRANSPORTEMARITIMO(RUTASINTERNACIONALES)"]:
                $(motivoEconomicoOpcionSelectores["201_servTranspMaritimoRI"]).click();
                break;
            default:
                break;
        }
    };

// Funcion para completar los datos de transferencia exterior
    async transferenciaCuentaExteriorForm(){
        try{
            const data = searchEntry(files.data, [dataConditions.typeIs(dataTypes.transferencias),dataConditions.subtypeIs(dataSubtypes.AlExterior),]);
            await transferenciaController.transferenciaAlExteriorSeccion();
            await this.getSeleccionarBeneficiarioSelector.waitForDisplayed({timeout:26000, timeoutMsg:`El elemento no esta visisble despues de 26 segundos`});
            await this.getSeleccionarBeneficiarioSelector.click();
            await this.getCuentaBeneficiariaSelector.waitForDisplayed({timeout:10000, timeoutMsg:`El elemento no esta visisble despues de 10 segundos`});
            await this.getCuentaBeneficiariaSelector.click();
            for (let i=0; i < data.length; i++){
                const elemento = data[i];
                if(elemento.motivo_economico){
                    await $(UIAutomatorSelectores.scrollTextIntoView(constTransferenciasAlExterior.MotivoEconomico)).click();
                    await this.getMotivoEconomicoOpcion(elemento.motivo_economico);
                    await this.getTransferenciaMontoExteriorSelector.click();
                    await this.getTransferenciaMontoExteriorSelector.addValue(datosGenerales.monto);
                    await driver.hideKeyboard();
                    await $(UIAutomatorSelectores.scrollToEnd)
                    await this.getGastoExteriorSelector.click();
                    await this.getGastoExteriorOpcionSelector.click();
                    await this.getBtnContinuarSelector.waitForDisplayed();
                    await this.getBtnContinuarSelector.click();
                    await this.getBtnContinuarSelector.waitForDisplayed();
                    await this.getBtnContinuarSelector.click();
                };
            };
        }catch(error){
            console.error('Error en ingresar datos en transferencias al exterior', error);
        }
    };
};

export default new TransferenciaExterior ();