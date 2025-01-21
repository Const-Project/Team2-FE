import styled from "@emotion/styled";

const LOGO = styled.img`
  width: 64.3px;
  height: 64px;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Letter = styled.div`
  width: 323px;
  height: 23px;
  font-size: 24px;
  color: #ffffff;
  margin-left: 11px;
  margin-top: 24px;
`;

const Logo: React.FC = () => {
  return (
    <Wrapper>
      <LOGO src="ethereum.jpeg" />
      <Letter>홍익대학교 컴퓨터공학과의 미래</Letter>
    </Wrapper>
  );
};

export default Logo;
