import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaDownload,
} from "react-icons/fa";

import Container from "../ui/Container";
import Button from "../ui/Button";

import navigation from "../../data/profile/navigation";
import profile from "../../data/profile";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "glass border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">

        {/* Logo */}

        <NavLink
          to="/"
          className="text-3xl font-black gradient-text"
        >
          {profile.brand.name}
        </NavLink>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `transition duration-300 hover:text-blue-400 ${
                  isActive
                    ? "text-blue-400 font-semibold"
                    : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}

        <div className="hidden lg:flex">
          <Button href={profile.resume.file}>
            <FaDownload />
            Resume
          </Button>
        </div>

        {/* Mobile Toggle */}

        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="text-2xl lg:hidden"
        >
          {mobileMenu ? <FaTimes /> : <FaBars />}
        </button>

      </Container>

      {/* Mobile Menu */}

      {mobileMenu && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="glass lg:hidden"
        >
          <Container className="flex flex-col py-8">

            {navigation.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                onClick={() => setMobileMenu(false)}
                className={({ isActive }) =>
                  `py-4 transition duration-300 ${
                    isActive
                      ? "text-blue-400 font-semibold"
                      : "hover:text-blue-400"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <div className="mt-6">
              <Button href={profile.resume.file}>
                <FaDownload />
                Download CV
              </Button>
            </div>

          </Container>
        </motion.div>
      )}
    </motion.header>
  );
}