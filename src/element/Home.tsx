import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const Desc = styled.p`
  font-size: 1rem;
  margin-bottom: 1.2rem;
`;

const Item = styled.li`
  font-size: 1.2rem;
  &:hover {
    font-weight: bold;
  }
`;

const Home = () => {
  return (
    <>
      <Title>Framer Motion Examples</Title>
      <Desc>These are the animation examples using Framer Motion.</Desc>
      <ul>
        <Item>
          <Link to="animatedsvg">Animated SVG</Link>
        </Item>
        <Item>
          <Link to="dicelikebutton">DiceLikeButton</Link>
        </Item>
        <Item>
          <Link to="draggablebox">Draggable Box</Link>
        </Item>
        <Item>
          <Link to="layoutandswitch">Layout And Switch</Link>
        </Item>
        <Item>
          <Link to="layoutid">Ball Switch between two boxes</Link>
        </Item>
        <Item>
          <Link to="overlayopen">Pop up animation</Link>
        </Item>
        <Item>
          <Link to="popupanimation">box open animation</Link>
        </Item>
        <Item>
          <Link to="rotatescrollbox">Rotating box scroll</Link>
        </Item>
        <Item>
          <Link to="slider">Slider</Link>
        </Item>
      </ul>
    </>
  );
};

export default Home;
