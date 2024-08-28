
import './App.css' ;
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
function App() {

  return (
    <div className='App'>
      <NavBar/>
      <ItemListContainer greeting={"Buenas buenas!"}/>
    </div>
     
        
  );
}

export default App ;
