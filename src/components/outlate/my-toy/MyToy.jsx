import { useEffect, useState } from 'react';

import EveryToy from './EveryToy.jax/EveryToy';

const MyToy = () => {
  const [myToyData, setMyToyData] = useState();
  useEffect(() => {
    fetch(`http://localhost:5000/my_toy`)
      .then((res) => res.json())
      .then((data) => setMyToyData(data));
  }, []);

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
