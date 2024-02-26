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
              bgColor: "bg-black",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            unde, illo quis ratione magnam totam?
          </InfoBox>
          <InfoBox
            heading="For Property Owners"
            bgColor="bg-blue-100"
            buttonInfo={{
              text: "Add Property",
              link: "/properties/add",
              bgColor: "bg-black",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            unde, illo quis ratione magnam totam?
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
