interface Table {
  name: string;
  customer_name: string | null;
  sitting: number;
  id: number;
}

const LeftSideBar = ({ tables }: { tables: Table[] }) => {
  return (
    <div className="w-1/5 h-screen overflow-y-scroll border-r-2">
      <div className="flex flex-col items-left top-5 ">
        {tables.map((table) => (
          <div
            key={table.id}
            className={`flex flex-col pl-4 py-4 border ${
              table.customer_name ? "bg-green-200" : ""
            } ${table.sitting > 0 ? "" : "bg-white"} hover:cursor-pointer`}
          >
            <h1 className="font-bold text-lg">{table.name}</h1>
            <h3>
              {!table.customer_name ? (
                "Not Occupied"
              ) : (
                <span>
                  Customer Name:{" "}
                  <span className="font-bold">{table.customer_name}</span>
                </span>
              )}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSideBar;
