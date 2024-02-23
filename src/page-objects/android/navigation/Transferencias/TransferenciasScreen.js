import { transferenciaSelectores } from "../../../../constants/transferencia/transferenciaSelectores";

// Seccion de Pagos
class TransfersScreen{
    get getTransferenciaSeccion() {
        return $(transferenciaSelectores.transferencias);
    }

    async transferenciaSeccion(){
        await this.getTransferenciaSeccion.click();
    }
}

export default new TransfersScreen();
