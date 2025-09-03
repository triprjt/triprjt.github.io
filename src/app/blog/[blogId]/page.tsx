"use client"
import { useParams } from 'next/navigation'

const page = () => {
  const { blogId } = useParams()
  const blogContent = [{ id: 1, title: "Blog meme generator", description: "Paste your blog content and automaticallyinsert memes from a directory of 1000 +memes " },
  { id: 2, title: "Charchagram", description: "A place to discuss root level issues and know your elected representatives" },
  { id: 3, title: "Title 3", description: "Paste your blog content and automaticallyinsert memes from a directory of 1000 +memes " }]
  const id = Array.isArray(blogId) ? blogId[0] : blogId

  return (
    <div className='min-h-screen min-w-screen align-middle'>
      {blogContent.map((item: any) => item.id === Number(id) && (
        <div key={item.id} className='flex flex-col items-center justify-center mx-60 border border-red-400 p-4 rounded-lg'>
          <h1 className='text-2xl font-bold mt-20'>{item.title}</h1>
          <p className='text-lg text-center p-4 mt-20'>{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default page