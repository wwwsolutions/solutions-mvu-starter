/* DOCUMENT INFORMATION

  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX

*//////////////////////////////////////////////////

import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

import headline from '../headline/headline.component';

const { span, ul, li, a, } = hh(h);

import { map, partial } from 'ramda';

// PRIVATE
function generateListItem(dispatch, list) {
  const { module, href, description } = list;

  return li({ className: 'list__item' }, [
    a({
      className: 'list__module',
      attributes: { target: '_blank' },
      href,
      onclick,
    }, [module]),
    span({ className: 'list__description' }, [description]),
  ]);
}

// PUBLIC
function  list(dispatch, model) {
  const { list } = model;
  const generatedListing = map( partial( generateListItem, [dispatch]), list );
  return ul({ className: 'list' }, [...generatedListing]);
}

export default list;
