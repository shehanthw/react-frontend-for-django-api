import { Link, useNavigate  } from "react-router-dom";
import InputTopLabel from "../../components/inputFields/InputTopLabel";
import { SyntheticEvent, useState } from "react";
import axios from "axios";

type Props = {};

const Register = (props: Props) => {

  const navigate = useNavigate();

  const [name, setName] = useState<string | null>();
  const [email, setEmail] = useState<string | null>();
  const [password, setPassword] = useState<string | null>();

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      password: password
    }
    console.log(data)

    try {
      const response = await axios.post("http://localhost:8000/api/register", data);
      console.log(response)
      navigate("/login");
    } catch (error: any) {
      console.log(error.response.data.email);
    }
  }

  return (
    <div className="absolute w-screen h-screen flex justify-center items-center">
      <div className="border w-[25%] h-[35%] shadow-md shadow-neutral-300 rounded-md flex flex-col justify-center p-4">
        <div className="w-full p-2 flex text-xl text-neutral-500 font-semibold">
          Register
        </div>
        <div className="flex flex-col p-2 space-y-3">
          <InputTopLabel label="Name" setValue={setName} type="text" />
          <InputTopLabel label="Email" setValue={setEmail} type="text" />
          <InputTopLabel label="Password" setValue={setPassword} type="password" />
          <div>
            <button className="border px-2 py-2 bg-blue-600 text-sm text-blue-200 hover:bg-blue-500 rounded-md" onClick={submit}>
              Sign-up
            </button>
          </div>
        </div>
        <div className="px-2 text-xs text-neutral-600">
          <span className="space-x-2">
            <label htmlFor="">Aleady have an account ? Login here</label>
            <span className="text-blue-500">
              <Link to={"/login"}>Login</Link>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
