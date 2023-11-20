
import './App.css';
import MainHeader from './Components/Header/MainHeader';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from "react-router-dom"
import { ResultProvider } from './Store/ResultStore';
import { Provider } from 'react-redux';
import MainStore from './Store/MainStore';

function App() {
  return (
    <div className="App">
      <Provider store={MainStore}>
      <ResultProvider>
      <MainHeader />
      <ToastContainer
          position="top-center"
          autoClose={500}
          limit={1}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Outlet />  
        </ResultProvider>  
        </Provider>
    </div>
  );
}

export default App;
