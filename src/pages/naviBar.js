import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavLink,
  NavItem,
  Nav,
  DropdownMenu,
  NavbarToggler,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

function NaviBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const navigate = useNavigate();
  // return (
  //   <Navbar color="light" light expand="md">
  //     <NavbarBrand tag={Link} to="/">
  //       BadBank
  //     </NavbarBrand>
  //     <Collapse isOpen={isOpen} navbar>
  //       <Nav className="mr-auto" navbar>
  //         <NavItem>
  //           <NavLink tag={Link} to="/createaccount">
  //             Create Account
  //           </NavLink>
  //         </NavItem>
  //         <NavItem>
  //           <NavLink tag={Link} to="/login">
  //             Log In
  //           </NavLink>
  //         </NavItem>
  //         <NavItem>
  //           <NavLink tag={Link} to="/deposit">
  //             Deposit
  //           </NavLink>
  //         </NavItem>
  //       </Nav>
  //     </Collapse>
  //   </Navbar>
  // );

  return (
    <div>
      <Navbar light expand="md">
        <NavbarBrand tag={Link} to="/">
          BadBank
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/createaccount">
                Create Account
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/login">
                Log In
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/deposit">
                Deposit
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/withdraw">
                Withdraw
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/balance">
                Balance
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/alldata">
                All Data
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NaviBar;
