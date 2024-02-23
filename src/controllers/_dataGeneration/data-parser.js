export const parseDataTransfer = (descripcion, monto) => {
  const transfer = {
    'description': descripcion,
    'monto': monto,
  };
  return JSON.stringify(transfer);
};