/* DOCUMENT INFORMATION

  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX

*//////////////////////////////////////////////////

import MSGS from './ecosystem.messages.model';

// ACTIONS
export function ecosystemMsg(value){
  return {
    type: MSGS.ECOSYSTEM_MESSAGE,
    value
  };
}
