import { paymentsSelectors } from "../../../../constants/common";

// Seccion de Pagos
class PaymentsScreen{
    get getPaymentSection() {
        return $(paymentsSelectors.pagos);
    }

    async paymentsSection(){
        await this.getPaymentSection.click();
    }
}

export default new PaymentsScreen();
