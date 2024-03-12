import { checkedTextViewClass, scrollViewClass } from "../common"

export const pagosMisTarjetasSelectores = {
    'seleccionarTarjeta':   `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[4]/android.widget.TextView[1]`,
    'monto':                `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[7]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
}

export const constMisTarjetas = {
    'monto':    'Monto a Pagar',
}

export const tarjetas = {
    'tarjetaVisa1': `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="VISA 421907XXXXXX0018"]`,
    'tarjetaVisa2': `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="VISA 421907XXXXXX0026"]`,
}