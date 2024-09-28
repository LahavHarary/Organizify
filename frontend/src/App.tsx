import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DocumentationList from './pages/DocumentationList';
import DocumentationPage from './pages/DocumentationPage';


const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<DocumentationList/>} />
        <Route path="/document/:id" element={<DocumentationPage />} />
      </Routes>
    </Router>
  );
};

export default App;
