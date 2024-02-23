import { textViewClass, scrollViewClass } from "../common"

// Selectores para la seccion de certificados
export const certificateSelectors = {
    'certificados':         `${textViewClass}[@text=" Certificado   "]`,
    'lenguajeEspanol':      `${textViewClass}[@text="Español"]`,
    'lenguajeIngles':       `${textViewClass}[@text="Inglés"]`,
    'seleccionarProducto':  `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup`,
    'receptor':             `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.FrameLayout[1]/android.view.ViewGroup`,
}