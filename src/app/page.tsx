import { Main } from "@/components/main-content/Main";
import { Story } from "@/components/main-content/Story";
import Bar from "@/components/menu-bar/menuBar";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="h-full w-screen">
      <div className="grid justify-center">
        <Bar />
        <Separator className="my-4" />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-8">
        <div className="grid justify-center self-center h-[1920px]">
          <Main />
        </div>
        <div className="grid box-border max-w-[405px] max-h-[720px] p-4 border-40 bg-white rounded-md">
          <Story />
        </div>
      </div>
    </div>
  )
}
