import SignUpForm from "../../components/SignUpForm";

const SignUpPage = () => {
  return (
    <div className="h-full items-center flex justify-center flex-col gap-4 p-2">
      <h1 className="text-3xl">
        Sign Up
      </h1>
      <SignUpForm />
    </div>
  );
}
 
export default SignUpPage;