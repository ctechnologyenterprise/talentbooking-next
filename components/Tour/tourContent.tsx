import { ModalShows } from "@components/ModalShows";
import { InputText } from "@components/shared/InputText";
import PlusIcon from "@public/svgs/PlusIcon";

export type TourProp = {
  formModalAddShow: any;
};

const TourContent = ({ formModalAddShow }: TourProp) => {
  return (
    <>
      <div className="base:w-full w-11/12 base:ml-0 lg:ml-10 m-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830954624!2d-74.11976352143614!3d40.697663748450985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2zVGjDoG5oIHBo4buRIE5ldyBZb3JrLCBUaeG7g3UgYmFuZyBOZXcgWW9yaywgSG9hIEvhu7M!5e0!3m2!1svi!2s!4v1669622057468!5m2!1svi!2s"
          width="100%"
          height="420px"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
        <div className="w-1/2 m-auto bl-[red] mt-5">
          <div className="flex w-full">
            <div className="flex w-4/5">
              <label className="text-sm text-slate-400 flex w-1/2 h-10 py-2 pl-5 border border-[#dddddd] pb-8">
                Start Location
                <div className="text-[red] text-2xl ml-1 font-thin">*</div>
              </label>
              <input
                type="text"
                className="rounded-none border border-[#dddddd] border-l-0 text-gray-900 block flex-1 min-w-0 w-1/5 text-sm p-2.5 focus:text-[#460465] bg-[#f7f2fa] focus:shadow-[inset_0_0_8px_rgb(70,4,101,0.1)] focus:outline-0"
              />
            </div>
            <button className="ml-auto w-1/6 text-[#460465] bg-[#f7f2fa] px-4 py-2 border border-[#ece0f3] hover:text-[#460465] hover:bg-[#e5d5ef] hover:border-[#d0b3e2]">
              Set
            </button>
          </div>
          <div className="mt-5" />
          <InputText inputName={"Tour Name"} icon={true} />
          <div className="mt-5" />
          <InputText inputName={"Artist"} icon={true} />
          <div className="mt-5" />
          <InputText inputName={"Agent(s)"} icon={true} />
        </div>

        <div className="mt-5">
          <div className="bg-[#7f5295] h-10 py-2 pl-5 flex">
            <div className="text-white font-light">Touring Companies</div>
            <button
              className="text-white font-light ml-auto mr-5 flex"
              onClick={() => formModalAddShow.show()}
            >
              <PlusIcon className="m-1 mr-2" />
              Add
            </button>
          </div>
        </div>
      </div>
      {formModalAddShow.visible && (
        <ModalShows formModalAddShow={formModalAddShow} />
      )}
    </>
  );
};

export default TourContent;
