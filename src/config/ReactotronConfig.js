import Reactotron from 'reactotron-react-js';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure().connect({ host: '192.168.100.9' });

  tron.clear();

  console.tron = tron;
}
