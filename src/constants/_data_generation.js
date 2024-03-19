import { createBasePath } from "../helpers/fileEditor.helper";

const basePath = createBasePath();

export const files = {
  'data':   `${basePath}data.txt`,
};

export const dataConditions = {
  'typeIs':       (data) => `.type === '${data}'`,
  'subtypeIs':    (data) => `.subtype === '${data}'`,
  'statusIs':     (data) => `.status === '${data}'`,
  'caseIs':       (data) => `.case === '${data}'`, 
};

export const dataTypes = {
  'transferencias': 'Transferencias',
  'pagos':          'Pagos',
  'avances':        'Avances'
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
  'Efectivo':             'Efectivo'
};

export const dataStatus = {
  'active':   'active',
  'pending':  'pending',
  'canceled': 'canceled',
};

export const dataInstructions = {
  'assignStatus': (data) => `.status = '${data}'`, 
};