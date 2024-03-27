import { scrollViewClass, textViewClass } from "../common";

export const pagosTarjetasEventualesSelectores = {
    'montoAPagar':                            `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[1]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
    'descripcion':                            `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
    'institucionFinanciera':                  `//android.widget.TextView[@text="VISA/MASTERCARD BCO INTERNACIONAL"]`,
    'numeroTarjeta':                          `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[2]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
    'nombreBeneficiario':                     `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[3]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
    'TipoIdentificacion':                     `${textViewClass}[@text="Tipo de Identificación"]`,
    'numeroIdentificacion':                   `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[5]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
}

export const labels ={
    'correoElectronico':        'Correo Electrónico',
    'numeroTarjeta':            'Número de Tarjeta',
    'nombreBeneficiario':       'Nombre del Beneficiario',

}