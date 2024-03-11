import { checkedTextViewClass, scrollViewClass, textViewClass } from "../common";

export const pagosServiciosRegistradosSelectores = {
    'servicioOpcion':       (data) => `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="${data}"]`,
    'beneficiario':                   `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.TextView[1]`,
    'beneficiarioOpcion':   (data) => `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="${data}"]`,
    'mensajePagado':        (data) => `${textViewClass}[@text="${data}"]`,
    'tipoPago':                       `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[8]/android.widget.TextView[1]`
}

export const mensajes = {
    'documentoPagado':  'Documento ya fue pagado'
}

export const beneficiarioOpciones = {
    '': '',
}

export const opcionesPago = {
    'debitoCuenta':     'DÉBITO CUENTA',
    'tarjetaCredito':   'TARJETA CRÉDITO'
}