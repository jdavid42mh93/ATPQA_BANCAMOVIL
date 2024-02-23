import { files } from "../../constants/_data_generation";
import { searchEntry } from "../../helpers/fileEditor.helper";

export const getDataTransfer = (index = 0, extraConditions = []) => {
  const transfers = searchEntry(files.transferencias);
  if (transfers.length > index) {
    return transfers[index];
  }
  return false;
};