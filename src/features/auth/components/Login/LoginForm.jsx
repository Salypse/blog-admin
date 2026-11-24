import { useState } from "react";
import { useNavigate } from "react-router";
import ErrorList from "../../../../components/Errors/ErrorList/ErrorList";
import ErrorMessage from "../../../../components/Errors/ErrorMessage/ErrorMessage";
import LoadingSpinner from "../../../../components/LoadingSpinner/LoadingSpinner";

function LoginForm() {
  const navigate = useNavigate();
  const [validationErrors, setValidationErrors] = useState([]);
  const [requestError, setRequestError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    setValidationErrors([]);
    setRequestError(false);
    setIsLoading(false);

    // Get form data to send in API post request
    const formData = new FormData(event.currentTarget);
    const formProps = Object.fromEntries(formData);

    try {
      setIsLoading(true);

      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formProps),
      });

      if (!response.ok) {
        // Set error messages
        const data = await response.json();

        if (response.status === 400) {
          setValidationErrors(data.error.errors.map((error) => error.msg));
        } else if (response.status === 401) {
          setValidationErrors([data.error.message]);
        } else {
          console.log("Network error");
        }
      } else {
        // Successful login request
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.error(error);
      setRequestError(true);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {requestError && <ErrorMessage />}
      {validationErrors.length > 0 && <ErrorList errors={validationErrors} />}

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Username: </label>
        <input name="email" type="email" autoComplete="email" />

        <label htmlFor="password">Password: </label>
        <input type="password" name="password" autoComplete="current-password" />

        <button type="submit" disabled={isLoading}>
          {isLoading ? <LoadingSpinner size="small" /> : "Submit"}
        </button>
      </form>
    </>
  );
}

export default LoginForm;
