/* DOCUMENT INFORMATION [typography.actions.js]

  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX

*//////////////////////////////////////////////////

import MSGS from './typography.messages.model';

// ACTIONS
export function footerMsg(value){
  return {
    type: MSGS.FOOTER_MESSAGE,
    value
  };
}
