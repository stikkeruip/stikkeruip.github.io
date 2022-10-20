const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#222831]">
      <div className="bg-secondary w-full h-1"></div>
      <h2 className="py-12 text-secondary text-center font-montserrat font-semibold">
        &copy; {year}. Uipko Stikker, Inc.
      </h2>
    </footer>
  );
};

export default Footer;
