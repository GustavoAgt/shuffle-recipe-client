/** @jsxRuntime classic */

import React, { FC } from "react";
import { Field } from "formik";
import styled from "@emotion/styled";

/** @jsx jsx */
import { css, jsx } from "@emotion/react";

const Label = styled.label`
  font-size: 1.6rem;
`;

const ErrorContainer = styled.div<{ errorBoxHeight: string | undefined }>`
  font-size: 2.2rem;
  color: #e84d1f;
  text-align: center;
  max-width: 20rem;
  margin: 0 auto;
  height: ${(props) => props.errorBoxHeight || "0"};
`;

type FieldProps = {
  errorVal?: any;
  touchedVal?: any;
  id: string;
  placeholder?: string;
  type: string;
  errorBoxHeight?: string;
  extraError?: string;
  text?: string;
  as?: string;
  value?: any;
  onHandleChange?: any;
  width?: string;
};

const FieldW: FC<FieldProps> = ({
  text,
  id,
  placeholder,
  type,
  errorVal,
  touchedVal,
  errorBoxHeight,
  extraError,
  value,
  as,
  width,
  onHandleChange,
}) => {
  return (
    <>
      <Label htmlFor={id}>{text}</Label>
      <Field
        id={id}
        name={id}
        value={value}
        placeholder={placeholder}
        type={type}
        as={as}
        onChange={onHandleChange}
        css={css`
          padding: 15px 30px;
          margin: 10px 0;
          font-size: 15px;
          border: solid 2px rgb(219, 219, 219);
          border-radius: 10px;
          resize: none;
          width: ${width || "100%"};
          &:focus {
            outline: none;
          }
        `}
      />
      <ErrorContainer errorBoxHeight={errorBoxHeight}>
        {errorVal  && <span>{errorVal}</span>}
        {extraError && <span>{extraError}</span>}
      </ErrorContainer>
    </>
  );
};

export { FieldW };
