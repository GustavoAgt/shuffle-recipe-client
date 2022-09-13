import styled from "@emotion/styled";
import { FC } from "react";
import { Recipe } from "../../types/recipe.type";

type ImgProps = {
  img?: string;
};
const Container = styled.div`
  width: 40rem;
  height: 50rem;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  &:hover {
    transform: scale(1.02);
  }
`;

const ImgContainer = styled.div<ImgProps>`
  width: 100%;
  height: 20rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  background: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Content = styled.div`
  padding: 0 2rem 0 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  text-transform: uppercase;
  color: var(--primary-color);
`;

const CooingTimeText = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--primary-color);
`;

const HR = styled.hr`
  margin: 2.5rem 0;
  border: 0;
  height: 0.09rem;
  background: #333;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(0%, hsla(0, 0%, 0%, 0)),
    color-stop(50%, hsla(0, 0%, 0%, 0.75)),
    color-stop(100%, hsla(0, 0%, 0%, 0))
  );
  background: -webkit-linear-gradient(
    left,
    hsla(0, 0%, 0%, 0) 0%,
    hsla(0, 0%, 0%, 0.75) 50%,
    hsla(0, 0%, 0%, 0) 100%
  );
  background: -moz-linear-gradient(
    left,
    hsla(0, 0%, 0%, 0) 0%,
    hsla(0, 0%, 0%, 0.75) 50%,
    hsla(0, 0%, 0%, 0) 100%
  );
  background: -ms-linear-gradient(
    left,
    hsla(0, 0%, 0%, 0) 0%,
    hsla(0, 0%, 0%, 0.75) 50%,
    hsla(0, 0%, 0%, 0) 100%
  );
  background: -o-linear-gradient(
    left,
    hsla(0, 0%, 0%, 0) 0%,
    hsla(0, 0%, 0%, 0.75) 50%,
    hsla(0, 0%, 0%, 0) 100%
  );
  background: linear-gradient(
    left,
    hsla(0, 0%, 0%, 0) 0%,
    hsla(0, 0%, 0%, 0.75) 50%,
    hsla(0, 0%, 0%, 0) 100%
  );
`;

const Text = styled.span`
  font-size: 1.8rem;
  display: inline-block;
  color: var(--primary-color);
`;

const Author = styled.span`
  font-size: 1.8rem;
  font-weight: 700;
`;

const Description = styled.p`
  color: var(--primary-color);
  text-overflow: ellipsis;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 1;
  -webkit-box-orient: vertical;
  font-weight: bold;
  font-size: 1.6rem;
`;

const Card: FC<Recipe> = ({ img, title, duration, description, user }) => {
  return (
    <Container>
      <ImgContainer img={img}></ImgContainer>
      <Content>
        <Title>{title}</Title>
        <CooingTimeText>Time: {`${duration} hr~`}</CooingTimeText>
        <HR />
        <Description>{description}</Description>
        <HR />

        <Text>
          Author: <Author>{user?.username}</Author>
        </Text>
      </Content>
    </Container>
  );
};

export default Card;
