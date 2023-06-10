const ProductItems = ({ cartItem }) => {
  return (
    <>
      <tr className='bg-base-200'>
        <td>{cartItem?.category}</td>
        <td>{cartItem?.name}</td>
        <td>{cartItem?.price}</td>
        <td>{cartItem?.displayName}</td>
      </tr>
    </>
  );
};

export default ProductItems;
