import styled from "@emotion/styled";
import FormEntity from "./FormEntity";

interface InputComponentProps {
  smallLetter: string;
  largeLetter: string;
}

const Wrapper = styled.div`
  display: flex;
  padding-left: 25.5px;
  flex-direction: column;
  width: 460px;
  height: 520px;
  border-radius: 8px;
  border: 1px solid black;
  background-color: white;
  .Button {
    background: none;
    border: none;
    text-decoration: underline;
    cursor: pointer;
    padding: 0;
    font-size: 11px;

    width: 88px;
    height: 23px;
    margin-bottom: 16px;
  }
  .checkBox {
    font-size: 14px;

    input[type="checkbox"] {
      transform: scale(1.5); /* 체크박스 크기 확대 */
      margin-right: 8px; /* 텍스트와 체크박스 사이 간격 */
    }
    span {
      font-size: 14px; /* 텍스트 크기 */
      font-weight: 500; /* 텍스트 굵기 (필요에 따라 조정) */
      text-decoration: underline;
      position: relative;
      top: -3px;
    }
  }
`;

const LetterWrapper = styled.div`
  width: 300px;
  margin-top: 42px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .small {
    font-size: 12.8px;
    font-weight: 100;
  }
  .big {
    font-size: 25px;
    font-weight: 700;
  }
`;

const FormWrapper = styled.div`
  margin-bottom: 16px;
  margin-top: 45px;
`;

const AcountContainer: React.FC<InputComponentProps> = ({
  smallLetter,
  largeLetter,
}: {
  smallLetter: string;
  largeLetter: string;
}) => {
  return (
    <Wrapper>
      <LetterWrapper>
        <div className="small">{smallLetter}</div>
        <div className="big">{largeLetter}</div>
      </LetterWrapper>
      <FormWrapper>
        <FormEntity />
      </FormWrapper>
      <button className="Button">Forgot Password</button>
      <label className="checkBox">
        <input type="checkbox" />
        <span>Remember Me </span>
      </label>
    </Wrapper>
  );
};

export default AcountContainer;
