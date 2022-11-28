import ButtonLink from "@components/ButtonLink";
import Content from "@components/Content";
import DownloadIcon from "@public/svgs/DownloadIcon";
import FileIcon from "@public/svgs/FileIcon";
import ListIcon from "@public/svgs/ListIcon";
import { useCallback } from "react";

const Calendars = () => {
  const headerButtons = useCallback(() => {
    return (
      <>
        <ButtonLink
          linkTo="/administrators/form"
          icon={<FileIcon />}
          label="New Contract"
        />
        <ButtonLink
          linkTo="/administrators/form"
          icon={<ListIcon />}
          label="Calendar List"
        />
      </>
    );
  }, []);
  return (
    <Content title="Calendar" leftContent={headerButtons}>
      <div className="h-screen">Calendar</div>
    </Content>
  );
};

export default Calendars;
