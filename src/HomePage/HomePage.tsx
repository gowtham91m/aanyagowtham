import React from 'react';
import Countdown from 'react-countdown';


const renderer = ({days, hours, minutes, seconds }: any) => {
    
      return ( <span>{days} Days {hours}:{minutes}:{seconds}</span>);
  };


export const HomePage = () => {
    return (
        <div style={{height:  "100px", padding:"50px", fontSize:'30px'}}>
    <Countdown date={new Date(2023,12,10)} zeroPadTime={2} renderer={renderer} />
    </div>
    )
}