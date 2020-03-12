import React, {Component} from 'react';
import styled from 'styled-components';
import {Section} from '../styles/layout-styles';

const FlexBoxLayout = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
`;

const Box = styled.div`
  margin: 8px;
  width: 128px;
  height: 64px;
  border-radius: 4px;
  border: 4px solid #ff3333;
  text-align: center;
  color: #ff3333;
  flex: 0 0 auto;
`;

const Button = styled.button`
  margin: 8px;
  padding 8px;
`;

class FlexBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxCount: 5
    };
  }

  addBox = () => {
    if (this.state.boxCount < 20) {
      this.setState({
        boxCount: this.state.boxCount + 1
      });
    }
  };

  removeBox = () => {
    if (this.state.boxCount > 3) {
      this.setState({
        boxCount: this.state.boxCount - 1
      });
    }
  };

  render() {
    let boxes = [];
    for (let i = 0; i < this.state.boxCount; i++) {
      boxes.push(<Box><p>{i+1}</p></Box>);
    }
    return (
      <Section>
        <h3>Basic demo using flex</h3>
        <div>
          <Button onClick={this.addBox}>Add box</Button>
          <Button onClick={this.removeBox}>Remove box</Button>
        </div>
        <FlexBoxLayout>
          {boxes}
        </FlexBoxLayout>
      </Section>
    );
  }
}

export {FlexBox};