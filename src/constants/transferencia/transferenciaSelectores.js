import { textViewClass, checkedTextViewClass, scrollViewClass, editTextClass } from "../common" 
// Selectores para la seccion de transferencias
export const transferenciaSelectores = {
    'transferencias':       `${textViewClass}[@text=" Transferir   "]`,
    'misCuentas':           `${textViewClass}[@text="Entre Mis Cuentas"]`,
    'registradas':          `${textViewClass}[@text="Registradas"]`,
    'eventuales':           `${textViewClass}[@text="Eventuales"]"]`,
    'extranjero':           `${textViewClass}[@text="Al Exterior"]`,
    'cuentaDebito':         `${textViewClass}[@text="110609286-CUENTA CORRIENTE"]`,
    'mensajeConfirmacion':  `${textViewClass}[@text="Tu transacción se realizó con éxito"]`,
    'cuentaCorriente':      `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="110609286-CUENTA CORRIENTE"]`,
    'cuentaAhorros1':       `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="118043573-CUENTA DE AHORROS"]`,
    'cuentaAhorros2':       `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="630709065-CUENTA DE AHORROS"]`,
    'cuentaCorrienteDest':  `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="110609286-CUENTA CORRIENTE"]`,
    'cuentaAhorrosDest1':   `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="118043573-CUENTA DE AHORROS"]`,
    'cuentaAhorroProgDest': `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="420818482-CUENTA DE AHORRO PROGRAMADO"]`,
    'cuentaAhorrosDest2':   `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="630709065-CUENTA DE AHORROS"]`,
    'cuentaBeneficiaria':   `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[4]/android.widget.TextView[1]`,
    'institucionFinanciera':`${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[2]`,
    'descripcion':          `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[5]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
    'monto':                `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[6]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
    'cuentaDebito':         `${editTextClass}[@text="118043573-CUENTA DE AHORROS"]`,
    'cuentaBeneficiaria':   `${editTextClass}[@text="630709065-CUENTA DE AHORROS"]`,
};

export const transferenciaAlExteriorSelectores = {
    'cuentaBeneficiariaExterior':   `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[5]/android.widget.TextView[1]`,
    'montoExterior':                `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
    'motivoEconomico':              `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[1]`,
    'referencia':                   `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[1]`,
};

export const transferenciaEventualesSelectores = {

};

export const transferenciaRegistradasSelectores = {

};

// Selectores para instituciones bancarias
export const institucionesBancariasSelectores = {
    'bancoAmazonas':        `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="BANCO AMAZONAS"]`,
    'bancoAustro':          `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="BANCO DEL AUSTRO"]`,
    'bancoGuayaquil':       `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="BANCO DE GUAYAQUIL"]`,
    'bancoBolivariano':     `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="BANCO BOLIVARIANO"]`,
    'bancoManabi':          `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="BANCO COMERCIAL DE MANABÍ"]`,
    'bancoLitoral':         `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="BANCO DEL LITORAL"]`,
    'bancoRuminahui':       `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="BANCO RUMIÑAHUI"]`,
    'bancoLoja':            `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="BANCO DE LOJA"]`,
    'bancoMachala':         `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="BANCO DE MACHALA"]`,
    'bancoPacifico':        `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="BANCO DEL PACIFICO"]`,
    'bancoPichincha':       `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="BANCO PICHINCHA"]`,
    'produbanco':           `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="PRODUBANCO-PROMERICA"]`,
    'bancoSolidario':       `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="BANCO SOLIDARIO"]`,
};

export const motivoEconomicoOpcionSelectores = {
    '105_importaciones':        `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="105 - IMPORTACIONES"]`,
    '110_anticipoImportaciones':`${checkedTextViewClass}[@resource-id="android:id/text1" and @text="110 - ANTICIPOS POR IMPORTACIONES"]`,
    '201_servTranspMaritimoRC': `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="201 - SERVICIOS DE TRANSPORTE MARÍTIMO (RUTAS INTERNACIONALES)"]`,
    '202_servTranspMaritimoF':  `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="202 - SERVICIOS DE TRANSPORTE MARITIMO (FLETES)"]`,
    '203_servPorturarios':      `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="203 - SERVICIOS PORTUARIOS Y DE AEROPUERTO"]`,
    '205_viajes':               `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="205 - VIAJES, SALVO SERVICIOS DE TRANSPORTE DE PASAJEROS"]`,
    '210_primas':               `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="210 - PRIMAS POR REASEGUROS / RETROCESIONES"]`,
    '212_indemnizaciones':      `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="212 - INDEMNIZACIONES DE SEGUROS"]`,
    '214_servFinancieros':      `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="214 - SERVICIOS FINANCIEROS"]`,
    '216_restitucion':          `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="216 - RESTITUCION DE AVALES Y GARANTIAS EN MONEDA EXTRANJERA"]`,
    '218_arrendamientoMerc':    `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="218 - ARRENDAMIENTO MERCANTIL"]`,
    '220_servTelec':            `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="220 - SERVICIOS DE TELECOMUNICACIONES"]`,
};

export const cuentasBeneficiariasSelectores = {
    'THIRDB':   `${textViewClass}[@text="THIRDB"]`,
    'EXTERIOR': `${textViewClass}[@text="EXTERIOR"]`,
    'THIRDBH8': `${textViewClass}[@text="THIRDBH8LGTXW36Z"]`,
    'THIRDBIM': `${textViewClass}[@text="THIRDBIM58N5Q19W"]`,
}