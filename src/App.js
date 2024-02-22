import { HashRouter as Router, Routes, Route } from "react-router-dom";
import IndexPage from "./components/IndexPage";
import BlogDetail from "./components/BlogDetail";
import Testimonial from "./components/Testimonial";
import { UserProvider } from "./contexts/UserProvider";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/:id" element={<BlogDetail />} />
        <Route
          path="/testimonial"
          element={
            <UserProvider>
              <Testimonial />
            </UserProvider>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
