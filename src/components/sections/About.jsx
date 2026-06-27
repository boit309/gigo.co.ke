import { motion } from "framer-motion";

import Container from "../ui/Container";

import about from "../../data/profile/about";

export default function About() {
  return (
    <section className="py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-6xl"
        >
          {/* Section Heading */}

          <div className="mb-14 text-center">
            <h2 className="text-4xl font-black lg:text-5xl">
              <span className="gradient-text">
                {about.title}
              </span>
            </h2>

            <p className="mt-4 text-lg text-blue-400">
              {about.subtitle}
            </p>
          </div>

          {/* About Content */}

          <div className="space-y-8 text-lg leading-9 text-slate-400">
            <p>{about.intro}</p>

            <p>{about.background}</p>

            <p>{about.current}</p>

            <p>{about.mission}</p>
          </div>

          {/* Highlights */}

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {about.highlights.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <h3 className="text-2xl font-bold gradient-text">
                  {item.value}
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}