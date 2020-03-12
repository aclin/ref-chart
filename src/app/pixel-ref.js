import React, {Component} from 'react';
import styled from 'styled-components';
import {StandardChart} from 'components/StandardChart'
import {FlexBox} from 'components/FlexBox'

const RefAppContent = styled.div`
  padding: 16px;
  font-family: Helvetica, Arial, sans-serif;
`;

class RefApp extends Component {
  render() {
    return (
      <RefAppContent>
        <h1>Reference Chart</h1>
        <StandardChart />
        <FlexBox />
      </RefAppContent>
    );
  }
}

export {RefApp}