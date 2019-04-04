/* DOCUMENT INFORMATION

  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX

*//////////////////////////////////////////////////

import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

const { nav } = hh(h);

// COMPONENTS
import logo from '../logo/logo.component';
import navigation from '../nav/nav.component';
import toggler from '../toggler/toggler.component';
import navbarOverlay from '../navbar-overlay/navbar-overlay.component';


// // PUBLIC
function navbar(dispatch, className, model) {


  return nav({ id: 'navbar', className }, [

    logo(dispatch, model),

    navigation(dispatch, 'horizontal', model),

    toggler(dispatch, model),

    navbarOverlay(dispatch, model),

  ]);

}


export default navbar;
