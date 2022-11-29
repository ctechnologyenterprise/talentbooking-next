import Button from "@components/Button";
import ButtonLink from "@components/ButtonLink";
import Content from "@components/Content";
import { ModalFreeDay } from "@components/ModalFreeDay";
import { ModalPencil } from "@components/ModalPencil";
import TourContent from "@components/Tour/tourContent";
import FileIcon from "@public/svgs/FileIcon";
import PencilIcon from "@public/svgs/PencilIcon";
import SaveIcon from "@public/svgs/SaveIcon";
import useVisible from "hooks/useVisible";

import { useCallback, useState } from "react";

const TourForm = () => {
  const formModalAddShow = useVisible(false);
  const formModalAddPencilled = useVisible(false);
  const formModalAddFreeDay = useVisible(false);

  const headerButtons = useCallback(() => {
    return (
      <div className="flex">
        <Button
          onClick={() => {
            formModalAddShow.show(),
              formModalAddPencilled.hide(),
              formModalAddFreeDay.hide();
          }}
          icon={<FileIcon />}
          label="Add Show(s)"
        />
        <Button
          onClick={() => {
            formModalAddPencilled.show(),
              formModalAddShow.hide(),
              formModalAddFreeDay.hide();
          }}
          icon={<PencilIcon />}
          label="Add Pencilled Show"
        />
        <Button
          onClick={() => {
            formModalAddFreeDay.show(),
              formModalAddShow.hide(),
              formModalAddPencilled.hide();
          }}
          icon={<FileIcon />}
          label="Add Free Day(s)"
        />
        <ButtonLink linkTo="/tour/form" icon={<SaveIcon />} label="Save" />
      </div>
    );
  }, [formModalAddFreeDay, formModalAddPencilled, formModalAddShow]);
  return (
    <>
      <Content title="New Tour" leftContent={headerButtons}>
        <TourContent formModalAddShow={formModalAddShow} />
      </Content>
      {formModalAddPencilled.visible && (
        <ModalPencil formModalAddPencilled={formModalAddPencilled} />
      )}
      {formModalAddFreeDay.visible && (
        <ModalFreeDay formModalAddFreeDay={formModalAddFreeDay} />
      )}
    </>
  );
};

export default TourForm;
