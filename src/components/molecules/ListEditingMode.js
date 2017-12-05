import React from 'react';
import styled from 'styled-components';
import { Field } from 'redux-form';
import Input from '../atoms/BoardTitleInput';
import DisableListEditMode from '../atoms/DisableListEditMode';

class ListEditingMode extends React.Component {
  render() {
    const { disableListEditMode, handleSubmit } = this.props;
    return (
      <ListEditingModeWrapper>
        <form onSubmit={handleSubmit}>
          <Field name="listItem" component={Input} type="text" placeholder="Add a list" />
        </form>
        <DisableListEditMode disable={disableListEditMode} />
      </ListEditingModeWrapper>
    );
  }
}

const ListEditingModeWrapper = styled.div`
  padding: 20px 12px;
  height: 75px;
  margin: 20px 0;
  background-color: rgba(255, 255, 255, 0.45);
  display: flex;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

export default ListEditingMode;
