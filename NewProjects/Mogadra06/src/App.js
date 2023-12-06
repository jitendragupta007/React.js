
import './App.css';
import Header from './Components/Header/Header';
import Navigation from './Utils/Navigation/Navigation';
import { Provider } from 'react-redux';
import store from './Store/Store';

function App() {

  //190cd3d39ba14a0ab4621e3bff0fb20956b8723e6156474d9f00eb2b21a87ab3
  return (
    
    <div className="App">
      <Provider store={store}>
      <Header />
        <Navigation />
      </Provider>
      </div>
      
  );
}

export default App;
