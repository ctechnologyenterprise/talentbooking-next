import ButtonLink from "@components/ButtonLink";
import Content from "@components/Content";
import FileIcon from "@public/svgs/FileIcon";
import DownloadIcon from "@public/svgs/DownloadIcon";
import { useCallback } from "react";

const Festivals = () => {
  const headerButtons = useCallback(() => {
    return (
      <>
        <ButtonLink
          linkTo="/administrators/form"
          icon={<FileIcon />}
          label="New Festival"
        />
        <ButtonLink
          linkTo="/administrators/form"
          icon={<DownloadIcon />}
          label="Export"
        />
      </>
    );
  }, []);
  return (
    <Content title="Festivals" leftContent={headerButtons}>
      <div className="h-screen">Festivals</div>
    </Content>
  );
};

export default Festivals;
