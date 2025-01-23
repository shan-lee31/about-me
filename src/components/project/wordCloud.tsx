"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const WordCloud = () => {

    const onSubmit = () => {
        console.log("submitted!")
    }

    return (
        <div className="grid bg-secondary w-[900px] item-center p-10 rounded-md">
            <div className="flex p-2 bg-sky-500 h-[400px] rounded-sm mb-2">
            </div>
        </div>
    )
}

export default WordCloud;