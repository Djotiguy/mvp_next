"use client";

import { Post } from "@/types";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Eye, MessageCircle } from "lucide-react";
import ImageDefault from "../../public/5.png";

type Props = {
  post: Post;
}


export default function PostCard({post}: Props) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <Card className="flex mt-5 flex-col justify-between rounded-lg gap-2 border-2">
        <CardHeader>
          <div className="aspect-square relative">
          <Image src={ImageDefault} fill className="aspect square object-cover rounded-md transition-all duration-300 hover:scale-110" alt={post.title} />
          </div>
          <p className="font-semibold text-lg mt-3">{post.title}</p>
        </CardHeader>

        <CardContent>
          <Badge variant="outline">{post.category}</Badge>
        </CardContent>

        <CardFooter>
          <div className="flex gap-2">
            <div className="flex itmes-center gap-1">
              <MessageCircle size={20} className="text-color-slate-500" />
              <p className="text-slate-500"> {post.nbComments} </p>
            </div>
            <div className="flex itmes-center gap-1">
              <Eye size={20} className="text-color-slate-500" />
              <p className="text-slate-500"> {post.nbViews} </p>
            </div>
          </div>
        </CardFooter>
      </Card>
      
    </Link>
  )
}
