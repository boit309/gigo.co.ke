import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import {
  FaDownload,
  FaEnvelope,
  FaBriefcase,
  FaCircle,
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
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-36 pb-20"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute right-[-100px] bottom-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[100px]" />
    </div>

      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* ================= LEFT ================= */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}

            <div className="inline-flex items-center gap-3 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2">
              <FaCircle className="text-[10px] text-green-400" />

              <span className="text-sm font-semibold text-blue-300">
                Available for Freelance & Full-Time Opportunities
              </span>
            </div>

            <p className="mt-8 text-sm font-bold uppercase tracking-[0.45em] text-blue-400">
              {hero.greeting}
            </p>

            <h1 className="mt-6 text-5xl font-black leading-tight md:text-6xl lg:text-7xl">
              {personal.firstName}
              <br />

              <span className="gradient-text">
                {personal.middleName} {personal.lastName}
              </span>
            </h1>

            <h2 className="mt-6 text-2xl font-semibold text-slate-200 lg:text-3xl">
              {hero.title}
            </h2>

            <div className="mt-5 h-10 text-xl font-semibold text-blue-400">
              <TypeAnimation
                sequence={hero.roles.flatMap((role) => [role, 2000])}
                speed={45}
                repeat={Infinity}
              />
            </div>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
              {hero.description}
            </p>

            {/* Current Position */}

            <div className="glass mt-10 rounded-3xl border border-white/10 p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
                  <FaBriefcase />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-widest text-blue-400">
                    Current Position
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-white">
                    {currentRole.position}
                  </h3>

                  <p className="text-slate-400">
                    {currentRole.organization}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}

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

            {/* Stats */}

            <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">
              {stats.map((item) => (
                <motion.div
                  whileHover={{ y: -6 }}
                  key={`${item.label}-${item.value}`}
                  className="glass rounded-3xl border border-white/10 p-6 text-center transition-all duration-300"
                >
                  <h3 className="text-3xl font-black gradient-text">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ================= RIGHT ================= */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* Glow */}

            <div className="absolute h-[560px] w-[440px] rounded-full bg-blue-600/20 blur-[120px]" />

            {/* Decorative Rings */}

            <div className="absolute h-[470px] w-[470px] rounded-full border border-blue-500/10" />

            <div className="absolute h-[530px] w-[530px] rounded-full border border-cyan-500/5" />

            {/* Image */}

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
              }}
              className="glass relative overflow-hidden rounded-[40px] border border-blue-500/20 p-4 shadow-[0_25px_80px_rgba(37,99,235,.25)]"
            >
              <img
                src={personal.photo}
                alt={personal.fullName}
                loading="eager"
                decoding="async"
                className="h-[580px] w-[420px] rounded-[30px] object-cover"
              />

              {/* Floating Card */}

              <div className="absolute bottom-6 left-6 rounded-2xl border border-white/10 bg-slate-900/80 px-5 py-4 backdrop-blur-xl">
                <p className="text-sm text-slate-400">
                  Building Modern
                </p>

                <h4 className="font-bold text-white">
                  Software & ICT Solutions
                </h4>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}