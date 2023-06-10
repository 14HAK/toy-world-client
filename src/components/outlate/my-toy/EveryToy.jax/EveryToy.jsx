const EveryToy = ({ data }) => {
  return (
    <>
      <tr className='bg-base-200'>
        <td>{data?.category}</td>
        <td>{data?.name}</td>
        <td>{data?.price}</td>
        <td>{data?.uid}</td>
        <td>
          <button className='cursor-pointer hover:text-[#9c7474] hover:underline'>
            Update
          </button>
        </td>
        <td>
          <button className='cursor-pointer hover:text-[#9c7474] hover:underline'>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default EveryToy;
