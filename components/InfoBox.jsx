import React from "react";

const InfoBox = ({
  heading,
  bgColor = "bg-gray-100",
  textColor = "text-gray-800",
  buttonInfo,
  children,
}) => {
  return (
    <div className={`${bgColor} p-6 rounded-lg shadow-md`}>
      <h2 className={`${textColor} text-2xl font-bold`}>{heading}</h2>
      <p className={`${textColor} mt-2 mb-4`}>{children}</p>
      <a
        href={buttonInfo.link}
        className={`inline-block ${buttonInfo.bgColor} text-white rounded-lg px-4 py-2 hover:bg-gray-800`}
      >
        {buttonInfo.text}
      </a>
    </div>
  );
};

export default InfoBox;
