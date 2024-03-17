
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  

} from "react-router-dom";
import { Layout } from "./layouts/Layout";


export const App = () => {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Layout>
        <p>home page</p>
      </Layout>}/>
    </Routes>
  </Router>
  )
};

export default App;