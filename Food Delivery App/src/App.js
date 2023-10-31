import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// providing to the app is our job.

function App() {
  return (
    <Provider store={appStore}>
      /*We can provide this to any specific portion of the app where we want
      that particular data */
      <div className="App">
        <Header />
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
      </div>
    </Provider>
  );
}

export default App;
