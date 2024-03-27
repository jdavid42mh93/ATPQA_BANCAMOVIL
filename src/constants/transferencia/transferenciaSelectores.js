import { textViewClass, scrollViewClass, editTextClass } from "../common" 
// Selectores para la seccion de transferencias
export const transferenciaSelectores = {
    'transferencias':       `${textViewClass}[@text=" Transferir   "]`,
    'institucionFinanciera':`${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[2]`,
    'descripcion':          `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[5]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
    'monto':                `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[6]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
    'cuentaBeneficiaria':   `${editTextClass}[@text="630709065-CUENTA DE AHORROS"]`,
};

export const labels = {
    'Monto':                'Monto',
    'Descripcion':          'Descripción',
}

export const transferenciaOpcion = {
    'entreMisCuentas':      'Entre Mis Cuentas',
    'registradas':          'Registradas',
    'eventuales':           'Eventuales',
    'alExterior':           'Al Exterior',
    'otrasCuentas':         'Otras Cuentas',
}