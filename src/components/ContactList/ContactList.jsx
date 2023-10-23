export const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            {/* <button
              id={contact.id}
              onClick={id => handleDeleteContact(id)}
              type="button"
            >
              Delite
            </button> */}
          </li>
        );
      })}
    </ul>
  );
};
