import AdministratorsContent from "@components/administrators/administratorsContent";
import ButtonLink from "@components/ButtonLink";
import Content from "@components/Content";
import SaveIcon from "@public/svgs/SaveIcon";
import { useCallback } from "react";

const Form = () => {
  const headerButtons = useCallback(() => {
    return (
      <ButtonLink
        linkTo="/administrators/form"
        icon={<SaveIcon />}
        label="Save"
      />
    );
  }, []);

  return (
    <Content title="New roles" leftContent={headerButtons}>
      <AdministratorsContent />
    </Content>
  );
};

export default Form;
