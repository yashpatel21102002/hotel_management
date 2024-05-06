const RightChat = () => {
  return (
    <div className="w-1/5">
      <h1 className="text-xl font-bold pt-2 pl-2">Live Chat:</h1>
      {/* here we will load all the chats */}
      <div className="flex justify-center items-center absolute bottom-4 pl-4">
        <input className="py-2 outline-none border border-black px-2 rounded-l-lg"></input>
        <button className="bg-black px-5 py-2 border border-black text-white rounded-r-lg">send</button>
      </div>
    </div>
  );
};

export default RightChat;
