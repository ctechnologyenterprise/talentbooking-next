import AdministratorsContent from "@components/administrators/administratorsContent";
import RoleContent from "@components/role/RoleContent";
import CommonHead from "@components/shared/CommonHead/CommonHead";

const Form = () => {
  return (
    <div className="w-100">
      <CommonHead isNormal createNewText="Save" title="New Roles" />
      <AdministratorsContent />
    </div>
  );
};

export default Form;
