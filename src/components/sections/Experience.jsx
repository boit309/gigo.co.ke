import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

import Container from "../ui/Container";
import experience from "../../data/profile/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden pt-32 pb-24"
    >
      <Container>
        {/* Section Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold tracking-wide text-blue-400">
            Career Journey
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl lg:text-6xl">
            Professional{" "}
            <span className="gradient-text">Experience</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Years of delivering enterprise ICT infrastructure, software
            development, systems administration, and technical support across
            hospitality, healthcare research, and government institutions.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mx-auto max-w-5xl">
          {/* Vertical Line */}

          <div className="absolute left-5 top-0 hidden h-full w-0.5 bg-gradient-to-b from-blue-600 via-cyan-500 to-blue-600 md:block" />

          <div className="space-y-12">
            {experience.map((job, index) => (
              <motion.div
                key={`${job.company}-${job.period}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                className="relative md:pl-20"
              >
                {/* Timeline Icon */}

                <div className="absolute left-0 top-8 hidden h-11 w-11 items-center justify-center rounded-full border-4 border-slate-900 bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg md:flex">
                  <FaBriefcase />
                </div>

                {/* Experience Card */}

                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="glass rounded-3xl border border-white/10 p-8 transition-all duration-300 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {job.position}
                      </h3>

                      <p className="mt-3 inline-flex rounded-full bg-blue-500/10 px-4 py-2 font-semibold text-blue-400">
                        {job.company}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/60 px-4 py-2 text-sm text-slate-300">
                      <FaCalendarAlt className="text-blue-400" />
                      {job.period}
                    </div>
                  </div>

                  {/* Skills */}

                  <div className="mt-8 flex flex-wrap gap-3">
                    {job.highlights.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 transition-colors duration-300 hover:border-blue-400 hover:bg-blue-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}