import FormSelect from "./FormSelect";

const RolePermissions = () => {
  const item = [
    "Tour",
    "Stage",
    "Role",
    "Promoter",
    "Pencil",
    "Office",
    "LocationCache",
    "Itinerary",
    "Invoice",
    "Feedback",
    "DistanceMatrixCache",
    "ContractRevision",
    "Contact",
    "Administrator",
    "Venue",
    "Artist",
    "Contract",
    "Festival",
    "Booking",
  ];
  return (
    <div className="w-1/3 mr-5">
      <div className="bg-[#7f5295] h-10 py-2 pl-5">
        <div className="text-white">Role Permissions</div>
      </div>
      <div className="bg-[#7f5295] h-10 py-2 pl-5 mt-5">
        <div className="text-white text-2xl">*</div>
      </div>

      <div className="h-10 py-2 pl-5 mt-5 border border-slate-400 flex ">
        <label className="text-2xl text-slate-400">*</label>
        <input
          type="checkbox"
          className="accent-[#7f5295] ml-auto mr-3 w-6 h-6 hover:bg-[#7f5295] checked:bg-[#7f5295] border border-slate-400 "
        />
      </div>

      {item.map((item) => (
        <FormSelect key={item} item={item} />
      ))}
    </div>
  );
};

export default RolePermissions;
