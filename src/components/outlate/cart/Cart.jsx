import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/ContextPass';
import ProductItems from './prodactItems/ProductItems';

const Cart = () => {
  const { user } = useContext(UserContext);
  const [cartData, setCartData] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/cart?displayName=${user?.displayName}`)
      .then((res) => res.json())
      .then((data) => setCartData(data));
  }, [user]);

  console.log(cartData);

  return (
    <div>
      <div className='overflow-x-auto'>
        <table className='table'>
          <thead>
            <tr>
              <th className='text-lg font-bold '>Category</th>
              <th className='text-lg font-bold '>Product Name</th>
              <th className='text-lg font-bold '>Price</th>
              <th className='text-lg font-bold '>Authore</th>
            </tr>
          </thead>
          <tbody>
            {cartData?.map((cartItem, index) => {
              return (
                <ProductItems key={index} cartItem={cartItem}></ProductItems>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
