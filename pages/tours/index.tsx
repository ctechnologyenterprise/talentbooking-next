import ButtonLink from "@components/ButtonLink";
import Content from "@components/Content";
import FileIcon from "@public/svgs/FileIcon";
import { useCallback } from "react";

const Tour = () => {
  const headerButtons = useCallback(() => {
    return (
      <ButtonLink
        linkTo="/administrators/form"
        icon={<FileIcon />}
        label="New Tour"
      />
    );
  }, []);
  return (
    <Content title="New Tour" leftContent={headerButtons}>
      <div className="h-screen">Tour</div>
    </Content>
  );
};

export default Tour;
