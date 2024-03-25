import { checkedTextViewClass, editTextClass, scrollViewClass } from "../common";

export const recargasSelectores = {
    'numeroCelular':                `${editTextClass}`,
    'valorRecarga':                 `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[1]`,
    'valorRecargaOpcion':   (data) => `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="${data}"]`,
    'opcionPago':                   `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[5]/android.widget.TextView[1]`,
    'cuentaDebito':                 `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[6]/android.widget.TextView[1]`
}

export const servicios = {
    'CLARO':                    'CLARO',
    'RECARGA_CLARO':            'RECARGA CLARO - PAQUETE',
    'RECARGAS_CNT_PAQUETE':     'RECARGAS CNT PAQUETE',
    'RECARGAS_CNT_DTH':         'RECARGAS CNT - DTH',
    'CNT':                      'CNT',
    'RECARGAS_GOLTV':           'RECARGAS GOLTV',
    'MOVISTAR':                 'MOVISTAR',
    'RECARGA_TUENTI':           'RECARGA TUENTI',
}