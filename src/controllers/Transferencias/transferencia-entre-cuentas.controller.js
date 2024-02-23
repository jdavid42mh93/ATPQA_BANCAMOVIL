import { transferenciaAlExteriorSelectores, cuentasBeneficiarias } from "../../constants/transferencia/transferenciaSelectores";
import { files } from "../../constants/_data_generation";
import { searchEntry } from "../../helpers/fileEditor.helper";

class TransferenciaEntreCuentas {
    get getTransferenciaDescription() {
        return $(transferSelectors.descripcion);
    };

    get getTransferenciaMonto() {
        return $(transferSelectors.monto);
    };

    async transferenciaEntreCuentas(){
        const data = searchEntry(files.transferencias);
        for (let elem in data){
            await this.getTransferMyAccounts.click();
            await driver.pause(6000);
            await this.getTransferenciaDescription.addValue(data[elem].descripcion);
            await driver.pause(2000);
            await this.getTransferenciaMonto.addValue(data[elem].monto);
            await driver.pause(2000);
        };
    };
};

export default new TransferenciaEntreCuentas ();