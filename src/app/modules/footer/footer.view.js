/* DOCUMENT INFORMATION

  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX

*//////////////////////////////////////////////////

import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

import copyright from '../../components/copyright/copyright.component';

const { div, footer } = hh(h);

// PUBLIC
function view(dispatch, model) {

  const { copyrightContent } = model.footer;

  return footer({ id: 'footer', className:'section section--bg-footer' }, [

    div({ className: 'grid__container' }, [

      copyright(dispatch, 'copyright', copyrightContent)
      // COPYRIGHT NOTICE
      // div({ className: 'copyright-notice' }, [
      //   p({ className: 'copyright-notice__text' }, [
      //     span('Made with'),
      //     span({ className: 'copyright-notice__heart' }, '♥'),
      //     span('by Domagoj-Mario Mendas'),
      //   ]),
      // ]),

    ]),

  ]);

}


export { view as footerView };
