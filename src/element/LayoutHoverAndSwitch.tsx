import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import BackButton from './BackButton';

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 50vw;
  gap: 10px;
  margin-bottom: 5rem;
`;

const Box = styled(motion.div)`
  height: 200px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  width: 50px;
  height: 50px;
  background-color: #ffffff;
  border-radius: 50px;
`;

const Button = styled(motion.button)`
  border: none;
  padding: 0.5rem 0.7rem;
  border-radius: 1rem;
  font-weight: 700;
  color: rgb(14, 70, 253);
  box-shadow: 0px 0px 10px 5px rgb(0, 0, 0, 0.2);
  &:hover {
    cursor: pointer;
  }
`;

const boxVariants = {
  hover: (n: string) => {
    return {
      scale: n === '1' || n === '4' ? 1.1 : 1,
      x: (n === '1' ? '-5%' : 0) || (n === '4' ? '5%' : 0),
      y: (n === '1' ? -10 : 0) || (n === '4' ? 10 : 0),
    };
  },
};

const buttonVariants = {
  switched: {
    scale: 1.2,
    color: 'rgb(11, 214, 170)',
  },
  switchedBack: {
    scale: 1,
  },
};

function LayoutHoverAndSwitch() {
  const [id, setId] = useState<string | null>(null);
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);

  return (
    <Wrapper>
      <BackButton />
      <Grid>
        {['1', '2', '3', '4'].map((n) => {
          return (
            <Box
              custom={n}
              onClick={() => setId(n)}
              key={n}
              layoutId={n}
              variants={boxVariants}
              whileHover="hover"
            >
              {(Number(n) === 2 && !clicked) || (Number(n) === 3 && clicked) ? (
                <Circle layoutId="ball" />
              ) : null}
            </Box>
          );
        })}
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay
            onClick={() => setId(null)}
            initial={{ backgroundColor: 'rgba(0,0,0,0)' }}
            animate={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
            exit={{ backgroundColor: 'rgba(0,0,0,0)' }}
          >
            <Box
              layoutId={id}
              style={{
                width: 400,
                height: 200,
                backgroundColor: 'rgba(255,255,255,1)',
              }}
            />
          </Overlay>
        ) : null}
      </AnimatePresence>
      <Button
        onClick={toggleClicked}
        variants={buttonVariants}
        animate={clicked ? 'switched' : 'switchedBack'}
      >
        Switch
      </Button>
    </Wrapper>
  );
}

export default LayoutHoverAndSwitch;
