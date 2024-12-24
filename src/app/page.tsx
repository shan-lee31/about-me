"use client"
import TypeIt from "typeit-react"

export default function Home() {

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#'; for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <div className="h-full w-screen bg-background">
      <div className="flex flex-col items-center justify-center relative h-screen mt-30 hidden md:flex">
        <div className="absolute z-10 -skew-y-12 -rotate-30"> 
          <span className="text-6xl">
          <TypeIt options={{
            loop: false,
            breakLines: true,
            strings: ["Hello World!", "I am Pui Shan."],
            waitUntilVisible: true,
            afterStep: function (instance: any) {
              instance.getElement().style.color = getRandomColor();
            },
          }} >
          </TypeIt>
        </span>
        </div>
        <div className="absolute z-0">
          <img src="pc2.png" alt="pc" className="w-full h-auto" />
        </div>
      </div>
    </div>
  )
}
