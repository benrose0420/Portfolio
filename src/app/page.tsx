import Experience from "@/components/section/experience";
import About from "@/components/section/about";
import Project from "@/components/section/project";
import Education from "@/components/section/education";
import Testminal from "@/components/section/testminal";

export default function Home() {
  return (
    <div className="flex items-center flex-col">
      <About />
      <Experience />
      <Project />
      <Education />
      <Testminal />
    </div>
  );
}
