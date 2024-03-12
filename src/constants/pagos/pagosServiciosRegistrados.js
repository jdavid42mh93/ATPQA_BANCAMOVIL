import { checkedTextViewClass, scrollViewClass, textViewClass } from "../common";

export const pagosServiciosRegistradosSelectores = {
    'servicioOpcion':       (data) => `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="${data}"]`,
    'beneficiario':                   `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.TextView[1]`,
    'beneficiarioOpcion':   (data) => `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="${data}"]`,
    'mensaje':              (data) => `${textViewClass}[@text="${data}"]`,
    'tipoPago':                       `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[8]/android.widget.TextView[1]`,
    'tipoPagoOpcion':       (data) => `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="${data}"]`,
}

export const servicios = {
    'servicioAgua':     `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="SERVICIO BÁSICO AGUA"]`,
    'servicioLuz':      `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="SERVICIO BÁSICO LUZ"]`,
    'servicioTelefono': `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="SERVICIO BÁSICO TELÉFONO"]`,
    'registroCivil':    `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="REGISTRO CIVIL"]`,
    'casaComercial':    `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="CASAS COMERCIALES"]`,
}
export const mensajes = {
    'documentoPagado':  'Documento ya fue pagado'
}

export const opcionesPago = {
    'debitoCuenta':     'DÉBITO CUENTA',
    'tarjetaCredito':   'TARJETA CRÉDITO'
}

export const textos = {
    'tipoPago': 'Tipo de Pago',
}