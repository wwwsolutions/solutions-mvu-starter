/* DOCUMENT INFORMATION

  ROOT OF SINGLE PAGE APLICATION (SPA).
  IMPORTS PLUGINS, FONTS, STYLES.
  APPLICATION INITIALIZATION.

*/

/* APPLICATION IMPORTS
  > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > >
  ------------------------------------------------------------------------------------------------------------- */

/* LOAD PLUGINS
  ----------------------------- */
import '@babel/runtime/regenerator';


/* LOAD ICONS
  ----------------------------- */
/* PLACEHOLDER */


/* LOAD FONTS
  LIST OF SELECTED FONTS
  ----------------------------- */
import './assets/fonts/Poppins/Poppins-Light.css';
import './assets/fonts/Poppins/Poppins-Regular.css';


/* LOAD STYLES
  ----------------------------- */
import './styles/postcss/main.css';

/* LOAD APPLICATION LOGIC
----------------------------- */
import MobileMenu from './app/functionality/MobileMenu';
import StickyHeader from './app/functionality/StickyHeader';
import RevealOnScroll from './app/functionality/RevealOnScroll';


/* IMPORT MODEL-VIEW-UPDATE (MVU) PATTERN

  > DOCS: https://guide.elm-lang.org/architecture/

  ----------------------------- */
import initModel from './app/Model';
import view from './app/View';
import update from './app/Update';
import runtime from './app/Runtime';


/* APPLICATION INITIALIZATION
  > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > >
  ------------------------------------------------------------------------------------------------------------- */
window.addEventListener('load', () => {

  /* INSTANTIATE APPLICATION
    ----------------------------- */
  const node = document.getElementById('app');
  runtime(initModel, update, view, node);

  /* INSTANTIATE MOBILE_MENU
  ----------------------------- */
  const mobileMenu = new MobileMenu();

  /* INSTANTIATE STICKY_HEADER EFFECT  */
  const navbarStickyHeader = new StickyHeader();

  const cardsRevealOnScroll = new RevealOnScroll({
    elements: 'card',
    offset: '85%',
    start: 'reveal-item--opacity-hidden reveal-item--scale-up',
    end: 'reveal-item--opacity-visible reveal-item--scale-default reveal-item--transition-slow'
  });

  const featuresRevealOnScroll = new RevealOnScroll({
    elements: 'list__item',
    offset: '70%',
    start: 'reveal-item--opacity-hidden',
    end: 'reveal-item--transition-fast reveal-item--opacity-visible'
  });




}); // LOAD EVENT LISTENER
