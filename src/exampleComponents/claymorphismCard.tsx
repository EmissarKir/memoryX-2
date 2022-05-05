import React from "react";
import styled from "styled-components";
import BgImage from "../../assets/img/bg_2.jpg";
type Props = {};
const StyledClaymorphismCard = styled.div<Props>`
  position: relative;
  width: 450px;
  height: 600px;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 25px 25px 50px rgba(9, 148, 255, 0.25),
    -10px -10px 30px rgba(9, 148, 255, 0.1),
    inset -5px -5px 15px rgba(9, 148, 255, 0.5);

  & .card-image {
    position: relative;
    width: 100%;
    height: 300px;
    border-radius: 15px;
    overflow: hidden;
    & img {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      object-fit: cover;
    }
  }
  & .content {
    width: 100%;
    padding: 30px 20px;
    display: grid;
    place-items: center;
    text-align: center;
    &__title {
      margin: 0;
      margin-top: 15px;
      color: #0994ff;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 1.5em;
    }
    &__text {
      margin-top: 15px;
      font-weight: 500;
      color: #333;
      text-transform: initial;
      font-size: 1.15em;
      letter-spacing: 2px;
    }
    &__social {
      display: flex;
      justify-content: center;
      margin-top: 20px;
    }
  }
  & .social-item {
    list-style: none;
    margin-right: 30px;
    &:last-child {
      margin-right: 0;
    }

    & a {
      position: relative;
      width: 60px;
      height: 60px;
      display: grid;
      place-items: center;
      margin: 0 8px;
      text-decoration: none;
      cursor: pointer;
      background: #fff;
      color: #0994ff;
      font-size: 1.7em;

      border-radius: 15px;
      box-shadow: 5px 5px 10px rgba(9, 148, 255, 0.25),
        -2px -2px 5px rgba(9, 148, 255, 0.65),
        inset -2px -2px 5px rgba(9, 148, 255, 0.25);
    }
  }
`;
export default function ClaymorphismCard({}: Props) {
  return (
    <StyledClaymorphismCard>
      <div className="card-image">
        <img src={BgImage} alt="" />
      </div>
      <div className="content">
        <h3 className="content__title">Эрдынеева Надежда</h3>
        <span className="content__text">Отличная мама</span>
        <div className="content__social social">
          <li className="social-item">
            <a href="">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li className="social-item">
            <a href="">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li className="social-item">
            <a href="">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
        </div>
      </div>
    </StyledClaymorphismCard>
  );
}
