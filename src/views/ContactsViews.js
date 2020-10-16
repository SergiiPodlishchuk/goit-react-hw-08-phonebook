import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";

import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import Filter from "../components/Filter/Filter";

import contactsOperation from "../redux/contacts/contactOperations";
import contactSelectors from "../redux/contacts/contactSelectors";

class ContactsViews extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    return (
      <div className="phoneBook_container">
        <CSSTransition
          in={true}
          appear={true}
          classNames="title_anim"
          timeout={500}
          unmountOnExit
        >
          <h1 className="title">Phonebook</h1>
        </CSSTransition>

        <CSSTransition
          in={true}
          appear={true}
          classNames="form_fade"
          timeout={500}
          unmountOnExit
        >
          <ContactForm />
        </CSSTransition>
        <Filter />
        {this.props.isLoadingContacts && <h1>грузим</h1>}
        <ContactList />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoadingContacts: contactSelectors.getLoading(state),
});

const mapDispatchToProps = {
  onFetchContacts: contactsOperation.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsViews);
