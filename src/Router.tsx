import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AnimatedSVG from './element/AnimatedSVG';
import DiceLikeButton from './element/DiceLikeButton';
import DraggableBox from './element/DraggableBox';
import LayoutHoverAndSwitch from './element/LayoutHoverAndSwitch';
import LayoutId from './element/LayoutId';
import OverlayOpen from './element/OverlayOpen';
import PopUpAnimation from './element/PopUpAnimation';
import RotateScrollBox from './element/RotateScrollBox';
import Slider from './element/Slider';
import Home from './element/Home';
import Content from './element/Content';

const Router = () => {
  return (
    <BrowserRouter basename="process.env.PUBLIC_URL">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:name" element={<Content />}></Route>
        <Route path="/animatedsvg" element={<AnimatedSVG />}></Route>
        <Route path="/dicelikebutton" element={<DiceLikeButton />}></Route>
        <Route path="/draggablebox" element={<DraggableBox />}></Route>
        <Route
          path="/layoutandswitch"
          element={<LayoutHoverAndSwitch />}
        ></Route>
        <Route path="/layoutid" element={<LayoutId />}></Route>
        <Route path="/overlayopen" element={<OverlayOpen />}></Route>
        <Route path="/popupanimation" element={<PopUpAnimation />}></Route>
        <Route path="/rotatescrollbox" element={<RotateScrollBox />}></Route>
        <Route path="/slider" element={<Slider />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
