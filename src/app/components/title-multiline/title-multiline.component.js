/* DOCUMENT INFORMATION

  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX

*//////////////////////////////////////////////////

import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

const { span, h1, br } = hh(h);

// PUBLIC
function  multilineTitle(dispatch, className, multilineTitle) {
  const [ l1, l2, l3 ] = multilineTitle;
  return h1({ className }, [
    span([l1]),
    br(),
    span([l2]),
    br(),
    span([l3]),
  ]);
}

export default multilineTitle;
