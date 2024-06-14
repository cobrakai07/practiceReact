import { useState, ChangeEvent } from "react";

const Password: React.FC = () => {
  const [pass, setPass] = useState<string>("");
  const [ss, setSs] = useState<string>('');
  const [flag, setFlag] = useState<boolean>(true);

  const make = () => {
    if (flag) {
      setSs(pass);
      let str = '';
      for (let i = 0; i < pass.length; i++) str += '*';
      setPass(str);
      setFlag(false);
    } else {
      setPass(ss);
      setFlag(true);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPass(e.target.value);
  };

  return (
    <>
      {pass}
      <br />
      <input
        type="text"
        value={pass}
        onChange={handleChange}
      />
      <button onClick={make}>Eye</button>
    </>
  );
};

export default Password;
