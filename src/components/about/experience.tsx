import { Label } from "../ui/label";

const experience = {
    "OCT 2023 - Present": "IN MAYBANK 🐯, work as a junior developer 💻 to..., experience the Agile workflow",
    "JAN 2021 - MAR 2021": "IN Silverlake Ecosystem, work as an intern, working with Angular, testing mobile app"
}


const Experience = () => {
    return (
        <>
            <Label className="font-bold text-2xl">Experience</Label>
            <div className="mt-10">
            {Object.entries(experience).map(([date, desc]) => (
                <div className="grid grid-cols-4 gap-4 mt-5" key={date}>
                    <div className="col-span-1">
                        <Label className="text-md">{date}</Label>
                    </div>
                    <div className="col-span-3">
                        <p className="text-sm">{desc}</p>
                    </div>
                </div>
            ))}
            </div>
        </>


    )
}

export default Experience;