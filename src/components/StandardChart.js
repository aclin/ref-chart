import React, {Component} from 'react';
import styled from 'styled-components';

const SIZES_PX = [72, 96, 192];
const SIZES_RULER = ['1in', '1cm', '11mm'];

const ChartContent = styled.div`
  display: flex;
`;

const DemoBox = styled.div`
  margin: 8px;
`;

const Demo = styled.div`
  width: ${props => props.w};
  height: ${props => props.w};
  background-color: #4444FF;
`;

class StandardChart extends Component {
  render() {
    return (
      <div>
        <h2>Standard Sizes</h2>
        <ChartContent>
          { SIZES_PX.map((s) => <DemoBox>{s}px<Demo w={`${s}px`} /></DemoBox>) }
          { SIZES_RULER.map((s) => <DemoBox>{s}<Demo w={s} /></DemoBox>) }
        </ChartContent>
      </div>
    )
  }
}

export {StandardChart};