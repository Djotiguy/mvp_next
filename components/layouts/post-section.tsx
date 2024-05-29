"use client";

import { Post } from "@/types";
import PostCard from "./post-card";

type Props = {
  posts: Post[];
}

export default function PostSection({posts}: Props) {
  return (
    <div className="p-4 grid mt-6 gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {posts.map((post) => (
            <PostCard key={post.id} post={post} />
        ))}
  </div>
  )
}
