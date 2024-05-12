//@ts-nocheck

const Productcard = ({ data }) => {
  return (
    <div>
      <div className="w-full border border-black rounded-md p-4 flex flex-col justify-between gap-2 bg-white">
        <div className="border border-black rounded-md  flex items-center justify-center w-full aspect-[4/3] overflow-hidden">
          <img src={data.imagelink} alt={data.alt} />
        </div>
        <div className="flex justify-between items-center">
          <p className="font-bold">{data.title}</p>
          <p className="font-bold">₹{data.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Productcard;
