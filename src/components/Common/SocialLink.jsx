const SocialLink = ({ icon, link, color }) => {
  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-white mr-4 text-3xl ${color} duration-500`}
      >
        {icon}
      </a>
    </>
  );
};

export default SocialLink;
