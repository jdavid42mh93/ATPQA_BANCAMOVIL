import { summarySelectors } from "../../../../constants/common";

// Seccion Posicion Consolidada
class ConsolidatePositionScreen{
    get getVerMas(){
        return $(summarySelectors.consolidatePosition);
    }

    async consolidatePosition(){
        await expect(summarySelectors.consolidatePosition).isDisplayed;
        await this.getVerMas.click();
    }
}

export default new ConsolidatePositionScreen();