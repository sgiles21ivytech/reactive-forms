import { useState } from "react";

const SubmissionForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submittedUserData, setSubmittedUserData] = useState({});

  const createUser = (e) => {
    e.preventDefault();

    const newUser = { firstName, lastName, email, password };
    setSubmittedUserData(newUser);
    setFormSubmitted(true);

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    setFirstNameError(
      e.target.value.length === 0
        ? ""
        : e.target.value.length < 2
        ? "First Name must be at least 2 characters!"
        : ""
    );
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
    setLastNameError(
      e.target.value.length === 0
        ? ""
        : e.target.value.length < 2
        ? "Last Name must be at least 2 characters!"
        : ""
    );
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError(
      e.target.value.length === 0
        ? ""
        : e.target.value.length < 8
        ? "Email must be at least 8 characters!"
        : ""
    );
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError(
      e.target.value.length === 0
        ? ""
        : e.target.value.length < 8
        ? "Password must be at least 8 characters"
        : ""
    );
  };

  const handleConfirmPassword = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    setConfirmPasswordError(
      e.target.value.length === 0
        ? ""
        : newConfirmPassword !== password
        ? "Passwords do not match!"
        : ""
    );
  };

  return (
    <>
      <div className="SubmissionForm">
        <form onSubmit={createUser}>
          {formSubmitted ? (
            <h1>Thank you for submitting the form!</h1>
          ) : (
            <h1>Welcome! Please submit the form</h1>
          )}

          <div className="userInput">
            <label> First Name: </label>
            <input
              className={firstNameError ? "error" : ""}
              type="text"
              value={firstName}
              onChange={handleFirstName}
              placeholder="Please enter First Name"
            />
            {firstNameError && <p>{firstNameError}</p>}
          </div>

          <div className="userInput">
            <label> Last Name: </label>
            <input
              className={lastNameError ? "error" : ""}
              type="text"
              value={lastName}
              onChange={handleLastName}
              placeholder="Please enter Last Name"
            />
            {lastNameError && <p>{lastNameError}</p>}
          </div>

          <div className="userInput">
            <label> Email Address: </label>
            <input
              className={emailError ? "error" : ""}
              type="text"
              value={email}
              onChange={handleEmail}
              placeholder="Please enter your Email"
            />
            {emailError && <p>{emailError}</p>}
          </div>

          <div className="userInput">
            <label> Password: </label>
            <input
              className={passwordError ? "error" : ""}
              type="password"
              value={password}
              onChange={handlePassword}
              placeholder="Please enter Password"
            />
            {passwordError && <p>{passwordError}</p>}
          </div>

          <div className="userInput">
            <label> Confirm Password: </label>
            <input
              className={confirmPasswordError ? "error" : ""}
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPassword}
              placeholder="Please confirm Password"
            />
            {confirmPasswordError && <p>{confirmPasswordError}</p>}
          </div>

          <input className="userInput" type="submit" value="Create User" />
        </form>

        {formSubmitted && (
          <div className="userDetails">
            <h2>Users:</h2>
            <p>First Name: {submittedUserData.firstName}</p>
            <p>Last Name: {submittedUserData.lastName}</p>
            <p>Email: {submittedUserData.email}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default SubmissionForm;
