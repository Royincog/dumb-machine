import { HashRouter as Router, Routes, Route } from "react-router-dom";
import BlogDetail from "./components/BlogDetail";
import Testimonial from "./components/Testimonial";
import { UserProvider } from "./contexts/UserProvider";

import { lazy } from "react";

const IndexPage = lazy(() => import("./components/IndexPage"));

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
