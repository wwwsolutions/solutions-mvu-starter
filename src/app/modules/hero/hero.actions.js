/* DOCUMENT INFORMATION

  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX

*//////////////////////////////////////////////////

import MSGS from './hero.messages.model';

// ACTIONS
export function heroMsg(value){
  return {
    type: MSGS.HERO_MESSAGE,
    value
  };
}
