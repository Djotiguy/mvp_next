import React from 'react'
import useSWR from 'swr'
import Post from '@/components/post'

export default function FeedList({index}: {index: number}) {
    const {data, error, isLoading} = useSWR("/api/posts/feed?page=" + index);
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

  return (
    <ul>
        {data.data.map((post: PostI) => {
            return(
                <li className='my-5' key={post.id}>
                    <Post post={post} />
                </li>
            )
        })}
    </ul>
  );
}
