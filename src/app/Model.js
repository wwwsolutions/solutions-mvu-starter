/* DOCUMENT INFORMATION [Model.js]

  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX

*//////////////////////////////////////////////////

// IMPORT MODELS
import { heroModel } from './modules/hero/hero.model';
import { ecosystemModel } from './modules/ecosystem/ecosystem.model';
import { featuresModel } from './modules/features/features.model';
import { structureModel } from './modules/structure/structure.model';
import { instructionsModel } from './modules/instructions/instructions.model';
import { typographyModel } from './modules/typography/typography.model';
import { footerModel } from './modules/footer/footer.model';
// ...

// MERGE/AGGREGATE MODELS
export const initModel = {

  // MODELS
  ...heroModel,
  ...ecosystemModel,
  ...featuresModel,
  ...structureModel,
  ...footerModel,
  ...instructionsModel,
  ...typographyModel,
  // ...

};

// LOGGING/DEBUGGING MODEL
console.dir(initModel);

export default initModel;
