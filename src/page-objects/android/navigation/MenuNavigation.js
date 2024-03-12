import { buttonsSelectores } from "../../../constants/common";
import TransferenciasScreen from "../../../page-objects/android/navigation/Transferencias/TransferenciasScreen";
import LoginScreen from "./LoginScreen";
import PosicionConsolidadaScreen from "./PosConsolidada/PosicionConsolidadaScreen";
import PagosScreen from "./Pagos/PagosScreen";
import CertificadosScreen from "./Certificados/CertificadosScreen";

// Clase: Navigacion entre el menu
class MenuNavigation{
// Funcion para obtener el selector del menu lateral
    get getToogleMenuSelector(){
        return $(buttonsSelectores.toggleButton);
    }

// Funcion para navegar a la seccion de inicio de sesion
    async navegarAInicioSesion(){
        try{
            // await LoginScreen.getInitSessionSelector.waitForDisplayed({timeout:6000,timeoutMsg:`El elemento ${LoginScreen.getInitSessionSelector} no esta visible despues de 5 segundos`});
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
}

export default new MenuNavigation();
