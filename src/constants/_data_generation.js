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
  'transferencias': 'transferencias',
  'pagos':          'pagos',
};

export const dataSubtypes = {
  'EntreMisCuentas':      'EntreMisCuentas',
  'Registradas':          'Registradas',
  'Eventuales':           'Eventuales',
  'AlExterior':           'AlExterior',
  'ServiciosRegistrados': 'ServiciosRegistrados',
  'ServiciosEventuales':  'ServiciosEventuales',
  'MisTarjetas':          'MisTarjetas',
  'TarjetasRegistradas':  'TarjetasRegistradas',
  'TarjetasEventuales':   'TarjetasEventuales',
};