import Button from "@components/Button";
import ButtonLink from "@components/ButtonLink";
import Content from "@components/Content";
import { ModalFreeDay } from "@components/ModalFreeDay";
import { ModalPencil } from "@components/ModalPencil";
import TourContent from "@components/Tour/tourContent";
import FileIcon from "@public/svgs/FileIcon";
import PencilIcon from "@public/svgs/PencilIcon";
import SaveIcon from "@public/svgs/SaveIcon";
import { useCallback, useState } from "react";

const TourForm = () => {
  const [openAddShow, setOpenAddShow] = useState<boolean>(false);
  const [openAddPencilledShow, setOpenAddPencilledShow] =
    useState<boolean>(false);
  const [openAddFreeDay, setOpenAddFreeDay] = useState<boolean>(false);

  const headerButtons = useCallback(() => {
    return (
      <div className="flex">
        <Button
          onClick={() => {
            setOpenAddShow(true),
              setOpenAddPencilledShow(false),
              setOpenAddFreeDay(false);
          }}
          icon={<FileIcon />}
          label="Add Show(s)"
        />
        <Button
          onClick={() => {
            setOpenAddPencilledShow(true),
              setOpenAddShow(false),
              setOpenAddFreeDay(false);
          }}
          icon={<PencilIcon />}
          label="Add Pencilled Show"
        />
        <Button
          onClick={() => {
            setOpenAddFreeDay(true),
              setOpenAddShow(false),
              setOpenAddPencilledShow(false);
          }}
          icon={<FileIcon />}
          label="Add Free Day(s)"
        />
        <ButtonLink linkTo="/tour/form" icon={<SaveIcon />} label="Save" />
      </div>
    );
  }, []);

  return (
    <Content title="New Tour" leftContent={headerButtons}>
      <TourContent openAddShow={openAddShow} setOpenAddShow={setOpenAddShow} />

      {openAddPencilledShow && (
        <ModalPencil setOpenModal={setOpenAddPencilledShow} />
      )}
      {openAddFreeDay && <ModalFreeDay setOpenModal={setOpenAddFreeDay} />}
    </Content>
  );
};

export default TourForm;
