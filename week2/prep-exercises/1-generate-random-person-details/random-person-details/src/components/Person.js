function Person({ personData }) {
  return(
    <ul>
      {personData ? (
        <>
          <li>First Name: {personData.first_name}</li>
          <li>Last Name: {personData.last_name}</li>
          <li>Email: {personData.email}</li>
          <li>Phone: {personData.phone}</li>
        </>
      ) : (
        <li>Loading...</li>
      )}
    </ul>
  );
}

export default Person;
