
import styled from "@emotion/styled";
import { TimeCard } from "./deshboardComponents/TimeCard";
// import axios from 'axios';
import profileImage from "./../assets/images/image-jeremy.png";
import { ProfileCard } from "./deshboardComponents/ProfileCard";

import iconExercise from "./../assets/images/icon-exercise.svg";
import iconPlay from "./../assets/images/icon-play.svg";
import iconSelfCare from "./../assets/images/icon-self-care.svg";
import iconSocial from "./../assets/images/icon-social.svg";
import iconStudy from "./../assets/images/icon-study.svg";
import iconWork from "./../assets/images/icon-work.svg";

import { useEffect, useState } from "react";


const DashBoardData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          dashboard: [
            {
              "id": 1,
              "title": "Exercise",
              "topColor": "var(--Limegreen)",
                  "daily": {
                "hoursSpent": "7hrs",
                "timeframe": "Yesterday - 2hrs"
              },
              "weekly": {
                "hoursSpent": "8hrs",
                "timeframe": "Last Week - 122hrs"
              },
              "monthly": {
                "hoursSpent": "12hrs",
                "timeframe": "Last Month - 190hrs"
              }
            },
            {
              "id": 2,
              "title": "Play",
              "topColor": "var( --Softblue)",
                   "daily": {
                "hoursSpent": "10hrs",
                "timeframe": "Yesterday - 5hrs"
              },
              "weekly": {
                "hoursSpent": "2hrs",
                "timeframe": "Last Week - 132hrs"
              },
              "monthly": {
                "hoursSpent": "8hrs",
                "timeframe": "Last Month - 209hrs"
              }
            },
            {
              "id": 3,
              "title": "Self Care",
              "topColor": "var( --Softorange)",
                "daily": {
                "hoursSpent": "156hrs",
                "timeframe": "Yesterday - 54hrs"
              },
              "weekly": {
                "hoursSpent": "24hrs",
                "timeframe": "Last Week - 32hrs"
              },
              "monthly": {
                "hoursSpent": "85hr",
                "timeframe": "Last Month - 2109hrs"
              }
            },
            {
              "id": 4,
              "title": "Social",
              "topColor": "var( --Violet)",
                    "daily": {
                "hoursSpent": "123hrs",
                "timeframe": "Yesterday - 57hrs"
              },
              "weekly": {
                "hoursSpent": "1hr",
                "timeframe": "Last Week - 12hrs"
              },
              "monthly": {
                "hoursSpent": "80hrs",
                "timeframe": "Last Month - 200hrs"
              }
            },
            {
              "id": 5,
              "title": "Work",
              "topColor": "var( --Lightorange)",
                   "daily": {
                "hoursSpent": "180hrs",
                "timeframe": "Yesterday - 15hrs"
              },
              "weekly": {
                "hoursSpent": "29hrs",
                "timeframe": "Last Week - 192hrs"
              },
              "monthly": {
                "hoursSpent": "18hrs",
                "timeframe": "Last Month - 229hrs"
              }
            },
            {
              "id": 6,
              "title": "Study",
              "topColor": "var( --Lightred)",
              
              "daily": {
                "hoursSpent": "90hrs",
                "timeframe": "Yesterday - 5hrs"
              },
              "weekly": {
                "hoursSpent": "12hrs",
                "timeframe": "Last Week - 2hrs"
              },
              "monthly": {
                "hoursSpent": "8hrs",
                "timeframe": "Last Month - 9hrs"
              }
            }
          ],
        },
      });
    }, 1000); // Simulate 1 second delay to mimic server response time
  });
};






const Dashboard = () => {
  const userfirstname = 'Jeremy';
  const userlastname = 'Robson';
  const profileimage = profileImage;
  
  const [data, setData] = useState();

  // Fetching the data from the test API
  const fetchData = async () => {
    try {
      const res = await DashBoardData();
      console.log(res.data.dashboard)
      setData(res.data.dashboard);

    } catch (err) {
      console.log('Failed:', err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const [period, setPeriod] = useState('Daily');

  const getData = (value) => {
    setPeriod(value);
  }


  return (
    <Dash media="true">
      <div className="main">
        <ProfileCard className="side" profileImage={profileimage} userfirstName={userfirstname} userlastName={userlastname} getDataValue={getData} />
        <DashBoardTimeCard>
          {data &&
            data.map(({ id, title,topColor ,daily,weekly,monthly,  }) => (
              <TimeCard
              key={id}
              title={title}
              topColor={topColor}
              daily={daily}
              icon={
                title === "Exercise"
                ? iconExercise
                : title === "Study"
                ? iconStudy
                : title === "Play"
                ? iconPlay
                : title === "Self Care"
                ? iconSelfCare
                : title === "Social"
                ? iconSocial
                : title === "Work"
                ? iconWork
                : "--" 
              }
              bodyColor={"blue"}
              timeframe={
                period === "Daily"
                  ? daily.timeframe
                  : period === "Weekly"
                  ? weekly.timeframe
                  : period === "Monthly"
                  ? monthly.timeframe
                  : "--" 
              }
              hoursSpent={
                period === "Daily"
                  ? daily.hoursSpent
                  : period === "Weekly"
                  ? weekly.hoursSpent
                  : period === "Monthly"
                  ? monthly.hoursSpent
                  : "--" 
              }
              />
            ))}
        </DashBoardTimeCard>
      </div>
    </Dash>
  );
};

// styles (Remaining code is the same)


// styles
const Dash = styled.div`
display: flex;
width: 100%;
// margin: 20px;

min-height: 100vh;
justify-content: center;
align-items: center;


.main{
    width: 100%;
    display: flex;
    gap: 16px;
    margin: 20px;
    justify-content: center;
}

@media (max-width: 670px) {
  flex-wrap: wrap;
  padding: 20px ;

  .main{
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
     `;

const DashBoardTimeCard = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
gap: 24px;
max-width: 700px;
justify-content: center;
@media (max-width: 677px) {
  flex-direction: column;
    width: 100%;
    
    `;

export default Dashboard;
