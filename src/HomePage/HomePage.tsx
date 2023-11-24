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

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1664.6333570978595!2d77.12780895692465!3d13.320874445571423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb02c6cf12d3eab%3A0x2c5981d0090b905f!2sBasava%20Bhavana!5e0!3m2!1sen!2sin!4v1700795304705!5m2!1sen!2sin" width="300" height="50" loading="lazy" ></iframe>

    </div>
  );
};
