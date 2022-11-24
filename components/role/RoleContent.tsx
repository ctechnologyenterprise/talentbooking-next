import RoleDetails from "./form/RoleDetails";
import RolePermissions from "./form/RolePermissions";

const RoleContent = () => {
  return (
    <>
      <div className="flex w-100 ml-10">
        <RolePermissions />
        <RoleDetails />
      </div>
    </>
  );
};

export default RoleContent;
