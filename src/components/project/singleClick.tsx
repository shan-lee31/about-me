"use client"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Controller, useForm } from "react-hook-form"

interface formData {
    name: string;
}

const SingleClick = () => {
    const { handleSubmit, control, reset, formState: { errors } } = useForm<formData>({
        defaultValues: {
            name: ""
        }
    });

    const onSubmit = () => {
        console.log("submitted!")
    }

    return (
       <></>

    )
}

export default SingleClick;