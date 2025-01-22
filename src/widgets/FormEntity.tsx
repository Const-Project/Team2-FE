import styled from "@emotion/styled";
import InputComponent from "../components/InputComponent";
import BlackButton from "../components/BlackButton";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FormEntity = () => {
  return (
    <Wrapper>
      <InputComponent inputName="User Name" />
      <InputComponent inputName="PassWord" />
      <BlackButton inputName="GET STARTED" />
    </Wrapper>
  );
};

export default FormEntity;
