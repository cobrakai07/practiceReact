import { useRef, useState } from "react";

function OTPInput({ length = 6, onComplete }) {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (!/^[0-9]?$/.test(value)) return; // Only allow numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < length - 1) {
      inputRefs.current[index + 1].focus(); // Move to next input
    }

    if (newOtp.join("").length === length) {
      onComplete(newOtp.join(""));
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus(); // Move to previous input on backspace
    }
  };

  return (
    <div className="flex gap-2">
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          value={digit}
          maxLength={1}
          onChange={(e) => handleChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          className="w-10 h-10 text-center border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
        />
      ))}
    </div>
  );
}

export default function Otp() {
  const handleOtpComplete = (otp) => {
    console.log("Entered OTP:", otp);
    alert(`OTP Entered: ${otp}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="mb-4 text-lg font-bold">Enter OTP</h2>
      <OTPInput length={6} onComplete={handleOtpComplete} />
    </div>
  );
}
