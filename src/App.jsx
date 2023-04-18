import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home,About,SingleCocktail,Error,Layout} from './components/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cocktail/:cocktailId" element={<SingleCocktail />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
