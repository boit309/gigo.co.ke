import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

import Container from "../ui/Container";
import skills from "../../data/profile/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-24"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />
      </div>

      <Container>
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold tracking-wide text-blue-400">
            Core Competencies
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl lg:text-6xl">
            <span className="gradient-text">
              {skills.title}
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            {skills.subtitle}
          </p>
        </motion.div>

        {/* Skills Grid */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {skills.categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
              }}
              className="glass group rounded-3xl border border-white/10 p-8 transition-all duration-300 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>

                <div className="rounded-xl bg-blue-600/10 p-3 text-blue-400 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <FaCheckCircle />
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 transition-all duration-300 hover:border-blue-400 hover:bg-blue-500/20 hover:text-white"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-20 max-w-5xl rounded-3xl border border-white/10 bg-gradient-to-r from-blue-600/10 via-slate-900/50 to-cyan-600/10 p-8 text-center backdrop-blur-xl"
        >
          <h3 className="text-2xl font-bold text-white">
            Technology-Driven Solutions
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-400">
            My technical expertise enables me to architect, deploy, and
            maintain secure, scalable, and high-performance ICT solutions.
            Whether building modern web applications, administering enterprise
            infrastructure, optimizing hospitality systems, or strengthening
            cybersecurity, I focus on delivering reliable technology that
            drives business success.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}