import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/ContextPass';
import EveryToy from './EveryToy.jax/EveryToy';

const MyToy = () => {
  const { user } = useContext(UserContext);
  const [myToyData, setMyToyData] = useState();
  useEffect(() => {
    fetch(`https://toyserver-phi.vercel.app/my_toy?uid=${user?.uid}`)
      .then((res) => res.json())
      .then((data) => setMyToyData(data));
  }, [user]);

  console.log(myToyData);
  return (
    <div>
      <div className='overflow-x-auto'>
        <table className='table'>
          <thead>
            <tr>
              <th className='text-lg font-bold '>Category</th>
              <th className='text-lg font-bold '>Product Name</th>
              <th className='text-lg font-bold '>Price</th>
              <th className='text-lg font-bold '>User-Uid</th>
              <th className='text-lg font-bold '>Delete</th>
              <th className='text-lg font-bold '>Update</th>
            </tr>
          </thead>
          <tbody>
            {myToyData?.map((every, index) => {
              return <EveryToy key={index} data={every}></EveryToy>;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToy;
