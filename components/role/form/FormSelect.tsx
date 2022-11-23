type FormSelect = { item: string };

const FormSelect = ({ item }: FormSelect) => {
  return (
    <div className="mt-7">
      <div className="bg-[#7f5295] h-10 py-2 pl-5 mb-5">
        <div className="text-white">{item}</div>
      </div>
      {["Booking", "Festival", "Pencil"].includes(item) && (
        <div className="h-10 py-2 pl-5 border border-b-0 border-slate-400 flex">
          <label className="text-2xl text-slate-400">*</label>
          <input
            type="checkbox"
            className="accent-[#7f5295] ml-auto mr-3 w-6 h-6 hover:bg-[#7f5295] checked:bg-[#7f5295] border border-slate-400 "
          />
        </div>
      )}
      <div className="h-10 py-2 pl-5 border border-b-0 border-slate-400 flex ">
        <label className="text-base text-slate-400">create</label>
        <input
          type="checkbox"
          className="accent-[#7f5295] ml-auto mr-3 w-6 h-6 hover:bg-[#7f5295] checked:bg-[#7f5295] border border-slate-400 "
        />
      </div>
      <div className="h-10 py-2 pl-5 border border-b-0 border-slate-400 flex">
        <label className="text-base text-slate-400">read</label>
        <input
          type="checkbox"
          className="accent-[#7f5295] ml-auto mr-3 w-6 h-6 hover:bg-[#7f5295] checked:bg-[#7f5295] border  border-slate-400 "
        />
      </div>
      <div className="h-10 py-2 pl-5 border border-b-0 border-slate-400 flex ">
        <label className="text-base text-slate-400">update</label>
        <input
          type="checkbox"
          className="accent-[#7f5295] ml-auto mr-3 w-6 h-6 hover:bg-[#7f5295] checked:bg-[#7f5295] border border-slate-400 "
        />
      </div>
      <div className="h-10 py-2 pl-5 border border-b-0 border-slate-400 flex ">
        <label className="text-base text-slate-400">delete</label>
        <input
          type="checkbox"
          className="accent-[#7f5295] ml-auto mr-3 w-6 h-6 hover:bg-[#7f5295] checked:bg-[#7f5295] border border-slate-400 "
        />
      </div>
      {!["Booking", "Festival", "Pencil"].includes(item) && (
        <div className="h-10 py-2 pl-5 border border-slate-400 flex">
          <label className="text-2xl text-slate-400">*</label>
          <input
            type="checkbox"
            className="accent-[#7f5295] ml-auto mr-3 w-6 h-6 hover:bg-[#7f5295] checked:bg-[#7f5295] border border-slate-400 "
          />
        </div>
      )}

      {["Booking", "Festival", "Pencil"].includes(item) && (
        <div className="h-10 py-2 pl-5 border border-b-0 border-slate-400 flex">
          <label className="text-base text-slate-400">export</label>
          <input
            type="checkbox"
            className="accent-[#7f5295] ml-auto mr-3 w-6 h-6 hover:bg-[#7f5295] checked:bg-[#7f5295] border border-slate-400 "
          />
        </div>
      )}
      {item === "Pencil" && (
        <div>
          <div className="h-10 py-2 pl-5 border border-b-0 border-slate-400 flex">
            <label className="text-base text-slate-400">convert</label>
            <input
              type="checkbox"
              className="accent-[#7f5295] ml-auto mr-3 w-6 h-6 hover:bg-[#7f5295] checked:bg-[#7f5295] border border-slate-400 "
            />
          </div>
          <div className="h-10 py-2 pl-5 border border-b-0 border-slate-400 flex">
            <label className="text-base text-slate-400">readTypePencil</label>
            <input
              type="checkbox"
              className="accent-[#7f5295] ml-auto mr-3 w-6 h-6 hover:bg-[#7f5295] checked:bg-[#7f5295] border border-slate-400 "
            />
          </div>
          <div className="h-10 py-2 pl-5 border border-b-0 border-slate-400 flex">
            <label className="text-base text-slate-400">readTypeRejected</label>
            <input
              type="checkbox"
              className="accent-[#7f5295] ml-auto mr-3 w-6 h-6 hover:bg-[#7f5295] checked:bg-[#7f5295] border border-slate-400 "
            />
          </div>
          <div className="h-10 py-2 pl-5 border border-b-0 border-slate-400 flex">
            <label className="text-base text-slate-400">readTypeBlock</label>
            <input
              type="checkbox"
              className="accent-[#7f5295] ml-auto mr-3 w-6 h-6 hover:bg-[#7f5295] checked:bg-[#7f5295] border border-slate-400 "
            />
          </div>
          <div className="h-10 py-2 pl-5 border border-b-0 border-slate-400 flex">
            <label className="text-base text-slate-400">
              readTypeConfirmed
            </label>
            <input
              type="checkbox"
              className="accent-[#7f5295] ml-auto mr-3 w-6 h-6 hover:bg-[#7f5295] checked:bg-[#7f5295] border border-slate-400 "
            />
          </div>
          <div className="h-10 py-2 pl-5 border border-slate-400 flex">
            <label className="text-base text-slate-400">
              readTypeManagement
            </label>
            <input
              type="checkbox"
              className="accent-[#7f5295] ml-auto mr-3 w-6 h-6 hover:bg-[#7f5295] checked:bg-[#7f5295] border border-slate-400 "
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FormSelect;
