import Content from "@components/Content";
import RoleContent from "@components/RoleNew/RoleContent";
import { useCallback } from "react";

const Form = () => {
  const headerButtons = useCallback(() => {
    return <div />;
  }, []);

  return (
    <Content title="Roles" leftContent={headerButtons}>
      <RoleContent />
    </Content>
  );
};

export default Form;
