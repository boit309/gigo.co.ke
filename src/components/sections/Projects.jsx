import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
} from "react-icons/fa";

import Container from "../ui/Container";
import Button from "../ui/Button";

import projects from "../../data/profile/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-24"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute right-0 bottom-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />
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
            Portfolio
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl lg:text-6xl">
            <span className="gradient-text">
              {projects.title}
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            {projects.subtitle}
          </p>
        </motion.div>

        {/* Projects */}

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.items.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{ y: -8 }}
              className="glass overflow-hidden rounded-3xl border border-white/10 transition-all duration-300 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Image */}

              <div className="relative h-60 overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 hover:scale-110"
                />

                {project.featured && (
                  <span className="absolute left-5 top-5 rounded-full bg-blue-600 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
                    Featured
                  </span>
                )}
              </div>

              {/* Content */}

              <div className="p-8">
                <span className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                  {project.category}
                </span>

                <h3 className="mt-3 text-3xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-5 leading-7 text-slate-400">
                  {project.description}
                </p>

                {/* Technologies */}

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}

                <div className="mt-8 flex flex-wrap gap-4">
                  {project.github && (
                    <Button
                      href={project.github}
                      variant="secondary"
                    >
                      <FaGithub />
                      Source Code
                    </Button>
                  )}

                  {project.demo && (
                    <Button href={project.demo}>
                      <FaExternalLinkAlt />
                      Live Demo
                    </Button>
                  )}

                  {!project.github && !project.demo && (
                    <Button variant="secondary">
                      <FaCode />
                      Enterprise Project
                    </Button>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-20 max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-r from-blue-600/10 via-slate-900/50 to-cyan-600/10 p-10 text-center backdrop-blur-xl"
        >
          <h3 className="text-3xl font-bold text-white">
            Let's Build Something Great Together
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            From enterprise ICT infrastructure and systems integration to
            modern web applications and digital transformation initiatives,
            I deliver secure, scalable, and business-focused technology
            solutions that create lasting value.
          </p>

          <div className="mt-8">
            <Button href="/contact">
              Let's Discuss Your Project
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}