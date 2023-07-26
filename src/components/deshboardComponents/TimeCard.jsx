/* eslint-disable react/prop-types */
import styled from "@emotion/styled";
import iconEllipsis from "./../../assets/images/icon-ellipsis.svg";

export const TimeCard = ({
  title,
  hoursSpent,
  // bodyColor,
  topColor,
  timeframe,
  icon
}) => {
  return (
    <div>
      <Card>
        <div key="id">
          <TopCont className="TopCont" topColor={topColor}>
            {icon && <img className="icon" src={icon} alt="" />}
          </TopCont>

          <BodyCont bodyColor="blue">
            <div className="body-top">
              <h3>{title}</h3>
              <div className="moreIcon">
                <img src={iconEllipsis} alt="" />
              </div>
            </div>
            <div className="bodycount-body">
              <p className="hours-spent">{hoursSpent}</p>
              <p className="prevTimeframe">{timeframe}</p>
            </div>
          </BodyCont>
        </div>
      </Card>
    </div>
  );
};

// Styles (Remaining code is the same)


// Styles
const Card = styled.div`
  width: 200px;
  &:hover .TopCont {
    transform: translateY(-5px);
  }
  @media (max-width: 570px) {
    width: 100%;
  }
`;

const TopCont = styled.div`
  height: 80px;
  z-index: -1;
  text-align: right;
  margin-bottom: -40px;
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

  @media (max-width: 570px) {
    .bodycount-body {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      .hours-spent {
        font-size: 2rem;
      }
    }
  }

  .body-top {
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
    font-weight: 300;
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
