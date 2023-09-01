import { toast } from 'react-hot-toast';

const addToy = (data, user) => {
  console.log(data);

  if (user) {
    fetch('http://localhost:5000/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => toast('Product Added!'))
      .catch((err) => console.log(err.message)
      );
  }
};

export default addToy;
