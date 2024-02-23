import { textViewClass, checkedTextViewClass } from "../common";

// Selectores para la seccion de pagos
export const paymentsSelectors = {
    'pagos':                  `${textViewClass}[@text=" Pagos   "]`,
    'serviciosRegistrados':   `${textViewClass}[@text="Servicios Registrados"]`,
    'gruposServicios':        `${textViewClass}[@text="Grupo de Servicio"]`,
    'servicioAgua':           `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="SERVICIO BÁSICO AGUA"]`
};