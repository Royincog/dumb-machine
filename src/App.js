import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexPage from "./components/IndexPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dumb-machine" element={<IndexPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
