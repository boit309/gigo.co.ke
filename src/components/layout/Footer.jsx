import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaArrowUp,
} from "react-icons/fa";

import Container from "../ui/Container";

import profile from "../../data/profile";

export default function Footer() {
  const { brand, personal, contact, socials } = profile;

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950">
      {/* Background Glow */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <Container>
        {/* Top */}

        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}

          <div>
            <h2 className="gradient-text text-3xl font-black">
              {brand.name}
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Professional ICT Specialist, Software Developer, Systems &
              Network Administrator dedicated to building secure,
              scalable and innovative technology solutions.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="mb-5 text-xl font-bold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>

              <li>
                <Link to="/experience">Experience</Link>
              </li>

              <li>
                <Link to="/projects">Projects</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="mb-5 text-xl font-bold text-white">
              Contact
            </h3>

            <div className="space-y-4 text-slate-400">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400" />
                <span>{contact.email}</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-400" />
                <span>{contact.phone}</span>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-400" />
                <span>{personal.location}</span>
              </div>
            </div>
          </div>

          {/* Connect */}

          <div>
            <h3 className="mb-5 text-xl font-bold text-white">
              Connect
            </h3>

            <div className="flex gap-4">
              {socials.github && (
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-xl transition hover:bg-blue-600 hover:text-white"
                >
                  <FaGithub />
                </a>
              )}

              {socials.linkedin && (
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-xl transition hover:bg-blue-600 hover:text-white"
                >
                  <FaLinkedin />
                </a>
              )}

              {socials.website && (
                <a
                  href={socials.website}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-xl transition hover:bg-blue-600 hover:text-white"
                >
                  <FaGlobe />
                </a>
              )}
            </div>

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="mt-8 flex items-center gap-2 rounded-xl border border-blue-500/30 px-5 py-3 text-blue-400 transition hover:bg-blue-600 hover:text-white"
            >
              <FaArrowUp />
              Back to Top
            </button>
          </div>
        </div>

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-center text-sm text-slate-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} {brand.name}. All Rights
            Reserved.
          </p>

          <p>
            Designed & Developed by{" "}
            <span className="font-semibold text-blue-400">
              {personal.fullName}
            </span>
          </p>
        </div>
      </Container>
    </footer>
  );
}