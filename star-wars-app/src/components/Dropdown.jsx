import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { useDispatch } from 'react-redux';

const Menu = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  const dispatch = useDispatch();

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle style={{background: "yellow", color: "black", fontWeight: "bold"}} caret>
        Dropdown
        </DropdownToggle>
      <DropdownMenu style={{background: "black"}}>
        <DropdownItem style={{color: "yellow", fontWeight: "bold", hover:"black"}} header>Header</DropdownItem>
        <DropdownItem style={{color: "yellow", fontWeight: "bold"}}  onClick={() => dispatch({ type: "PLANETS" })}>Planets</DropdownItem>
        <DropdownItem style={{color: "yellow", fontWeight: "bold"}}  onClick={() => dispatch({ type: "STARSHIPS" })}>Starships</DropdownItem>
        <DropdownItem style={{color: "yellow", fontWeight: "bold"}}  onClick={() => dispatch({ type: "VEHICLES" })}>Vehicles</DropdownItem>
        <DropdownItem style={{color: "yellow", fontWeight: "bold"}}  onClick={() => dispatch({ type: "SPECIES" })}>Species</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default Menu;
