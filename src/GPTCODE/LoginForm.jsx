import React from "react";
import FrontPage from "./FrontPage";

function LoginForm() {
  // State to store the values of the username and password fields
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [age, setAge] = React.useState("");
  const [weight, setWeight] = React.useState("");
  const [height, setHeight] = React.useState("");
  const [activityLevel, setActivityLevel] = React.useState("sedentary");
  const [sex, setSex] = React.useState("male");
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  // State to track whether the user is logging in or registering
  const [isLogin, setIsLogin] = React.useState(true);

  // Function to handle the submission of the login form
  const handleLoginSubmit = (event) => {
    event.preventDefault();

    // Call the login function with the username and password
    if(username === "Delta" && password === "1234"){
      setUsername("Delta");
      setPassword("1234");
      setEmail("deltaforce94@hotmail.es");
      setAge("28");
      setWeight("77");
      setHeight("186");
      setActivityLevel("light");
      setSex("male");
      setIsSubmitted(true);
    }
  }

  // Function to handle the submission of the registration form
  const handleRegisterSubmit = (event) => {
    event.preventDefault();

  // Call the register function with the form data
  setIsSubmitted(true);
    console.log({
      username,
      password,
      email,
      age,
      weight,
      height,
      activityLevel,
      sex
    });
  }


  if (isSubmitted) {
    return (
    <FrontPage 
      name={username} 
      password={password} 
      email={email}
      age={age}
      sex={sex}
      weight={weight}
      height={height}
      activityLevel={activityLevel}
    />
    );
  }
  return (
    <div>
      {isLogin ? (
        <form onSubmit={handleLoginSubmit}>
          <label>
            Usuario:
            <input
              className="form-input"
              required
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
          <label>
            Contraseña:
            <input
              className="form-input"
              required
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <input type="submit" value="Enviar" />
          <p>¿No tienes una cuenta?</p>
          <button onClick={() => setIsLogin(false)}>
            Registrarse
          </button>
        </form>
      ) : (
        <form onSubmit={handleRegisterSubmit}>
          <label>
            Usuario:
            <input
              className="form-input"
              required
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
          <label>
            Contraseña:
            <input
              className="form-input"
              required
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              className="form-input"
              required
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label>
            Edad:
            <input
              className="form-input"
              required
              type="number"
              value={age}
              onChange={(event) => setAge(event.target.value)}
            />
          </label>
          <label>
            Peso (en kg):
            <input
              className="form-input"
              required
              type="number"
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
            />
          </label>
          <label>
            Altura (en cm):
            <input
              className="form-input"
              required
              type="number"
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            />
          </label>
          <label>
            Nivel de actividad:
            <select value={activityLevel} onChange={(event) => setActivityLevel(event.target.value)}>
              <option value="sedentary">Sedentario</option>
              <option value="light">Ligero</option>
              <option value="moderate">Moderado</option>
              <option value="active">Activo</option>
              <option value="veryActive">Muy activo</option>
            </select>
          </label>
          <label>
            Sexo:
            <select value={sex} onChange={(event) => setSex(event.target.value)}>
              <option value="male">Hombre</option>
              <option value="female">Mujer</option>
            </select>
          </label>
          <input type="submit" value="Enviar" />
          <p>¿Ya tienes una cuenta?</p>
          <button onClick={() => setIsLogin(true)}>
            Login
          </button>
        </form>
      )}
    </div>
  );
}

export default LoginForm;
