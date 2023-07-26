
import styled from "@emotion/styled";
import { TimeCard } from "./deshboardComponents/TimeCard";
import axios from 'axios';
import profileImage from "./../assets/images/image-jeremy.png";
import { ProfileCard } from "./deshboardComponents/ProfileCard";

import iconExercise from "./../assets/images/icon-exercise.svg";
import iconPlay from "./../assets/images/icon-play.svg";
import iconSelfCare from "./../assets/images/icon-self-care.svg";
import iconSocial from "./../assets/images/icon-social.svg";
import iconStudy from "./../assets/images/icon-study.svg";
import iconWork from "./../assets/images/icon-work.svg";

import { useEffect, useState } from "react";


const Dashboard = () => {
  const userfirstname = 'Jeremy';
  const userlastname = 'Robson';
  const profileimage = profileImage;
  
  const [data, setData] = useState();

  // Fetching the data from the DB
  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:3000/dashboard');
      setData(res.data);
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
min-height: 100vh;
justify-content: center;
align-items: center;


.main{
    width: fit-content;
    display: flex;
    gap: 16px;
    margin: 20px;
    justify-content: center;
}

@media (max-width: 670px) {
  flex-wrap: wrap;
  padding: 20px;
  .main{
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
     `;

const DashBoardTimeCard = styled.div`
display: flex;
flex-wrap: wrap;
width: fit-content;
gap: 24px;
max-width: 700px;
justify-content: center;
@media (max-width: 677px) {
    max-width: 100%;
    gap: 24px;
    `;

export default Dashboard;
