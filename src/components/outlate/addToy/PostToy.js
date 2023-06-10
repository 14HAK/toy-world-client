import { toast } from 'react-hot-toast';

const addToy = (data, user) => {
  console.log(data);

  if (user) {
    fetch('https://toyserver-phi.vercel.app/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => toast('Product Added!'));
  }
};

export default addToy;
