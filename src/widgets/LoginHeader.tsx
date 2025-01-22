import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-left: 83px;
  padding-top: 37px;
`;

const LOGO = styled.img``;

const LogoWrapper = styled.div`
  font-size: 20px;
  display: flex;
  color: white;
  gap: 7px;

  span {
    position: relative;
    top: 10px;
  }
`;

const SignUp = styled.button`
  background: none;
  border: 2px solid white;
  color: white;
  padding: 12px 40px;
  margin-right: 83px;
`;

const LoginHeader = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <LOGO src="CPLogo.png"></LOGO>
        <span>Const Future</span>
      </LogoWrapper>
      <SignUp>Sign UP</SignUp>
    </Wrapper>
  );
};

export default LoginHeader;
