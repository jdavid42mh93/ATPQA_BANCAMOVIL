import transferenciaExteriorController from "../../../../controllers/Transferencias/transferencia-exterior.controller";
import transferenciaEntreCuentasController from "../../../../controllers/Transferencias/transferencia-entre-cuentas.controller";

// Funciones para navegar entrelos distintos tipos de transferencias
class TransferenciasNavigation{
    async transferenciaEntreMisCuentas() {
        await transferenciaEntreCuentasController.transferenciaEntreMisCuentasForm();
    };

    async transferenciaAlExterior() {
        await transferenciaExteriorController.transferenciaCuentaExteriorForm();
    };
};

export default new TransferenciasNavigation();
