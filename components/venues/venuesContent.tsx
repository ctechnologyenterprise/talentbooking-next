import { CountrySelect } from "@components/shared/CountrySelect";
import { InputText } from "@components/shared/InputText";
import { StatusSelect } from "@components/shared/Status/statusSelect";

const VenuesContent = () => {
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
              <div className="text-white font-light">Venue Details</div>
            </div>
            <div className="mt-5">
              <InputText inputName={"Name"} required={true} />
              <textarea
                placeholder="Description"
                className="focus:h-32 h-10 placeholder:pl-3 rounded-none border border-[#dddddd] text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5 focus:text-[#460465] focus:shadow-[inset_0_0_8px_rgb(70,4,101,0.1)] focus:outline-0 focus:bg-[#f7f2fa] hover:bg-[#7f5295]"
              />
              <InputText inputName={"Capacity"} />
              <InputText inputName={"Website"} />
              <InputText inputName={"Thumbnail"} />
              <InputText inputName={"Tags"} />
              <div className="flex">
                <label className="text-sm text-slate-400 flex w-2/5 h-10 py-2 pl-5 border border-[#dddddd] pb-8">
                  Specifications
                </label>
                <input
                  type="file"
                  name="file-input"
                  id="file-input"
                  className="hidden"
                />
                <label
                  htmlFor="file-input"
                  className=" rounded-none border border-[#dddddd] border-l-0 text-gray-900 flex min-w-0 w-3/5 text-sm p-2.5 focus:text-[#460465] bg-[#f7f2fa] focus:shadow-[inset_0_0_8px_rgb(70,4,101,0.1)] focus:outline-0"
                >
                  <span className="rounded text-[#fff] bg-[#000] px-1 text-sm ml-auto">
                    Browse
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="base:w-full lg:w-1/2 mt-5 lg:ml-7 ml-0 pb-10">
            <div className="bg-[#7f5295] h-10 py-2 pl-5">
              <div className="text-white font-light">Contact Info</div>
            </div>
            <div className="mt-5">
              <InputText inputName={"Email"} />
              <InputText inputName={"Telephone 1"} />
              <InputText inputName={"Telephone 2"} />
              <InputText inputName={"Fax 1"} />
              <InputText inputName={"Fax 2"} />
              <InputText inputName={"Address Line 1"} required={true} />
              <InputText inputName={"Address Line 2"} />
              <InputText inputName={"Postcode"} required={true} />
              <InputText inputName={"City"} required={true} />
              <InputText inputName={"Country"} required={true} />
              <div className="flex">
                <label className="text-sm text-slate-400 flex w-2/5 h-10 py-2 pl-5 border border-[#dddddd] pb-8">
                  Country
                  <div className="text-[red] text-2xl ml-1 font-thin">*</div>
                </label>
                <CountrySelect />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VenuesContent;
