import React from 'react'
import { RiSparklingLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";


const SearchBox = ({ value, onChange, onSearch, loading }: { value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, onSearch: () => void, loading: boolean }) => {
    return (
        <div className='gap-2 mb-6 border border-gray-200 rounded-2xl p-4 bg-white'>
            <div className="text-blue-500 flex items-center gap-2 my-2">
                <RiSparklingLine />
                <h1 className="font-semibold text-[13px]">Ask AIFindr</h1>
            </div>
            <div className='flex justify-end mt-2 gap-2'>
                <input
                    value={value}
                    onChange={onChange}
                    type="text"
                    placeholder="Ask me anything..."
                    className='w-full text-[13px] p-2 bg-gray-100 rounded-xl'
                />
                <button onClick={onSearch} className='flex items-center gap-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-xl text-[12px] font-black'>
                    {loading ? <div className='animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white'></div> : <IoIosSearch size={18} />}
                    Search
                </button>
            </div>
            <div className='relative mt-2'>
                <div className='flex gap-2 overflow-x-auto py-1 flex-nowrap pb-2 -mx-1 px-1 no-scrollbar'>
                    <p className='text-[11px] text-gray-400 border-gray-200 border rounded-xl p-1 px-2 whitespace-nowrap flex-shrink-0'>Find me artists who love hiking and talk like Tarantino?</p>
                    <p className='text-[11px] text-gray-400 border-gray-200 border rounded-xl p-1 px-2 whitespace-nowrap flex-shrink-0'>What about writers who are into sci-fi and use humor?</p>
                    <p className='text-[11px] text-gray-400 border-gray-200 border rounded-xl p-1 px-2 whitespace-nowrap flex-shrink-0'>Connect me with musicians in New York</p>
                </div>
                <div className='absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white to-transparent pointer-events-none'></div>
            </div>
        </div>
    )
}

export default SearchBox
