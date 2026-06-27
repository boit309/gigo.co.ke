import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import {
  FaDownload,
  FaEnvelope,
  FaBriefcase,
} from "react-icons/fa";

import Button from "../ui/Button";
import Container from "../ui/Container";

import profile from "../../data/profile";

export default function Hero() {
  const {
    personal,
    hero,
    resume,
    stats,
    currentRole,
  } = profile;

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* ================= LEFT ================= */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-semibold uppercase tracking-[6px] text-blue-400">
              {hero.greeting}
            </p>

            <h1 className="mt-4 text-5xl font-black leading-tight lg:text-7xl">
              {personal.firstName}
              <br />

              <span className="gradient-text">
                {personal.middleName} {personal.lastName}
              </span>
            </h1>

            <h2 className="mt-6 text-2xl font-semibold text-white lg:text-3xl">
              {hero.title}
            </h2>

            <div className="mt-6 h-10 text-xl font-semibold text-blue-300">
              <TypeAnimation
                sequence={hero.roles.flatMap((role) => [role, 2000])}
                speed={50}
                repeat={Infinity}
              />
            </div>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
              {hero.description}
            </p>

            {/* Current Position */}

            <div className="glass mt-8 rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <FaBriefcase className="text-xl text-blue-400" />

                <div>
                  <h3 className="font-semibold text-white">
                    {currentRole.position}
                  </h3>

                  <p className="text-sm text-slate-400">
                    {currentRole.organization}
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">
              <Button href={resume.file}>
                <FaDownload />
                Download CV
              </Button>

              <Link to="/contact">
                <Button variant="secondary">
                  <FaEnvelope />
                  Contact Me
                </Button>
              </Link>
            </div>

            {/* Statistics */}

            <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">
              {stats.map((item) => (
                <div
                  key={`${item.label}-${item.value}`}
                  className="glass rounded-2xl p-5 text-center"
                >
                  <h3 className="text-3xl font-bold gradient-text">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ================= RIGHT ================= */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* Glow */}

            <div className="absolute h-[520px] w-[420px] rounded-full bg-blue-600/20 blur-[100px]" />

            {/* Image */}

            <div className="glass relative overflow-hidden rounded-[40px] border border-blue-500/20 p-4 shadow-[0_0_60px_rgba(37,99,235,.25)]">
              <img
                src={personal.photo}
                alt={personal.fullName}
                loading="eager"
                decoding="async"
                className="h-[550px] w-[400px] rounded-[30px] object-cover"
              />
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}