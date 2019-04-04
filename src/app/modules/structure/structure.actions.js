/* DOCUMENT INFORMATION

  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX

*//////////////////////////////////////////////////

import MSGS from './structure.messages.model';

// ACTIONS
export function structureMsg(value){
  return {
    type: MSGS.STRUCTURE_MESSAGE,
    value
  };
}
