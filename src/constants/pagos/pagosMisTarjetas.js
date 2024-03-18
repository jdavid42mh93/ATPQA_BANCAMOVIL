import { checkedTextViewClass, scrollViewClass, textViewClass } from "../common"

export const pagosMisTarjetasSelectores = {
    'cuentaDebito':         `${textViewClass}[@text="110609286-CUENTA CORRIENTE"]`,
    'tarjeta':              `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[4]/android.widget.TextView[1]`,
    'monto':                `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[7]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
    'cuentaDebitoOpcion':           (data) => `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="${data}"]`,
}

export const constMisTarjetas = {
    'monto':    'Monto a Pagar',
}

export const tarjetas = {
    'tarjetaOpcion': (data) => `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="${data}"]`,
}