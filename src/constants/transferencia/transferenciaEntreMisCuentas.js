import { scrollViewClass, checkedTextViewClass } from "../common";

export const transferenciaEntreMisCuentasSelectores = {
    'cuentaBeneficiaria':           `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[4]/android.widget.TextView[1]`,
    'cuentaBeneficiariaOpcion':     (data) => `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="${data}"]`,
};