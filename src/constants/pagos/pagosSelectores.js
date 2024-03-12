import { textViewClass, checkedTextViewClass, scrollViewClass } from "../common";

// Selectores para la seccion de pagos
export const pagosSelectors = {
    'pagos':                    `${textViewClass}[@text=" Pagos   "]`,
    'servicio':                 `${textViewClass}[@text="Servicio"]`,
    'gruposServicios':          `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[1]`,
    'pagoOpcion':               (data) => `${textViewClass}[@text="${data}"]`,
    'grupoServicioOpcion':      (data) => `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="${data}"]`,
    'servicio':                 `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.TextView[1]`,
};

export const pagosOpciones = {
    'serviciosRegistrados':     'Servicios Registrados',
    'serviciosEventuales':      'Servicios Eventuales',
    'misTarjetas':              'Mis Tarjetas',
    'tarjetasRegistradas':      'Tarjetas Registradas',
    'tarjetasEventuales':       'Tarjetas Eventuales',
}

export const serviciosOpciones = {
    'servicioAgua':     'SERVICIO BÁSICO AGUA',
    'servicioLuz':      'SERVICIO BÁSICO LUZ',
    'servicioTelefono': 'SERVICIO BÁSICO TELÉFONO',
    'registroCivil':    'REGISTRO CIVIL',
    'casaComercial':    'CASAS COMERCIALES'
}