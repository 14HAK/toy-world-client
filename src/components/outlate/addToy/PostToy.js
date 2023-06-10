const addToy = (data, user) => {
  console.log(data);

  if (user) {
    fetch('https://server-sigma-lime.vercel.app/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
};

export default addToy;
