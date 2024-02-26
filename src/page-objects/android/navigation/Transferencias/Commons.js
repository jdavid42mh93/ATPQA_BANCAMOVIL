import transferenciaExteriorController from "../../../../controllers/Transferencias/transferencia-exterior.controller";

// Seccion de Pagos que contiene los disntintos tipos de transferencias
class CommonsTransferencias{
    async transferenciaAlExterior() {
        await transferenciaExteriorController.transferenciaCuentaExteriorForm();
    };
};

export default new CommonsTransferencias();
