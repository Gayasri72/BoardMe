
import {
  BrowserRouter as Router,
  Route,
  Routes,
  

} from "react-router-dom";
import { Layout } from "./layouts/Layout";


export const App = () => {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Layout></Layout>}/>
    </Routes>
  </Router>
  )
};

export default App;