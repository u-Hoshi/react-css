import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <>
      <Container>
        <p>StyledComponents</p>
        <button>fight!</button>
      </Container>
    </>
  );
};

const Container = styled.div`
  border: solid 2px orange;
  border-radius: 20px;
  padding: 8px;
`;
