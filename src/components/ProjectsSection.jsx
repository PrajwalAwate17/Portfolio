import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Kawaii Shop",
    description: "Anime sticker shop with product management.",
    image: "/projects/KPhoto.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "Online kawai stickers shop.",
    githubUrl: "https://github.com/PrajwalAwate17/Sticker-shop",
  },
  {
    id: 2,
    title: "GeminiAI",
    description:
      "Fully responsive Gemini app,AI-based platform for interacting with generative models.",
    image: "/projects/gemini.jpg",
    tags: ["TypeScript", "Gemini api", "Next.js"],
    demoUrl: "https://github.com/PrajwalAwate17/Gemini-Ai",
    githubUrl: "https://github.com/PrajwalAwate17/Gemini-Ai",
  },
  {
    id: 3,
    title: "Spotify - Music app",
    description:
      "Fully functional Spotify app.",
    image: "/projects/SPhoto.png",
    tags: ["React", "Node.js", "Tailwind css"],
    demoUrl: "https://github.com/PrajwalAwate17/Spotify-web-app",
    githubUrl: "https://github.com/PrajwalAwate17/Spotify-web-app",
  },
  {
    id: 4,
    title: "FlameTrack - Wilefire tracking app",
    description:
      "Wildfire tracking app using NASA api.",
    image: "/projects/F.png",
    tags: ["React", "Node.js", "NASA api"],
    demoUrl: "https://flaremap.onrender.com/",
    githubUrl: "https://github.com/PrajwalAwate17/JS-FlareMap",
  },
  {
    id: 5,
    title: "PromptVerse",
    description:
      "Developed a powerful tool for crafting and sharing AI prompts, optimizing interaction across diverse AI platforms.",
    image: "/projects/PromptVerse.png",
    tags: ["React", "Node.js"],
    demoUrl: "https://github.com/PrajwalAwate17/Prompt-Verse",
    githubUrl: "https://github.com/PrajwalAwate17/Prompt-Verse",
  },
  {
    id: 6,
    title: "Book Store",
    description:
      "An anime bookstore with secure private routes, offering personalized access to exclusive content and a seamless user experience.",
    image: "/projects/bookstore.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "https://github.com/PrajwalAwate17/Book-Store",
    githubUrl: "https://github.com/PrajwalAwate17/Book-Store",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/prajwalAwate17"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
