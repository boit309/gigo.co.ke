import { motion } from "framer-motion";
import {
  FaServer,
  FaNetworkWired,
  FaCode,
  FaHotel,
  FaDesktop,
  FaLightbulb,
} from "react-icons/fa";

import Container from "../ui/Container";

import services from "../../data/profile/services";

const icons = [
  FaServer,
  FaNetworkWired,
  FaCode,
  FaHotel,
  FaDesktop,
  FaLightbulb,
];

export default function Services() {
  return (
    <section className="py-28">
      <Container>

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-black lg:text-5xl">
            <span className="gradient-text">
              {services.title}
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            {services.subtitle}
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.services.map((service, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="glass rounded-3xl p-8"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/20 text-3xl text-blue-400">
                  <Icon />
                </div>

                <h3 className="mb-4 text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="leading-8 text-slate-400">
                  {service.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}