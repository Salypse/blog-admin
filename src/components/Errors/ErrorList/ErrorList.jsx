function ErrorList({ errors }) {
  return (
    <ul>
      {errors.map((error, index) => (
        <li key={index}>
          <p>{error}</p>
        </li>
      ))}
    </ul>
  );
}

export default ErrorList;
