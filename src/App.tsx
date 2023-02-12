import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./Test";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/test" element={<Test />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
