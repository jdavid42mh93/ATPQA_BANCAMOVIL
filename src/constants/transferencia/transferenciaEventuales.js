import { checkedTextViewClass, textViewClass, scrollViewClass } from "../common";

export const transferenciaEventualesSelectores = {
    'insitucionBancaria':       `${textViewClass}[@text="BANCO INTERNACIONAL"]`,
    'numeroCuentaBeneficiaria': `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[5]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
    'tipoCuenta':               `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[6]/android.widget.TextView[1]`,
    'tipoIdentificacion':       `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[7]/android.widget.TextView[1]`,
    'numeroIdentificacion':     `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[4]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
    'nombreBeneficiario':       `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[5]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
    'correoElectronico':        `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[6]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
    'descripcion':              `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[7]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
    'monto':                    `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[8]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
};

export const institucionBancariaSelectores = {
    'institucionBancariaOpcion':        (data) => `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="${data}"]`,
};

export const tipoCuentaOpcionSelectores = {
    'tipoCuentaOpcion':   (data) => `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="${data}"]`,
};

export const tipoDocumentoOpcionSelectores = {
    'tipoDocumentoOpcion':    (data) => `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="${data}"]`,   
};

export const tipoCuenta = {
    'cuentaCorriente':  'CUENTA CORRIENTE',
    'cuentaAhorros':    'CUENTA DE AHORROS',  
};

export const tipoDocumento = {
    'CI':           'CEDULA',
    'PASAPORTE':    'PASAPORTE',
    'RUC':          'RUC',
};