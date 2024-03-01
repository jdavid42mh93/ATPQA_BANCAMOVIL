import transferenciaExteriorController from "../../../../controllers/Transferencias/transferencia-exterior.controller";
import transferenciaEntreCuentasController from "../../../../controllers/Transferencias/transferencia-entre-cuentas.controller";
import transferenciaRegistradaController from "../../../../controllers/Transferencias/transferencia-registrada.controller";

// Funciones para navegar entrelos distintos tipos de transferencias
class TransferenciasNavigation{
    async transferenciaRegistrada() {
        await transferenciaRegistradaController.transferenciaRegistradarForm();
    }

    async transferenciaEntreMisCuentas() {
        await transferenciaEntreCuentasController.transferenciaEntreMisCuentasForm();
    }

    async transferenciaAlExterior() {
        await transferenciaExteriorController.transferenciaCuentaExteriorForm();
    }
}

export default new TransferenciasNavigation();
