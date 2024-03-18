import { textViewClass, checkedTextViewClass, scrollViewClass } from "../common";

// Selectores para la seccion de pagos
export const pagosSelectors = {
    'pagos':                   `${textViewClass}[@text=" Pagos   "]`,
    'pagoOpcion':               (data) => `${textViewClass}[@text="${data}"]`,
    'gruposServicio':          `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[1]`,
    'grupoServicioOpcion':      (data) => `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="${data}"]`,
    'servicio':                `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.TextView[1]`,
    'servicioOpcion':           (data) => `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="${data}"]`,  
    'tipoPago':                `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[10]/android.widget.TextView[1]`,
    'tipoPagoOpcion':           (data) => `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="${data}"]`,
    'mensaje':                  (data) => `${textViewClass}[@text="${data}"]`,
    'tarjeta':                 `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[9]/android.widget.TextView[1]`,
    'tarjetaOpcion':            (data) => `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="${data}"]`,
    'cvv':                     `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[9]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
    'formaPago':               `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[10]/android.widget.TextView[1]`,
    'formaPagoOpcion':          (data) => `//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="${data}"]`,
};

export const pagosOpciones = {
    'serviciosRegistrados':     'Servicios Registrados',
    'serviciosEventuales':      'Servicios Eventuales',
    'misTarjetas':              'Mis Tarjetas',
    'tarjetasRegistradas':      'Tarjetas Registradas',
    'tarjetasEventuales':       'Tarjetas Eventuales',
}

export const labels = {
    'tipoPago': 'Tipo de Pago',
}

export const mensajes = {
    'documentoPagado':  'Documento ya fue pagado'
}

export const opcionesTipoPago = {
    'debitoCuenta':     'DÉBITO CUENTA',
    'tarjetaCredito':   'TARJETA CRÉDITO'
}

export const formaPago = {
    'Corriente':    'CORRIENTE',
}
