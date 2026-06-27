import { motion } from "framer-motion";

import Container from "../ui/Container";

import skills from "../../data/profile/skills";

export default function Skills() {
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
              {skills.title}
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            {skills.subtitle}
          </p>
        </motion.div>

        {/* Skill Categories */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {skills.categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -6 }}
              className="glass rounded-3xl p-8"
            >
              <h3 className="mb-6 text-2xl font-bold text-blue-400">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

        </div>

      </Container>
    </section>
  );
}