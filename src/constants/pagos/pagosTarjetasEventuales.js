import { checkedTextViewClass, scrollViewClass, textViewClass } from "../common";

export const pagosTarjetasEventualesSelectores = {
    'montoAPagar':                            `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[1]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
    'descripcion':                            `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
    'institucionFinanciera':                  `//android.widget.TextView[@text="VISA/MASTERCARD BCO INTERNACIONAL"]`,
    'institucionFinancieraOpcion':  (data) => `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="${data}"]`,
    'numeroTarjeta':                          `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[2]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
    'nombreBeneficiario':                     `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[3]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
    'tipoIdentificacion':                     `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[4]/android.widget.TextView[1]`,
    'tipoIdentificacionOpcion':     (data) => `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="${data}"]`,
    'numeroIdentificacion':                   `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[5]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
}

export const labels ={
    'correoElectronico':        'Correo Electrónico',
    'numeroTarjeta':            'Número de Tarjeta',
    'nombreBeneficiario':       'Nombre del Beneficiario',

}