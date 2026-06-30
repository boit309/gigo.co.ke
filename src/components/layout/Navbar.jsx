import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <Container className="py-4">
          <div
            className={`flex h-20 items-center justify-between rounded-2xl border px-6 transition-all duration-300 ${
              isScrolled
                ? "border-white/10 bg-slate-950/80 shadow-2xl shadow-blue-500/10 backdrop-blur-xl"
                : "border-transparent bg-slate-950/40 backdrop-blur-lg"
            }`}
          >
            {/* Logo */}

            <NavLink
              to="/"
              className="text-3xl font-black transition-transform duration-300 hover:scale-105"
            >
              <span className="gradient-text">
                {profile.brand.name}
              </span>
            </NavLink>

            {/* Desktop Navigation */}

            <nav className="hidden items-center gap-2 lg:flex">
              {navigation.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.path}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                        : "text-slate-300 hover:bg-white/5 hover:text-blue-400"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Resume */}

            <div className="hidden lg:block">
              <Button href={profile.resume.file}>
                <FaDownload />
                Resume
              </Button>
            </div>

            {/* Mobile Toggle */}

            <button
              onClick={() => setMobileMenu((prev) => !prev)}
              className="rounded-xl p-3 text-xl transition hover:bg-white/10 lg:hidden"
            >
              {mobileMenu ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </Container>

        {/* Mobile Menu */}

        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden"
            >
              <Container>
                <div className="mt-3 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/95 backdrop-blur-xl">
                  <nav className="flex flex-col p-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.id}
                        to={item.path}
                        onClick={() => setMobileMenu(false)}
                        className={({ isActive }) =>
                          `rounded-xl px-4 py-4 transition-all duration-300 ${
                            isActive
                              ? "bg-blue-600 text-white"
                              : "text-slate-300 hover:bg-white/5 hover:text-blue-400"
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    ))}

                    <div className="mt-4">
                      <Button href={profile.resume.file}>
                        <FaDownload />
                        Download CV
                      </Button>
                    </div>
                  </nav>
                </div>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer for fixed navbar */}

      <div className="h-28" />
    </>
  );
}