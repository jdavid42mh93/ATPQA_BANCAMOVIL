import { createBasePath } from "../helpers/fileEditor.helper";

const basePath = createBasePath();

export const files = {
  'transferencias':                   `${basePath}transferencias.txt`,
  'data':                             `${basePath}data.txt`,
  'transferecias_exterior_dolares':   `${basePath}transferencias_exterior_dolares.txt`,
};

export const dataConditions = {
  'typeIs':       (data) => `.type === '${data}'`,
  'subtypeIs':    (data) => `.subtype === '${data}'`,
  'subtypeIsNot': (data) => `.subtype !== '${data}'`,
  'statusIs':     (data) => `.status === '${data}'`,
  'statusIsNot':  (data) => `.status !== '${data}'`,
};

export const dataTypes = {
  'transferencias': 'Transferencias',
  'pagos':          'Pagos',
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
};