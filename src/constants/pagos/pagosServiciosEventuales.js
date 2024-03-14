import { textViewClass } from "../common"

export const pagosServiciosEventualesSelectores = {
    
}

export const servicioBasicoAgua = {
    'numeroSuministro': '',
}

export const servicioBasicoLuz = {
    'numeroCuenta': '',
}

export const servicioBasicoTelefono = {
    'servicioTelefonoOpcion':   (data) => `${textViewClass}[@text = ${data}]`,
    'tipoConsulta':             (data) => `${textViewClass}[@text = ${data}]`,
    'tipoServicio':             (data) => `${textViewClass}[@text = ${data}]`,
    'numeroTelefono':           '',
    'numeroCelular':            '',
}

export const registroCivil = {
    'cedula':   '',
    
}