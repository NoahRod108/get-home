import InfoBox from "./InfoBox";

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            heading="For Renters"
            bgColor="bg-gray-100"
            buttonInfo={{
              text: "Browse Properties",
              link: "/properties",
              bgColor: "bg-[#121212]",
            }}
          >
            Look into the many homes listed. You can favorite the listings you
            are interested in!
          </InfoBox>
          <InfoBox
            heading="For Property Owners"
            bgColor="bg-purple-100"
            buttonInfo={{
              text: "Add Property",
              link: "/properties/add",
              bgColor: "bg-[#121212]",
            }}
          >
            Start by adding a new property to your profile!
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
