import { transferenciaAlExteriorSelectores, cuentasBeneficiariasSelectores, motivoEconomicoOpcionSelectores, motivoEconomicoOpcion } from "../../constants/transferencia/transferenciaSelectores";
import { files, dataConditions, dataTypes, dataSubtypes } from "../../constants/_data_generation";
import { searchEntry } from "../../helpers/fileEditor.helper";
import transferenciaController from "./transferencia.controller";

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

    async getMotivoEconomicoOpcion(motivoEconomico){
        switch (motivoEconomico) {
            case motivoEconomicoOpcion["105-IMPORTACIONES"]:
                motivoEconomicoOpcionSelectores["105_importaciones"].click();
                break;
            case motivoEconomicoOpcion["110-ANTICIPOPORIMPORTACIONES"]:
                motivoEconomicoOpcionSelectores["110_anticipoImportaciones"].click();
                break;
            case motivoEconomicoOpcion["201-SERVICIOSDETRANSPORTEMARITIMO(RUTASINTERNACIONALES)"]:
                motivoEconomicoOpcionSelectores["201_servTranspMaritimoRI"].click();
                break;
            default:
                break;
        }
    };

// Funcion para completar los datos de transferencia exterior
    async transferenciaCuentaExteriorForm(){
        const data = searchEntry(files.data, [dataConditions.typeIs(dataTypes.transferencias),dataConditions.subtypeIs(dataSubtypes.AlExterior),]);
        await transferenciaController.transferenciaAlExteriorSeccion();
        await driver.pause(6000);
        await this.getSeleccionarBeneficiarioSelector.click();
        await driver.pause(1000);
        await this.getCuentaBeneficiariaSelector.click();
        await driver.pause(1000);
        console.log("DATA ====>",data);
        for (let i=0; i < data.length; i++){
            const elemento = data[i];
            console.log("Elemento " + (i + 1) + ":", elemento);
            if(elemento.monto && elemento.motivo_economico){
                console.log("Monto ====>", elemento.monto);
                await this.getTransferenciaMontoExteriorSelector.scrollIntoView({block: 'start', inline: 'start'});
                await this.getTransferenciaMontoExteriorSelector.addValue(elemento.monto);
                await driver.pause(2000);
                await this.getTransferenciaMotivoEconomicoSelector.click();
                await this.getMotivoEconomicoOpcion(elemento.motivo_economico);
                await this.getTransferenciaReferenciaSelector.addValue(elemento.descripcion);
                console.log("Motivo Economico Opcion ====>", elemento.motivo_economico);
                await driver.pause(2000);
            };      
        };
    };
};

export default new TransferenciaExterior ();