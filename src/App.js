import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './Pages/Admin';
import Base from './Pages/AdminSite/Base';
import Main from './Pages/Main';
import BaseSite from './Pages/MainSite/BaseSite';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<BaseSite />}>
          <Route index element={<Main />} />
        </Route>
        <Route path='/admin' element={<Base />}>
          <Route index element={<Admin />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
