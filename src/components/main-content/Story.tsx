"use client"
import { Cat, Dog } from "lucide-react";
import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

export const Story = () => {
    const [progress, setProgress] = useState(0)
    const [currentIndex, setCurrentIndex] = useState(0)

    const stories = [
        {
            type: "icon",
            duration: 1500,
            content: () => (
                <div
                    style={{
                        backgroundColor: "#FEDCD2",
                        padding: "20px",
                        borderRadius: "10px",
                    }}
                >
                    <h1 style={{ color: "#FF7F50", transform: "rotate(-7deg)" }}>
                        This is a
                    </h1>
                    <h2 style={{ backgroundColor: "grey", color: "#FFD700", transform: "rotate(-10deg)" }}>
                        DOG <span> <Dog size={10} /> </span>
                    </h2>
                    <h3 style={{ color: "#8FBC8F", transform: "rotate(-10deg)" }}>
                        There was a cat that brought joy to everyone's life. Its fluffy fur
                        and playful nature made it the center of attention wherever it went.
                    </h3>
                </div>
            ),
        },
        {
            type: "icon",
            duration: 1500,
            content: () => (
                <div
                    style={{
                        backgroundColor: "#FEDCD2",
                        padding: "20px",
                        borderRadius: "10px",
                    }}
                >
                    <h1 style={{ color: "#FF7F50", transform: "rotate(-7deg)" }}>
                        This is a
                    </h1>
                    <h2 style={{ backgroundColor: "grey", color: "#FFD700", transform: "rotate(-10deg)" }}>
                        CAT <span> <Cat size={10} /></span>
                    </h2>

                    <h3 style={{ color: "#8FBC8F", transform: "rotate(-10deg)" }}>
                        There was a cat that brought joy to everyone's life. Its fluffy fur
                        and playful nature made it the center of attention wherever it went.
                    </h3>
                </div>
            ),
        },
        {
            type: "image",
            content: () => <img src="grad1.png" alt="Grad" style={{ maxWidth: "100%" }} />,
            duration: 1500
        }
    ]


    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval)
                    return 100;
                }
                return prev + 5;
            });
        }, stories[currentIndex].duration / 20)

        return () => clearInterval(interval);
    }, [currentIndex]);

    useEffect(() => {
        if (progress >= 100) {
            setTimeout(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex === stories.length - 1 ? 0 : prevIndex + 1
                )
                setProgress(0)
            }, 500)
        }
    }, [progress, stories.length])

    return (
        <div className="grid box-border max-w-[405px] max-h-[720px] p-4 border-40 bg-white rounded-md" >
            <div className="grid grid-flow-col">
                {stories.map((_, i) => (
                    <Progress key={i} value={i === currentIndex ? progress : i < currentIndex ? 100 : 0} />
                ))}
            </div >
            <div>{stories[currentIndex]?.content && stories[currentIndex].content()}</div>
        </div>

    )
}