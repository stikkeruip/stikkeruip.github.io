import { useState } from "react";
import InputRequired from "./Common/InputRequired";

const Contact = () => {
  const [inputtedInformation, setInputtedInfo] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setInputtedInfo({
      ...inputtedInformation,
      [e.target.name]: e.target.value,
    });
    console.log("i am called");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputtedInformation);
    setInputtedInfo({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="bg-[#222831]" id="getintouch">
      <div className="customContainer">
        <div className="text-center text-white font-montserrat">
          <h2 className="title">Get In Touch</h2>
          <p className="text-xl font-semibold">I'd love to hear from you.</p>
          <p className="text-xl font-semibold">
            | If you have some questions for me. Feel free to ask! |
          </p>
        </div>
        <form
          className="font-rubik text-white py-20 w-[95%] md:w-[70%] lg:w-[60%] m-auto"
          onSubmit={handleSubmit}
        >
          <InputRequired
            label={"First Name"}
            name={"fullName"}
            type={"text"}
            placeholder="Jhon"
            event={handleChange}
          />
          <InputRequired
            label={"Last Name"}
            name={"lastName"}
            type={"text"}
            placeholder="Doe"
            event={handleChange}
          />
          <InputRequired
            label={"Email"}
            name={"email"}
            type={"email"}
            placeholder="jhondoe@gmail.com"
            event={handleChange}
          />

          <div className="pb-2">
            <label htmlFor="first-name" className="block text-lg font-medium ">
              How Can We Work Together?
            </label>
            <div className="mt-1">
              <textarea
                type="text"
                name="message"
                required
                id="message"
                autoComplete="given-name"
                className="py-3 px-4 block w-full shadow-sm text-secondary focus:ring-secondary focus:border-secondary border-gray-300 rounded-md h-[10rem] outline-secondary"
                placeholder="Let's Develop! I need Your Program Management And QA expertise ! Want to go on a hike ?"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex justify-center pt-12">
            <button
              type="submit"
              className="py-2 px-8 border border-secondary rounded-3xl bg-secondary  text-white font-bold hover:text-secondary hover:bg-transparent transform hover:scale-110 duration-500 font-rubik"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="text-center text-secondary text-2xl font-montserrat font-semibold pb-20">
          <h2>(949) 370-2655 | youremail@gmail.com</h2>
        </div>
      </div>
    </section>
  );
};

export default Contact;
