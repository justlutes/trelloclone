import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import BoardTitleForm from '../atoms/BoardTitleForm';

class ActiveCreateBoard extends React.Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    this.props.submitNewBoard(values.boardTitle);
  }

  render() {
    return (
      <Wrapper>
        <TopWrapper>
          <Title>New Board</Title>
          <CloseBoardIcon
            className="material-icons"
            onClick={() => this.props.cancelCreatingBoard()}
          >
            close
          </CloseBoardIcon>
        </TopWrapper>
        <BodyWrapper>
          <BoardTitle>Name of the board?</BoardTitle>
          <BoardTitleForm onSubmit={this.onSubmit} cancelAction={this.props.cancelCreatingBoard} />
        </BodyWrapper>
      </Wrapper>
    );
  }
}

ActiveCreateBoard.propsTypes = {
  cancelCreatingBoard: PropTypes.func.isRequired,
  submitNewBoard: PropTypes.func.isRequired,
};

const Wrapper = styled.div`
  width: 345px;
  height: auto;
  margin: 20px;
  background-color: #9fe7a4;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5.5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  cursor: pointer;
  transition: 200ms ease-in-out;
  font-weight: 900;
  text-shadow: 0px 0px 3px #000;
  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    transition: 200ms ease-in-out;
    transform: scale(1.1);
  }
`;

const Title = styled.h3`
  color: white;
  text-shadow: 0px 0px 3px #000;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  border-bottom: solid 1px rgb(240, 240, 240);
`;

const CloseBoardIcon = styled.i`
  width: 24px;
  height: 24px;
  padding: 5px;
  transition: all 200ms ease-in-out;
  &:hover {
    transition: all 200ms ease-in-out;
    transform: scale(1.25) rotate(4.5deg);
  }
`;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const BoardTitle = styled.h5`
  color: white;
  text-shadow: 0px 0px 3px #000;
  font-weight: 400;
`;

export default ActiveCreateBoard;
