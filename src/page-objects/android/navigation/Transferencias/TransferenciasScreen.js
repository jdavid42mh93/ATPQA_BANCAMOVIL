import { transferenciaSelectores } from "../../../../constants/transferencia/transferenciaSelectores";

// Seccion de Transferencias
class TransfersScreen{
    get getTransferenciaSelector() {
        return $(transferenciaSelectores.transferencias);
    }

    async transferenciaSeccion(){
        (await this.getTransferenciaSelector).waitUntil(async () => {
            return (await this.getTransferenciaSelector).isDisplayed();
        });
        await expect(this.getTransferenciaSelector).toBeExisting();
        await expect(this.getTransferenciaSelector).toHaveText(expect.stringContaining('Transferir'));
        await this.getTransferenciaSelector.click();
    }
}

export default new TransfersScreen();