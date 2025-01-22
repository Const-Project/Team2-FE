import styled from "@emotion/styled";

interface InputComponentProps {
  inputName: string;
}

const BUTTON = styled.button`
  width: 402px;
  height: 56px;
  border: 1px solid black;
  border-radius: 8px;
  color: #ffffff;
  background-color: #212121;
  cursor: pointer;
`;

const BlackButton: React.FC<InputComponentProps> = ({
  inputName,
}: {
  inputName: string;
}) => {
  return <BUTTON>GET STARTED</BUTTON>;
};

export default BlackButton;
