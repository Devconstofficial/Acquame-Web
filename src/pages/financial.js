import React from "react";
import styled from "styled-components";
import SideBar from "../components/sidebar";
import Header from "../components/header";
import { media } from "../responsive";
import { useNavigate } from "react-router-dom";
import colors from "../colors";
import financialBanner from "../asset/images/financial_banner.png";
import userImage from "../asset/images/user_profile.png";
import emojiSmile from "../asset/icons/smiley_emoji.png";
import BillImage from "../asset/icons/electric_bill.png";
import SubscriptionImage from "../asset/icons/subscription.png";
import "@fontsource/roboto";
import "@fontsource/lato";
import "@fontsource/inter";
import "@fontsource/poppins";
import ArrowRise from "../asset/icons/ArrowRise.png";
import homeImage from "../asset/images/home.png";
import assetImage from "../asset/images/asset.png";
import debtImage from "../asset/images/debt.png";
import FinancialGoalModal from "../components/financial_goal_modal";
import TransactionModal from "../components/transaction_modal";
import IncomeImage from "../asset/icons/income.png";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const FinancialContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width:100%;
  background-color: ${colors.kWhiteColor};
`;

const MainContent = styled.div`
  display: flex;
  flex: 1;
  background-color: ${colors.kWhiteColor};
`;


const ContentWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  background-color: ${colors.kWhiteColor};
`;

const FinancialWrapper = styled.div`
  display: flex;
  flex: 1;

  @media (max-width: 768px) {
  flex-direction: column;
  margin-top:1rem;
  flex:1;
  }
`;

const LeftColumn = styled.div`
 

  ${media.extraSmall`
    flex: 1;
  `}

  ${media.mobile`
    flex: 1;
  `}
  ${media.tablet`
    flex: 1;
  `}
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: ${colors.kWhiteColor};
  border-left: 0px solid ${colors.kStrokeColor1};

  @media (max-width: 768px) {
  display:none;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

const UserImage = styled.img`
  width: 15rem;
  height: 15rem;
`;

const UserName = styled.h3`
  font-size: 1rem;
  margin: 0;
  font-family: "Lato", sans-serif;
  color: ${colors.kBlackColor};
`;

const UserHandle = styled.p`
  font-size: 1rem;
  font-family: "Lato", sans-serif;
  color: ${colors.kHandleColor};
`;

const SectionTitle = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: ${colors.kBlackColor};
  font-family: "Lato", sans-serif;
  align-self: flex-start;
`;

const ActivityBox = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 1rem;
  margin-bottom: 1rem;
  width: 90%;
  gap:0.5rem;

  ${media.mobile`
    flex-direction: row;
  `}
`;

const ActivityIconWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;

  align-items: center;
  justify-content: center;
  border-radius: 20%;
  background-color: ${(props) => props.bgColor || "#ccc"};
`;

const ActivityIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const ActivityText = styled.div`
  flex: 1;
  font-size: 0.8rem;
  color: #333;
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 0.1rem;

  p {
    margin: 0;
    font-weight: ${(props) => (props.isTitle ? "bold" : "normal")};
  }
`;

const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.kPrimaryColor};
  border-radius: 1rem;
  color: white;
  max-height: 25vh;
`;

const BannerText = styled.div`
  flex: 1;
  font-family: "Roboto", sans-serif;
`;

const BannerTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  padding:1rem;
  @media (max-width: 450px) {
  font-size:0.9rem;
  font-weight:400;
  }
`;

const BannerImage = styled.img`
  width: 7.5rem;
  height: auto;
  margin-top: 1rem;
  @media (max-width: 450px) {
  width:5rem;
  margin-top:2.5rem;
  }
`;
const StyledSliderContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 0.4rem;
`;

const StyledSlider = styled.input.attrs({ type: "range" })`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 0.8rem;
  background: ${({ value, max }) =>
    `linear-gradient(to right, white ${(value / max) * 100}%, ${
      colors.kDarkPinkColor
    } ${(value / max) * 100}%)`};
  border-radius: 1rem;
  outline: none;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 1.5rem;
    height: 1.5rem;
    background: white;
    border-radius: 50%;
    position: relative;
    z-index: 1;
  }

  &::-moz-range-thumb {
    width: 1rem;
    height: 1rem;
    background: white;
    border-radius: 50%;
    position: relative;
    z-index: 1;
  }
