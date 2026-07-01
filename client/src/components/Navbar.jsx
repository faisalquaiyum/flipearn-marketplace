import { BoxIcon, GripIcon, ListIcon, MenuIcon, MessageCircleMoreIcon, XIcon } from "lucide-react";
import { assets } from "../assets/assets";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser, useClerk, UserButton } from "@clerk/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const { user } = useUser();
  const { openSignIn } = useClerk();

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm bg-white/95 backdrop-blur border-b border-slate-200">
        <img
          onClick={() => {
            navigate("/");
            scrollTo(0, 0);
          }}
          src={assets.logo}
          alt="logo"
          className="h-10 cursor-pointer"
        />

        <div className="hidden md:flex items-center gap-8 transition duration-500 text-slate-800">
          <Link to="/" onClick={() => scrollTo(0, 0)}>
            Home
          </Link>
          <Link to="/marketplace" onClick={() => scrollTo(0, 0)}>
            Marketplace
          </Link>
          <Link
            to={user ? "/messages" : "#"}
            onClick={() => (user ? scrollTo(0, 0) : openSignIn())}
          >
            Messages
          </Link>
          <Link
            to={user ? "/my-listings" : "#"}
            onClick={() => (user ? scrollTo(0, 0) : openSignIn())}
          >
            My Listings
          </Link>
        </div>

        {!user ? (
          <div className="flex gap-2">
            <button
              onClick={openSignIn}
              className="max-sm:hidden cursor-pointer px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full"
            >
              Login
            </button>
            <MenuIcon onClick={() => setMenuOpen(true)} className="sm:hidden" />
          </div>
        ) : (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="Marketplace"
                labelIcon={<GripIcon size={16} />}
                onClick={() => navigate("/marketplace")}
              />
            </UserButton.MenuItems>
            <UserButton.MenuItems>
              <UserButton.Action
                label="Messages"
                labelIcon={<MessageCircleMoreIcon size={16} />}
                onClick={() => navigate("/messages")}
              />
            </UserButton.MenuItems>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Listings"
                labelIcon={<ListIcon size={16} />}
                onClick={() => navigate("/my-listings")}
              />
            </UserButton.MenuItems>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Orders"
                labelIcon={<BoxIcon size={16} />}
                onClick={() => navigate("/my-orders")}
              />
            </UserButton.MenuItems>
          </UserButton>
        )}
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[100] bg-black/40 text-black backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <Link to="/" onClick={() => scrollTo(0, 0)}>
          Home
        </Link>
        <Link to="/marketplace" onClick={() => scrollTo(0, 0)}>
          Marketplace
        </Link>
        <Link to="/messages" onClick={openSignIn}>
          Messages
        </Link>
        <Link to="/my-listings" onClick={openSignIn}>
          My Listings
        </Link>
        <button
          onClick={openSignIn}
          className="cursor-pointer px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full"
        >
          Login
        </button>
        <XIcon
          onClick={() => setMenuOpen(false)}
          className="absolute size-8 right-6 top-6 text-gray-500 hover:text-gray-700 cursor-pointer"
        />
      </div>
    </>
  );
};

export default Navbar;
