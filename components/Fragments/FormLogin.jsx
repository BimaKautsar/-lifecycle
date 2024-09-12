import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email",event.target.email.value);
    localStorage.setItem("password",event.target.password.value);
    window.location.href = "/products";
  };
    return (
      <form onSubmit={handleLogin}>
        <InputForm
          label="Email"
          placeholder="Example@gmail.com"
          type="email"
          name="email"
        />
        <InputForm
          label="Password"
          name="password"
          type="password"
          placeholder="********"
        />
        <Button classname="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full" type="submit">
          Login
        </Button>
      </form>
    );
};

export default FormLogin;