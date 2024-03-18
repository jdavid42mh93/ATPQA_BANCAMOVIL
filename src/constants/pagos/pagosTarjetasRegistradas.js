import { scrollViewClass, textViewClass } from "../common";

export const pagosTarjetasRegistradasSelectores = {
    'beneficiario':                   `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[1]/android.widget.TextView[1]`,
    'beneficiarioOpcion':             (data) => `${textViewClass}[@text="${data}"]`,
    'montoAPagar':                    `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[1]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
    'descripcion':                    `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
}