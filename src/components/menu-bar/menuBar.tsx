"use client"
import { useRouter } from "next/navigation";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "../ui/menubar";
import { List, Sun } from "lucide-react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Bar = () => {
  const router = useRouter();

  const navigateToHome = () => {
    router.push("/")
  }

  const navigateToAbout = () => {
    router.push("/about")
  }

  const navigateToProject = () => {
    router.push("/project")
  }

  const navigateToContact = () => {
    router.push("/contact")
  }

  return (
    <div className="grid grid-flow-col">
      <div className="hover:cursor-pointer grid-col-1">
        <DotLottieReact
          src="logo.lottie"
          loop
          autoplay
          style={{ width: "90px" }}
          onClick={navigateToHome}
        />
      </div>
      <div className="place-self-center mb-5">
        <Menubar className="hidden md:flex mt-5">
          <MenubarMenu>
            <MenubarTrigger onClick={navigateToAbout}>About</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger onClick={navigateToProject}>Project</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger onClick={navigateToContact}>Contact</MenubarTrigger>
          </MenubarMenu>
        </Menubar>
        <Menubar className="mt-5 flex md:hidden">
          <MenubarMenu>
            <MenubarTrigger>
              Menu
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem onClick={navigateToAbout}>About</MenubarItem>
              <MenubarItem onClick={navigateToProject}>Project</MenubarItem>
              <MenubarItem onClick={navigateToContact}>Contact</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
      <div className="place-self-center">
        <Sun size={30} />
      </div>
    </div>
  )
}

export default Bar;