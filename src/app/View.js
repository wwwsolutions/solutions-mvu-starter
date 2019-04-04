/* DOCUMENT INFORMATION [View.js]

  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX

*//////////////////////////////////////////////////

import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

const { div } = hh(h);

// SECTIONS
import { heroView } from './modules/hero/hero.view';
import { ecosystemView } from './modules/ecosystem/ecosystem.view';
import { featuresView } from './modules/features/features.view';
import { structureView } from './modules/structure/structure.view';
import { typographicScalesView } from './modules/typography/typography.view';
import { instructionsView } from './modules/instructions/instructions.view';
import { footerView } from './modules/footer/footer.view';

// VIEWS
function view(dispatch, model) {
  return div({ className: 'main' }, [

    heroView(dispatch, model),
    ecosystemView(dispatch, model),
    featuresView(dispatch, model),
    structureView(dispatch, model),
    typographicScalesView(dispatch, model),
    instructionsView(dispatch, model),
    footerView(dispatch, model),

  ]);
}

export default view;
