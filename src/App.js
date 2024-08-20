import "./App.css";
import * as Components from "./Components";
import * as Pages from "./Pages";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Components.Header />
      <Routes>
        <Route path="/" exact element={<Pages.HomePage />} />
        <Route path="/about" element={<Pages.About />} />
        <Route path="/menu" element={<Pages.Menu />} />
        {/* 
      
        <Route path="/pages" component={Pages} />
        <Route path="/contact" component={Contact} /> */}
        {/* أضف باقي المسارات هنا */}
      </Routes>
      <Components.Footer />
    </Router>
  );
}

export default App;
