interface DataObject {
    [key: string]: {
      title: string;
      icon: string;
      description: string;
      href: string;
    };
  }
  
  const data: DataObject = {
    brainstorm: {
      title: "Brainstorm",
      icon: "brainstorm-icon.png",
      description: "This section is for brainstorming ideas.",
      href: "/brainstorm",
    },
    characters: {
      title: "Characters",
      icon: "characters-icon.png",
      description: "Explore information about characters here.",
      href: "/characters",
    },
    maps: {
      title: "Maps",
      icon: "maps-icon.png",
      description: "Discover maps and geographical information.",
      href: "/maps",
    },
    location: {
      title: "Location",
      icon: "location-icon.png",
      description: "Information about various locations.",
      href: "/location",
    },
    arcs: {
      title: "Arcs",
      icon: "arcs-icon.png",
      description: "Explore story arcs and plot lines.",
      href: "/arcs",
    },
    items: {
      title: "Items",
      icon: "items-icon.png",
      description: "Information about various items.",
      href: "/items",
    },
    magic: {
      title: "Magic",
      icon: "magic-icon.png",
      description: "Explore magical systems and abilities.",
      href: "/magic",
    },
    species: {
      title: "Species",
      icon: "species-icon.png",
      description: "Information about different species.",
      href: "/species",
    },
    culture: {
      title: "Culture",
      icon: "culture-icon.png",
      description: "Explore different cultures.",
      href: "/culture",
    },
    language: {
      title: "Language",
      icon: "language-icon.png",
      description: "Information about languages.",
      href: "/language",
    },
    religion: {
      title: "Religion",
      icon: "religion-icon.png",
      description: "Explore religions and belief systems.",
      href: "/religion",
    },
    philosophies: {
      title: "Philosophies",
      icon: "philosophies-icon.png",
      description: "Explore philosophical concepts.",
      href: "/philosophies",
    },
    timelines: {
      title: "Timelines",
      icon: "timelines-icon.png",
      description: "View historical timelines.",
      href: "/timelines",
    },
    calendar: {
      title: "Calendar",
      icon: "calendar-icon.png",
      description: "Information about calendars and time systems.",
      href: "/calendar",
    },
    encyclopedia: {
      title: "Encyclopedia",
      icon: "encyclopedia-icon.png",
      description: "An encyclopedia of knowledge.",
      href: "/encyclopedia",
    },
    research: {
      title: "Research",
      icon: "research-icon.png",
      description: "Tools and resources for research.",
      href: "/research",
    },
  };
  
  export  type { DataObject, data };
  