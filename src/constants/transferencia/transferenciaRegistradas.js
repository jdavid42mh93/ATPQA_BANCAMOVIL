import { checkedTextViewClass, scrollViewClass, textViewClass } from "../common";

export const transferenciaRegistradasSelectores = {
    'cuentaDebito':         `${textViewClass}[@text="110609286-CUENTA CORRIENTE"]`,
    'cuentaBeneficiaria':   `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[1]`,
    'descripcion':          `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[7]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
    'monto':                `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[8]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
};

export const cuentaDebitoOpcion = {
    'cuentaCorriente':      `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="110609286-CUENTA CORRIENTE"]`,
    'cuentaAhorros1':       `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="118043573-CUENTA DE AHORROS"]`,
    'cuentaAhorros2':       `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="630709065-CUENTA DE AHORROS"]`
};

export const cuentaBeneficiariaOpcion = {
    'contifico':    `${textViewClass}[@text="CONTIFICO"]`,
}