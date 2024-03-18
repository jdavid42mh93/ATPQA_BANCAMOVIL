// Selectores generales
export const androidWidgetSelector =   '//android.widget.';
export const androidViewSelector =     '//android.view.ViewGroup';
export const beginSelector =           '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup';
export const endSelector =             'android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText';

// Selectores para distintas clases
export const buttonClass =             `${androidWidgetSelector}Button`;
export const textViewClass =           `${androidWidgetSelector}TextView`;
export const checkedTextViewClass =    `${androidWidgetSelector}CheckedTextView`;
export const scrollViewClass =         `${androidWidgetSelector}ScrollView`;
export const editTextClass =           `${androidWidgetSelector}EditText`;

export const datosGenerales = {
    monto:                  '10',
    descripcion:            'atp qa',
    nombreBeneficiario:     'atp qa',
    numeroIdentificacion:   '1722146485',
    numeroSuministro:       '7190431',
    cvv:                    '123',
}

// Selectores UIAutomator
export const UIAutomatorSelectores = {
    scrollToEnd:        'android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,30)',
    scrollIntoView:     (data) => `android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView("${data}")`,
    scrollTextIntoView: (data) => `android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${data}")`,
}

// Selectores para la session de login
export const loginSelectors = {
    'signIn':       `${textViewClass}[@text="Iniciar sesión"]`,
    'usuario':      `${beginSelector}/android.view.ViewGroup[1]/${endSelector}`,
    'contrasena':   `${beginSelector}/android.view.ViewGroup[2]/${endSelector}`,
};

// Selectores para Logout
export const logoutSelectors = {
    'salir':   `${textViewClass}[@text="Salir"]`,
};

// Selectores para la seccion de posicion consolidada
export const summarySelectors = {
    'consolidatePosition': `${textViewClass}[@text="Ver más"]`,
};

// Selectores para botones
export const buttonsSelectores = {
    'toggleButton': `${androidViewSelector}[@resource-id="com.fisa.omnia.mobile.baninterv404:id/drawer_layout_toolbar"]/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.ImageView`,
    'button':       (data) => `${buttonClass}[@text="${data}"]`
};

export const buttons = {
    'ingresar':             'Ingresar',
    'Omitir':               'Omitir',
    'Continuar':            'Continuar',
    'Finalizar':            'Finalizar',
    'CompartirComprobante': 'Compartir comprobante',
    'Cancelar':             'Cancel',
    'Cerrar':               'CERRAR',
    'Ok':                   'Ok',
}

export const commonsSelectores = {
    'mensaje':              (data) => `${textViewClass}[@text="${data}"]`,
    'cuentaDebito':                   `${textViewClass}[@text="110609286-CUENTA CORRIENTE"]`,
    'cuentaDebitoOpcion':   (data) => `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="${data}"]`,
}

export const mensajes = {
    'mensajeError':                 'Cuenta de débito y crédito no pueden ser la mismas',
    'mensajeFondosInsuficientes':   'La cuenta no dispone de los fondos para realizar su transacción',
    'mensajeDocumentoPagado':       'Documento ya fue pagado',
    'mensajeConfirmacion':          'Tu transacción se realizó con éxito',
    'pagoListo':                    '¡Tu pago está listo!',
    'registroNoEncontrado':         'Registro no encontrado, verifique datos ingresados. (8049)',
    'transaccionNoProcesada':       'Transacción no procesada, por favor intenta más tarde (6097)',
}

export const opcionesMenuLateral = {
    'opcion':   (data) => `${textViewClass}[@text="${data}"]`,
}

export const opciones = {
    'Pagos':            'Pagos',
    'Transferencias':   'Transferencias',
    'Resumen':          'Resumen',
}