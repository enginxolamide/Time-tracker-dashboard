/* eslint-disable react/prop-types */
import styled from "@emotion/styled";

import iconEllipsis from "./../../assets/images/icon-ellipsis.svg";
import iconExercise from "./../../assets/images/icon-exercise.svg";
import iconPlay from "./../../assets/images/icon-play.svg";
import iconSelfCare from "./../../assets/images/icon-self-care.svg";
import iconSocial from "./../../assets/images/icon-social.svg";
import iconStudy from "./../../assets/images/icon-study.svg";
import iconWork from "./../../assets/images/icon-work.svg";

export const TimeCard = ({
  title,
  hoursSpent,
  topColor,
  bodyColor,
  timeframe,
  timeframeperiod,
}) => {

  //switch to handle timeframe changes
  function PrevPeriods(timeframe) {
    switch (timeframe) {
      case "Daily":
        return "Yesterday";

      case "Weekly":
        return "Last Week";

      case "Monthly":
        return "Last Month";
      default:
        return "Last Week";
    }
  }

  function removeSpaces(str) {
    return str.replace(/\s/g, "");
  }


  function getIconByTitle(title) {
    const lowerCasetitle = removeSpaces(title).toLowerCase();
    //switch to handle some props (color, icon and timeframe text) and card behaviour by title
    switch (lowerCasetitle) {
      case "exercise":
        topColor = "var( --Limegreen)";
        timeframeperiod = "5hrs";
        return iconExercise;
      case "play":
        topColor = "var( --Softblue)";
        timeframeperiod = "8hrs";
        return iconPlay;
      case "selfcare":
        topColor = "var( --Softorange)";
        timeframeperiod = "2hrs";
        return iconSelfCare;
      case "social":
        topColor = "var( --Violet)";
        timeframeperiod = "10hrs";
        return iconSocial;
      case "study":
        topColor = "var( --Lightred)";
        timeframeperiod = "7hrs";
        return iconStudy;
      case "work":
        topColor = "var( --Lightorange)";
        timeframeperiod = "36hrs";
        return iconWork;
      default:
        return null;
    }
  }
  const icon = getIconByTitle(title);

 

  return (
    <Card>
      <TopCont className="TopCont" topColor={topColor}>
        <img className="icon" src={icon} alt="" />
      </TopCont>
      <BodyCont bodyColor={bodyColor}>
        <div className="body-top">
          <h3>{title}</h3>
          <div className="moreIcon">
            <img src={iconEllipsis} alt="" />
          </div>
        </div>
        <p className="hours-spent">{hoursSpent}</p>
        <p className="prevTimeframe">{PrevPeriods(timeframe)+" - "+timeframeperiod}</p>
      </BodyCont>
    </Card>
  );
};

// Styles
const Card = styled.div`
  width: 200px;
  &:hover .TopCont {
    transform: translateY(-20px);
  }
  @media (max-width: 570px) {
    width: 100%;
`;

const TopCont = styled.div`
  height: 80px;
  z-index: -1;
  text-align: right;
  margin-bottom: -60px;
  border-radius: 15px 15px 0px 0px;
  padding: 0 14px;
  position: relative;
  overflow: hidden;
  transition: filter 0.3s;
  box-shadow: 0 0 0 rgba(255, 165, 0, 0.7);
  background-color: ${({ topColor }) => topColor || "green"};
  .icon {
    padding: 2px;
    margin-top: -10px;
  }
`;
const BodyCont = styled.div`
  z-index: 10;
  display: flex;
  flex-direction: column;
  background-color: var(--Darkblue);
  border-radius: 15px;
  color: white;
  padding: 24px;
  gap: 14px;
  .body-top {
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
  }
  .hours-spent {
    font-size: 3rem;
    font-weight: 300;
  }
  .prevTimeframe {
    font-size: 0.8rem;
    color: var(--PaleBlue);
  }
  :hover {
    background-color: var(--Darkbluehover);
  }
`;
