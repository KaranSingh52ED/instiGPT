import React, { createContext, useContext, useState } from "react";

const iitMadrasKnowledgeBase = {
  academics: {
    departments: [
      "Aerospace Engineering",
      "Applied Mechanics",
      "Biotechnology",
      "Chemical Engineering",
      "Chemistry",
      "Civil Engineering",
      "Computer Science and Engineering",
      "Electrical Engineering",
      "Engineering Design",
      "Humanities and Social Sciences",
      "Management Studies",
      "Mathematics",
      "Mechanical Engineering",
      "Metallurgical and Materials Engineering",
      "Ocean Engineering",
      "Physics",
      "Data Science and Artificial Intelligence",
      "Medical Science and Technology",
    ],
    programs: ["B.Tech", "M.Tech", "M.S.", "M.Sc.", "MBA", "Ph.D."],
    admission: {
      undergraduate:
        "Admission to undergraduate programs is through JEE (Advanced)",
      postgraduate:
        "Admission to postgraduate programs is through GATE, JAM, CAT, etc.",
      phd: "PhD admissions are based on written tests and interviews",
    },
  },
  campus: {
    facilities: [
      "Library",
      "Sports Complex",
      "Swimming Pool",
      "Gymkhana",
      "Health Center",
      "Shopping Center",
      "Banks & ATMs",
    ],
    hostels: [
      "Alakananda",
      "Brahmaputra",
      "Cauvery",
      "Ganga",
      "Godavari",
      "Jamuna",
      "Krishna",
      "Mahanadi",
      "Mandakini",
      "Narmada",
      "Pampa",
      "Saraswathi",
      "Sarayu",
      "Sharavati",
      "Sindhu",
      "Tamiraparani",
      "Tapti",
      "Tunga",
    ],
    transport:
      "Bus services are available for commuting within the campus and to the city",
  },
  general: {
    established: "1959",
    location: "Chennai, Tamil Nadu, India",
    director: "Prof. V. Kamakoti",
    ranking:
      "IIT Madras is consistently ranked as one of the top engineering institutes in India",
    website: "https://www.iitm.ac.in",
  },
  research: {
    centers: [
      "Center for Industrial Consultancy and Sponsored Research",
      "National Center for Combustion Research and Development",
      "IIT Madras Research Park",
    ],
    areas: [
      "Artificial Intelligence",
      "Sustainable Energy",
      "Healthcare Technology",
      "Water Resources",
      "Advanced Manufacturing",
      "Quantum Technologies",
    ],
  },
};

// Create the context
const IITMadrasContext = createContext();

// Custom hook for using the context
export const useIITMadrasContext = () => useContext(IITMadrasContext);

// Provider component
export const IITMadrasProvider = ({ children }) => {
  const [chatHistory, setChatHistory] = useState([]);

  // Function to generate responses based on the query
  const generateResponse = (query) => {
    // Convert query to lowercase for easier matching
    const queryLower = query.toLowerCase();

    // Simple keyword matching to simulate AI response
    // Academic related queries
    if (
      containsAny(queryLower, ["department", "academic", "stream", "course"])
    ) {
      return `IIT Madras has ${
        iitMadrasKnowledgeBase.academics.departments.length
      } academic departments including ${randomSample(
        iitMadrasKnowledgeBase.academics.departments,
        3
      ).join(
        ", "
      )} and others. They offer various programs like ${iitMadrasKnowledgeBase.academics.programs.join(
        ", "
      )}.`;
    }

    // Admission related queries
    else if (
      containsAny(queryLower, ["admission", "apply", "entrance", "jee", "gate"])
    ) {
      if (containsAny(queryLower, ["undergraduate", "b.tech", "jee"])) {
        return iitMadrasKnowledgeBase.academics.admission.undergraduate;
      } else if (containsAny(queryLower, ["postgraduate", "m.tech", "gate"])) {
        return iitMadrasKnowledgeBase.academics.admission.postgraduate;
      } else if (containsAny(queryLower, ["phd", "doctoral"])) {
        return iitMadrasKnowledgeBase.academics.admission.phd;
      } else {
        return "IIT Madras offers admissions to various programs through different entrance exams. Undergraduate admissions are through JEE Advanced, while postgraduate admissions are through GATE, JAM, CAT, etc.";
      }
    }

    // Campus related queries
    else if (containsAny(queryLower, ["hostel", "accommodation", "stay"])) {
      return `IIT Madras has ${
        iitMadrasKnowledgeBase.campus.hostels.length
      } hostels including ${randomSample(
        iitMadrasKnowledgeBase.campus.hostels,
        3
      ).join(", ")} and others.`;
    } else if (
      containsAny(queryLower, [
        "facility",
        "amenities",
        "infrastructure",
        "sports",
      ])
    ) {
      return `IIT Madras campus has various facilities including ${iitMadrasKnowledgeBase.campus.facilities.join(
        ", "
      )}.`;
    }

    // General information queries
    else if (
      containsAny(queryLower, ["about", "history", "establish", "found"])
    ) {
      return `IIT Madras was established in ${iitMadrasKnowledgeBase.general.established} and is located in ${iitMadrasKnowledgeBase.general.location}. The current director is ${iitMadrasKnowledgeBase.general.director}.`;
    } else if (
      containsAny(queryLower, ["research", "innovation", "development"])
    ) {
      return `IIT Madras has strong research focus with centers like ${randomSample(
        iitMadrasKnowledgeBase.research.centers,
        2
      ).join(", ")}. Key research areas include ${randomSample(
        iitMadrasKnowledgeBase.research.areas,
        3
      ).join(", ")}.`;
    }

    // Default response for unmatched queries
    else {
      return "I'm an AI assistant specialized in providing information about IIT Madras. You can ask me about academics, admissions, campus facilities, research, and more.";
    }
  };

  // Helper function to check if any keyword is in the query
  const containsAny = (str, keywords) => {
    return keywords.some((keyword) => str.includes(keyword));
  };

  // Helper function to get random sample from array
  const randomSample = (array, size) => {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, size);
  };

  // Context value
  const value = {
    generateResponse,
    chatHistory,
    setChatHistory,
  };

  return (
    <IITMadrasContext.Provider value={value}>
      {children}
    </IITMadrasContext.Provider>
  );
};
