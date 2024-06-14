import { useState } from "react";

const Password = () => {
  const [pass, setPass] = useState("");
  const [ss, setSs] = useState('');
  const [flag, setFlag] = useState(true);

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

  return (
    <>
      {pass}
      <br />
      <input
        type="text"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button onClick={make}>Eye</button>
    </>
  );
};

export default Password;
