import { checkedTextViewClass, scrollViewClass } from "../common";

export const pagosServiciosRegistradosSelectores = {
    'beneficiario':                   `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.TextView[1]`,
    'beneficiarioOpcion':   (data) => `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="${data}"]`,
}