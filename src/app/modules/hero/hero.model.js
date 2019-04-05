/* DOCUMENT INFORMATION

  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX

*//////////////////////////////////////////////////

const Model = {
  hero: {
    links: [
      { id: 'header-link', href: '#header', txt: 'Home' },
      { id: 'ecosystem-link', href: '#ecosystem', txt: 'Ecosystem' },
      { id: 'features-link', href: '#features', txt: 'Features' },
      { id: 'structure-link', href: '#structure', txt: 'Structure' },
      { id: 'typography-link', href: '#typography', txt: 'Typography' },
      { id: 'instructions-link', href: '#instructions', txt: 'Start' },
    ],
    logo: {
      cls: 'logo',
      src: '../assets/images/wwwsolutions-poster.png',
      alt: 'Programmingwww.solutions logo',
    },
    multilineTitle: ['Webpack ES6 Starter.', 'MVU architecture.', 'Functional Paradigm.'],
    btnInstructions: { href: '#instructions', title: 'Quick start' },
    btnGetBoilerplate: { href: 'https://github.com/wwwsolutions/solutions-mvu-starter', title: 'Get boilerplate' },

  }
};

export { Model as heroModel };
