function ErrorMessage({ onClick }) {
  return (
    <>
      <p>Something went wrong. Please try again.</p>

      {onClick && <button onClick={onclick}>Retry</button>}
    </>
  );
}

export default ErrorMessage;
