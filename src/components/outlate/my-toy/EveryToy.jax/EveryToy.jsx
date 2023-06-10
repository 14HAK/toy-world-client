const EveryToy = ({ data }) => {
  return (
    <>
      <tr className='bg-base-200'>
        <td>{data?.category}</td>
        <td>{data?.name}</td>
        <td>{data?.price}</td>
        <td>{data?.uid}</td>
      </tr>
    </>
  );
};

export default EveryToy;
