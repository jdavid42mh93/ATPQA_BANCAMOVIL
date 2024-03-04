import transferenciaExteriorController from "../../../../controllers/Transferencias/transferencia-exterior.controller";
import transferenciaEntreCuentasController from "../../../../controllers/Transferencias/transferencia-entre-cuentas.controller";
import transferenciaRegistradaController from "../../../../controllers/Transferencias/transferencia-registrada.controller";
import transferenciaEventualesController from "../../../../controllers/Transferencias/transferencia-eventuales.controller";

// Funciones para navegar entrelos distintos tipos de transferencias
class TransferenciasNavigation{
    async transferenciaEntreMisCuentas() {
        await transferenciaEntreCuentasController.transferenciaEntreMisCuentasForm();
    }

    async transferenciaRegistrada() {
        await transferenciaRegistradaController.transferenciaRegistradaForm();
    }

    async transferenciaEventuales() {
        await transferenciaEventualesController.transferenciaEventualForm();
    }

    async transferenciaAlExterior() {
        await transferenciaExteriorController.transferenciaAlExteriorForm();
    }
}

export default new TransferenciasNavigation();
