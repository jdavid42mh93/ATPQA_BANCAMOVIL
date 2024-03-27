import { buttonsSelectores, commonsSelectores } from "../../../constants/common";
import TransferenciasScreen from "../../../page-objects/android/navigation/Transferencias/TransferenciasScreen";
import LoginScreen from "./LoginScreen";
import PosicionConsolidadaScreen from "./PosConsolidada/PosicionConsolidadaScreen";
import PagosScreen from "./Pagos/PagosScreen";
import CertificadosScreen from "./Certificados/CertificadosScreen";
import AvancesNavigation from "./Avances/AvancesNavigation";
import RecargasNavigation from "./Recargas/RecargasNavigation";
import BeneficiariosNavigation from "./Beneficiarios/BeneficiariosNavigation";
import ProgramacionNavigation from "./Programacion/ProgramacionNavigation";

// Clase: Navigacion entre el menu
class MenuNavigation{
// Funcion para obtener el selector del menu lateral
    get getToogleMenuSelector(){
        return $(buttonsSelectores.toggleButton);
    }

// Funcion para navegar a la seccion de inicio de sesion
    async navegarAInicioSesion(){
        try{
            await LoginScreen.getInitSessionSelector.waitForDisplayed({timeout:20000});
            await LoginScreen.getInitSessionSelector.click();
        }catch(error){
            console.error('Error navegando al inicio de sesion', error);
        }   
    }

// Funcion para navegar a la seccion de posicion consolidada
    async navegarSeccionPosicionConsolidada(){
        try{
            await PosicionConsolidadaScreen.consolidatePosition();
        }catch(error){
            console.error('Error visitando la seccion de posicion consolidada', error);
        }   
    }

// Funcion para navegar a la seccion de pagos
    async navegarSeccionPagos(){
        try{
            await PagosScreen.paymentsSection();
        }catch(error){
            console.error('Error navegando a la seccion de pagos', error);
        }
    }

// Funcion para navegar a la seccion de transferencias
    async navegarSeccionTransferencia(){
        try{
            await TransferenciasScreen.transferenciaSeccion();
        }catch(error){
            console.error('Error navegando a la seccion de transferencias', error);
        }
    }

// Funcion para navegar a la seccion de certificados
    async navegarSeccionCertificados(){
        try{
            await CertificadosScreen.certificateSection();
        }catch(error){
            console.error('Error navegando a la seccion de certificados', error);
        }
    }

    async navegarSeccionAvanceEfectivo(){
        try{
            await AvancesNavigation.seleccionarAvanceEfectivo();
        }catch(error){
            console.error('Error navegando a la seccion de avance en efectivo', error)
        }
    }

    async navegarSeccionRecargaElectronica(){
        try{
            await RecargasNavigation.seleccionarRecargasElectronicas();
        }catch(error){
            console.error('Error navegando a la seccion de recargas electronicas', error)
        }
    }

    async navegarSeccionBeneficiarios(){
        try{
            await BeneficiariosNavigation.seleccionarBeneficiarios();
        }catch(error){
            console.error('Error navegando a la seccion de beneficiarios', error)
        }
    }

    async navegarSeccionProgramacion(){
        try{
            await ProgramacionNavigation.seleccionarProgramacion();
        }catch(error){
            console.error('Error navegando a la seccion de programacion', error)
        }
    }

// Funcion para seleccionar una opcion del menu lateral
    async seleccionarOpcionMenuLateral(opcion){
        await $(commonsSelectores.textOpcion(opcion)).click();
    }
}

export default new MenuNavigation();
