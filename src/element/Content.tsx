import { useParams } from 'react-router-dom';
import BackButton from './BackButton';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = () => {
  const param = useParams<string>();
  console.log(param);
  return (
    <Wrapper>
      <BackButton />
    </Wrapper>
  );
};

export default Content;
