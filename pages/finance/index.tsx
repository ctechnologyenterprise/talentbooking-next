import ButtonLink from "@components/ButtonLink";
import Content from "@components/Content";
import DownloadIcon from "@public/svgs/DownloadIcon";
import { useCallback } from "react";

const Finance = () => {
  const headerButtons = useCallback(() => {
    return (
      <ButtonLink linkTo="/roles/form" icon={<DownloadIcon />} label="Export" />
    );
  }, []);
  return (
    <Content title="Finances" leftContent={headerButtons}>
      <div className="h-screen">finances</div>
    </Content>
  );
};

export default Finance;
