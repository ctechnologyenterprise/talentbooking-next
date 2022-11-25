import ArtistContent from "@components/Artists/ArtistContent";
import CommonHead from "@components/shared/CommonHead/CommonHead";

const ArtistForm = () => {
  return (
    <>
      <CommonHead
        isNormal
        exportText="Export"
        createNewText="Save"
        title="New Promoter"
        href="artists/form"
      />
      <ArtistContent />
    </>
  );
};

export default ArtistForm;
