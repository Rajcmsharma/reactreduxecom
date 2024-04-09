import React from 'react';
import "./CartPage.scss";
import { useSelector, useDispatch } from 'react-redux';
import { shopping_cart } from '../../utils/images';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils/helpers';
import { getAllCarts, removeFromCart, toggleCartQty } from '../../store/cartSlice';

const CartPage = () => {
  const dispatch = useDispatch();
  const carts = useSelector(getAllCarts);
  const { itemsCount, totalAmount } = useSelector((state) => state.cart);

  if (carts.length === 0) {
    return (
      <div className='container my-5'>
        <div className='empty-cart flex justify-center align-center flex-column font-manrope'>
          <img src={shopping_cart} alt="" />
          <span className='fw-6 fs-15 text-gray'>Your shopping cart is empty.</span>
          <Link to="/" className='shopping-btn bg-light-orange text-orange fw-5'>Go shopping Now</Link>
        </div>
      </div>
    )
  }

  return (
    <div className='cart bg-whitesmoke'>
      <div className='container'>
        <div className='cart-ctable'>
          <div className='cart-chead bg-white'>
            <div className='cart-ctr fw-6 font-manrope fs-15'>
              <div>
                <span>Id</span>
              </div>
              <div>
                <span>Name</span>
              </div>
              <div>
                <span>Price</span>
              </div>
              <div>
                <span>Quantity</span>
              </div>
              <div>
                <span>Total Price</span>
              </div>
            </div>
          </div>

          <div className='cart-cbody bg-white'>
            {
              carts.map((cart, idx) => {
                return (
                  <div className='cart-ctr py-4' key={cart?.id}>
                    <div>
                      <span>{idx + 1}</span>
                    </div>
                    <div>
                      <span>{cart?.title}</span>
                    </div>
                    <div>
                      <span>{formatPrice(cart?.discountedPrice)}</span>
                    </div>
                    <div>
                      <div className='qty-change flex align-center'>
                        <button type="button" className='qty-decrease flex align-center justify-center' onClick={() => dispatch(toggleCartQty({ id: cart?.id, type: "DEC" }))}>
                          <i className='fas fa-minus'></i>
                        </button>

                        <div className='qty-value flex align-center justify-center'>
                          {cart?.quantity}
                        </div>

                        <button type="button" className='qty-increase flex align-center justify-center' onClick={() => dispatch(toggleCartQty({ id: cart?.id, type: "INC" }))}>
                          <i className='fas fa-plus'></i>
                        </button>
                      </div>
                    </div>

                    <div>
                      <span className='text-orange fw-5'>{formatPrice(cart?.totalPrice)}</span>
                    </div>

                    <div>
                      <button type="button" className='delete-btn text-dark' onClick={() => dispatch(removeFromCart(cart?.id))}>Remove</button>
                    </div>
                  </div>
                )
              })
            }
          </div>

          <div className='cart-cfoot flex py-3 bg-white justify-end'>


            <div className='flex flex-column '>
              <div className='total-txt flex align-center '>
                <div className='font-manrope fw-5'>Total ({itemsCount}) items: </div>
                <span className='text-orange fs-22 mx-2 fw-6'>{formatPrice(totalAmount)}</span>
              </div>

              <button type="button" className='checkout-btn text-orange bg-yellow fs-16'>Check Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage