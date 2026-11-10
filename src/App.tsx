import './App.css';
import ThriftApp from './Components/ThriftApp';
import { products } from './data/data';

function App() {
  return (
    <>
      <h1>Thrift Store!</h1>
      <ThriftApp products={products}/>
    </>
  );
}

export default App;