/* DOCUMENT INFORMATION

  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX

*//////////////////////////////////////////////////

import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

const { div, footer, header, article, p, i, h4 } = hh(h);

import headline from '../headline/headline.component';

// PRIVATE
function generateCardHeader(dispatch, className, model) {
  const { iconCls, title } = model;
  return header({ className }, [
    i({ className: `${iconCls}` }),
    headline(dispatch, h4, 'headline headline--text-align-center-until-medium headline--b-none', title),
  ]);
}

// PRIVATE
function generateCardBody(dispatch, className, model) {
  const { txt } = model;
  return p({ className }, [txt]);
}

// PRIVATE
function generateCardFooter(dispatch, className, model) {
  const { txt } = model;
  return footer({ className }, [
    p({ className: '' }, [`${txt}`])
  ]);
}

// PUBLIC
function card(dispatch, card) {
  const { header, body, footer } = card;
  return article({ className: 'card' }, [
    generateCardHeader(dispatch, 'card__header', header),
    generateCardBody(dispatch, 'card__body', body),
    generateCardFooter(dispatch, 'card__footer', footer),
  ]);
}

export default card;
