import { FaYoutube } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Navbar() {
    const {keyword} =useParams();
    const [text, setText] = useState('');
    const navigate = useNavigate();
    
    useEffect(() => { setText(keyword ||'')
                    },[keyword])

    return (
        <header className='w-full flex p-4 text-2xl border-b border-zinc-600 mb-4'>
            <Link to='/' className='flex  items-center'>
            <FaYoutube className='text-4xl text-brand'/>
            <h1 className='text-2xl ml-4'>YouTube</h1>
            </Link>
       
            <form className='w-full flex justify-center' 
                onSubmit={(e)=> {e.preventDefault();
                                 navigate(`/videos/${text}`)}}>
                <input 
                  className='w-7/12 p-2 outline-none bg-black text-gray-50' 
                  onChange={(e)=>{
                    setText(e.target.value)}}
                  type='text' 
                  value={text} 
                  placeholder='Search'/>
                 <button >🔍</button>
            </form>
        </header>
    );
}

