import { scrollViewClass, textViewClass } from "../common";

export const transferenciaAlExteriorSelectores = {
    'beneficiario':                 `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[5]/android.widget.TextView[1]`,
    'monto':                        `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
    'gastosExterior':               `${textViewClass}[@text="Gastos del exterior por Cuenta del Beneficiario"]`,
};

export const labels = {
    'MotivoEconomico':      'Motivo Económico',
}