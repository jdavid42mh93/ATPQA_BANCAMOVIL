import { textViewClass, scrollViewClass } from "../common";

// Selectores para la seccion de pagos
export const pagosSelectors = {
    'pagos':                   `${textViewClass}[@text=" Pagos   "]`,
    'gruposServicio':          `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[1]`,
    'servicio':                `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.TextView[1]`,
    'tipoPago':                `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[10]/android.widget.TextView[1]`,
    'mensaje':                  (data) => `${textViewClass}[@text="${data}"]`,
    'tarjeta':                 `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[9]/android.widget.TextView[1]`,
    'cvv':                     `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[9]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
    'formaPago':               `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[10]/android.widget.TextView[1]`,
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
    'Diferido':     'DIFERIDO',
}
