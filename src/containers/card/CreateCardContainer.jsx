import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../data/board/actions/CreateNewCard';
import CreateCard from '../../components/organisms/CreateCard';

const CreateCardContainer = ({
  actions: { archiveCard, submitNewCard },
  activeBoardData,
  handleSubmit,
  listId,
}) => (
  <CreateCard
    listId={listId}
    archiveCard={archiveCard}
    activeBoardData={activeBoardData}
    submitNewCard={submitNewCard}
    handleSubmit={handleSubmit}
  />
);

CreateCardContainer.propTypes = {
  activeBoardData: PropTypes.shape({
    listItems: PropTypes.objectOf(PropTypes.object),
  }).isRequired,
  actions: PropTypes.shape({
    archiveCard: PropTypes.func,
    submitNewCard: PropTypes.func,
  }).isRequired,
  listId: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = ({ activeBoardData }) => ({
  activeBoardData,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

const validate = (values, props) => {
  const errors = {};
  const { listId } = props;
  const cardName = `cardName_${listId}`;

  if (!values[cardName]) {
    errors[cardName] = 'Please enter a name';
  }
  return errors;
};

const afterSubmit = (result, dispatch) => dispatch(reset('card'));

export default reduxForm({
  validate,
  form: 'card',
  onSubmitSuccess: afterSubmit,
})(connect(mapStateToProps, mapDispatchToProps)(CreateCardContainer));
