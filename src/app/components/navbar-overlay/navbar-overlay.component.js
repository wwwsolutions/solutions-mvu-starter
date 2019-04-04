/* DOCUMENT INFORMATION

  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX

*//////////////////////////////////////////////////

import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

const { div } = hh(h);

// COMPONENTS
import navigation from '../nav/nav.component';


// PUBLIC
function navbarOverlay(dispatch, model) {
  return div({ id: 'navbar-overlay', className: 'navbar-overlay'}, [

    navigation(dispatch, 'vertical', model),

  ]);
}


export default navbarOverlay;
