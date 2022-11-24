const RoleDetails = () => {
  return (
    <div className="w-3/5 ml-4 mt-20">
      <div className="bg-[#7f5295] h-10 py-2 pl-5">
        <div className="text-white">Role Details</div>
      </div>

      <div className="mt-5 flex ">
        <label className="text-slate-400 flex w-2/5 h-10 py-2 pl-5  border border-slate-400">
          Name<div className="text-[red] text-xl mt-0.2 ml-1">*</div>
        </label>
        <input
          type="text"
          className="w-3/5 pl-5 pt-2 border border-l-0 border-slate-400 bg-[#eee]"
        />
      </div>
      <textarea
        placeholder="Description"
        className="w-full h-24 pl-5 pt-2 border border-t-0 border-slate-400 "
      />
    </div>
  );
};

export default RoleDetails;
