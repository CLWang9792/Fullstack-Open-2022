const Note = ({ persons }) => {
  return (
    <li>
      {persons.name} {persons.number}
    </li>
  );
};

export default Note;
