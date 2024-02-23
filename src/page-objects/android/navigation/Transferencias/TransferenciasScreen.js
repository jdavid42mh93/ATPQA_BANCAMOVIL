import { transferenciaSelectores } from "../../../../constants/transferencia/transferenciaSelectores";

// Seccion de Transferencias
class TransfersScreen{
    get getTransferenciaSelector() {
        return $(transferenciaSelectores.transferencias);
    }

    async transferenciaSeccion(){
        await this.getTransferenciaSelector.click();
    }
}

export default new TransfersScreen();
