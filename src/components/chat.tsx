'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useChat } from 'ai/react'

export function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat()
    return (
        <Card className="w-[480px] h-[600px] grid grid-rows-[min-content_1fr_min-content]">
            <CardHeader>
                <CardTitle>
                    Chat IA
                </CardTitle>
                <CardDescription>
                    Using Vercel SDK and shadcn to create ChatBot.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
                {messages.map(message => {
                    return (
                        <div key={message.id} className="flex gap-3 text-slate-600 text-sm">
                            {message.role === 'user' && (
                                <Avatar>
                                    <AvatarFallback>
                                        WC
                                    </AvatarFallback>
                                    <AvatarImage src="https://avatars.githubusercontent.com/u/64429216?v=4" />
                                </Avatar>
                            )}
                            {message.role === 'assistant' && (
                                <Avatar>
                                    <AvatarFallback>
                                        BT
                                    </AvatarFallback>
                                    <AvatarImage src="https://avatars.githubusercontent.com/u/64429216?v=4" />
                                </Avatar>
                            )}

                            <p className="leading-relaxed">
                                <span className="block font-bold text-slate-80">
                                {message.role === 'user' ? 'Human' : 'IA' } 
                                </span>
                                {message.content} 
                            </p>
                        </div>
                    )
                })}

            </CardContent>
            <CardFooter>
                <form className="w-full flex gap-2" onSubmit={handleSubmit}>
                    <Input placeholder="How can i help u" value={input} onChange={handleInputChange} />
                    <Button type="submit">Send</Button>
                </form>
            </CardFooter>
        </Card>
    )
}