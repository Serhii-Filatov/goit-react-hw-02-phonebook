export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button
              id={contact.id}
              onClick={() => deleteContact(contact.id)}
              type="button"
            >
              Delite
            </button>
          </li>
        );
      })}
    </ul>
  );
};
