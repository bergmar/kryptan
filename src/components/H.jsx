const H = ({ children, level }) => {
  switch (level) {
    case 2:
      return <h2 className="font-bold text-xl">{children}</h2>;
    case 3:
      return <h3 className="font-bold text-lg">{children}</h3>;
    default:
      return <h1 className="font-bold text-2xl">{children}</h1>;
  }
};

export default H;
