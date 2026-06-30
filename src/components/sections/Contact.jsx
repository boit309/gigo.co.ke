import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaGlobe,
  FaPaperPlane,
} from "react-icons/fa";

import Container from "../ui/Container";
import Button from "../ui/Button";

import profile from "../../data/profile";

export default function Contact() {
  const { contact, personal } = profile;

  const contactCards = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      value: contact.phone,
      href: `tel:${contact.phone}`,
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      value: contact.whatsapp,
      href: `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`,
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: personal.location,
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      <Container>
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-400">
            Get In Touch
          </span>

          <h2 className="mt-6 text-5xl font-black">
            <span className="gradient-text">
              Let's Work Together
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Whether you're looking for an ICT professional, software
            developer, systems administrator, networking specialist,
            or technology consultant, I'd love to hear about your
            project and discuss how I can help.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-3">
          {/* Contact Cards */}

          <div className="space-y-6">
            {contactCards.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.href}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                className={`glass flex items-center gap-5 rounded-3xl border border-white/10 p-6 transition duration-300 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10 ${
                  item.href ? "" : "pointer-events-none"
                }`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-xl text-white">
                  {item.icon}
                </div>

                <div>
                  <p className="text-sm uppercase tracking-wider text-slate-500">
                    {item.title}
                  </p>

                  <h3 className="font-semibold text-white">
                    {item.value}
                  </h3>
                </div>
              </motion.a>
            ))}
          </div>

          {/* CTA */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl border border-white/10 p-10 lg:col-span-2"
          >
            <h3 className="text-3xl font-bold text-white">
              Ready to Start Your Next Project?
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              I specialize in enterprise ICT infrastructure,
              networking, software development, hospitality systems,
              Linux administration, database management, and digital
              transformation. Whether you need technical consulting,
              system implementation, or a custom software solution,
              let's build something exceptional together.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <Button href={`mailto:${contact.email}`}>
                <FaPaperPlane />
                Send Email
              </Button>

              <Button
                href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`}
                variant="secondary"
              >
                <FaWhatsapp />
                WhatsApp
              </Button>

              {contact.website && (
                <Button
                  href={contact.website}
                  variant="secondary"
                >
                  <FaGlobe />
                  Visit Website
                </Button>
              )}
            </div>

            <div className="mt-12 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-6">
              <h4 className="text-xl font-bold text-white">
                Available For
              </h4>

              <div className="mt-5 flex flex-wrap gap-3">
                {[
                  "Software Development",
                  "ICT Consultancy",
                  "Systems Administration",
                  "Network Engineering",
                  "Hospitality Technology",
                  "Database Administration",
                  "Linux Administration",
                  "Web Development",
                  "IT Support",
                ].map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}