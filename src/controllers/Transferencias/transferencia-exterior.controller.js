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
        try{
            console.log('Conditions ===>', dataConditions.typeIs(dataTypes.transferencias),dataConditions.subtypeIs(dataSubtypes.AlExterior))
            const data = searchEntry(files.data, [dataConditions.typeIs(dataTypes.transferencias),dataConditions.subtypeIs(dataSubtypes.AlExterior),]);
            console.log("DATA ====>",data);
            await transferenciaController.transferenciaAlExteriorSeccion();
            await driver.pause(6000);
            await this.getSeleccionarBeneficiarioSelector.click();
            await driver.pause(1000);
            await this.getCuentaBeneficiariaSelector.click();
            await driver.pause(1000);
            for (let i=0; i < data.length; i++){
                const elemento = data[i];
                console.log("Elemento " + (i + 1) + ":", elemento);
                console.log("Motivo Economico Opcion ====>", elemento.motivo_economico);
                if(elemento.motivo_economico){
                    await driver.pause(5000);
                    // scrool to the end
                    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
                    await this.getTransferenciaMontoExteriorSelector.scrollIntoView({block: 'start', inline: 'nearest'});
                    await driver.pause(10000);
                    await this.getTransferenciaMontoExteriorSelector.addValue('1');
                    await driver.pause(10000);
                    await this.getTransferenciaMotivoEconomicoSelector.click();
                    await this.getMotivoEconomicoOpcion(elemento.motivo_economico);
                    await this.getTransferenciaReferenciaSelector.addValue('descripcion');
                    await driver.pause(2000);
                };      
            };
        }catch(error){
            console.error('Error en ingresar datos en transferencias al exterior', error);
        }
    };
};

export default new TransferenciaExterior ();