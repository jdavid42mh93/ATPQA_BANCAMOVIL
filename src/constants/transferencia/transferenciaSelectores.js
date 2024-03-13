import { textViewClass, scrollViewClass, editTextClass } from "../common" 
// Selectores para la seccion de transferencias
export const transferenciaSelectores = {
    'transferencias':       `${textViewClass}[@text=" Transferir   "]`,
    'mensajeConfirmacion':  `${textViewClass}[@text="Tu transacción se realizó con éxito"]`,
    'institucionFinanciera':`${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[2]`,
    'descripcion':          `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[5]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
    'monto':                `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[6]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
    'cuentaDebito':         `${editTextClass}[@text="118043573-CUENTA DE AHORROS"]`,
    'cuentaBeneficiaria':   `${editTextClass}[@text="630709065-CUENTA DE AHORROS"]`,
    'transferenciaOpcion':  (data) => `${textViewClass}[@text="${data}"]`,
    'mensaje':              (data) => `${textViewClass}[@text="${data}"]`,
};

export const constTransferencias = {
    'Monto':                'Monto',
    'Descripcion':          'Descripción',
}

export const transferenciaOpcion = {
    'entreMisCuentas':      'Entre Mis Cuentas',
    'registradas':          'Registradas',
    'eventuales':           'Eventuales',
    'alExterior':           'Al Exterior',
}

export const mensajes = {
    'mensajeError':                 'Cuenta de débito y crédito no pueden ser la mismas',
    'mensajeFondosInsuficientes':   'La cuenta no dispone de los fondos para realizar su transacción',
}