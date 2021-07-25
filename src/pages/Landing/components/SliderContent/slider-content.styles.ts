import Slider from 'react-slick';
import styled from 'styled-components';

const StyledSlider = styled(Slider)`
  width: 100%;
  height: 100vh;
  z-index: 1;
`;

const Content = styled.div`
  width: 100%;
  text-align: center;
`;

export { StyledSlider, Content };
