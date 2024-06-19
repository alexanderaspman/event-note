import CheckViewport from "@/components/checkViewPort"
import LoginComponent from "@/components/loginComponent"
import Image from "next/image"
import Home from "../page"
import { useActionState } from "react";
import { signUpNewUser } from "@/handlers/api";

const imageLoader = ({ src}:any) => {
    return `https://app.crystallize.com/@alexanderaspmannu/en/assets/photo/alexanderaspmannu/24/3/14/1/${src}`
  }
   

export default function LoginPage() {
  async function signup(prevState:any, formData:any) {
    "use server";
    const email = formData.get("email");
    try {
      await signUpNewUser(email,email);
      alert(`Added "${email}"`);
    } catch (error:any) {
      return error.toString();
    }
  }
  const [message, signupAction] = useActionState(signup, null);
  return (
    <>
      <h1>Signup for my newsletter</h1>
      <p>Signup with the same email twice to see an error</p>
      <form action={signupAction} id="signup-form">
        <label htmlFor="email">Email: </label>
        <input name="email" id="email" placeholder="react@example.com" />
        <button>Sign up</button>
        {!!message && <p>{message}</p>}
      </form>
    </>
  );
}

  