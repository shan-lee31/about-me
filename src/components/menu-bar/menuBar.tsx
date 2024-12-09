"use client"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuPortal, DropdownMenuSubContent } from "@/components/ui/dropdown-menu";
import { User, CreditCard, Settings, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Bar = () => {
  const router = useRouter();

  const navigateToAbout =  () => {
    router.push("/about")
  }

  const navigateToProject = () => {
    router.push("/project")
  }

  const navigateToContact = () => {
    router.push("/contact")
  }

  return (
    <div className="mt-5">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Here</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={navigateToAbout}>
              <User />
              <span>About</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={navigateToProject}>
              <CreditCard />
              <span>Project</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={navigateToContact}>
              <PhoneCall />
              <span>Contact</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default Bar;