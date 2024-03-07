import { scrollViewClass, checkedTextViewClass, textViewClass } from "../common";

export const transferenciaAlExteriorSelectores = {
    'cuentaBeneficiariaExterior':   `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[5]/android.widget.TextView[1]`,
    'monto':                        `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
    'motivoEconomico':              `${textViewClass}[@text="Motivo Económico"]`,
    'referencia':                   `${textViewClass}[@text="Referencia"]`,
    'gastosExterior':               `${textViewClass}[@text="Gastos del exterior por Cuenta del Beneficiario"]`,
};

export const constTransferenciasAlExterior = {
    'MotivoEconomico':      'Motivo Económico',
    'Monto':                'Monto',
    'Referencia':           'Referencia',
}

export const motivoEconomicoOpcionSelectores = {
    '105_importaciones':        `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="105 - IMPORTACIONES"]`,
    '110_anticipoImportaciones':`${checkedTextViewClass}[@resource-id="android:id/text1" and @text="110 - ANTICIPOS POR IMPORTACIONES"]`,
    '201_servTranspMaritimoRI': `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="201 - SERVICIOS DE TRANSPORTE MARÍTIMO (RUTAS INTERNACIONALES)"]`,
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
};

export const gastoExteriorOpcion = {
    'N-OUR': `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="N - OUR"]`,
    'S-SHA': `${checkedTextViewClass}[@resource-id="android:id/text1" and @text="S - SHA"]`,
}

export const motivoEconomicoOpcion = {
    '105-IMPORTACIONES':                                        '105 - IMPORTACIONES',
    '110-ANTICIPOPORIMPORTACIONES':                             '110 - ANTICIPO POR IMPORTACIONES',
    '201-SERVICIOSDETRANSPORTEMARITIMO(RUTASINTERNACIONALES)':  '201 - SERVICIOS DE TRANSPORTE MARITIMO (RUTAS INTERNACIONALES)',
    '202-SERVICIOSDETRANSPORTEMARITIMO(FLETES)':                '202 - SERVICIOS DE TRANSPORTE MARITIMO (FLETES)',
    '203-SERVICIOSPORTUARIOSYDEAEROPUERTO':                     '203 - SERVICIOS PORTUARIOS Y DE AEROPUERTO',
    '205-VIAJES,SALVOSERVICIOSDETRANSPORTEDEPASAJEROS':         '205 - VIAJES, SALVO SERVICIOS DE TRANSPORTE DE PASAJEROS',
    '210-PRIMASPORREASEGUROS-RETROCESIONES':                    '210 - PRIMAS POR REASEGUROS - RETROCESIONES',
    '212-INDEMNIZACIONESDESEGUROS':                             '212 - INDEMNIZACIONES DE SEGUROS',
    '214-SERVICIOSFINANCIEROS':                                 '214 - SERVICIOS FINANCIEROS',
    '216-RESTITUCIONDEAVALESYGARANTIASENMONEDAEXTRANJERA':      '216 - RESTITUCION DE AVALES Y GARANTIAS EN MONEDA EXTRANJERA',
    '218-ARRENDAMIENTOMERCANTIL':                               '218 - ARRENDAMIENTO MERCANTIL',
    '220-SERVICIOSDETELECOMUNICACIONES':                        '220 - SERVICIOS DE TELECOMUNICACIONES',
    '222-SERVICIOSDEINFORMATICAYDEINFORMACION':                 '222 - SERVICIOS DE INFORMATICA Y DE INFORMACION',
    '224-MARCASYPATENTES':                                      '224 - MARCAS Y PATENTES',
    '225-REGALIAS,DERECHOSDELICENCIAYDEAUTOR':                  '225 - REGALIAS, DERECHOS DE LICENCIA Y DE AUTOR',
  };