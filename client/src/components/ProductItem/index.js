import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';

import { Card, Image, Icon } from 'semantic-ui-react'

import './cards.css'

function ProductItem(item) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { name, _id, price } = item;

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  };

  return (
    <div>
      <Card>
        <Link to={`/products/${_id}`}>
          <Image src={require(`../../assets/${item.image}`)} title={name} wrapped ui={false} />
        </Link>
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Description>
            <span className='date'>${price}</span>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href="#" onClick={addToCart}>
            <Icon name='plus' />
            Add To Cart
          </a>
        </Card.Content>
      </Card >
    </div>
  );
}

export default ProductItem;
