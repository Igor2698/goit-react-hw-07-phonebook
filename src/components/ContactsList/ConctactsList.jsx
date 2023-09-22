import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from 'redux/contactsSlice';

import {
  ContContactList,
  ContListUl,
  ContListText,
  ContListItem,
  ContListBtn,
} from './ContactsList.styled';
import { selectVisibleContacts } from 'redux/selectors/selectors';
const ContactsList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  const dispatch = useDispatch();
  console.log(visibleContacts);

  return (
    <ContContactList>
      <ContListUl>
        {visibleContacts.map(({ id, name, number }) => (
          <ContListItem key={id}>
            <ContListText>
              {name}: <span className="number"> {number}</span>
            </ContListText>

            <ContListBtn type="button" onClick={() => dispatch(deleteTask(id))}>
              Delete
            </ContListBtn>
          </ContListItem>
        ))}
      </ContListUl>
    </ContContactList>
  );
};

export default ContactsList;
