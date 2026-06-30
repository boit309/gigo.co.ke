const gallery = {
  title: "Professional Gallery",

  subtitle:
    "Capturing memorable moments from ICT projects, professional development, leadership, hospitality excellence, and community initiatives throughout my career.",

  filters: [
    "All",
    "Community Service",
    "ICT Projects",
    "Training",
    "Conferences",
    "Hospitality",
    "Leadership",
  ],

  albums: [
    {
      id: 1,

      title: "Tree Planting Initiative",

      category: "Community Service",

      description:
        "Participated in a community environmental conservation program through tree planting to promote sustainability and environmental awareness.",

      cover: "/images/gallery/tree-planting/cover.jpg",

      date: "June 2025",

      location: "Kakamega Forest",

      organization: "Golf Hotel Kakamega",

      featured: true,

      photos: [
        "/images/gallery/tree-planting/1.jpg",
        "/images/gallery/tree-planting/2.jpg",
        "/images/gallery/tree-planting/3.jpg",
        "/images/gallery/tree-planting/4.jpg",
        "/images/gallery/tree-planting/5.jpg",
      ],
    },

    {
      id: 2,

      title: "ICT Staff Training",

      category: "Training",

      description:
        "Conducted practical ICT systems training for hotel staff, covering operational systems, cybersecurity awareness, and technology best practices.",

      cover: "/images/gallery/training/cover.jpg",

      date: "September 2024",

      location: "Golf Hotel Kakamega",

      organization: "Golf Hotel",

      featured: true,

      photos: [
        "/images/gallery/training/1.jpg",
        "/images/gallery/training/2.jpg",
        "/images/gallery/training/3.jpg",
        "/images/gallery/training/4.jpg",
        "/images/gallery/training/5.jpg",
      ],
    },

    {
      id: 3,

      title: "Enterprise Network Installation",

      category: "ICT Projects",

      description:
        "Deployment, configuration, and testing of enterprise networking infrastructure to improve connectivity, redundancy, and service reliability.",

      cover: "/images/gallery/network-installation/cover.jpg",

      date: "March 2023",

      location: "Golf Hotel Kakamega",

      organization: "Golf Hotel",

      featured: false,

      photos: [
        "/images/gallery/network-installation/1.jpg",
        "/images/gallery/network-installation/2.jpg",
        "/images/gallery/network-installation/3.jpg",
        "/images/gallery/network-installation/4.jpg",
      ],
    },

    {
      id: 4,

      title: "Hospitality Technology Conference",

      category: "Conferences",

      description:
        "Attended a hospitality technology conference focusing on innovation, digital transformation, and modern guest experience solutions.",

      cover: "/images/gallery/conference/cover.jpg",

      date: "2026",

      location: "Nairobi",

      organization: "Hospitality ICT Summit",

      featured: false,

      photos: [
        "/images/gallery/conference/1.jpg",
        "/images/gallery/conference/2.jpg",
        "/images/gallery/conference/3.jpg",
        "/images/gallery/conference/4.jpg",
        "/images/gallery/conference/5.jpg",
        "/images/gallery/conference/6.jpg",
      ],
    },

    {
      id: 5,

      title: "Hotel ICT Infrastructure Upgrade",

      category: "Hospitality",

      description:
        "Upgrading ICT infrastructure, networking equipment, and hospitality systems to enhance operational efficiency and guest services.",

      cover: "/images/gallery/hospitality-upgrade/cover.jpg",

      date: "2026",

      location: "Golf Hotel Kakamega",

      organization: "Golf Hotel",

      featured: false,

      photos: [
        "/images/gallery/hospitality-upgrade/1.jpg",
        "/images/gallery/hospitality-upgrade/2.jpg",
        "/images/gallery/hospitality-upgrade/3.jpg",
      ],
    },

    {
      id: 6,

      title: "Leadership & Team Building",

      category: "Leadership",

      description:
        "Participated in leadership development and team-building activities aimed at strengthening collaboration, communication, and organizational excellence.",

      cover: "/images/gallery/team-building/cover.jpg",

      date: "2025",

      location: "Kakamega",

      organization: "Golf Hotel",

      featured: false,

      photos: [
        "/images/gallery/team-building/1.jpg",
        "/images/gallery/team-building/2.jpg",
        "/images/gallery/team-building/3.jpg",
        "/images/gallery/team-building/4.jpg",
      ],
    },
  ],
};

export default gallery;