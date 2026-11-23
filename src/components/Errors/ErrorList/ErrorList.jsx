function ErrorList({ errors }) {
  return (
    <ul>
      {errors.map((error) => (
        <li>
          <p>{error}</p>
        </li>
      ))}
    </ul>
  );
}

export default ErrorList;
