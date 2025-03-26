import { Github, Linkedin, Mail } from "lucide-react";
import { Label } from "../ui/label";
import Link from "next/link";

const ContactMe = () => {
    const socialAcc = {
        "Email": [<Mail />, "puishan.lee2000@gmail.com", "puishan.lee2000@gmail.com"],
        "Github": [<Github />, "shan-lee31", "https://github.com/shan-lee31/"],
        "LinkedIn": [<Linkedin />, "Lee Pui Shan", "https://www.linkedin.com/in/puishan-lee-86099b196"]
    }
    const socialLinks = ["a", "b", "c"]
    return (
        <>
            <Label className="font-bold text-2xl">Contact Me</Label>
            <div className="mt-10 w-full">
                {/* {Object.entries(socialLinks).map(([platform, contacts]) => ( */}
                <div className={`grid md:grid-cols-3 grid-rows-3 md:grid-rows-1 mb-10`}>
                    {Object.entries(socialAcc).map(([platform, contacts]) => (
                        <div className="md:col-span-1 row-span-1 mb-10" key={platform}>
                            <p className="text-lg font-semibold">{platform}</p>

                            <div className="flex flex-row gap-4 items-center">

                                {contacts
                                    .filter((_, index) => index !== 2)
                                    .map((contact, index) => (
                                        <p key={index} className="text-sm"> <a href={contacts[2] as string ?? "#"}>{contact}</a></p>

                                    ))}
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </>
    )
}


export default ContactMe;