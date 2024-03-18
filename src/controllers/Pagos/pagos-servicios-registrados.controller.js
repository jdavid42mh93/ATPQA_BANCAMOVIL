import { editEntry } from "../../helpers/fileEditor.helper";
import { files, dataConditions, dataInstructions, dataStatus } from "../../constants/_data_generation";
import { pagosServiciosRegistradosSelectores } from "../../constants/pagos/pagosServiciosRegistrados";
import { UIAutomatorSelectores, buttons, buttonsSelectores, mensajes, opciones } from "../../constants/common";
import CommonsPagos from "../../page-objects/android/navigation/Pagos/CommonsPagos";
import MenuNavigation from "../../page-objects/android/navigation/MenuNavigation";
import CommonActions from "../../page-objects/android/common-actions/CommonActions";

// Seccion de pagos de servicios registrados del usuario
class PagosServiciosRegistrados {
// Funciones para obtener los selectores de pagos de servicios registrados
    get getBeneficiarioSelector() {
        return $(pagosServiciosRegistradosSelectores.beneficiario)
    }

    async seleccionarBeneficiario(beneficiario) {
        await $(pagosServiciosRegistradosSelectores.beneficiarioOpcion(beneficiario)).waitForDisplayed();
        await $(pagosServiciosRegistradosSelectores.beneficiarioOpcion(beneficiario)).click();
    }

// Funcion para ingresr los datos de la transferencia en el formulario
    async pagosServiciosRegistradosForm(elemento){
        try{
            // Seleccionar el grupo de servicio
            await CommonsPagos.getGruposServicioSelector.waitForDisplayed();
            await CommonsPagos.getGruposServicioSelector.click();
            // Seleccionar grupo de servicio opcion
            await CommonsPagos.seleccionarGrupoServicio(elemento.grupo_servicios);

            // Seleccionar el servicio
            await CommonsPagos.getServicioSelector.waitForDisplayed();
            await CommonsPagos.getServicioSelector.click();
            // Seleccionar servicio opcion
            await $(UIAutomatorSelectores.scrollTextIntoView(elemento.servicio));
            await CommonsPagos.seleccionarServicio(elemento.servicio);
            
            // Seleccionar beneficiario
            await this.getBeneficiarioSelector.waitForDisplayed();
            await this.getBeneficiarioSelector.click();
            // Seleccionar beneficiario opcion
            await this.seleccionarBeneficiario(elemento.beneficiario);

            if(CommonActions.mensajeError(mensajes.mensajeDocumentoPagado)){
                await $(buttonsSelectores.button(buttons.Ok)).click();
            }

            // Temporal: se despliega el menu lateral y se redirige a seccion de pagos
            await MenuNavigation.getToogleMenuSelector.waitForDisplayed({timeout: 20000});
            await MenuNavigation.getToogleMenuSelector.click();
            // Seleccionar opcion de menu lateral
            await MenuNavigation.seleccionarOpcionMenuLateral(opciones.Resumen);

           // Editar registro en archivo data.txt
            editEntry(files.data,    
                [dataConditions.caseIs(elemento.case)],
                [dataInstructions.assignStatus(dataStatus.active)]);
        }catch(error){
            console.error('Error en ingresar datos en pagos de servicios registrados', error);
        }
    }
}

export default new PagosServiciosRegistrados ();