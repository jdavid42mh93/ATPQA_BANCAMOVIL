import { textViewClass, scrollViewClass, checkedTextViewClass } from "../common";

export const transferenciaEntreMisCuentasSelectores = {
    'CuentaDebito':         `${textViewClass}[@text="110609286-CUENTA CORRIENTE"]`,
    'cuentaDebito':         `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.TextView[1]`,
    'cuentaCorriente':      `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="110609286-CUENTA CORRIENTE"]`,
    'cuentaAhorros1':       `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="118043573-CUENTA DE AHORROS"]`,
    'cuentaAhorros2':       `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="630709065-CUENTA DE AHORROS"]`,
    'cuentaBeneficiaria':   `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[4]/android.widget.TextView[1]`,
    'cuentaCorrienteDest':  `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="110609286-CUENTA CORRIENTE"]`,
    'cuentaAhorrosDest1':   `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="118043573-CUENTA DE AHORROS"]`,
    'cuentaAhorroProgDest': `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="420818482-CUENTA DE AHORRO PROGRAMADO"]`,
    'cuentaAhorrosDest2':   `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="630709065-CUENTA DE AHORROS"]`,
};