import { MdDashboard } from "react-icons/md";

const AppBar = ({ hotelname }: { hotelname: string }) => {
  return (
    <div className="flex justify-between px-36 items-center py-2 border border-b-2">
      {/* left hotel name  */}
      <h1 className="text-3xl font-bold">{hotelname}</h1>
      {/* right icon for setting up the hotel and menu  */}
      <MdDashboard size={"30px"} className="hover:cursor-pointer"/>
    </div>
  );
};

export default AppBar;
