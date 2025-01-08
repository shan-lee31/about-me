"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getComment, sendComment } from "@/actions/comment_action"
import { useEffect, useState } from "react"

const CommentBoard = () => {
    const [comments, setComments] = useState<string[]>([])
    const [newComment, setNewComment] = useState("")

    const onSubmit = async () => {
        if (!newComment.trim()) return;

        setComments((prev) => [...prev, newComment])

        try {
            await sendComment("677def21cfee8c87bd2033f9", newComment)
            const updatedComments = await fetchComments(); // Fetch latest
            setComments(updatedComments)

        }
        catch (err) {
            console.log(err)
            setComments((prev) => prev.slice(0, -1))
        }
        setNewComment("")
    }

    const fetchComments = async () => {
        try {
            const c = await getComment()
            return c ?? [];
        }
        catch (err) {
            console.log(err)
            return []
        }
    }

    useEffect(() => {
        const loadComments = async () => {
            const fetchedComments = await fetchComments();
            setComments(fetchedComments);
        };
        loadComments();
    }, [])

    return (
        <div className="grid bg-secondary w-[900px] place-content-center p-10 rounded-md">
            <div className="grid p-2 bg-black h-[400px] rounded-sm mb-2 overflow-y-auto scroll-smooth">
                {comments ? comments.map((x: any) => (
                    <div className="" key={x}>
                        <p className="text-white">{x}</p>
                    </div>
                )) :
                    <div className="">
                        <p className="text-white">Loading...</p>
                    </div>
                }
            </div>
            <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="text" placeholder="Type in your thoughts!" value={newComment} onChange={(e) => setNewComment(e.target.value)} />
                <Button type="submit" onClick={onSubmit}>Send</Button>
            </div>

            <div className="mt-5">
                <p> Feel Overwhelmed? Try the <a href="/project?tab=wordcloud" className="underline">"Word Cloud"</a> to visualize the thoughts and gain clarity effortlessly. </p>
            </div>

        </div>
    )
}

export default CommentBoard;