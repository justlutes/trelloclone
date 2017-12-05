import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../data/board/actions/ListEditing';
import ListEditingMode from '../../components/molecules/ListEditingMode';

class ListEditingContainer extends React.Component {
  render() {
    return (
      <ListEditingMode
        disableListEditMode={this.props.actions.disableListEditMode}
        handleSubmit={this.props.handleSubmit}
      />
    );
  }
}

ListEditingContainer.propTypes = {
  activeBoard: PropTypes.object,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = ({ activeBoard }) => ({
  activeBoard,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

function validate(values) {
  const errors = {};

  if (!values.listItem) {
    errors.listItem = 'Please enter a name';
  }

  return errors;
}

const afterSubmit = (result, dispatch) => dispatch(reset('listItem'));

export default reduxForm({
  validate,
  form: 'listItem',
  onSubmitSuccess: afterSubmit,
})(connect(mapStateToProps, mapDispatchToProps)(ListEditingContainer));
