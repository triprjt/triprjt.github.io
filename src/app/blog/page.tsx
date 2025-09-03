"use client"

import { useRouter } from 'next/navigation'
const Page = () => {
    const router = useRouter()
    const list = [{ id: 1, title: "Blog meme generator", description: "Paste your blog content and automaticallyinsert memes from a directory of 1000 +memes " },
    { id: 2, title: "Charchagram", description: "A place to discuss root level issues and know your elected representatives" },
    { id: 3, title: "Title 3", description: "Paste your blog content and automaticallyinsert memes from a directory of 1000 +memes " }]
    return (
        <div className='min-h-screen flex flex-col'>
            <h1 className='text-4xl font-bold border border-red-400 w-4/5 mx-auto mt-20 text-center '>Blog space</h1>
            <div className=' rounded-lg p-4 w-4/5 mx-auto grid grid-rows-3 gap-4 md:grid-rows-1 mt-20'>
                {list.map((item) => (
                    <div key={item.id} className='border border-red-400 shadow-md p-4 rounded-lg' onClick={() => {
                        router.push(`/blog/${item.id}`)
                    }}>
                        <h1 className='text-2xl font-bold'>{item.title}</h1>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Page