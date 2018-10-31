import React, { Component } from 'react';

import Contact from './Contact';
import { Consumer } from '../../context';

class Contacts extends Component {
  // deleteContact = id => {
  //   // destructure
  //   const { contacts } = this.state;

  //   // state is immutable
  //   // use filter
  //   const newContacts = contacts.filter(contact => contact.id !== id);

  //   // reset state
  //   this.setState({ contacts: newContacts });

  //   // if (id > -1) {
  //   //   this.setState(...this.state.contacts.splice(id, 1));
  //   // }
  //   //
  // };

  render() {
    return (
      <Consumer>
        {/* anything passed into value of context.provider can be accessed in consumer*/}
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contact</span> List
              </h1>{' '}
              {/* React.Fragment disappears after rendering */}
              {contacts.map(contact => (
                <Contact
                  key={contact.id}
                  contact={contact}
                  // deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
