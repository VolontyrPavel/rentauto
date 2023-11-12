import styled from "@emotion/styled";
import background from "../../images/background/background.jpg";

export const Div = styled.div`
  margin: 0 auto;
  text-align: center;
  padding-top: 112px;
  padding-bottom: 112px;

  max-width: 100%;
  height: 432px;

  background-image: var(--grad), url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  max-width: 1440px;

  line-height: 1.11;
  letter-spacing: 0.02em;
  text-align: center;

  span {
    color: #aa0707;
  }

  h1 {
    font-weight: bold;
    font-size: 36px;
    color: #06066d;
  }

  h2 {
    margin-bottom: 75px;
    font-weight: bold;
    font-size: 32px;
    color: #06066d;
  }
`;
