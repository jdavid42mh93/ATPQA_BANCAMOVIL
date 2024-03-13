import { textViewClass, scrollViewClass, checkedTextViewClass } from "../common";

export const transferenciaEntreMisCuentasSelectores = {
    'cuentaDebito':                 `${textViewClass}[@text="110609286-CUENTA CORRIENTE"]`,
    'cuentaBeneficiaria':           `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[4]/android.widget.TextView[1]`,
    'cuentaDebitoOpcion':           (data) => `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="${data}"]`,
    'cuentaBeneficiariaOpcion':     (data) => `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="${data}"]`,
};