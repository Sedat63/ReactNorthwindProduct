import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown, Label } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { Button } from 'semantic-ui-react'

export default function CartSummary() {
  
  const { cartItems } = useSelector(state => state.cart) //sepetteki değişimler

  return (
    <div>
       <Button inverted color='brown'> <i class="shopping cart icon"></i> Sepetiniz
      <Dropdown >
          
        <Dropdown.Menu>
          {cartItems.map((cartItem) => (
            <Dropdown.Item key={cartItem.product.id}>
              {cartItem.product.productName}
              <Label>{cartItem.quantity}</Label>
            </Dropdown.Item>
          ))}
          <Dropdown.Divider />
          <Dropdown.Item as={NavLink} to="/cart">
          <Button inverted color='orange'><i class="shopping cart icon"></i> Sepete git </Button>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </Button>
    </div>
  );
}

