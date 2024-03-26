import programacionController from "../controllers/Programacion/programacion.controller";

export const splitDate = (date) => {
    let result1 = date.split(",");
    let result2 = result1[1].trim();
    let result3 = result2.split(" ");
    return result3[0];
};

export const validateMonth = async (date) => {
    let month = splitDate(date);
    console.log("Month =====>", month)
    let monthSelectorPromise = programacionController.getMesSelector.getText();
    console.log("Month Selector Promise =====>", monthSelectorPromise);
    try {
        let monthSelector = await monthSelectorPromise;
        console.log("Month Selector Text =====>", monthSelector);
        if(monthSelector.includes(month)){
            return true;
        }else{
            return false;
        }
    } catch (error) {
        console.error("Error:", error);
        return false
    }
};