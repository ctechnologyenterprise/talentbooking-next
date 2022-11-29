import { InputText } from "@components/shared/InputText";

const RoleDetail = () => {
  return (
    <div className="w-3/5 ml-4">
      <div className="bg-[#7f5295] h-10 py-2 pl-5">
        <div className="text-white">Role Details</div>
      </div>
      <div className="mt-5" />
      <InputText inputName={"Name"} icon={true} />
      <textarea
        placeholder="Description"
        className="w-full h-24 pl-5 pt-2 border border-t-0 border-[#dddddd]"
      />
    </div>
  );
};

export default RoleDetail;
