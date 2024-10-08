import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import OrderPage from './Pages/OrderPage/OrderPage';
import MainHeader from './Components/MainHeader/MainHeader';

function App() {
    return (
      <Routes>
        <Route path="/" element={<MainHeader />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    );
  }

export default App

