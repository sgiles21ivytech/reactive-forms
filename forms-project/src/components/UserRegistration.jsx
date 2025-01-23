import { useState } from "react";

const UserRegistration = ({ onAddUser }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "firstName") {
      setFormErrors({
        ...formErrors,
        firstName:
          value.length < 2 ? "First Name must be at least 2 characters!" : "",
      });
    } else if (name === "lastName") {
      setFormErrors({
        ...formErrors,
        lastName:
          value.length < 2 ? "Last Name must be at least 2 characters!" : "",
      });
    } else if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setFormErrors({
        ...formErrors,
        email: !emailRegex.test(value) ? "Invalid email format!" : "",
      });
    } else if (name === "password") {
      setFormErrors({
        ...formErrors,
        password:
          value.length < 8 ? "Password must be at least 8 characters!" : "",
      });
    } else if (name === "confirmPassword") {
      setFormErrors({
        ...formErrors,
        confirmPassword:
          value !== formData.password ? "Passwords do not match!" : "",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddUser({ ...formData });
    setFormSubmitted(true);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setFormErrors({});
  };

  return (
    <>
      <div className="UserRegistrationForm">
        <form onSubmit={handleSubmit}>
          <h1>
            {formSubmitted
              ? "Thank you for submitting the form!"
              : "Welcome! Please submit the form"}
          </h1>

          <div className="userInput">
            <label htmlFor="firstName">First Name:</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="Please enter First Name"
            />
            {formErrors.firstName && <p>{formErrors.firstName}</p>}
          </div>

          <div className="userInput">
            <label htmlFor="lastName">Last Name:</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Please enter Last Name"
            />
            {formErrors.lastName && <p>{formErrors.lastName}</p>}
          </div>

          <div className="userInput">
            <label htmlFor="email">Email Address:</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Please enter your Email"
            />
            {formErrors.email && <p>{formErrors.email}</p>}
          </div>

          <div className="userInput">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Please enter Password"
            />
            {formErrors.password && <p>{formErrors.password}</p>}
          </div>

          <div className="userInput">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Please confirm Password"
            />
            {formErrors.confirmPassword && <p>{formErrors.confirmPassword}</p>}
          </div>

          <input className="userInput" type="submit" value="Create User" />
        </form>
      </div>
    </>
  );
};

export default UserRegistration;