`;

const SliderValue = styled.div`
  position: absolute;
  top: 1.5rem;
  left: ${({ value, max }) => `calc(${(value / max) * 100}% - 1rem)`};
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
`;

const ViewGoalsButton = styled.button`
  background-color: ${colors.kWhiteColor}35;
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.7rem 1.7rem;
  font-size: 0.8rem;
  font-weight: normal;
  margin-top: 2rem;
  cursor: pointer;
  font-family: "Roboto", sans-serif;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChartsRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 0.8rem;

  ${media.extraSmall`
    flex-direction: column;
    gap: 1rem;
  `}
`;
const ChartsRow1 = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 25rem;
  margin-top: 2rem;

  ${media.extraSmall`
    flex-direction: column;
    gap: 1rem;
  `}
`;

const ChartContainer = styled.div`
  flex: 1;
  background-color: ${colors.kWhiteColor};
  border: 1px solid ${colors.kStrokeColor1};
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  font-family: "Inter", sans-serif;
  align-items: center;

  h3 {
    font-size: 1rem;
    margin-bottom: 1rem;
    font-family: "Lato", sans-serif;
    color: ${colors.kBlackColor};
  }
`;

const BoxRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;

  @media (max-width: 450px) {
  flex-direction:column;
  }
`;

const Box = styled.div`
  flex: 1;
  margin: 1 0.5rem;
  padding: 1rem;
  height: 10vh;
  background-color: ${(props) =>
    props.bgColor || colors.kPinkColor || "#f0f0f0"};
  border-radius: 0.8rem;
  text-align: center;
  cursor: pointer;
  align-content: center;
  margin:0.5rem;
 
`;

const BoxImage = styled.img`
  width: 3rem;
  height: 3rem;
`;

const BoxText = styled.p`
  font-size: 1rem;
  margin-top: 0.5rem;
  color: ${colors.kWhiteColor};
  font-family: "Roboto", sans-serif;
`;
const SummaryContainer = styled.div`
  flex: 1;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 10px;
  padding: 1rem;
  margin:0.5rem;
  color: ${colors.kWhiteColor};
  @media (max-width: 300px) {
    width:60vw;
  }
`;

const SummaryValue = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  font-family: "Work Sans", sans-serif;
`;

const SummaryLabel = styled.p`
  margin: 0;
  font-size: 1rem;
  font-family: "Work Sans", sans-serif;
`;


const GrowthContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const GrowthIcon = styled.img`
  width: 1rem;
  height: 1rem;
`;

const GrowthText = styled.span`
  font-size: 1rem;
  font-family: "Work Sans", sans-serif;
`;


