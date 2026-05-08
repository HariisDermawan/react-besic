const Navigation = ({ listItem }) => {
  return (
    <nav className="flex justify-between bg-blue-400">
      <h1 className="text-2xl font-semibold text-white m-5 flex items-center">
        Logo
      </h1>
      <ul className="flex flex-row gap-8 p-5">
        {listItem.map((item) => (
          <li className="hover:text-blue-200" key={item.id}>
            <a href={item.url}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
