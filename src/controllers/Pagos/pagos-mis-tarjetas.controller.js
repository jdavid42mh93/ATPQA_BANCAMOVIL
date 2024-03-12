import { editEntry } from "../../helpers/fileEditor.helper";
import { files, dataConditions, dataTypes, dataSubtypes, dataInstructions, dataStatus } from "../../constants/_data_generation";
import { pagosMisTarjetasSelectores, tarjetas } from "../../constants/pagos/pagosMisTarjetas";
import { datosGenerales } from "../../constants/common";

// Seccion de pagos de tarjetas propias del usuario
class PagosMisTarjetas {
// Funciones para obtener los selectores de pagos de tarjetas propias del usuario
    get getSeleccionarTarjetaSelector() {
        return $(pagosMisTarjetasSelectores.seleccionarTarjeta)
    }

    get getSeleccionarTarjetaOpcionSelector() {
        return $(tarjetas.tarjetaVisa1)
    }

    get getMontoSelector() {
        return $(pagosMisTarjetasSelectores.monto)
    }

// Funcion para ingresr los datos de la transferencia en el formulario
    async pagosMisTarjetasForm(data){
        try{
            let elemento;
            for (let i=0; i < data.length; i++){
                elemento = data[i];
            }
            // Seleccionar la tarjeta a pagar
            await this.getSeleccionarTarjetaSelector.waitForDisplayed({timeout:25000});
            await this.getSeleccionarTarjetaSelector.click();
            // Seleccionar opcion de tarjeta a pagar
            await this.getSeleccionarTarjetaOpcionSelector.waitForDisplayed();
            await this.getSeleccionarTarjetaOpcionSelector.click();

            // Ingresar Monto
            await this.getMontoSelector.waitForDisplayed();
            await this.getMontoSelector.click();
            await this.getMontoSelector.addValue(datosGenerales.monto);

            // Editar elemento
            editEntry(files.data,    
                [dataConditions.caseIs(elemento.case)],
                [dataInstructions.assignStatus(dataStatus.active)]);
        }catch(error){
            console.error('Error en ingresar datos en transferencias entre mis cuentas', error);
        }
    }
}

export default new PagosMisTarjetas ();