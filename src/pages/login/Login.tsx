import { Link, useNavigate } from "react-router-dom";
import InputTopLabel from "../../components/inputFields/InputTopLabel";
import { SyntheticEvent, useEffect, useState } from "react";
import { postLogin } from "../../services/AuthEndPoints";
import { User } from "../../types/authTypes";

type Props = {};

const Login = (props: Props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | undefined>();

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const data: User = {
      email: email,
      password: password,
    };
    try {
      postLogin(data)
        .then(() => {
          localStorage.setItem("username", email);
          localStorage.setItem("isAuthenticated", "true");
          navigate("/home");
          location.reload();
        })
        .catch((err) => {
          console.log(err.response.data.detail);
          setError(err.response.data.detail);
        });
    } catch (error: any) {
      console.log(error);
    }
  };

  const makeErrorUndefined = () => {
    setError(undefined)
  }

  useEffect(() => {
    const timeoutId = setTimeout(makeErrorUndefined, 5000);
    return () => clearTimeout(timeoutId)
  },[error])

  return (
    <div className="absolute w-screen h-screen flex justify-center items-center">
      <div className="border w-[25%] h-[30%] shadow-md shadow-neutral-300 rounded-md flex flex-col justify-center p-4 relative">
        <div className="w-full p-2 flex text-xl text-neutral-500 font-semibold">
          Login
        </div>
        <div className="flex flex-col p-2 space-y-3">
          <InputTopLabel label="Email" setValue={setEmail} type="text" />
          <InputTopLabel
            label="Password"
            setValue={setPassword}
            type="password"
          />
          <div>
            <button
              className="border px-2 py-2 bg-blue-600 text-sm text-blue-200 hover:bg-blue-500 rounded-md"
              onClick={submit}
            >
              Sign in
            </button>
          </div>
        </div>
        <div className="px-2 text-xs text-neutral-600">
          <span className="space-x-2">
            <label htmlFor="">Don't have an account ? Register here</label>
            <span className="text-blue-500">
              <Link to={"/register"}>Register</Link>
            </span>
          </span>
        </div>

        {/* error component */}
        {error != undefined ? (
          <div className="absolute text-xs top-2 left-5 right-5 bg-red-400 rounded-md px-2 py-1 bg-opacity-45 text-red-800 border border-red-300">
            <span>{error}</span>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Login;
