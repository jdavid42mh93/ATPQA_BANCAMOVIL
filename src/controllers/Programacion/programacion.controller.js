import { programacionSelectores } from "../../constants/programacion/programacionSelectores";
import { validateMonth } from "../../helpers/calendar.helper";
import CommonActions from "../../page-objects/android/common-actions/CommonActions";

class Programacion {
    get getNuevaProgramacionSelector(){
        return $(programacionSelectores.nuevaProgramacion);
    }

    get getFechaInicioSelector(){
        return $(programacionSelectores.fechaInicio);
    }

    get getEditarFechaSelector(){
        return $(programacionSelectores.editarFecha);
    }

    get getFechaFinSelector(){
        return $(programacionSelectores.fechaFin);
    }

    get getDiaPagoSelector(){
        return $(programacionSelectores.diaPago);
    }

    get getFechaSelector(){
        return $(programacionSelectores.fecha);
    }

    get getFechaVaciaSelector(){
        return $(programacionSelectores.fechaVacia);
    }

    get getBuscarMesSelector(){
        return $(programacionSelectores.buscarMes);
    }

    get getMesSelector(){
        return $(programacionSelectores.mes);
    }

    async seleccionarDia(dia){
        await $(programacionSelectores.dia(dia)).click();
    }

    async ingresarDiaPago(diaPago){
        await this.getDiaPagoSelector.doubleClick();
        await this.getDiaPagoSelector.addValue(diaPago);
        await driver.hideKeyboard();
    }

    async clickBtnNuevaProgramacion(){
        await this.getNuevaProgramacionSelector.waitForDisplayed({timeout:30000});
        await this.getNuevaProgramacionSelector.click();
    }
    
    async seleccionarTipoProgramacion(tipoProgramacion){
        await CommonActions.getTextOpcion(tipoProgramacion);
    }

    async buscarFecha(fecha){
        let validateFecha = false;
        // Ingresar fecha de inicio
        while (!validateFecha) {
            try {
                validateFecha = await validateMonth(fecha);
                console.log("Validate Fecha Inicio =====>", validateFecha);
                if (!validateFecha) {
                    await this.getBuscarMesSelector.click();
                }
            } catch (error) {
                console.error("Error:", error);
                break;
            }
        }
    }
}

export default new Programacion();