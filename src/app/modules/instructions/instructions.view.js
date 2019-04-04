/* DOCUMENT INFORMATION

  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX

*//////////////////////////////////////////////////

import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

import headline from '../../components/headline/headline.component';
import codeSnippet from '../../components/code-snippet/code-snippet.component';

const { div, section, h5, h2 } = hh(h);


// PUBLIC
function view(dispatch, model) {
  const { title, cloneInstallSnippet, runDevelopmentSnippet, runProductionSnippet, runProductionServerSnippet, listNpmScriptsSnippet } = model.instructions;

  return section({
    id: 'instructions',
    className: 'section section--bg-instructions',
    attributes: {
      'data-matching-link': '#horizontal-instructions-link',
      'data-matching-link-mobile': '#vertical-instructions-link'
    }
  }, [

    // TITLE SECTION
    div({ className: 'grid__container' }, [

      headline(dispatch, h2, 'headline headline--underlined headline--text-align-center', title),

      headline(dispatch, h5, '', 'Clone and install project:'),
      codeSnippet(dispatch, ['code-snippet', 'code-snippet__code code-snippet--prepend-dollar'], cloneInstallSnippet ),

      headline(dispatch, h5, '', 'Run development:'),
      codeSnippet(dispatch, ['code-snippet', 'code-snippet__code code-snippet--prepend-dollar'], runDevelopmentSnippet ),

      headline(dispatch, h5, '', 'Run production:'),
      codeSnippet(dispatch, ['code-snippet', 'code-snippet__code code-snippet--prepend-dollar'], runProductionSnippet ),

      headline(dispatch, h5, '', 'Run production server:'),
      codeSnippet(dispatch, ['code-snippet', 'code-snippet__code code-snippet--prepend-dollar'], runProductionServerSnippet ),

      headline(dispatch, h5, '', 'Use other npm scripts:'),
      codeSnippet(dispatch, ['code-snippet', 'code-snippet__code code-snippet--prepend-dollar'], listNpmScriptsSnippet ),
    ]),
  ]);
}


export { view as instructionsView };
