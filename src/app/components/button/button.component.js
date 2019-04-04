/* DOCUMENT INFORMATION

  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX

*//////////////////////////////////////////////////

import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

const { a } = hh(h);

function button(dispatch, className, model, onclick) {
  const { href, title } = model;
  return a({
    className,
    href,
    onclick
  }, [`${title}`]);
}

export default button;
