import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 380px;
  height: 219px;
`;

const ConstFuture = styled.div`
  width: 380px;
  height: 60px;
  color: #ffffff;
  font-size: 39.06px;
  font-weight: 700;
`;
const Introduce = styled.div`
  color: #ffffff;
  font-size: 24px;
`;

const LetterContainer: React.FC = () => {
  return (
    <Wrapper>
      <ConstFuture>Const Future</ConstFuture>
      <Introduce>오유준 이호재 이태경 천성호 let's go</Introduce>
    </Wrapper>
  );
};

export default LetterContainer;
