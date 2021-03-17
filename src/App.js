import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';

function App() {
  return (
    <div>

      <Navbar dark color="primary">

        <div className='container'>

          <NavbarBrand href="/">Ristorante ConFusion</NavbarBrand>


        </div>

      </Navbar>
    <Menu></Menu>

    </div>
  );
}

export default App;
