import transferenciaExteriorController from "../../../../controllers/Transferencias/transferencia-exterior.controller";
import transferenciaEntreCuentasController from "../../../../controllers/Transferencias/transferencia-entre-cuentas.controller";
import { transferenciaSelectores } from "../../../../constants/transferencia/transferenciaSelectores";
import { datosGenerales } from "../../../../constants/common";

// Seccion de Pagos que contiene los disntintos tipos de transferencias
class CommonsTransferencias{
// Funciones para obtener los selectores de descripcion y monto
    get getTransferenciaMontoSelector() {
        return $(transferenciaSelectores.monto);
    };

    get getTransferenciaDescripcionSelector() {
        return $(transferenciaSelectores.descripcion);
    };

// Funciones para ingresra monto y descripcion en el formulario
    async ingresarMonto(){
        console.log("Funcion ingresar Monto");
        await this.getTransferenciaMontoSelector.click();
        await this.getTransferenciaMontoSelector.addValue(datosGenerales.monto);
        await driver.hideKeyboard();
    };

    async ingresarDescripcion(){
        console.log("Funcion ingresar Descripcion");
        await this.getTransferenciaDescripcionSelector.click();
        await this.getTransferenciaDescripcionSelector.addValue(datosGenerales.descripcion);
        await driver.hideKeyboard();
    };
};

export default new CommonsTransferencias();
