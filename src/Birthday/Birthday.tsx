import { AddToCalendarButton } from "add-to-calendar-button-react";
import Countdown from "react-countdown";
import aanya from "./assets/aanya.png";

export const Birthday = () => {
  const backgroundImage = require("./assets/background.jpg"); // Assuming the image is in your project

  const dateObject = new Date("2024-07-14");
  const indiaDateObject = dateObject.toLocaleDateString("en-US", {
    timeZone: "Asia/Kolkata",
  });

  const renderer = ({ days, hours, minutes, seconds }: any) => {
    return <span>{days} Days to go...</span>;
  };

  return (
    <div
      style={{
        justifyContent: "center",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover", // Adjust background size as needed
        backgroundRepeat: "no-repeat", // Prevent repeating the image
        height: "100vh",
        width: "100vw",
        color: "black", // Text color
        filter: "brightness(0.7)",
      }}
    >
      <div
        style={{
          marginLeft: "5%",
          marginRight: "5%",
          paddingTop: "15%",
          paddingBottom: "15%",
        }}
      >
        <h1>My first Birthday!!!</h1>
        <img src={aanya} width={"300px"} height={"auto"} />
        <div style={{ height: "50px", fontSize: "30px" }}>
          <Countdown
            date={indiaDateObject}
            zeroPadTime={2}
            renderer={renderer}
          />
        </div>
        <h4>It's me, Aanya! I'm turning one on 07/14/2024</h4>
        <h4>
          My mommy and daddy are throwing me a party with cake, balloons, and
          all sorts of fun stuff! I can't wait to play with you and show you my
          new toys.
        </h4>
        <h4>
          Please RSVP so my mommy can make sure there's enough cake for
          everyone!
        </h4>

        <h4>Sunday, July 14th at 11:00 am</h4>

        <LinkButton href="https://forms.gle/AaedeKDvvwJwcYXr5">RSVP</LinkButton>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <AddToCalendarButton
            name="Aanya Birthday"
            options={["Google"]}
            location="588 Bell St, Seattle, WA 98121"
            startDate="2024-07-14"
            endDate="2024-07-14"
            startTime="11:00"
            endTime="14:00"
            timeZone="Asia/Kolkata"
            buttonStyle="round"
            hideIconButton
            hideBackground
            hideCheckmark
            styleLight="--btn-background: rgba(250, 250, 250, 0.8);"
            size="4"
          ></AddToCalendarButton>
        </div>

        <h4>Insignia By Bosa, 588 Bell St, Seattle, WA 98121</h4>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.488640386752!2d-122.34536762297512!3d47.61663207119084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490154bd92b6e21%3A0x978a2146d70dee3f!2sInsignia%20By%20Bosa!5e0!3m2!1sen!2sus!4v1719506138555!5m2!1sen!2sus"
          width="300"
          height="60"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export const LinkButton = ({ href, children }: any) => {
  return (
    <a
      href={href}
      style={{
        // Add button styles here (e.g., padding, background-color, border)
        display: "inline-block",
        padding: "10px 20px",
        backgroundColor: "#4CAF50",
        color: "white",
        borderRadius: "5px",
        cursor: "pointer",
        textDecoration: "none", // Remove underline from link
      }}
    >
      {children}
    </a>
  );
};
