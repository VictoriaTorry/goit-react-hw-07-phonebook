import { ContactItem } from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { filteredContacts } from '../../redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(filteredContacts);

  const onDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={css.contactList}>
      {contacts?.map(contact => {
        return (
          <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
        );
      })}
    </ul>
  );
};
