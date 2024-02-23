import { transferenciaAlExteriorSelectores, cuentasBeneficiariasSelectores, motivoEconomicoOpcionSelectores, transferenciaSelectores } from "../../constants/transferencia/transferenciaSelectores";
import { files, dataConditions, dataTypes, dataSubtypes } from "../../constants/_data_generation";
import { searchEntry } from "../../helpers/fileEditor.helper";
import transferenciaController from "./transferencia.controller";

// Seccion de transferencias al exterior
class TransferenciaExterior {
// Funciones para obtener los selectores
    get getSeleccionarBeneficiario() {
        return $(transferenciaAlExteriorSelectores.cuentaBeneficiariaExterior);
    };

    get getCuentaBeneficiaria() {
        return $(cuentasBeneficiariasSelectores.THIRDB);
    };

    get getTransferenciaMotivoEconomico() {
        return $(transferenciaAlExteriorSelectores.motivoEconomico);
    };

    get getTransferenciaMontoExterior() {
        return $(transferenciaAlExteriorSelectores.montoExterior);
    };

    get getTransferenciaReferencia() {
        return $(transferenciaAlExteriorSelectores.referencia);
    };

    async getMotivoEconomicoOpcion(motivoEconomico){
        switch (motivoEconomico) {
            case "105_importaciones":
                motivoEconomico = motivoEconomicoOpcionSelectores["105_importaciones"]
                break;
            default:
                break;
        }
        return motivoEconomico
    }

// Funcion para completar los datos de transferencia exterior
    async transferenciaCuentaExteriorForm(){
        const data = searchEntry(files.data, [dataConditions.typeIs(dataTypes.transferencias),dataConditions.subtypeIs(dataSubtypes.AlExterior),]);
        await transferenciaController.transferenciaAlExteriorSeccion();
        await driver.pause(6000);
        await this.getSeleccionarBeneficiario.click();
        await driver.pause(1000);
        await this.getCuentaBeneficiaria.click();
        await driver.pause(1000);
        console.log("DATA ====>",data);
        for (let i=0; i < data.length; i++){
            const elemento = data[i];
            console.log("Elemento " + (i + 1) + ":", elemento);
            if(elemento.monto && elemento.motivo_economico){
                console.log("Monto ====>", elemento.monto);
                await this.getTransferenciaMontoExterior.scrollIntoView({block: 'center', inline: 'center'});
                await this.getTransferenciaMontoExterior.addValue(elemento.monto);
                await driver.pause(2000);
                await this.getTransferenciaMotivoEconomico.click();
                await this.getTransferenciaReferencia.addValue(elemento.descripcion);
                console.log("Motivo Economico Opcion ====>", elemento.motivo_economico);
                await driver.pause(2000);
            };      
        };
    };
};

export default new TransferenciaExterior ();