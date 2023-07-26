/* eslint-disable react/prop-types */
import styled from "@emotion/styled";
import { useEffect, useState } from "react";


export const ProfileCard = ({ profileImage, userfirstName, userlastName, getDataValue }) => {
  const [activePeriod, setActivePeriod] = useState("Daily");

  const handleItemClick = (period) => {
    // console.log(activePeriod);
    setActivePeriod(period);
      };

      //transfer data to parent compnent (Dashbord)
     useEffect(()=>{
        getDataValue(activePeriod)
     })
     
  
  return (
    <Card>
 
      <TopCont media="true">
        <img className="profileImage" src={profileImage} alt="" />
        <div className="top-body">
          <p>Report for</p>
          <h3>{userfirstName} <br/>{userlastName}</h3>
        </div>
      </TopCont>
      <BodyCont>
        <ul>
          <li
            onClick={() => handleItemClick("Daily")}
            id={activePeriod === "Daily" ? "active" : ""}
          >
            Daily
          </li>
          <li
            onClick={() => handleItemClick("Weekly")}
            id={activePeriod === "Weekly" ? "active" : ""}
          >
            Weekly
          </li>
          <li
            onClick={() => handleItemClick("Monthly")}
            id={activePeriod === "Monthly" ? "active" : ""}
          >
            Monthly
          </li>
        </ul>
      </BodyCont>
      
    </Card>
    
  );
};

// Styles
const Card = styled.div`
  min-width: 200px;
  height: fill;
  position: relative;
  @media (max-width: 670px) {
         width: 100%;
  @media (max-width: 890px) {
        max-width: 450px;
         min-width: 200px;
         margin-bottom: 24px;
`;

const TopCont = styled.div`
  height: 272px;
  color: white;
  border-radius: 15px;
  padding: 24px;
  // padding-bottom: 60px;
  position: relative;
  overflow: hidden;
  transition: filter 0.3s;
  box-shadow: 0 0 0 rgba(255, 165, 0, 0.7);
  background-color: var(--Blue);

  @media (max-width: 670px) {
   display: flex;
   height: auto;
   align-items: center;
   
   .top-body{
    margin-left: 24px;
   }

   .profileImage {
margin-bottom: 0px;
height: 5.2rem;
   }
  }

  img {
    height: 4.2rem;
    border: white 2px solid;
    border-radius: 100%;
    margin-bottom: 40px;
  }
  p {
    font-size: 0.8rem;
    color: var(--PaleBlue);
    margin-bottom: 4px;
  }
  h3 {
    font-weight: 300;
  }
`;
const BodyCont = styled.div`
  margin-top: -20px;
  display: flex;
  height: fill;
  flex-direction: column;
  background-color: var(--Darkblue);
  border-radius: 15px;
  color: white;
  padding: 24px;
  padding-top: 30px;
  gap: 14px;
  ul {
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media (max-width: 670px) {
      width: 100%;
justify-content: space-between;
      flex-direction: row;
        flex-wrap: wrap;
    
  }
  li {
    font-size: 1rem;
    color: var(--Desaturatedblue);
    cursor: pointer;
    list-style: none;
    &#active {
      color: #fff;
    }
  
`;
