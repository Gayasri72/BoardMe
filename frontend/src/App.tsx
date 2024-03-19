import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Layout } from "./layouts/Layout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Packages from "./pages/Packages";
import Services from "./pages/Services";
import Spaces from "./pages/Spaces";
import Events from "./pages/Events";
import Home from "./pages/Home";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home/>
            </Layout>
          }
        />
        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
         <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/events"
          element={
            <Layout>
              <Events />
            </Layout>
          }
        />
        <Route
          path="/spaces"
          element={
            <Layout>
              <Spaces />
            </Layout>
          }
        />
        <Route
          path="/services"
          element={
            <Layout>
              <Services />
            </Layout>
          }
        />
        <Route
          path="/listing"
          element={
            <Layout>
              <Packages />
            </Layout>
          }
        />

      </Routes>
    </Router>
  );
};

export default App;
