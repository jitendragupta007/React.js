import { Container, FormControl, Navbar, Dropdown,Badge } from "react-bootstrap";
import { FaShoppingCart } from 'react-icons/fa'
import  { Link } from  "react-router-dom";
import "./style.css"

const Header = () => {
  return (
    <Navbar id="Navbar" bg="dark" variant="dark" style={{ height: "80px" }}>
      <Container  >
        <Navbar.Brand>
          <Link to="/">Shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: "500" }}
            placeholder=" Search a product
              here"
            className="m-auto"
          />
        </Navbar.Text>
        <Dropdown >
          <Dropdown.Toggle variant="success" id="dropdown-basic">
          <FaShoppingCart color="white" fontSize="25px"/>
            <Badge>{10}</Badge>
          </Dropdown.Toggle>

          <Dropdown.Menu style={{minWidth:170}}>
          <span style={{padding:10}}>Cart is Empty!</span>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default Header;
