import MenuNavigation from "../navigation/MenuNavigation";
import LoginScreen from "../navigation/LoginScreen";
import LogoutScreen from "../navigation/LogoutScreen";
import ConsolidatePosition from "../navigation/PosConsolidada/PosConsolidadaScreen";
import PaymentsScreen from "../navigation/Pagos/PagosScreen";
import TransferScreen from "../navigation/Transferencias/TransferenciasScreen";
import CertificateScreen from "../navigation/Certificados/CertificadosScreen";

class CommonActions{
    async navigateToInitSession(){
        try{
            await MenuNavigation.getInitSession.click();
        }catch(error){
            console.error('Error navigating to init session', error);
        }   
    }
    
    async login(){
        try{
            await LoginScreen.login();
        }catch(error){
            console.error('Error in login screen', error);
        }
    }

    async navigateToCertificateSectiononsolidatePositionSection(){
        try{
            await ConsolidatePosition.consolidatePosition();
        }catch(error){
            console.error('Error viewing consolidate position section', error);
        }   
    }

    async navigateToPaymentsSection(){
        try{
            await PaymentsScreen.paymentsSection();
        }catch(error){
            console.error('Error navigating to payments section', error);
        }
    }

    async navigateToTransferSection(){
        try{
            await TransferScreen.transferenciaSeccion();
        }catch(error){
            console.error('Error navigating to transfer section', error);
        }
    }

    async navigateToCertificateSection(){
        try{
            await CertificateScreen.certificateSection();
        }catch(error){
            console.error('Error navigating to certificate section', error);
        }
    }

    async logout(){
        try{
            await LogoutScreen.logout();
        }catch(error){
            console.error('Error closing session', error);
        }
    }
};

export default new CommonActions();