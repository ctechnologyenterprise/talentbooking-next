import ButtonLink from "@components/ButtonLink";
import Content from "@components/Content";
import SaveIcon from "@public/svgs/SaveIcon";
import { useCallback } from "react";

const NewFestival = () => {
  const headerButtons = useCallback(() => {
    return (
      <>
        <ButtonLink linkTo="/festivals/form" icon={<SaveIcon />} label="Save" />
      </>
    );
  }, []);
  return (
    <Content title="New Festival" leftContent={headerButtons}>
      index
    </Content>
  );
};

export default NewFestival;
