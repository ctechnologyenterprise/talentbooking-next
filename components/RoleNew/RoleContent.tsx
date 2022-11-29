import RoleDetail from "./FormNew/RoleDetail";
import RolePermissions from "./FormNew/RolePermissions";

const RoleContent = () => {
  return (
    <>
      <div className="flex w-100 ml-10">
        <RolePermissions />
        <RoleDetail />
      </div>
    </>
  );
};

export default RoleContent;
