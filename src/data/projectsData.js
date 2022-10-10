import one from '../assets/png/projects/voevo.png';
import two from '../assets/png/projects/trybetunes.png';
import three from '../assets/png/projects/trivia.png';
import four from '../assets/svg/projects/four.svg';
import five from '../assets/svg/projects/five.svg';
import six from '../assets/png/projects/shoppingcart.png';
import seven from '../assets/png/projects/tryunfo.png';
import eight from '../assets/png/projects/solarsystem.png';

export const projectsData = [
  {
    id: 1,
    projectName: 'App de Receitas',
    projectDesc: 'App para dispositivos móveis em que você pode buscar por receitas'
    + 'de pratos e drinks, salvar suas favoritas e muitas outras funcionalidades.',
    tags: ['React', 'CSS', 'Context API'],
    code: 'https://github.com/rafaelribeiro96/project-trivia-react-redux',
    demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    image: one,
  },
  {
    id: 2,
    projectName: 'Trybe Tunes',
    projectDesc: 'Aplicação capaz de reproduzir músicas, criar lista de favoritas,'
    + 'editar perfil de usuário, consumindo dados de uma API.',
    tags: ['React', 'CSS'],
    code: 'https://github.com/rafaelribeiro96/project-trybetunes',
    demo: 'https://rafaelribeiro96.github.io/project-trybetunes/',
    image: two,
  },
  {
    id: 3,
    projectName: 'Trivia',
    projectDesc: 'Foi desenvolvido um jogo de perguntas e respostas baseado no jogo'
    + 'Trivia utilizando React e Redux.',
    tags: ['React', 'CSS', 'Redux'],
    code: 'https://github.com/rafaelribeiro96/project-trivia-react-redux',
    demo: 'https://rafaelribeiro96.github.io/project-trivia-react-redux/',
    image: three,
  },
  {
    id: 4,
    projectName: 'Wallet',
    projectDesc: 'Carteira de controle de gastos com conversor de moedas.',
    tags: ['React', 'Redux'],
    code: 'https://github.com/rafaelribeiro96/project-trybewallet',
    demo: 'https://rafaelribeiro96.github.io/project-trybewallet/',
    image: four,
  },
  {
    id: 5,
    projectName: 'Star Wars Planets Search',
    projectDesc: 'Aplicação com uma lista com filtros de planetas do universo de'
    + 'Star Wars usando Context API e Hooks para controlar os estados globais.',
    tags: ['React', 'Context API', 'React Hooks'],
    code: 'https://github.com/rafaelribeiro96/project-starwars-planets-search',
    demo: 'https://rafaelribeiro96.github.io/project-starwars-planets-search/',
    image: five,
  },
  {
    id: 6,
    projectName: 'Shopping Cart',
    projectDesc: 'Carrinho de compras consumindo API do Mercado Livre',
    tags: ['JavaScript', 'CSS'],
    code: 'https://github.com/rafaelribeiro96/project-shopping-cart',
    demo: 'https://rafaelribeiro96.github.io/project-shopping-cart/',
    image: six,
  },
  {
    id: 7,
    projectName: 'Trybe Trunfo',
    projectDesc: 'Criador de cartas para jogo estilo Super Trunfo',
    tags: ['React', 'CSS'],
    code: 'https://github.com/rafaelribeiro96/trybeTrunfo/tree/master/trybe-trunfo',
    demo: 'https://rafaelribeiro96.github.io/trybeTrunfo/',
    image: seven,
  },
  {
    id: 8,
    projectName: 'Solar System',
    projectDesc: 'Aplicação para testar a utilização de JSX no React',
    tags: ['React'],
    code: 'https://github.com/rafaelribeiro96/project-solar-system',
    demo: 'https://rafaelribeiro96.github.io/project-solar-system/',
    image: eight,
  },
]; export default projectsData;

// Do not remove any fields.
// Leave it blank instead as shown below

/*
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
},
*/
