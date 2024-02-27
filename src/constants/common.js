// Selectores generales
export const androidWidgetSelector =   '//android.widget.';
export const androidViewSelector =     '//android.view.';
export const beginSelector =           '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup';
export const endSelector =             'android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText';

// Selectores para distintas clases
export const buttonClass =             `${androidWidgetSelector}Button`;
export const textViewClass =           `${androidWidgetSelector}TextView`;
export const checkedTextViewClass =    `${androidWidgetSelector}CheckedTextView`;
export const scrollViewClass =         `${androidWidgetSelector}ScrollView`;
export const editTextClass =           `${androidWidgetSelector}EditText`;

export const datosGenerales = {
    monto: '10',
    descripcion: 'atp qa',
}

// Selectores UIAutomator
export const UIAutomatorSelectores = {
    scrollToEnd:        'android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,20)',
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
    'ingresar':     `${buttonClass}[@text="Ingresar"]`,
    'omitir':       `${buttonClass}[@text="Omitir"]`,
    'toggleButton': `${androidViewSelector}ViewGroup[@resource-id="com.fisa.omnia.mobile.baninterv404:id/drawer_layout_toolbar"]/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.ImageView`,
    'continuar':    `${buttonClass}[@text="Continuar"]`,
    'finalizar':    `${buttonClass}[@text="Finalizar"]`,
    'comprobante':  `${buttonClass}[@text="Compartir comprobante"]`,
    'cancelar':     `${buttonClass}[@text="Cancel"]`,
};