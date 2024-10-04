import { useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";

const FakeAPI = {
  login: async (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const { username, password } = values;

        if (username === "user" && password === "pass") {
          resolve({ success: true, message: "Login successful" });
        } else {
          resolve({ success: false, message: "Invalid credentials" });
        }
      }, 500);
    });
  },
};

const LoginForm = ({ onSubmit }) => {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username (user):</label>
        <input
          type="text"
          name="username"
          value={formValues.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Password (pass):</label>
        <input
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

// First way - useNavigate - Hook
export function LoginNavigate() {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    const response = await FakeAPI.login(values);
    if (response.success) {
      navigate("/profile", { replace: true });
    } else {
      alert(response.message);
    }
  };

  return (
    <div>
      <h1>Login Page - useNavigate - Hook</h1>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

// Second way - Navigate - Component
// export function LoginNavigate() {
//   const [isLoginSuccess, setIsLoginSuccess] = useState(false);

//   const handleSubmit = async (values) => {
//     const response = await FakeAPI.login(values);
//     if (response) {
//       setIsLoginSuccess(response.success);
//     } else {
//       alert(response.message);
//     }
//   };

//   if (isLoginSuccess) {
//     return <Navigate to="/profile" replace />;
//   }

//   return (
//     <div>
//       <h1>Login page - Navigate - Component</h1>
//       <LoginForm onSubmit={handleSubmit} />
//     </div>
//   );
// }
