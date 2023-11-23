import React, { useEffect, useState } from 'react'
import { getCategory, getCategories } from "../data/api";
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { } from '../data/api';
import { Link } from 'react-router-dom';




type CategorieT = {
    name: string,
    id: string,
}

type OneCategoryT = {
    name: string,
    id: string,
    sessions: SessionsT[]
}

type SessionsT = {
    name: string,
    id: string,
    desc: string,
    speaker: SessionTypeSpeker
}

// type SessionType = {
//     id: string,
//     name: string,
//     desc: string,
//     speaker: SessionTypeSpeker[]
// }

type SessionTypeSpeker = {
    bio: string,
    name: string,
    org: string,
    title: string
}


const OneCategory: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const [oneCategory, setOneCategory] = useState<OneCategoryT>()
    const [data, setData] = useState<CategorieT[]>([]);
    const [sessions, setSessions] = useState<SessionsT[]>();

    useEffect(() => {
        setData(getCategories())
    }, [])

    useEffect(() => {
        setOneCategory(getCategory(id))
        setSessions([])
    }, [id])

    const handleSession = (id: string) => {
        const ctegory = oneCategory?.sessions.filter(category => category.id === id)
        setSessions(ctegory)
        console.log(ctegory);

    }
    return (
        <div className=' w-[80vw] ml-auto mr-auto'>
            <Navbar />
            <h1 className="text-[30px] py-4">Session Categories</h1>
            <div className='flex flex-col justify-center md:grid md:grid-rows-3 md:grid-cols-3'>
                {
                    data.map((item, indexItem) => (
                        <div key={indexItem} className=' w-56  hover:bg-slate-100 p-1 rounded-md cursor-pointer m-1'>
                            <Link to={'/oneCategory/' + item.id}>{item.name}</Link>
                        </div>
                    ))
                }
            </div>
            <div>
                <div>
                    <h1 className='text-[25px] py-4'>{oneCategory?.name} Sessions</h1>
                    <div className='flex m-1 flex-col md:grid md:grid-rows-1 md:grid-cols-2 '>
                        {oneCategory?.sessions.map((category, categoryIndex) => (
                            <div onClick={() => handleSession(category.id)} key={categoryIndex} className='border my-1 w-[300px] py-6 text-center hover:bg-slate-100 rounded-md cursor-pointer'>
                                <p>{category.name}</p>
                            </div>
                        ))}
                    </div>
                    <div>
                        {
                            sessions?.map((item, index) => (
                                <div key={index}>
                                    <h1 className=' text-xl py-4'>{item.name}</h1>
                                    <p>{item.desc}</p>
                                    <p className=' text-[#525252] text-xl py-4'>{item.speaker.name}</p>
                                    <p>{item.speaker.org}</p>
                                    <p className='py-4'>{item.speaker.bio}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OneCategory
