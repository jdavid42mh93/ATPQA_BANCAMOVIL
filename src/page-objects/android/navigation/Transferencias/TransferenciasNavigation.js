import transferenciaExteriorController from "../../../../controllers/Transferencias/transferencia-exterior.controller";
import transferenciaEntreCuentasController from "../../../../controllers/Transferencias/transferencia-entre-cuentas.controller";
import transferenciaRegistradaController from "../../../../controllers/Transferencias/transferencia-registrada.controller";
import transferenciaEventualesController from "../../../../controllers/Transferencias/transferencia-eventuales.controller";

// Funciones para navegar entrelos distintos tipos de transferencias
class TransferenciasNavigation{
    async transferenciaEntreMisCuentas(data) {
        await transferenciaEntreCuentasController.transferenciaEntreMisCuentasForm(data);
    }

    async transferenciaRegistrada(data) {
        await transferenciaRegistradaController.transferenciaRegistradaForm(data);
    }

    async transferenciaEventuales(data) {
        await transferenciaEventualesController.transferenciaEventualForm(data);
    }

    async transferenciaAlExterior(data) {
        await transferenciaExteriorController.transferenciaAlExteriorForm(data);
    }
}

export default new TransferenciasNavigation();
