import { CountrySelect } from "@components/shared/CountrySelect";
import { InputBox } from "@components/shared/InputBox";
import { InputText } from "@components/shared/InputText";
import { SelectForm } from "@components/shared/SelectForm";
import { useState } from "react";

const ContactsContent = () => {
  const individual = [
    { name: "Name", icon: true },
    { name: "Company", icon: false },
    { name: "Email", icon: true },
    { name: "Phone", icon: true },
    { name: "Mobile", icon: true },
    { name: "Website", icon: false },
    { name: "Address Line 1", icon: false },
    { name: "Address Line 2", icon: false },
    { name: "Postcode", icon: false },
    { name: "City", icon: false },
  ];

  const [filterByInfo, setFilterByInfo] = useState<any>({
    input: null,
    option: null,
  });

  return (
    <>
      <div className="base:w-full w-11/12 base:ml-0 lg:ml-10 m-auto">
        <div className="mt-16" />
        <div className="lg:flex base:block">
          <div className="base:w-full lg:w-1/2 mt-5">
            <div className="bg-[#7f5295] h-10 py-2 pl-5">
              <div className="text-white font-light">Individual Details</div>
            </div>
            <div className="mt-5">
              {individual.map((item) => (
                <InputText
                  key={item.name}
                  inputName={item.name}
                  icon={item.icon}
                />
              ))}
              <div className="flex">
                <label className="text-sm text-slate-400 flex w-2/5 h-10 py-2 pl-5 border border-[#dddddd] pb-8">
                  Country
                  <div className="text-[red] text-2xl ml-1 font-thin">*</div>
                </label>
                <CountrySelect />
              </div>
            </div>
          </div>
          <div className="base:w-full lg:w-1/2 mt-5 lg:ml-7 ml-0 pb-10">
            <div className="bg-[#7f5295] h-10 py-2 pl-5">
              <div className="text-white font-light">Professional</div>
            </div>
            <div className="mt-5" />
            <SelectForm
              icon={true}
              options={[
                { value: "artist", label: "Artist" },
                {
                  value: "echoLocationEmployee",
                  label: "Echo Location Employee",
                },
                { value: "manager", label: "Manager" },
                { value: "other", label: "Other" },
                { value: "productionAssistant", label: "Production Assistant" },
                { value: "promoterOrBuyer", label: "Promoter/Buyer" },
                { value: "tourManager", label: "Tour Manager" },
              ]}
              selectLabel="Position"
              onSelect={(val) =>
                setFilterByInfo({ ...filterByInfo, option: val })
              }
            />
            <div className="mt-10" />
            <div className="bg-[#7f5295] h-10 py-2 pl-5">
              <div className="text-white font-light">Social Media</div>
            </div>
            <div className="mt-5" />
            <InputText inputName="Twitter" />
            <InputText inputName="Facebook" />
            <div className="mt-10" />
            <div className="bg-[#7f5295] h-10 py-2 pl-5">
              <div className="text-white font-light">Blacklist</div>
            </div>
            <div className="mt-5" />
            <InputBox inputName="Blacklist" borderBottom={false} />
            <div className="mt-5"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactsContent;
