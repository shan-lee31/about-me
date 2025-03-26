"use client"

import Experience from "@/components/about/experience"
import Intro from "@/components/about/intro"
import ContactMe from "@/components/contact/contact"
import ProjectTabs from "@/components/project/projectTabs"

export default function Home() {

  return (
    <div className="h-full w-screen bg-background">
      <div className="flex flex-col items-center relative h-screen mt-30">
        <div className={`md:w-1/2 w-3/4 mt-10`}>
          <div className="mt-10" id="about">
            <Intro />
          </div>
        </div>
        <div className="justify-center justify-items-center mt-10 w-3/4" id="experience">
          <Experience />
        </div>
        <div className="justify-center justify-items-center mt-10 w-3/4" id="project">
          <ProjectTabs />
        </div>
        <div className="justify-center justify-items-center mt-10 w-3/4" id="contact">
          <ContactMe />
        </div>
      </div>
    </div>
  )
}
