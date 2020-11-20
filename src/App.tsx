import React from 'react';
import styled from 'styled-components'
import MainContent from './components/MainContent';

const Container = styled.div`
  background-color: #FFFFF0;
`

const Header = styled.header`
  height: 60px;
  background-color: grey;
  padding-left: 15px;
  padding-top: 10px;
`

function App() {
  return <Container>
    <Header>
      Country List
    </Header>
    <MainContent />
  </Container>
}

export default App