function FinancialPage() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const [isModalOpen1, setIsModalOpen1] = React.useState(false);
  
    const handleOpenModal1 = () => setIsModalOpen1(true);
    const handleCloseModal1 = () => setIsModalOpen1(false);

  const handleAssetClick = () => {
    navigate("/asset-screen");
  };
  const handleDebtClick = () => {
    navigate("/debt-screen");
  };
  const handleFixExpenseClick = () => {
    navigate("/fix-expense-screen");
  };
  const assetDebtData = [
    { name: "JAN", Assets: 3000, Debt: 1200 },
    { name: "FEB", Assets: 2800, Debt: 1500 },
    { name: "MAR", Assets: 3200, Debt: 1400 },
    { name: "APR", Assets: 3500, Debt: 1700 },
    { name: "MAY", Assets: 3300, Debt: 1800 },
    { name: "JUN", Assets: 3100, Debt: 1600 },
  ];

  const incomeExpenseData = [
    { name: "JAN", Income: 3200, Expenses: 1800 },
    { name: "FEB", Income: 3000, Expenses: 1700 },
    { name: "MAR", Income: 3400, Expenses: 1900 },
    { name: "APR", Income: 3600, Expenses: 2000 },
    { name: "MAY", Income: 3500, Expenses: 2100 },
    { name: "JUN", Income: 3300, Expenses: 1900 },
  ];

  return (
    <>
    <head>
    <title>Financial | acquame-web</title>
  </head>
  
    <FinancialContainer>
      <MainContent>
        <ContentWrapper>
          <FinancialWrapper>
            <LeftColumn>
              <Banner>
                <BannerText>
                  <BannerTitle>
                  A clear and complete view of your overall well-being, would empower you to make informed decisions and achieve balance in your life.
                  </BannerTitle>
                </BannerText>
                <BannerImage src={financialBanner} alt="financial Banner" />
              </Banner>
              <BoxRow>
              <SummaryContainer bgColor={colors.kPrimaryColor}>
                <SummaryLabel>Total Assets</SummaryLabel>
                <SummaryValue>$1000000</SummaryValue>
                <GrowthContainer>
                  <GrowthText>+11.01%</GrowthText>
                  <GrowthIcon src={ArrowRise} alt="Upward trend" />
                </GrowthContainer>
              </SummaryContainer>
              <SummaryContainer bgColor={colors.kDarkPinkColor}>
                <SummaryLabel>Total Debt</SummaryLabel>
                <SummaryValue>$1000000</SummaryValue>
                <GrowthContainer>
                  <GrowthText>+11.01%</GrowthText>
                  <GrowthIcon src={ArrowRise} alt="Upward trend" />
                </GrowthContainer>
              </SummaryContainer>
              <SummaryContainer bgColor={colors.kPurpleColor}>
                <SummaryLabel>Fix Expenses</SummaryLabel>
                <SummaryValue>$1000000</SummaryValue>
                <GrowthContainer>
                  <GrowthText>+11.01%</GrowthText>
                  <GrowthIcon src={ArrowRise} alt="Upward trend" />
                </GrowthContainer>
              </SummaryContainer>
              </BoxRow>
              <BoxRow>
              <Box onClick={handleAssetClick} bgColor={colors.kPrimaryColor}>
                <BoxText>My Assets</BoxText>
                  <BoxImage src={assetImage} alt="Mental" />
                </Box>
                <Box onClick={handleDebtClick} bgColor={colors.kDarkPinkColor}>
                <BoxText>My Debts</BoxText>
                  <BoxImage src={debtImage} alt="Mental" />
                </Box>
                <Box onClick={handleFixExpenseClick} bgColor={colors.kPurpleColor}>
                <BoxText>Fix Expenses</BoxText>
                  <BoxImage src={homeImage} alt="Mental" />
                </Box>
              </BoxRow>
            </LeftColumn>
            <RightColumn>
              <UserInfo>
                <UserImage src={userImage} alt="User Profile" />
                <UserName>Sophie Fortune</UserName>
                <UserHandle>@sophiefortune</UserHandle>
              </UserInfo>
              <SectionTitle>Recent Activities</SectionTitle>

              <ActivityBox>
                <ActivityIconWrapper bgColor={colors.kPinkColor}>
                  <ActivityIcon src={BillImage} alt="electricity bill" />
                </ActivityIconWrapper>
                <ActivityText>
                  <p isTitle={true} style={{ fontWeight: "bold" }}>
                    Highest Electric Bill
                  </p>
                  <p
                    style={{
                      color: colors.kLightGreyColor1,
                      fontWeight: "300",
                    }}
                  >
                    Your highest electric bill was $X this month.
                  </p>
                </ActivityText>
              </ActivityBox>
              <ActivityBox>
                <ActivityIconWrapper bgColor={colors.kPrimaryColor}>
                  <ActivityIcon
                    src={SubscriptionImage}
                    alt="subscription icon"
                  />
                </ActivityIconWrapper>
                <ActivityText>
                  <p isTitle={true} style={{ fontWeight: "bold" }}>
                    High Number of Subscriptions
                  </p>
                  <p
                    style={{
                      color: colors.kLightGreyColor1,
                      fontWeight: "300",
                    }}
                  >
                    6 active subscriptions are impacting your budget.
                  </p>
                </ActivityText>
              </ActivityBox>
              <ActivityBox>
                <ActivityIconWrapper bgColor={colors.kBlueColor}>
                  <ActivityIcon src={IncomeImage} alt="income icon" />
                </ActivityIconWrapper>
                <ActivityText>
                  <p isTitle={true} style={{ fontWeight: "bold" }}>
                    Higher Than Usual Income
                  </p>
                  <p
                    style={{
                      color: colors.kLightGreyColor1,
                      fontWeight: "300",
                    }}
                  >
                    Your income was higher than usual this month.
                  </p>
                </ActivityText>
              </ActivityBox>
            </RightColumn>
          </FinancialWrapper>
        </ContentWrapper>
      </MainContent>
      <FinancialGoalModal isOpen={isModalOpen} onClose={handleCloseModal}/>
      <TransactionModal isOpen={isModalOpen1} onClose={handleCloseModal1}/>
    </FinancialContainer>
    </>
  );
}

export default FinancialPage;