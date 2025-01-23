import styled from "@emotion/styled";
import LoginHeader from "../widgets/LoginHeader";
import AcountContainer from "../widgets/AcountContainer";
import {keyframes} from "@emotion/react";
interface AnimatedContainerProps {
  delay?: string;
}

const fadeIn = keyframes`
    from {
      opacity:0;
      transform: translateY(-50px);
    }
    to{
      opacity:1;
      transform:translateY(0);
    }
  `;

const AnimatedContainer = styled.div<AnimatedContainerProps>`
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: ${(props) => props.delay || "0s"};
`;

const Wrapper = styled.div`
  width: 100%;
`;

const HeaderWrapper = styled.div`
  flex-shrink: 0; /* Header 크기를 유지 */
  margin-bottom: 38px;
`;

const ContentWrapper = styled.div`
  flex: 1; /* 남은 공간을 차지 */
  display: flex;
  align-items: center; /* 가로 중앙 정렬 */
  justify-content: center; /* 세로 중앙 정렬 */
  margin-top: 120px;
`;

const LayOut = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 800px;
  gap: 133px;
`;

const ForgotPage = () => {
  return (
    <LayOut>
      <Wrapper>
        <HeaderWrapper>
          <LoginHeader />
        </HeaderWrapper>
        <AnimatedContainer delay="0.5s">
          <ContentWrapper>
            <AcountContainer
              largeLetter="Forgot Password?"
              smallLetter="Quick & Simple way to find your password"
            />
          </ContentWrapper>
        </AnimatedContainer>
      </Wrapper>
    </LayOut>
  );
};

export default ForgotPage;
