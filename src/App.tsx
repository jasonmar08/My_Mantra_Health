import { Routes, Route } from 'react-router-dom'
import './App.css';
import { Layout } from './layouts/Layout';
import { Home } from './pages/Home/Home';

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;