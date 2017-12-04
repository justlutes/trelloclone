import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../data/board/actions/CreateNewCard';
import CreateCard from '../../components/organisms/CreateCard';

class CreateCardContainer extends React.Component {
  render() {
    return (
      <CreateCard
        listId={this.props.listId}
        archiveCard={this.props.actions.archiveCard}
        activeBoardData={this.props.activeBoardData}
        submitNewCard={this.props.actions.submitNewCard}
      />
    );
  }
}

CreateCardContainer.propTypes = {
  activeBoardData: PropTypes.object,
  actions: PropTypes.object.isRequired,
  listId: PropTypes.string.isRequired,
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
