import { textViewClass, checkedTextViewClass } from "../common";

// Selectores para la seccion de pagos
export const pagosSelectors = {
    'pagos':                    `${textViewClass}[@text=" Pagos   "]`,
    'servicio':                 `${textViewClass}[@text="Servicio"]`,
    'gruposServicios':          `${textViewClass}[@text="Grupo de Servicio"]`,
    'pagoOpcion':               (data) => `${textViewClass}[@text="${data}"]`,
    'grupoServicioOpcion':      (data) => `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="${data}"]`,
    'servicioOpcion':           (data) => `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="${data}"]`,
};

export const pagosOpciones = {
    'serviciosRegistrados':     'Servicios Registrados',
    'serviciosEventuales':      'Servicios Eventuales',
    'misTarjetas':              'Mis Tarjetas',
    'tarjetasRegistradas':      'Tarjetas Registradas',
    'tarjetasEventuales':       'Tarjetas Eventuales',
}