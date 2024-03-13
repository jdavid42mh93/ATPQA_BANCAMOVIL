import { pagosSelectors } from "../../../../constants/pagos/pagosSelectores";

// Seccion de Pagos
class PaymentsScreen{
    get getPagosSelector() {
        return $(pagosSelectors.pagos);
    }

    async paymentsSection(){
        (await this.getPagosSelector).waitUntil(async () => {
            return (await this.getPagosSelector).isDisplayed();
        });
        await expect(this.getPagosSelector).toBeExisting();
        await expect(this.getPagosSelector).toHaveText(expect.stringContaining('Pagos'));
        await this.getPagosSelector.click();
    }
}

export default new PaymentsScreen();
