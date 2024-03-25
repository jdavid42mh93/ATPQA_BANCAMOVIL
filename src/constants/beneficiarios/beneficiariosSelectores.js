import { checkedTextViewClass, scrollViewClass, textViewClass } from "../common";

export const beneficiarioSelectores = {
    'beneficiarioOpcion':   (data) => `${textViewClass}[@text="${data}"]`,
    'nuevoBeneficiario':    `//android.widget.LinearLayout[@resource-id="com.fisa.omnia.mobile.baninterv404:id/drawer_layout_container"]/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ImageView`,
    'institucionBancariaOpcion':    (data) => `${textViewClass}[@text="${data}"]`,
    'tipoCodigo':           `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.TextView[1]`,
    'tipoCodigoOpcion':     (data) => `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="${data}"]`,
    'codigoSwitft_ABA':     `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.TextView[1]`,
    'codigoOpcion':      (data) => `${textViewClass}[@text="${data}"]`, 
    'cuentaBeneficiario':               `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
    'nombreBeneficiario':               `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[3]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
    'direccionBeneficiario':            `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[4]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
    'paisDelBeneficiario':  `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[5]/android.widget.TextView[1]`,
    'paisDelBeneficiarioOpcion':    (data) => `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="${data}"]`,
    'ciudadDelBeneficiario':            `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[6]/android.widget.TextView[1]`,
    'ciudadDelBenerficiarioOpcion': (data) => `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="${data}"]`,
    'alias':                            `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[7]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
    'tipoCuenta':                       `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.TextView[1]`,
    'tipoIdentificacion':               `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[4]/android.widget.TextView[1]`,
    'numeroIdentificacion':             `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[5]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
    'numeroCuenta':                     `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[3]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
    'beneficiario':                     `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[6]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
}