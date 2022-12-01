import ButtonLink from "@components/ButtonLink";
import Content from "@components/Content";
import DownloadIcon from "@public/svgs/DownloadIcon";
import FileIcon from "@public/svgs/FileIcon";
import { useCallback } from "react";

const Shows = () => {
  const headerButtons = useCallback(() => {
    return (
      <>
        <ButtonLink
          linkTo="/administrators/form"
          icon={<FileIcon />}
          label="New Shows"
        />
        <ButtonLink
          linkTo="/administrators/form"
          icon={<FileIcon />}
          label="New Itinerary"
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
    <Content title="New Shows" leftContent={headerButtons}>
      <div className="h-screen">Shows</div>
    </Content>
  );
};

export default Shows;
