import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Navbar() {
  const { searchParam, setSearchParam,handleSubmit } = useContext(GlobalContext);



  return (
    <div>
      <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto">
        <Link to={"/"}>
          <div className="ml-5">
            <h1 className=" text-gray-800 font-bold text-xl sm:text-2 xl md:text-3xl cursor-pointer tracking-wide">
              FoodStore
            </h1>
          </div>
        </Link>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            value={searchParam}
            onChange={(event) => setSearchParam(event.target.value)}
            placeholder="Enter Items.."
            className="bg-white/70 p-3 rounded-full outline-none lg:w-96 shadow-lg shadow-blue-300 focus:shadow-blue-300"
          />
        </form>
        <ul className="flex list-none items-center space-x-6 text-blue-950 font-semibold">
          <Link to={"/"}>
            <li className="cursor-pointer">Home</li>
          </Link>
          <Link to={"/favorites"}>
            <li className="curson-pointer">Favorites</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
