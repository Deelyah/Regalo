import "./App.css";
import Test from "./Test";
import { BrowserRouter as Provider, Routes, Route } from "react-router-dom";
import AppRoutes from "./routes/Index";

function App() {
  return (
    <div className="App">
      <Provider>
        <AppRoutes />
      </Provider>
    </div>
  );
}

export default App;
