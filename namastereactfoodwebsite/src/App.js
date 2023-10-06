import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";
// providing to the app is our job.

function App() {
  return (
   <Provider store={appStore}>
      /*We can provide this to any specific portion of the app where we want
      that particular data */
      <div className="App">
        <Header />
        <Outlet />
      </div>
  </Provider>
  );
}

export default App;
