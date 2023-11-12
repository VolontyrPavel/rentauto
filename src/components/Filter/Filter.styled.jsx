import styled from "@emotion/styled";

export const Form = styled.form`
  padding-left: 290px;
  margin-top: 10px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  gap: 18px;

  button {
    display: flex;
    width: 136px;
    height: 48px;
    padding: 14px 44px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    border-radius: 12px;
    background: #3470ff;

    color: white;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.42;
  }

  button:hover,
  :focus {
    background: #0b44cd;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  p {
    color: #8a8a89;

    font-size: 14px;
    font-weight: 500;
    line-height: 1.28;
  }
`;

export const Input = styled.div`
  display: flex;
`;
