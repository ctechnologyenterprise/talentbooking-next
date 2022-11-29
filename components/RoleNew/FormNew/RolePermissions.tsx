import { InputBox } from "@components/shared/InputBox";
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
      <div className="mt-5" />
      <InputBox inputName="*" borderBottom={false} />
      {item.map((item) => (
        <FormSelect key={item} item={item} />
      ))}
    </div>
  );
};

export default RolePermissions;
