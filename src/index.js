import './styles/style.scss';
import styles from './styles/index.module.css';

async function print() {
  // Here we are using dynamic import
  const { greet } = await import('./greet');
  const response = await greet('John Doe');
  console.log(response);
}

print();