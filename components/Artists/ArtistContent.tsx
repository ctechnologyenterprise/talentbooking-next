import { ModalArtists } from "@components/ModalArtist";
import { CountrySelect } from "@components/shared/CountrySelect";
import { InputArea } from "@components/shared/InputArea";
import { InputBox } from "@components/shared/InputBox";
import { InputText } from "@components/shared/InputText";
import { StatusSelect } from "@components/shared/Status/statusSelect";
import PlusIcon from "@public/svgs/PlusIcon";
import { useState } from "react";

const ArtistContent = () => {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  return (
    <>
      <div className="base:w-full w-11/12 base:ml-0 lg:ml-10 m-auto">
        <div className="lg:flex base:block w-full">
          <StatusSelect />
          <div className="flex base:w-full lg:w-3/5 lg:mt-20 mt-5 base:ml-0 lg:ml-20">
            <label
              htmlFor="Search"
              className="lg:w-1/5 w-2/5 inline-flex items-center px-3 text-base text-slate-400 border border-r-1 border-[#dddddd]"
            >
              Contacts
            </label>
            <input
              type="text"
              className="rounded-none border border-[#dddddd] border-l-0 text-gray-900 block flex-1 min-w-0 base:w-3/5 lg:w-4/5 text-sm p-2.5 focus:text-[#460465] bg-[#f7f2fa] focus:shadow-[inset_0_0_8px_rgb(70,4,101,0.1)] focus:outline-0"
            />
          </div>
        </div>
        <div className="lg:flex base:block">
          <div className="base:w-full lg:w-1/2 mt-5">
            <div className="bg-[#7f5295] h-10 py-2 pl-5">
              <div className="text-white font-light">Artist Details</div>
            </div>
            <div className="mt-5">
              <InputText inputName={"Name"} icon={true} />
              <InputText inputName={"Real Name(s)"} icon={true} />
              <InputText inputName={"Initials"} icon={true} />
              <InputText inputName={"Website"} />
              <InputArea placeholder="Social" />
              <div className="flex">
                <label className="text-sm text-slate-400 flex w-2/5 h-10 py-2 pl-5 border border-[#dddddd] pb-8">
                  Artist Logo
                </label>
                <input
                  type="file"
                  name="file-input"
                  id="file-input"
                  className="hidden"
                />
                <label
                  htmlFor="file-input"
                  className="rounded-none border border-[#dddddd] border-l-0 text-gray-900 flex min-w-0 w-3/5 text-sm p-2.5 focus:text-[#460465] bg-[#f7f2fa] focus:shadow-[inset_0_0_8px_rgb(70,4,101,0.1)] focus:outline-0"
                >
                  <span className="rounded text-[#fff] bg-[#000] px-1 text-sm ml-auto">
                    Browse
                  </span>
                </label>
              </div>
              <InputBox
                inputName="Always use Echo Location Address in Contracts"
                borderBottom={false}
              />
            </div>
            <div className="lg:mt-10 mt-5" />
            <div className="bg-[#7f5295] h-10 py-2 pl-5">
              <div className="text-white font-light">Financial</div>
            </div>
            <div className="mt-5" />
            <InputText inputName={"Commission (%)"} />
            <InputText inputName={"VAT Number"} />
            <InputText inputName={"Invoice Information"} />
            <div className="lg:mt-10 mt-5" />
          </div>
          <div className="base:w-full lg:w-1/2 mt-5 lg:ml-7 ml-0 pb-10">
            <div className="bg-[#7f5295] h-10 py-2 pl-5 flex">
              <div className="text-white font-light">Touring Companies</div>
              <button
                className="text-white font-light ml-auto mr-5 flex"
                onClick={() => setOpenModal(true)}
              >
                <PlusIcon className="m-1 mr-2" />
                Add
              </button>
            </div>
            <div className="h-20 flex justify-center items-center font-medium pb-8">
              No touring companies have been added yet
            </div>
            <div className="bg-[#7f5295] h-10 py-2 pl-5 flex">
              <div className="text-white font-light">Production Companies</div>
              <button
                className="text-white font-light ml-auto mr-5 flex"
                onClick={() => setOpenModal(true)}
              >
                <PlusIcon className="m-1 mr-2" />
                Add
              </button>
            </div>
            <div className="h-20 flex justify-center items-center font-medium pb-8">
              No production companies have been added yet
            </div>
            <div className="bg-[#7f5295] h-10 py-2 pl-5 flex">
              <div className="text-white font-light">Responsible Agents</div>
            </div>
            <div className="h-20 flex justify-center items-center font-medium pb-8">
              You must save this artist before agents can be added from here.
            </div>
          </div>
        </div>
        <div className="lg:flex base:block">
          <div className="base:w-full lg:w-1/2 mt-5">
            <div className="bg-[#7f5295] h-10 py-2 pl-5">
              <div className="text-white font-light">
                Event Change Notifications
              </div>
            </div>
            <div className="h-10 text-sm pt-1">
              Select the contacts that will receive notifications when the
              status of this event is changed.
            </div>
            <InputText inputName={"Contacts"} />
            <InputText inputName={"Administrators"} />
          </div>

          <div className="base:w-full lg:w-1/2 mt-5 lg:ml-7 ml-0">
            <div className="bg-[#7f5295] h-10 py-2 pl-5">
              <div className="text-white font-light">
                Unpaid Show Notifications
              </div>
            </div>
            <div className="h-10 text-sm pt-1">
              Select the contacts that will receive notifications when a show is
              unpaid.
            </div>
            <InputText inputName={"Contacts"} />
            <InputText inputName={"Administrators"} />
          </div>
        </div>
        <div className="mt-10">
          <div className="bg-[#7f5295] h-10 py-2 pl-5">
            <div className="text-white font-light">Production Notes</div>
          </div>
          <div className="lg:flex base:block">
            <div className="base:w-full lg:w-1/2 mt-5">
              <InputArea placeholder="Production" />
              <InputArea placeholder="Travel Requirements" />
              <InputArea placeholder="Hotel Requirements" />
              <InputArea placeholder="Ground Transport" />
            </div>
            <div className="base:w-full lg:w-1/2 mt-5 lg:ml-7 ml-0">
              <InputArea placeholder="Visa Requirements" />
              <InputArea placeholder="Meals & Incidentals" />
              <InputArea placeholder="Passes" />
              <InputArea placeholder="Additional Provisions" />
            </div>
          </div>
        </div>
        <div className="mt-20" />
      </div>
      {isOpenModal && <ModalArtists setOpenModal={setOpenModal} />}
    </>
  );
};

export default ArtistContent;
