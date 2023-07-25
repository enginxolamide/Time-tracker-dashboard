import styled from "@emotion/styled";
import { TimeCard } from "./deshboardComponents/TimeCard";
import profileImage from "./../assets/images/image-jeremy.png";
import { ProfileCard } from "./deshboardComponents/ProfileCard";
import {  useState } from "react";

// eslint-disable-next-line react/prop-types
const Dashboard = () => {
const username = 'Jeremy\n Robson'
const profileimage = profileImage


const [period, setPeriod] = useState('Daily')
const getData =(value)=>{
setPeriod(value)
}


  return (
    <Dash media="true">
      
      <div className="main">
          <ProfileCard  profileImage={profileimage} userName={username}  getDataValue = {getData} />
          <DashBoardTimeCard>
            <TimeCard
              title={"work"}
              hoursSpent={"32hrs"}
              timeframe={period}
              topColor={"pink"}
              bodyColor={"blue"}
            />
            <TimeCard
              title={"Play"}
              hoursSpent={"10hrs"}
              timeframe={period}
              topColor={"pink"}
              bodyColor={"blue"}
            />
            <TimeCard
              title={"Study"}
              hoursSpent={"4hrs"}
              timeframe={period}
              topColor={"pink"}
              bodyColor={"blue"}
            />
            <TimeCard
              title={"Exercise"}
              hoursSpent={"4hrs"}
              timeframe={period}
              topColor={"pink"}
              bodyColor={"blue"}
            />
            <TimeCard
              title={"Social"}
              hoursSpent={"5hrs"}
              timeframe={period}
              topColor={"pink"}
              bodyColor={"blue"}
            />
            <TimeCard
              title={"Self Care"}
              hoursSpent={"2hrs"}
              timeframe={period}
              topColor={"pink"}
              bodyColor={"blue"}
            />
          </DashBoardTimeCard>
      </div>

    </Dash>
  );
};

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
