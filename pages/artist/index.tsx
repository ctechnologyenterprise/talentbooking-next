import CommonHead from "@components/shared/CommonHead/CommonHead";

const Artist = () => {
  return (
    <>
      <CommonHead isNormal createNewText="New Artist" title="Artists" />
      <div className="h-screen">Artists</div>
    </>
  );
};

export default Artist;
