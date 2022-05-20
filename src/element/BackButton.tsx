import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = styled.nav`
  display: block;
  position: absolute;
  top: 2rem;
  left: 2rem;
`;
const Button = styled(motion.button)`
  font-size: 1.2rem;
  color: #fff;
  border: none;
  background-color: transparent;
  border-radius: 1rem;
  padding: 0.3rem 0.7rem;
`;

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <Nav>
      <Button
        onClick={() => navigate('/')}
        whileHover={{
          cursor: 'pointer',
          color: 'rgb(50, 81, 255)',
          y: -5,
        }}
        transition={{ y: { type: 'spring', duration: 0.5, bounce: 0.8 } }}
      >
        Back
      </Button>
    </Nav>
  );
};

export default BackButton;
