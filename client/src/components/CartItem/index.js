import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, Image, Button, Header } from 'semantic-ui-react'
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

const CartItem = ({ item , onUpdateCartQty}) => {
  const dispatch = useDispatch();

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
    idbPromise('cart', 'delete', { ...item });

  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id
      });
      idbPromise('cart', 'delete', { ...item });

    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value)
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });

    }
  }

  return (
    <Card>
      <Image src={`/images/${item.image}`} alt={item.name} wrapped ui={false} />
      <Card.Content>
        <Header as="h5">{item.name}</Header>
        <Header as="h6">{item.price}</Header>
      </Card.Content>
      <Card.Content>
        <div className='flex-row justify-content-center mb-3'>
          <Button basic compact onChange={[ item, item.purchaseQuantity - 1]}> - </Button>
          <Header as="h6">{item.purchaseQuantity}</Header>
          <Button basic compact onChange={[ item, item.purchaseQuantity + 1]}> + </Button>
        </div>
        <Button color='orange' onClick={() => removeFromCart(item)}>Remove</Button>
      </Card.Content>
    </Card>
  );
}

export default CartItem;