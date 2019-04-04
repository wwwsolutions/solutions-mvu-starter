/* DOCUMENT INFORMATION

  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX

*//////////////////////////////////////////////////

import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

const { span, div, p } = hh(h);

// PUBLIC
function  copyright(dispatch, className, notice) {
  const [ l1, l2, l3 ] = notice;
  return div({ className }, [
    p({ className: 'copyright__text' }, [
      span([l1]),
      span({ className: 'copyright__heart' }, [l2]),
      span([l3]),
    ]),
  ]);
}

export default copyright;

// // COPYRIGHT NOTICE
// div({ className: 'copyright-notice' }, [
//   p({ className: 'copyright-notice__text' }, [
//     span('Made with'),
//     span({ className: 'copyright-notice__heart' }, '♥'),
//     span('by Domagoj-Mario Mendas'),
//   ]),
// ]),
