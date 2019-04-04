/* DOCUMENT INFORMATION [Update.js]

  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX

*//////////////////////////////////////////////////

// IMPORT MESSAGES
import HERO from './modules/hero/hero.messages.model';
import ECOSYSTEM from './modules/ecosystem/ecosystem.messages.model';
import FEATURES from './modules/features/features.messages.model';
import STRUCTURE from './modules/structure/structure.messages.model';
import INSTRUCTIONS from './modules/instructions/instructions.messages.model';
import FOOTER from './modules/footer/footer.messages.model';
// ...

// AGGREGATE MESSAGES
const MSGS = {
  ...HERO,
  ...ECOSYSTEM,
  ...FEATURES,
  ...STRUCTURE,
  ...INSTRUCTIONS,
  ...FOOTER,
  // ...
};


function update(msg, model) {

  // LOGGING/DEBUGGING MESSAGES
  console.log('message: ', msg);

  // FORM1 LOGIC
  switch (msg.type) {

    case MSGS.HERO_MESSAGE: {
      return model;
    }

    // ...

  }

  return model;

}


export default update;
