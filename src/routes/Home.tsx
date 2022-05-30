import React from "react";
import styled from "styled-components";
import {  Link } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchAll } from "../api";

interface ThemeProps {
  toggle : () => void;
}

interface DetailProps {
  market: string;
}

interface ICoin {
  //받아오는 코인이 어떻게생겼는지 타입스크립트에게 말해주기
  english_name: string;
  korean_name: string;
  market: string;
}
interface IPrice {
  //받아오는 코인이 어떻게생겼는지 타입스크립트에게 말해주기
  market: string;
  trade_price: number;
}

const Wrap = styled.div`
  width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
`;

const Loading = styled.div`
  text-align: center;
  margin: 300px;
`;

const Header = styled.header`
  font-family: "GmarketSansBold";
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 30px;
  color: ${(props) => props.theme.textColor};
`;

const ThemeBtn = styled.button`
position: absolute;
right: 120px;
border: none;
top: 90px;
font-size: 15px;
cursor: pointer;
padding: 5px 10px;
border-radius: 5px;
background-color: ${(props)=>props.theme.textColor};
color: ${(props)=>props.theme.bgColor};
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const CoinContainer = styled.div`
  width: 600px;
  display: inline-flex;
  flex-wrap: wrap;
`;
const CoinBox = styled.div`
  //props받기
  width: 200px;
  font-size: 20px;
  font-weight: bold;
  color: #353535;
  display: flex;
  text-align: center;
  a {
    box-sizing: border-box;
    padding-top: 15px;
    width: 180px;
    height: 180px;
    margin: 5px 5px;
    background-color: #fff;
    border-radius: 20px;
  }
  &:hover {
    a {
      background-color: ${(props) => props.theme.bgColor};
    }
  }
  p {
    font-size: 13px;
    color: rgba(0, 0, 0, 0.5);
    font-weight: lighter;
    margin-top: 5px;
  }
`;

const Img = styled.img`
  display: block;
  text-align: center;
  margin: 0 auto;
  width: 45px;
  height: 45px;
  padding: 15px 0;
  margin-bottom: 10px;
`;

function Home({toggle}:ThemeProps) {
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchAll);
  const Kdata = data?.filter(el=>el.market[0] === 'K');
  return (
    <>
      {isLoading ? (
        <Loading> "Loading" </Loading>
      ) : (
        <Wrap>
          <Header>THE COINS</Header>
          <ThemeBtn onClick={toggle}> 모드변경하기 </ThemeBtn>
          <Container>
            <CoinContainer>
              {Kdata?.slice(0,60).map((coin, idx) => (
                <CoinBox key={idx}>
                  <Link
                    to={`${coin.market}`}
                    state={{ name: coin.korean_name }}
                  >
                  <Img
                      src={`https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/16/${coin.english_name .toLowerCase().split(" ").join("-")}.png`}
                    /> 
                    {coin.korean_name}
                    <p> {coin.market}</p>
                  </Link>
                </CoinBox>
              ))}
            </CoinContainer>
          </Container>
        </Wrap>
      )}
    </>
  );
}

export default Home;
