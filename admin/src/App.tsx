import AppBar from "./components/AppBar";
import LeftSideBar from "./components/LeftSideBar";
import Middle from "./components/Middle";
import RightChat from "./components/RightChat";

//let's say after loggin in the hotel admin we will get below object of the hotel
//TODO:have to setup the hotel and menu
const hotel = {
  name: "The Taj",
  tables: [
    {
      id: 1,
      name: "table 1",
      customer_name: null,
      sitting: 4,
    },
    {
      id: 2,
      name: "table 2",
      customer_name: null,
      sitting: 6,
    },
    {
      id: 3,
      name: "table 2",
      customer_name: null,
      sitting: 6,
    },
    {
      id: 4,
      name: "table 2",
      customer_name: "yash",
      sitting: 6,
    },
    {
      id: 5,
      name: "table 2",
      customer_name: null,
      sitting: 6,
    },
    {
      id: 6,
      name: "table 2",
      customer_name: null,
      sitting: 6,
    },
  ],
};

function App() {
  return (
    <div className="flex flex-col">
      <AppBar hotelname={hotel.name} />
      <div className="flex">
        <LeftSideBar tables={hotel.tables}/>
        <Middle />
        <RightChat/>
      </div>
    </div>
  );
}

export default App;
