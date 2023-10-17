import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Heading from './components/Heading';
import FormPage from './pages/FormPage';
import MatrixPage from './pages/MatrixPage';

function App(): JSX.Element {
  return (
    <Container>
      <BrowserRouter>
        <Heading />
        <Routes>
          <Route path='/' element={<MatrixPage />}/>
          <Route path='/register' element={<FormPage />}/>
          <Route path='*' element={<Navigate to='/' />}/>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
