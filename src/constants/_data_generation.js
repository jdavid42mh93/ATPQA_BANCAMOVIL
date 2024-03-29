import { createBasePath } from "../helpers/fileEditor.helper";

const basePath = createBasePath();

export const files = {
  'data':             `${basePath}data.txt`,
  'codigoSeguridad':  `${basePath}codigoSeguridad.txt`,
  'transferencias':   `${basePath}transferencias.txt`,
  'pagos':            `${basePath}pagos.txt`,
  'avances':          `${basePath}avances.txt`,
  'recargas':         `${basePath}recargas.txt`,
  'beneficiarios':    `${basePath}beneficiarios.txt`,
  'programacion':     `${basePath}programacion.txt`
};

export const dataConditions = {
  'typeIs':           (data) => `.type === '${data}'`,
  'subtypeIs':        (data) => `.subtype === '${data}'`,
  'statusIs':         (data) => `.status === '${data}'`,
  'caseIs':           (data) => `.case === '${data}'`,
  'transferTypeIs':   (data) => `.transfer_type === '${data}'`,
};

export const dataTypes = {
  'transferencias': 'Transferencias',
  'pagos':          'Pagos',
  'avances':        'Avances',
  'recargas':       'Recargas',
  'beneficiarios':  'Beneficiarios',
  'programacion':   'Programacion',
};

export const dataSubtypes = {
  'EntreMisCuentas':      'Entre Mis Cuentas',
  'Registradas':          'Registradas',
  'Eventuales':           'Eventuales',
  'AlExterior':           'Al Exterior',
  'ServiciosRegistrados': 'Servicios Registrados',
  'ServiciosEventuales':  'Servicios Eventuales',
  'MisTarjetas':          'Mis Tarjetas',
  'TarjetasRegistradas':  'Tarjetas Registradas',
  'TarjetasEventuales':   'Tarjetas Eventuales',
  'Efectivo':             'Efectivo',
  'OtrasCuentas':         'Otras Cuentas',
  'Tarjetas':             'Tarjetas',
  'PagosServicios':       'Pagos de Servicios'
};

export const dataStatus = {
  'active':   'active',
  'pending':  'pending',
  'canceled': 'canceled',
};

export const dataInstructions = {
  'assignStatus': (data) => `.status = '${data}'`, 
};