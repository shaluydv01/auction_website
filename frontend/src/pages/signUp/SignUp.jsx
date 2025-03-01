import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh !important" }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="d-flex flex-column gap-4 p-5 rounded border-2 border-black border"
      >
        <input
          placeholder="Enter Full Name"
          type="string"
          {...register("fullName")}
        />
        <input
          placeholder="shalu123@gmail.com"
          type="email"
          {...register("Email")}
        />
        <input type="password" placeholder="Enter your password" />
        <input
          type="password"
          placeholder="Confirm Password"
          {...register("Password")}
        />
        <select {...register("gender")}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        <input type="submit" />
      </form>
    </div>
  );
}


