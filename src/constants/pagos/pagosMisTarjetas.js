import { checkedTextViewClass, scrollViewClass } from "../common"

export const pagosMisTarjetasSelectores = {
    'tarjeta':              `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[4]/android.widget.TextView[1]`,
    'monto':                `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[7]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
}

export const tarjetas = {
    'tarjetaOpcion': (data) => `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="${data}"]`,
}