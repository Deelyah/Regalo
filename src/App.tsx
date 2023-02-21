import "./App.css";
import Test from "./Test";
import { BrowserRouter as Provider } from "react-router-dom";
import AllRoutes from "./routes";

function App() {
  return (
    <div className="App">
      <Provider>
        <AllRoutes />
      </Provider>
    </div>
  );
}

export default App;
