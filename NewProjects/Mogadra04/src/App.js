
import './App.css';
import Header from './Components/Header/Header';
import Navigation from './Utils/Navigation/Navigation';
import { Provider } from 'react-redux';
import store from './Store/Store';

function App() {
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
