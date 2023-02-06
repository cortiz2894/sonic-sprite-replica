import styles from './App.module.scss';
import Canvas from './components/Canvas';

function App() {
  return (
    <div className={styles.root}>
      <h1>Hola Mundo!</h1>
      <Canvas />
      <img src='./sonic-3.png' alt='sprites sonic reference'/>  
    </div>
  );
}

export default App;
