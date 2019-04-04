/* DOCUMENT INFORMATION [typography.view.js]

  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX

*//////////////////////////////////////////////////

import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

import typographyElement from '../../components/typography-element/typography-element.component';
import paragraph from '../../components/paragraph/paragraph.component';
import headline from '../../components/headline/headline.component';

const { blockquote, div, span, p, section, h1, h2, h3, h4, h5, h6, small } = hh(h);

// PUBLIC
function view(dispatch, model) {
  const { title } = model.typography;
  const [ c1, c2, c3 ] = model.typography.copies;

  return section({
    id: 'typography',
    className: 'section section--bg-typography',
    attributes: {
      'data-matching-link': '#horizontal-typography-link',
      'data-matching-link-mobile': '#vertical-typography-link'
    }
  }, [

    // TITLE SECTION
    div({ className: 'grid__container' }, [
      headline(dispatch, h2, 'headline headline--text-align-center headline--color-light headline--underlined headline--underlined-color-light', title),
    ]),

    // COPY SECTION
    div({ className: 'grid__container' }, [
      paragraph('paragraph paragraph--color-light', c1),
      paragraph('paragraph paragraph--color-light', c2),
    ]),

    div({ className: 'grid__container' }, [

      typographyElement(dispatch, [h1, span], ['typography-element', 'typography-element__tag'], ['<h1>', 'Headline']),
      typographyElement(dispatch, [h2, span], ['typography-element', 'typography-element__tag'], ['<h2>', 'Headline']),
      typographyElement(dispatch, [h3, span], ['typography-element', 'typography-element__tag'], ['<h3>', 'Headline']),
      typographyElement(dispatch, [h4, span], ['typography-element', 'typography-element__tag'], ['<h4>', 'Headline']),
      typographyElement(dispatch, [h5, span], ['typography-element', 'typography-element__tag'], ['<h5>', 'Headline']),
      typographyElement(dispatch, [h6, span], ['typography-element', 'typography-element__tag'], ['<h6>', 'Headline']),
      typographyElement(dispatch, [p, span], ['typography-element', 'typography-element__tag'], ['<p>', 'The classic typographic scale is a harmonious progression of font sizes, like the notes of a musical scale. Because the classic typographic scale is a scale, it must obey the scaling property: if x is a size in the scale, then x must also be a size in the scale, where r is the ratio of the scale.']),
      typographyElement(dispatch, [small, span], ['typography-element', 'typography-element__tag'], ['<small>', 'The classic typographic scale is a harmonious progression of font sizes, like the notes of a musical scale. Because the classic typographic scale is a scale, it must obey the scaling property: if x is a size in the scale, then x must also be a size in the scale, where r is the ratio of the scale.']),
      typographyElement(dispatch, [blockquote, span], ['typography-element', 'typography-element__tag'], ['<blockquote>', 'The classic typographic scale is a harmonious progression of font sizes, like the notes of a musical scale. Because the classic typographic scale is a scale, it must obey the scaling property: if x is a size in the scale, then x must also be a size in the scale, where r is the ratio of the scale.']),

    ]),


    // COPY SECTION
    div({ className: 'grid__container' }, [

      headline(dispatch, h4, 'headline headline--color-light', 'Setup'),
      paragraph('paragraph paragraph--color-light', c3),

    ]),

  ]);

}


export { view as typographicScalesView };
