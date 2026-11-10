/* ===== EDIT THIS FILE TO UPDATE YOUR WHOLE SITE ===== */
const SITE = {
  name: "Lyudmila Piatkov",
  tagline: "Electrical Engineering student at Georgia Tech | Medical devices and surgical robotics",
  email: "lpiatkov3@gatech.edu", phone: "857-316-7308", location: "Boston, MA / Atlanta, GA",
  photo: "images/headshot.jpg",
  links: { LinkedIn: "https://www.linkedin.com/in/lyudmila-piatkov-58559923b/", GitHub: "https://github.com/lkpiatkov" },
  formspree: "", // paste a Formspree URL here to receive form messages directly; blank = opens the visitor's email app
  summary: "I'm a second-year Electrical Engineering student at Georgia Tech with a 4.00 GPA and a Spanish minor. I design and build hardware, embedded systems, and robots, from battlebots to autonomous solar panel cleaners. I'm looking for a Summer 2027 internship in medical devices and surgical robotics.",
  about: [
    "I'm an Electrical Engineering student at Georgia Tech, originally from the Boston area. I study electrical engineering with a minor in Spanish, and I speak English, Russian, and Spanish. What draws me to engineering is taking an idea and turning it into something that works, whether that means a CAD model on my screen, a circuit on a breadboard, or a robot spinning at full speed in an arena.",
    "My hands-on experience started with 3D printing. Over two summers I worked with Palitra3D, a 3D printing company in Wellesley, Massachusetts. As part of a four-person team, I helped build the operational workflow for a 3D-printed topography product, including packaging, web platform design, and market strategy, and we produced 50 sample prints. I also simplified a color optimization workflow using Muse 3 and Color Passport data, which improved color accuracy by 30%.",
    "At Georgia Tech, I build combat robots with RoboJackets for the National Havoc Robot League, where I've worked on 3 lb and 30 lb robots. I led motor, wiring, and battery work on one, and I'm a sub-team lead for the lifter mechanism on another. I also placed 2nd in the Autonomous Track of the GT IEEE Robotech Hackathon with RESOLV, a robot that cleans dust from solar panels. Outside the build space, I help run competition travel for my team as its trip advisor.",
    "I'm now doing research through Vertically Integrated Projects, where our team is designing an electrical device that quantifies and reduces stress in classrooms. I'm using machine learning to study signals from an EMG bracelet. This project, along with my coursework in circuits and signal processing, is pushing me toward biomedical devices, which is where I want to build my career."
  ],
  goals: {
    intro: "In ten years, I want to design medical devices or surgical robotics at a biomedical company, and to hold some form of technical leadership. My two threads, bioengineering and robotics, give me the skills I need to get there: mechanical design, embedded systems, signal processing, and teamwork on complex builds.",
    steps: [
      { when: "Now to Spring 2027", what: "Finish core ECE coursework, complete my Discovery Project, and keep building with RoboJackets and VIP. Apply for Summer 2027 internships in medical devices and surgical robotics." },
      { when: "Summer 2027", what: "Land a medical device or surgical robotics internship and learn how engineering teams in this industry design, test, and document products." },
      { when: "2027 to 2028", what: "Try more research to decide whether a PhD in robotics or medical devices is right for me. Take advanced courses in signal processing, controls, and bioengineering." },
      { when: "Within 5 years", what: "Earn a master's degree, then start working at a company with a stable career path and strong mentorship." },
      { when: "Within 10 years", what: "Design medical devices or surgical robotics as a technical lead." }
    ]
  },
  resume: "files/resume.pdf", // save your resume PDF with this name in the files folder
  experience: [
    { when: "Aug 2026 - Present", title: "Mechatronics and Motivation Researcher, Vertically Integrated Projects (Atlanta, GA)", text: "Designing an electrical device to quantify and reduce stress in educational settings. Investigating machine learning approaches for analyzing EMG bracelet data to detect signals of stress and anxiety." },
    { when: "May 2025 - Aug 2026", title: "Consultant and Summer Research Intern, Palitra3D (Wellesley, MA)", text: "Engineered operational workflows for a 3D-printed topography startup with a 4-person team, producing 50 sample prints. Improved color accuracy by 30% by simplifying a color optimization workflow." },
    { when: "Aug 2025 - Present", title: "Battlebots Team Member, RoboJackets", text: "Design and build 3 lb and 30 lb robots for National Havoc Robot League competitions." },
    { when: "Apr 2026 - Present", title: "Battlebots Trip Advisor (\"The Foot\"), RoboJackets", text: "Coordinate travel logistics for 20+ people across 4+ competitions, working with bot leads and leadership on plans and deadlines." }
  ],
  skills: ["Python", "Java", "C++", "JavaScript", "HTML", "MATLAB", "Raspberry Pi", "Arduino", "3D printing (Prusa, Bambu)", "Fusion 360", "Autodesk Inventor", "Onshape", "Blender", "Soldering", "Circuit analysis", "Signal processing", "English", "Russian", "Spanish"]
};

/* PROJECTS: each {...} block = one dropdown entry on the Projects page AND its own full page.
   To add a project: copy the whole block below (from "{" to "}"), add a comma between blocks, and change the id.
   - id: unique, lowercase, no spaces (becomes project.html?id=your-id)
   - blurb: short text shown in the dropdown
   - cover: thumbnail image shown in the dropdown
   - sections: any number of headings with paragraphs (e.g. The Problem / The Process / The Outcome)
   - media: type "image" (src = file path), "video" (local file path), or "youtube" (src = video ID only)
   - links: buttons at the bottom (e.g. GitHub); blank urls are hidden
   Assignment reminder: your Discovery Project needs 400+ words and at least one photo/video you took. */
const PROJECTS = [
  { id: "project-template",
    title: "Project Title",
    date: "Month Year",
    tags: ["Tag 1", "Tag 2"],
    blurb: "One or two sentences summarizing the project.",
    cover: "images/project-template-cover.jpg",
    sections: [
      { h: "The Problem", p: ["Paragraph about the problem. Add more paragraphs by adding more quoted strings, separated by commas."] },
      { h: "The Process", p: ["Paragraph about how you designed and built it."] },
      { h: "The Outcome", p: ["Paragraph about the results and what you learned."] }
    ],
    media: [
      { type: "image", src: "images/project-template-1.jpg", caption: "Image caption" },
      { type: "youtube", src: "", caption: "Video caption" }
    ],
    links: [ { label: "GitHub", url: "" } ]
  }
];

const MUSIC = { // Replace with your real music details
  intro: "Add a paragraph about your musical background here: instruments, genres, how you started, and any performances or projects.",
  timeline: [
    { when: "Year", title: "First milestone", text: "Short detail." },
    { when: "Year", title: "Performance, release, or group", text: "Short detail." }
  ],
  media: [
    { type: "image", src: "images/music-1.jpg", caption: "Photo caption" },
    { type: "youtube", src: "", caption: "Performance video" }
  ],
  links: [ { label: "Spotify", url: "" }, { label: "SoundCloud", url: "" }, { label: "YouTube", url: "" } ]
};
