/* DOCUMENT INFORMATION

  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX

*//////////////////////////////////////////////////

import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

const { ul, li, a } = hh(h);

import { map, partial } from 'ramda';

// PRIVATE
function generateItem(dispatch, direction, links) {
  const { id, href, txt } = links;
  return li({ className: 'nav__item'}, [
    a({ className: 'nav__link', href, id: `${direction}-${id}` }, [txt])
  ]);
}

// PUBLIC
function navigation(dispatch, direction, links) {
  const generatedLinks = map( partial( generateItem, [dispatch, direction]), links );
  return ul({ id: '', className: `nav ${direction} nav--bg-dark` }, [...generatedLinks]);
}


export default navigation;
