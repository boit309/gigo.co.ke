import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

import Container from "../ui/Container";

import experience from "../../data/profile/experience";

export default function Experience() {
  return (
    <section className="py-28">
      <Container>

        {/* Section Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-black lg:text-5xl">
            <span className="gradient-text">
              Professional Experience
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            A journey of building enterprise ICT infrastructure,
            developing software solutions, and supporting mission-critical
            systems across hospitality, healthcare research, and
            government institutions.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mx-auto max-w-5xl">

          {/* Vertical Line */}

          <div className="absolute left-5 top-0 hidden h-full w-1 rounded-full bg-blue-500/20 md:block" />

          <div className="space-y-10">

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
                className="relative md:pl-16"
              >

                {/* Timeline Dot */}

                <div className="absolute left-0 top-6 hidden h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white md:flex">
                  <FaBriefcase />
                </div>

                {/* Card */}

                <div className="glass rounded-3xl p-8">

                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {job.position}
                      </h3>

                      <p className="mt-2 text-lg font-semibold text-blue-400">
                        {job.company}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 text-slate-400">
                      <FaCalendarAlt />

                      <span>{job.period}</span>
                    </div>

                  </div>

                  {/* Skills */}

                  <div className="mt-8 flex flex-wrap gap-3">
                    {job.highlights.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </Container>
    </section>
  );
}