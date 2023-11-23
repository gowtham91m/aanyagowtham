import React from "react";
import Countdown from "react-countdown";
import cradle from "../assets/cradle1.gif";

const dateObject = new Date("2023-12-10")
const indiaDateObject = dateObject.toLocaleDateString('en-US',{timeZone:"Asia/Kolkata"})

const renderer = ({ days, hours, minutes, seconds }: any) => {
  return <span>{days} Days to go...</span>;
};

export const HomePage = () => {
  return (
    <div style={{ padding: "5px" }}>
      <h1>Little princess Naming and Cradle ceremony</h1>
      <img src={cradle} width={'80%'} height={'auto'}/>
      <div style={{ height: "50px", padding: "5px", fontSize: "30px" }}>
        <Countdown
          date={indiaDateObject}
          zeroPadTime={2}
          renderer={renderer}
        />
      </div>
      <h4>
        With grate pleasure we cordially invite you to the naming & cradle
        ceremony of our baby girl
      </h4>
      <h2>Gowtham and Manushree</h2>
      <h4>Sunday, December 10th at 10:00 am</h4>
      <h4>
        Basava bhavana, 4th Cross Siddarameshwara extension, Dasappa garden,
        Tumkur, Karnataka-572103
      </h4>
    </div>
  );
};
