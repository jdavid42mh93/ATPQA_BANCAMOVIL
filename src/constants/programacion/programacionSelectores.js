import { scrollViewClass, textViewClass } from "../common";

export const programacionSelectores = {
    'nuevaProgramacion':        `//android.widget.LinearLayout[@resource-id="com.fisa.omnia.mobile.baninterv404:id/drawer_layout_container"]/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ImageView`,
    'beneficiario':             `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[1]`,
    'descripcion':              `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
    'monto':                    `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
    'fechaInicio':              `(${textViewClass}[@text=""])[1]`,
    'diaPago':                  `${scrollViewClass}/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[5]/android.view.ViewGroup[3]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`,
    'fechaFin':                 `(${textViewClass}[@text=""])[2]`,
    'editarFecha':              `//android.widget.ImageButton[@content-desc="Switch to text input mode"]`,
    'fecha':                    `//android.widget.EditText[@text="3/26/24, Date"]`,
    'fechaVacia':               'id=com.fisa.omnia.mobile.baninterv404:id/mtrl_picker_text_input_date',
    'dia':                      (data) => `${textViewClass}[@content-desc="${data}"]`,
    'buscarMes':                '//android.widget.Button[@content-desc="Change to next month"]',
    'mes':                      '//android.widget.Button[@resource-id="com.fisa.omnia.mobile.baninterv404:id/month_navigation_fragment_toggle"]',
}