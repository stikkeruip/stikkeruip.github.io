const InputRequired = ({ name, type, label, placeholder, event }) => {
  return (
    <>
      <div className="pb-2">
        <label htmlFor="first-name" className="block text-lg font-medium ">
          {label}
        </label>
        <div className="mt-1">
          <input
            type={type}
            name={name}
            id={name}
            className="py-3 px-4 block w-full shadow-sm text-secondary focus:ring-secondary focus:border-secondary outline-secondary border-gray-300 rounded-md "
            required
            placeholder={placeholder}
            onChange={event}
          />
        </div>
      </div>
    </>
  );
};

export default InputRequired;
