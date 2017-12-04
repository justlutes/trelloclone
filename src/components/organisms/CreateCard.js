import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import uuid from 'uuid/v4';
import Input from '../atoms/BoardTitleInput';
import Card from '../atoms/Card';

class CreateCard extends React.Component {
  constructor() {
    super();

    this.submit = this.submit.bind(this);
    this.renderCards = this.renderCards.bind(this);
  }

  submit(values) {
    const { listId } = this.props;
    const cardName = `cardName_${listId}`;
    this.props.submitNewCard(values[cardName], uuid(), listId);
  }

  renderCards() {
    const { activeBoardData, listId } = this.props;
    return activeBoardData.listItems[listId].cards.map((card, i) => (
      <Card key={i} title={card.name} listId={card.listId} archiveCard={this.props.archiveCard} />
    ));
  }

  render() {
    const { handleSubmit, listId } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.submit)}>
          <label>
            <Field type="text" component={Input} name={`cardName_${listId}`} />
          </label>
        </form>
        {this.renderCards()}
      </div>
    );
  }
}

CreateCard.proptypes = {
  archiveCard: PropTypes.func.isRequired,
  activeBoardData: PropTypes.object.isRequired,
  listId: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default CreateCard;
