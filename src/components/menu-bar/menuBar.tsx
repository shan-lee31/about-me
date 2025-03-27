"use client"
import { useRouter } from "next/navigation";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "../ui/menubar";
import { Home, List, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const Bar = () => {
  const [theme, setTheme] = useState("light");

  const router = useRouter();

  const navigateToAbout = () => {
    router.push("#about")
  }

  const navigateToExperience = () => {
    router.push("#experience")
  }

  const navigateToProject = () => {
    router.push("#project")
  }

  const navigateToContact = () => {
    router.push("#contact")
  }

  const handleMode = () => {
    console.log("change mode")
  }

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    // Add or remove dark mode class
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);

    // Save theme preference
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="grid grid-flow-col">
      <div className="hover:cursor-pointer">
      </div>
      <div className="justify-center mb-5">
        <Menubar className="hidden md:flex mt-5 dark:text-white">
          <MenubarMenu>
            <MenubarTrigger onClick={navigateToAbout}><Home size={20} /></MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger onClick={navigateToExperience}>Experience</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger onClick={navigateToProject}>Project</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger onClick={navigateToContact}>Contact</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger onClick={toggleTheme}> {theme === "dark" ? <Moon size={25} color="white" /> : <Sun size={25} />} </MenubarTrigger>
          </MenubarMenu>
        </Menubar>
        <Menubar className="flex mt-1 md:hidden">
          <MenubarMenu>
            <MenubarTrigger>
              <List size={25} color={theme === "dark" ? "white" : "black"} />
            </MenubarTrigger>
            <MenubarMenu>
              <MenubarTrigger onClick={toggleTheme}> {theme === "dark" ? <Moon size={25} color="white" /> : <Sun size={25} />}</MenubarTrigger>
            </MenubarMenu>
            <MenubarContent>
              <MenubarItem onClick={navigateToAbout}>About</MenubarItem>
              <MenubarItem onClick={navigateToExperience}>Experience</MenubarItem>
              <MenubarItem onClick={navigateToProject}>Project</MenubarItem>
              <MenubarItem onClick={navigateToContact}>Contact</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  )
}

export default Bar;