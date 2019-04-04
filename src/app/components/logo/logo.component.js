/* DOCUMENT INFORMATION

  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX

*//////////////////////////////////////////////////

import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

const { a, img } = hh(h);


// PUBLIC
function logo(dispatch, model) {
  // return a({ id: 'logo', className: 'logo logo--small' });
  return a({ id: 'logo', className: 'logo' });
}


export default logo;
