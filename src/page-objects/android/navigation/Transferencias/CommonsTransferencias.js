import { transferenciaSelectores } from "../../../../constants/transferencia/transferenciaSelectores";
import { datosGenerales } from "../../../../constants/common";

// Seccion de Pagos que contiene los disntintos tipos de transferencias
class CommonsTransferencias{
// Funciones para obtener los selectores de descripcion y monto
    get getMontoSelector() {
        return $(transferenciaSelectores.monto);
    }

    get getDescripcionSelector() {
        return $(transferenciaSelectores.descripcion);
    }

// Funciones para ingresra monto y descripcion en el formulario
    async ingresarDescripcion(){
        await this.getDescripcionSelector.click();
        await this.getDescripcionSelector.addValue(datosGenerales.descripcion);
        await driver.hideKeyboard();
    }

    async ingresarMonto(){
        await this.getMontoSelector.click();
        await this.getMontoSelector.addValue(datosGenerales.monto);
        await driver.hideKeyboard();
    }
}

export default new CommonsTransferencias();
