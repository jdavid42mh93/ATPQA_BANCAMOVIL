import { CommonActions } from "../page-objects/android/common-actions/CommonActions";

async function loginBeforeSuite() {
    await driver.pause(5000);
    await CommonActions.navigateToInitSession();
    await driver.pause(10000);
    await CommonActions.login();
    await driver.pause(20000);
}

export default {
    loginBeforeSuite
};