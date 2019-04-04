/* DOCUMENT INFORMATION

  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX

*//////////////////////////////////////////////////

import MSGS from './instructions.messages.model';

// ACTIONS
export function instructionsMsg(value){
  return {
    type: MSGS.INSTRUCTIONS_MESSAGE,
    value
  };
}
