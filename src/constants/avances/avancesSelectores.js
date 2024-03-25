import { checkedTextViewClass, compoundButtonClass, scrollViewClass, switchClass, textViewClass } from "../common";

export const avancesSelectores = {
    'tarjetaCredito':                 `${textViewClass}[@text="Seleccionar tarjeta de crédito"]`,
    'CVV':                            `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
    'avanceSolicitado':               `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[5]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
    'formaPago':                      `${textViewClass}[@text="Forma de Pago"]`,
    'plazo':                          `${textViewClass}[@text="Plazo"]`,
    'plazoOpcion':               (data) => `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="${data}"]`,
    'seleccionarBeneficiario':   (data) => `${compoundButtonClass}[@text="${data}"]`,
    'cuenta':                         `${textViewClass}[@text="Selecciona la cuenta"]`,
    'cuentaBeneficiarioOpcion':  (data) => `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="${data}"]`,
    'condicionesSwitch':              `${switchClass}[@text="OFF"]`,
    'descripcionAvance':              `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[8]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
    'cuentaRegistrada':               `${textViewClass}[@text="Selecciona"]`,
}

export const beneficiarioOpcion = {
    'MisCuentas':       'Mis Cuentas',
    'Registrado':       'Registrado',
    'Eventual':         'Eventual',
}

export const labels = {
    'Selecciona':           'Selecciona',
    'DescripcionAvance':    'Descripción del Avance',
    'Condiciones':          'Condiciones de Avance en Efectivo'
}

export const cuentaEventual = {
    'numeroCuentaBeneficiaria': `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
    'tipoCuenta':               `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.TextView[1]`,
    'nombreBeneficiario':       `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
    'tipoIdentificacion':       `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[5]/android.widget.TextView[1]`,
    'numeroIdentificacion':     `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[6]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
    'descripcionAvance':        `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[8]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
}