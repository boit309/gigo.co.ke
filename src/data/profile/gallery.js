const gallery = {
  title: "Professional Gallery",

  subtitle:
    "Capturing memorable moments from technology projects, professional development, community service, leadership, and hospitality excellence throughout my ICT career.",

  filters: [
    "All",
    "Community Service",
    "ICT Projects",
    "Training",
    "Conferences",
    "Hospitality",
    "Leadership",
  ],

  items: [
    {
      id: 1,

      title: "Tree Planting Initiative",

      category: "Community Service",

      description:
        "Participated in a community environmental conservation program through tree planting to promote sustainability.",

      image: "/images/gallery/tree-planting.jpg",

      date: "2025",

      location: "Kakamega Forest",

      organization: "Golf Hotel Kakamega",

      featured: true,
    },

    {
      id: 2,

      title: "ICT Staff Training",

      category: "Training",

      description:
        "Facilitated ICT systems training for hotel staff on operational technologies and best practices.",

      image: "/images/gallery/training.jpg",

      date: "2024",

      location: "Golf Hotel Kakamega",

      organization: "Golf Hotel",

      featured: true,
    },

    {
      id: 3,

      title: "Enterprise Network Installation",

      category: "ICT Projects",

      description:
        "Deployment and configuration of enterprise networking infrastructure to improve connectivity and reliability.",

      image: "/images/gallery/network.jpg",

      date: "2023",

      location: "Kakamega",

      organization: "Golf Hotel",

      featured: false,
    },
  ],
};

export default gallery;