import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import CountriesListPage from './views/countries-list/CountriesListPage';
import CountryDetailsPage from './views/country-details/CountryDetailsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CountriesListPage/>} />
        <Route path="/:code" element={<CountryDetailsPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
