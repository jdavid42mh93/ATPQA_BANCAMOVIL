import { summarySelectors } from "../../../../constants/common";

// Seccion Posicion Consolidada
class ConsolidatePositionScreen{
    get getViewMore(){
        return $(summarySelectors.consolidatePosition);
    }

    async consolidatePosition(){
        await expect(summarySelectors.consolidatePosition).isDisplayed;
        await this.getViewMore.click();
    }
}

export default new ConsolidatePositionScreen();