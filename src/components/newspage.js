import { Link } from 'react-router-dom';
import coverThumbnail from '../assets/news-header.jpg';
import calendarIcon from '../assets/calendar.svg';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useEffect, useState } from 'react';
dayjs.extend(relativeTime)


export default function NewsPage(){

    const [news,setNews] = useState([])
    const [isCompleted, setIsCompleted] = useState(false);
    const [index, setIndex] = useState(4);
    const initialMoreNews = news.slice(2,index)
    const getData = () => {
        fetch('https://raw.githubusercontent.com/igoyalsamarth/valotag/main/public/news.json')
        .then((res) => res.json())
        .then((json) => setNews(json))
        .catch((e) => console.log(e))
    }


    const loadMore = () => {
        setIndex(index + 1);
        index >= news.length-1 ? setIsCompleted(true) : setIsCompleted(false);
    }

    useEffect(() => {
        getData()
    }, [])

    const UpcomingNews = news.slice(0,2)
                             .map((Item,index,{length}) => {
        return(
            <Link to={'./' + Item['news-serial']} key={Item['news-serial']}>
                <div className={`flex flex-row bg-[#2C2C2C] p-6 gap-4 hover:bg-[#353535] ${(index === 0? 'rounded-t-lg mb-0.5' : index === length-1 ? 'rounded-b-lg mt-0.5' : 'my-0.5')} `}>
                    <img src={coverThumbnail} alt='coverThumbnail' className='w-[9vw] h-[5.5vw] rounded-lg self-center'></img>
                    <div className='flex flex-col'>
                        <p className='flex flex-1 text-lg font-semibold w-[22vw] leading-5'>{Item['news-heading']}</p>
                        <div className='flex flex-row gap-2'>
                            <img src={calendarIcon} alt='Calendar' className='self-center mb-0.5'></img>
                            <p className='text-[#555] font-semibold'>{dayjs(Item['news-date']).fromNow()}</p>
                        </div>
                    </div>
                </div>
            </Link>
        );
    });

    const MoreNews = initialMoreNews.map((Item,index,{length}) => {
        return(
            <Link to={'./' + Item['news-serial']} key={Item['news-serial']}>
                <div className={`flex flex-row bg-[#2C2C2C] p-6 gap-4 hover:bg-[#353535] ${(index === 0? 'rounded-t-lg mb-0.5' : index === length-1 ? 'rounded-b-lg mt-0.5' : 'my-0.5')} `}>
                    <img src={coverThumbnail} alt='coverThumbnail' className='w-[9vw] h-[5.5vw] rounded-lg self-center'></img>
                    <div className='flex flex-col'>
                        <p className='flex flex-1 text-lg font-semibold w-[22vw] leading-5'>{Item['news-heading']}</p>
                        <div className='flex flex-row gap-2'>
                            <img src={calendarIcon} alt='Calendar' className='self-center mb-0.5'></img>
                            <p className='text-[#555] font-semibold'>{dayjs(Item['news-date']).fromNow()}</p>
                        </div>
                    </div>
                </div>
            </Link>
        );
    });

    return(
        <div className="flex flex-col">
            <div className='mb-9 flex flex-row gap-4 justify-center align-middle items-center bg-[#393939] rounded-lg p-6 hover:bg-[#353535]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                    <path d="M24.5 16H8.5M16.5 24L16.5 8" stroke="white" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className='text-lg font-semibold text-center'> Add news article</p>
            </div>
            <div className="flex flex-col">
                <p className='tracking-widest text-[#BFC3C3]'>LATEST NEWS</p>
                <div className="flex flex-col mt-4">
                    {UpcomingNews}
                </div>
            </div>
            <div className="flex flex-col mt-9">
                <p className='tracking-widest text-[#BFC3C3]'>TOP NEWS</p>
                <div className="flex flex-col mt-4">

                </div>
            </div>
            <div className="flex flex-col mt-9">
                <p className='tracking-widest text-[#BFC3C3]'>MORE NEWS</p>
                <div className="flex flex-col mt-4">
                    {MoreNews}
                </div>
            </div>
            <div className='flex justify-center align-center mt-6'>
            {!isCompleted &&
            <button className= 'bg-[#2C2C2C] px-5 py-4 rounded-full font-semibold hover:bg-[#353535] hover:font-bold text-center align-middle justify-center text-[#BFC3C3] tracking-widest text-sm' onClick={loadMore} type='button'>LOAD MORE</button>
            }
            </div>    
        </div>
    );
}