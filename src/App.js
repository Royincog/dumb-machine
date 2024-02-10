import { HashRouter as Router, Routes, Route } from "react-router-dom";
import IndexPage from "./components/IndexPage";
import BlogDetail from "./components/BlogDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dumb-machine" element={<IndexPage />} />
        <Route path="/dumb-machine/:id" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
