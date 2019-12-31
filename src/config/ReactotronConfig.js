import Reactotron from 'reactotron-react-js';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure().connect({ host: '172.25.13.173' });

  tron.clear();

  console.tron = tron;
}
