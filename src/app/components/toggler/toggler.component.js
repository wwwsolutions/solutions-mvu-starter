/* DOCUMENT INFORMATION

  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX

*//////////////////////////////////////////////////

import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

const { div, span } = hh(h);


// PUBLIC
function toggler(dispatch, model) {

  return div({ id: 'toggler', className: 'toggler' }, [
    span({ className: 'toggler__icon-bars'}),
    span({ className: 'toggler__icon-bars toggler__overlay'}),
  ]);

}


export default toggler;
