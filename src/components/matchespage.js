import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import teamLiquidLogo from '../assets/teamLiquidLogo.png'
import dayjs from 'dayjs'
import RelativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(RelativeTime)

export default function MatchesPage(){

    const [tournaments,setTournaments] = useState([]);
    const [isCompleted, setIsCompleted] = useState(false);
    const [index, setIndex] = useState(7);
    const matches = tournaments.slice(0,index);
    const getData = () => {
        fetch('https://raw.githubusercontent.com/igoyalsamarth/valotag/main/public/tournaments.json')
        .then((res) => res.json())
        .then((json) => setTournaments(json.map(value => value['tournament-matches'].map(child => ({"tournament-name":value['tournament-name'], ...child})))
                                            .flat()
                                            .sort((a,b) => (dayjs(a['match-time']).isAfter(dayjs(b['match-time']))? -1 : 1))))
        .catch((e) => console.log(e))

    }
    const loadMore = () => {
        setIndex(index + 1);
        index >= tournaments.length-1 ? setIsCompleted(true) : setIsCompleted(false);
    }
    useEffect(() => {
        getData()
    }, [])

    const OngoingMatches = matches
                            .filter(Item => {return(dayjs().isSame(dayjs(Item['match-time']),'d'));})
                            .map((Item,index,{length}) => {
        return(
                <Link to={'./' + Item['match-serial']} key={Item['match-serial']}>
                    <div className={`flex flex-row bg-[#2C2C2C] p-6 gap-4 hover:bg-[#353535] ${(length === 1 ? 'rounded-lg' :(index===0 ? 'rounded-t-lg mb-0.5' : index===length-1 ? 'rounded-b-lg mt-0.5' : 'my-0.5'))}`}>
                        <div className='flex flex-row bg-[#393939] rounded-lg self-center p-3 gap-2'>
                            <div className='flex flex-col gap-0.5'>
                                <img src={teamLiquidLogo} alt='TLLogo' className='w-[32px] h-[32px]'></img>
                                <p className='self-center text-xs'>TL</p>
                            </div>
                            <p className='self-center text-sm'>vs</p>
                            <div className='flex flex-col gap-0.5'>
                                <img src={teamLiquidLogo} alt='TLLogo' className='w-[32px] h-[32px]'></img>
                                <p className='self-center text-xs'>TL</p>
                            </div>
                        </div>
                        <div className='flex flex-1 py-1.5'>
                            <div className='flex flex-col'>
                                <p className='flex flex-1 font-semibold text-lg'>{Item['match-team1']} vs {Item['match-team2']}</p>
                                <p className='font-semibold text-[#555]'>{Item['tournament-name']}</p>
                            </div>
                        </div>
                        <div className='self-center'>
                            <p className='tracking-wide text-sm bg-red-500 px-2.5 py-1 rounded-lg font-semibold'>LIVE</p>
                        </div>
                    </div>
                </Link>
        );
        });

        const UpcomingMatches = matches
                             .filter(Item => {return(dayjs().isBefore(dayjs(Item['match-time'])));
                            })
                            .sort((a,b) => (dayjs(a['match-time']).isAfter(dayjs(b['match-time']))? 1 :-1))
                            .map((Item,index,{length}) => {
        return(
                <Link to={'./' + Item['match-serial']} key={Item['match-serial']}>
                    <div className={`flex flex-row bg-[#2C2C2C] p-6 gap-4 hover:bg-[#353535] ${(length === 1 ? 'rounded-lg' :(index===0 ? 'rounded-t-lg mb-0.5' : index===length-1 ? 'rounded-b-lg mt-0.5' : 'my-0.5'))}`}>
                        <div className='flex flex-row bg-[#393939] rounded-lg self-center p-3 gap-2'>
                            <div className='flex flex-col gap-0.5'>
                                <img src={teamLiquidLogo} alt='TLLogo' className='w-[32px] h-[32px]'></img>
                                <p className='self-center text-xs'>TL</p>
                            </div>
                            <p className='self-center text-sm'>vs</p>
                            <div className='flex flex-col gap-0.5'>
                                <img src={teamLiquidLogo} alt='TLLogo' className='w-[32px] h-[32px]'></img>
                                <p className='self-center text-xs'>TL</p>
                            </div>
                        </div>
                        <div className='flex flex-1 py-1.5'>
                            <div className='flex flex-col'>
                                <p className='flex flex-1 font-semibold text-lg'>{Item['match-team1']} vs {Item['match-team2']}</p>
                                <p className='font-semibold rounded-lg text-[#555]'>{Item['tournament-name']}</p>
                            </div>
                        </div>
                        <div className='self-center'>
                            <p className='tracking-wide text-sm bg-[#393939] px-2.5 py-1 rounded-lg font-semibold'>{dayjs(Item['match-time']).fromNow()}</p>
                        </div>
                    </div>
                </Link>
        );
        });

        const CompletedMatches = matches
                             .filter(Item => {return(dayjs().isAfter(dayjs(Item['match-time'])));
                            })
                            .sort((a,b) => (dayjs(a['match-time']).isBefore(dayjs(b['match-time']))? 1 :-1))
                            .map((Item,index,{length}) => {
        return(
                <Link to={'./' + Item['match-serial']} key={Item['match-serial']}>
                    <div className={`flex flex-row bg-[#2C2C2C] p-6 gap-4 hover:bg-[#353535] ${(length === 1 ? 'rounded-lg' :(index===0 ? 'rounded-t-lg mb-0.5' : index===length-1 ? 'rounded-b-lg mt-0.5' : 'my-0.5'))}`}>
                        <div className='flex flex-row bg-[#393939] rounded-lg self-center p-3 gap-2'>
                            <div className='flex flex-col gap-0.5'>
                                <img src={teamLiquidLogo} alt='TLLogo' className='w-[32px] h-[32px]'></img>
                                <p className='self-center text-xs'>TL</p>
                            </div>
                            <p className='self-center text-sm'>vs</p>
                            <div className='flex flex-col gap-0.5'>
                                <img src={teamLiquidLogo} alt='TLLogo' className='w-[32px] h-[32px]'></img>
                                <p className='self-center text-xs'>TL</p>
                            </div>
                        </div>
                        <div className='flex flex-1 py-1.5'>
                            <div className='flex flex-col'>
                                <p className='flex flex-1 font-semibold text-lg'>{Item['match-team1']} vs {Item['match-team2']}</p>
                                <p className='font-semibold rounded-lg text-[#555]'>{Item['tournament-name']}</p>
                            </div>
                        </div>
                        <div className='self-center'>
                            <p className='tracking-wide text-sm bg-[#393939] px-2.5 py-1 rounded-lg font-semibold'>{dayjs(Item['match-time']).fromNow()}</p>
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
                <p className='text-lg font-semibold text-center'> Add matches</p>
            </div>
            <div className="flex flex-col">
                <p className='tracking-widest text-[#BFC3C3]'>ONGOING</p>
                <div className="flex flex-col mt-4">
                    {OngoingMatches}
                </div>
            </div>
            <div className="flex flex-col mt-9">
                <p className='tracking-widest text-[#BFC3C3]'>UPCOMING</p>
                <div className="flex flex-col mt-4">
                    {UpcomingMatches}
                </div>
            </div>
            <div className="flex flex-col mt-9">
                <p className='tracking-widest text-[#BFC3C3]'>COMPLETED</p>
                <div className="flex flex-col mt-4">
                    {CompletedMatches}
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
