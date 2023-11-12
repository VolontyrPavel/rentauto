import styled from "@emotion/styled";

export const Li = styled.li`
  width: 274px;
  height: 426px;
`;

export const Img = styled.div`
  position: relative;
  border-radius: 14px;
  margin-bottom: 14px;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;

    width: 274px;
    height: 268px;

    border-radius: 14px;
  }

  img {
    width: 274px;
    height: 268px;
    object-fit: cover;
  }

  button {
    position: absolute;
    top: 14px;
    right: 14px;
    z-index: 0.2;

    svg {
      fill: transparent;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;

  span {
    color: #3470ff;
  }
`;

export const Description = styled.ul`
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 6px;
  row-gap: 4px;

  height: 40px;

  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 1.5;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ModalButton = styled.button`
  display: flex;
  width: 100%;
  height: 44px;
  padding: 12px;
  justify-content: center;
  align-items: center;

  border-radius: 12px;
  background: #3470ff;

  color: white;
  font-weight: 600;
  line-height: 1.42;

  :hover,
  :focus {
    background: #0b44cd;
  }
`;
