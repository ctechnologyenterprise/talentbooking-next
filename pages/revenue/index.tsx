import Content from "@components/Content";
import ButtonLink from "@components/ButtonLink";

import { useCallback } from "react";
import DownloadIcon from "@public/svgs/DownloadIcon";

const Revenue = () => {
  const headerButtons = useCallback(() => {
    return (
      <ButtonLink linkTo="/roles/form" icon={<DownloadIcon />} label="Export" />
    );
  }, []);
  return (
    <Content title="Revenue Tracker" leftContent={headerButtons}>
      <div className="h-screen">Revenue Tracker</div>
    </Content>
  );
};

export default Revenue;
