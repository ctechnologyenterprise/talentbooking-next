import ArtistDetail from "@components/Artists/Artist";
import CommonHead from "@components/shared/CommonHead/CommonHead";

const Artist = () => {
  return (
    <>
      <CommonHead isNormal createNewText="New Artist" title="Artists" />
      <div className="h-screen">
        <ArtistDetail />
      </div>
    </>
  );
};

export default Artist;
