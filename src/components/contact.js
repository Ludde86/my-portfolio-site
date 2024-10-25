import React, { useState } from "react";
import "./contact.css";

import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

const Contact = () => {
  const { register, reset, handleSubmit } = useForm();

  const [from, setFrom] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);
  // const [result, setResult] = useState("Ditt meddelande har skickats!");

  const handleSetFrom = (e) => {
    setFrom(e.target.value);
  };

  const accessKey = process.env.REACT_APP_ACCESS_KEY;

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: from,
      subject: "Nytt kontaktmeddelande från din webbplats",
      // ... other settings
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult("Ditt meddelande har skickats!");
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(
        "Det gick tyvärr inte att skicka ditt meddelande just nu. Försök igen om en liten stund!"
      );
    },
  });

  return (
    <div className="contact-container">
      <form
        className="contact-container-form-grid"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="contact-container-form-grid-container">
          <input
            type="text"
            placeholder="Namn"
            onInvalid={(e) => e.target.setCustomValidity("Ange ditt namn")}
            {...register("name", { required: true })}
            onChange={handleSetFrom}
            required
          />
        </div>

        <div className="contact-container-form-grid-container">
          <input
            type="email"
            placeholder="E-post"
            onInvalid={(e) => e.target.setCustomValidity("Ange din e-post")}
            {...register("email", { required: true })}
            required
          />
        </div>

        <div></div>

        <div className="contact-container-form-grid-container-col-3">
          <textarea
            type="text"
            placeholder="Meddelande"
            onInvalid={(e) =>
              e.target.setCustomValidity("Skriv ett meddelande")
            }
            {...register("message", { required: true })}
            required
          />

          <button>Skicka meddelande</button>
        </div>

        <div className="contact-container-form-grid-container-col-3">
          <p>{result}</p>
        </div>
      </form>
    </div>
  );
};

export default Contact;
