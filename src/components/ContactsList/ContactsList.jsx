import { DeleteBtn, ItemContact } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
      <ul>
        {contacts.map(contact => (
          <ItemContact key={contact.id}>
            {contact.name + ': ' + contact.tel}{' '}
            <DeleteBtn onClick={() => onDelete(contact.id)}>Delete</DeleteBtn>
          </ItemContact>
        ))}
      </ul>
    </>
  );
};
