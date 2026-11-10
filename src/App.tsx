import './App.css';
import ThriftApp from './Components/ThriftApp';
import { products } from './data/data';

function App() {
  return (
    <>
      <ThriftApp products={products}/>
    </>
  );
}

export default App;