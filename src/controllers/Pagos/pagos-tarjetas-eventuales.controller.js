import { editEntry } from "../../helpers/fileEditor.helper";
import { files, dataConditions, dataInstructions, dataStatus } from "../../constants/_data_generation";
import CommonActions from "../../page-objects/android/common-actions/CommonActions";
import CommonsPagos from "../../page-objects/android/navigation/Pagos/CommonsPagos";
import MenuNavigation from "../../page-objects/android/navigation/MenuNavigation";
import { UIAutomatorSelectores, datosGenerales, opciones } from "../../constants/common";
import { pagosTarjetasEventualesSelectores } from "../../constants/pagos/pagosTarjetasEventuales";

// Seccion de pagos de tarjetas eventuales del usuario
class PagosTarjetasEventuales {
// Funciones para obtener los selectores de pagos de tarjetas eventuales
    get getMontoSelector(){
        return $(pagosTarjetasEventualesSelectores.montoAPagar);
    }

    get getDescripcionSelector(){
        return $(pagosTarjetasEventualesSelectores.descripcion);
    }

    get getBeneficiarioSelector(){
        return $(pagosTarjetasEventualesSelectores.nombreBeneficiario);
    }

    get getInstitucionFinancieraSelector(){
        return $(pagosTarjetasEventualesSelectores.institucionFinanciera);
    }

    get getNumeroTarjetaSelector(){
        return $(pagosTarjetasEventualesSelectores.numeroTarjeta);
    }

    get getTipoIdentificacionSelector(){
        return $(pagosTarjetasEventualesSelectores.TipoIdentificacion);
    }

    get getNumeroIdentificacionSelector(){
        return $(pagosTarjetasEventualesSelectores.numeroIdentificacion);
    }

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

    async ingresarBeneficiario(){
        await this.getBeneficiarioSelector.waitForDisplayed();
        await this.getBeneficiarioSelector.click();
        await this.getBeneficiarioSelector.addValue(datosGenerales.nombreBeneficiario);
        await driver.hideKeyboard();
    }

    async seleccionarInstitucionFinanciera(institucionFinanciera){
        await $(pagosTarjetasEventualesSelectores.institucionFinancieraOpcion(institucionFinanciera)).waitForDisplayed();
        await $(pagosTarjetasEventualesSelectores.institucionFinancieraOpcion(institucionFinanciera)).click();
    }

    async selectionTipoIdentificacion(tipoIdentificacion){
        await $(pagosTarjetasEventualesSelectores.tipoIdentificacionOpcion(tipoIdentificacion)).waitForDisplayed();
        await $(pagosTarjetasEventualesSelectores.tipoIdentificacionOpcion(tipoIdentificacion)).click();
    }

// Funcion para ingresr los datos pagos de tarjetas eventuales en el formulario
    async pagosTarjetasEventualesForm(elemento){
        try{
            // Seleccionar la cuenta de debito
            await CommonsPagos.getCuentaDebitoSelector.waitForDisplayed({timeout:30000});
            await CommonsPagos.getCuentaDebitoSelector.click();
            // Seleccionar la opcion de cuenta de debito
            await CommonsPagos.seleccionarCuentaDebito(elemento.cuenta_debito);

            // Ingresar Descripcion y Monto
            await this.ingresarMonto();
            await this.ingresarDescripcion();
            
            // Seleccionar institucion financiera
            await this.getInstitucionFinancieraSelector.waitForDisplayed({timeout:30000});
            await this.getInstitucionFinancieraSelector.doubleClick();
            // Seleccionar institucion financiera opcion
            await $(UIAutomatorSelectores.scrollTextIntoView(elemento.institucion_financiera));
            await this.seleccionarInstitucionFinanciera(elemento.institucion_financiera);

            // Ingresar numero de tarjeta
            await this.getNumeroTarjetaSelector.addValue(elemento.numero_tarjeta);

            await $(UIAutomatorSelectores.scrollToEnd);  // Scroll hasta el final

            // Ingresar nombre de beneficiario
            await this.ingresarBeneficiario();

            // Seleccionar tipo de identificacion
            await this.getTipoIdentificacionSelector.waitForDisplayed({timeout:30000});
            await this.getTipoIdentificacionSelector.doubleClick();
            // Seleccionar tipo de identificacion opcion
            await this.selectionTipoIdentificacion(elemento.tipo_documento);

            // Ingresar numero de identificacion
            await this.getNumeroIdentificacionSelector.addValue(elemento.numero_identificacion);

            // Click en boton Continuar
            await CommonActions.clickBtnContinuar();
            // if (CommonActions.mensajeError(mensajes.mensajeFondosInsuficientes)){
            //     // Visualizar mensaje de error
            //     await $(buttonsSelectores.button(buttons.Ok)).click();

            //     // Editar registro en archivo data.txt
            //     editEntry(files.data,    
            //         [dataConditions.caseIs(elemento.case)],
            //         [dataInstructions.assignStatus(dataStatus.canceled)]);
            // } else {
            //     // Click en boton Continuar
            //     await CommonActions.clickBtnContinuar();

            //     // Click en boton Cerrar
            //     await CommonActions.clickBtnCerrar();
                
            //     // Editar registro en archivo data.txt
            //     editEntry(files.data,    
            //         [dataConditions.caseIs(elemento.case)],
            //         [dataInstructions.assignStatus(dataStatus.active)]);
    
            //     // Temporal: se despliega el menu lateral y se redirige a seccion de pagos
            //     await MenuNavigation.getToogleMenuSelector.waitForDisplayed({timeout: 20000});
            //     await MenuNavigation.getToogleMenuSelector.click();
            //     // Seleccionar opcion de menu lateral
            //     await MenuNavigation.seleccionarOpcionMenuLateral(opciones.Resumen);
            // }
            // Click en boton Continuar
            await CommonActions.clickBtnContinuar();

            // Click en boton Cerrar
            await CommonActions.clickBtnCerrar();
            
            // Editar registro en archivo data.txt
            editEntry(files.data,    
                [dataConditions.caseIs(elemento.case)],
                [dataInstructions.assignStatus(dataStatus.active)]);

            // Temporal: se despliega el menu lateral y se redirige a seccion de pagos
            await MenuNavigation.getToogleMenuSelector.waitForDisplayed({timeout: 20000});
            await MenuNavigation.getToogleMenuSelector.click();
            // Seleccionar opcion de menu lateral
            await MenuNavigation.seleccionarOpcionMenuLateral(opciones.Resumen);
        }catch(error){
            console.error('Error en ingresar datos en pagos de tarjetas eventuales', error);
        }
    }
}

export default new PagosTarjetasEventuales ();