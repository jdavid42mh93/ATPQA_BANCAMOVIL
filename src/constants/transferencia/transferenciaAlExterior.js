import { scrollViewClass, checkedTextViewClass, textViewClass } from "../common";

export const transferenciaAlExteriorSelectores = {
    'cuentaBeneficiariaExterior':   `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[5]/android.widget.TextView[1]`,
    'monto':                        `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
    'motivoEconomico':              `${textViewClass}[@text="Motivo Económico"]`,
    'referencia':                   `${textViewClass}[@text="Referencia"]`,
    'Monto':                        `${textViewClass}[@text="Monto"]`,
    'gastosExterior':               `${textViewClass}[@text="Gastos del exterior por Cuenta del Beneficiario"]`,
};

export const constTransferenciasAlExterior = {
    'MotivoEconomico':      'Motivo Económico',
    'Monto':                'Monto',
    'Referencia':           'Referencia',
}

export const motivoEconomicoOpcionSelectores = {
    'motivoEconomicoOpcion':     (data) => `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="${data}"]`,
};

export const cuentasBeneficiariasOpcionSelectores = {
    'cuentaBeneficiariaOpcion':     (data) => `${textViewClass}[@text="${data}"]`,
};

export const gastoExteriorOpcionSelectores = {
    'gastoExteriorOpcion':     (data) => `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="${data}"]`,
}