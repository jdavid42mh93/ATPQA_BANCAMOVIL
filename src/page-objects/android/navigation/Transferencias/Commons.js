import transferenciaExteriorController from "../../../../controllers/Transferencias/transferencia-exterior.controller";

// Seccion de Pagos
class CommonsTransferencias{
    async transferenciaAlExterior() {
        await transferenciaExteriorController.transferenciaCuentaExteriorForm();
    };
};

export default new CommonsTransferencias();
