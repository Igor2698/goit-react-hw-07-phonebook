import Form from '../Form';
import Section from '../Section';
import ContactsList from '../ContactsList';
import Filter from '../Filter';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors/selectors';
import { selectVisibleContacts } from 'redux/selectors/selectors';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <div>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section>
        <Filter />
        {contacts.length > 0 && visibleContacts.length === 0 && (
          <p>No one found with that name</p>
        )}
        {contacts.length === 0 && (
          <p>Please add contact by click on "Add conctact" button</p>
        )}
        {contacts.length > 0 && <ContactsList />}
      </Section>
    </div>
  );
};
