import { FC } from "react";
import styled from "@emotion/styled";

type Props = {
  value: any;
  className?: string;
  type?: "button" | "submit" | undefined;
  disabled?: boolean;
  fontSize?: string;
  marginTop?: string;
  marginBottom?: string;
  width?: string;
  radius?: string;
  onClick?: () => void;
};

const Button: FC<Props> = ({
  value,
  className,
  type,
  disabled = false,
  fontSize,
  marginTop,
  marginBottom,
  width,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`primary-button ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

const PrimaryButton = styled(Button)<Props>`
  text-transform: uppercase;
  padding: 20px 40px;
  border-radius: 30px;
  font-size: ${(props) => props.fontSize || "15px"};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  color: rgb(255, 255, 255);
  background: linear-gradient(45deg, var(--primary-color), var(--primary-color));
  border: none;
  width: ${(props) => props.width || "100%"};

  &:hover {
    cursor: ${(props) => !props.disabled && "pointer"};
    background: ${(props) =>
      !props.disabled &&
      "linear-gradient(260deg, var(--primary-color), var(--primary-color))"};
    transform: ${(props) => !props.disabled && "scale(1.02)"};
  }
  @media only screen and (max-width: 768px) {
    padding: 16px 30px;
    margin-bottom: 1.5rem;
    font-size: ${(props) => props.fontSize || "14px"};
    &:hover {
      transform: ${(props) => !props.disabled && "scale(1)"};
    }
  }
`;
export { PrimaryButton };
