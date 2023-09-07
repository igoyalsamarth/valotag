import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import masterLogo from '../assets/masters.png';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween'
dayjs.extend(isBetween)

export default function TounrnamentsPage(){

    const [tournamentsList,setTournamentsList] = useState([]);
    const [isCompleted, setIsCompleted] = useState(false);
    const [index, setIndex] = useState(4);
    const tournaments = tournamentsList.slice(0,index);
    const getData = () => {
        fetch('tournaments.json')
        .then((res) => res.json())
        .then((json) => setTournamentsList(json.sort((a,b) => (dayjs(a['tournament-start-date']).isAfter(dayjs(b['tournament-start-date']))? -1 : 1))))
        .catch((e) => console.log(e))
    }
    const loadMore = () => {
        setIndex(index + 1);
        index >= tournamentsList.length-1 ? setIsCompleted(true) : setIsCompleted(false);
    }
    useEffect(() => {
        getData()
    }, [])

    const OngoingList = tournaments
                        .filter((Item) => {
                            return(dayjs().isBetween(Item['tournament-start-date'],Item['tournament-end-date'],null,'()'));
                        })
                        .map((Item,index,{length}) => {
        return(
            <Link to={"./" + Item['tournament-serial']} key={Item['tournament-serial']}>
                <div className={`flex flex-row bg-[#2C2C2C] p-6 gap-4 hover:bg-[#353535] ${(length === 1 ? 'rounded-lg' :(index===0 ? 'rounded-t-lg mb-0.5' : index===length-1 ? 'rounded-b-lg mt-0.5' : 'my-0.5'))}`}>
                    <div className="self-center bg-[#393939] w-[4.5vw] h-[4.5vw] p-4 rounded-lg">
                        <img src={masterLogo} alt='logo'></img>
                    </div>
                    <div className='flex flex-col py-3'>
                        <p className='flex flex-1 text-lg font-semibold'>{Item["tournament-name"]}</p>
                        <div className='flex flex-row w-[15vw]'>
                            <p className='flex flex-1 text-[#686868] font-semibold'>₹{Item["tournament-prizepool"]}</p>
                            <p className='text-[#686868] font-semibold'>{dayjs(Item["tournament-start-date"]).format('MMM D')} - {dayjs(Item["tournament-end-date"]).format('MMM D')}</p>
                        </div>
                    </div>
                </div>
            </Link>
        );
    });

    const UpcomingList = tournaments
                        .filter((Item) => {
                            return(dayjs().isBefore(Item['tournament-start-date']));
                        })
                        .map((Item,index,{length}) => {
        return(
            <Link to={"./" + Item['tournament-serial']} key={Item['tournament-serial']}> 
                <div className={`flex flex-row bg-[#2C2C2C] p-6 gap-4 hover:bg-[#353535] ${(length === 1 ? 'rounded-lg' :(index===0 ? 'rounded-t-lg mb-0.5' : index===length-1 ? 'rounded-b-lg mt-0.5' : 'my-0.5'))}`}>
                    <div className="self-center bg-[#393939] w-[4.5vw] h-[4.5vw] p-4 rounded-lg">
                        <img src={masterLogo} alt='logo'></img>
                    </div>
                    <div className='flex flex-col py-3'>
                        <p className='flex flex-1 text-lg font-semibold'>{Item["tournament-name"]}</p>
                        <div className='flex flex-row w-[15vw]'>
                            <p className='flex flex-1 text-[#686868] font-semibold'>₹{Item["tournament-prizepool"]}</p>
                            <p className='text-[#686868] font-semibold'>{dayjs(Item["tournament-start-date"]).format('MMM D')} - {dayjs(Item["tournament-end-date"]).format('MMM D')}</p>
                        </div>
                    </div>
                </div>
            </Link>
        );
    });

    const CompletedList = tournaments
                        .filter((Item) => {
                            return(dayjs().isAfter(Item['tournament-end-date']));
                        })
                        .map((Item,index,{length}) => {
        return(
            <Link to={"./" + Item['tournament-serial']} key={Item['tournament-serial']}>
                <div className={`flex flex-row bg-[#2C2C2C] p-6 gap-4 hover:bg-[#353535] ${(length === 1 ? 'rounded-lg' :(index===0 ? 'rounded-t-lg mb-0.5' : index===length-1 ? 'rounded-b-lg mt-0.5' : 'my-0.5'))}`}>
                    <div className="self-center bg-[#393939] w-[4.5vw] h-[4.5vw] p-4 rounded-lg">
                        <img src={masterLogo} alt='logo'></img>
                    </div>
                    <div className='flex flex-col py-3'>
                        <p className='flex flex-1 text-lg font-semibold'>{Item["tournament-name"]}</p>
                        <div className='flex flex-row w-[15vw]'>
                            <p className='flex flex-1 text-[#686868] font-semibold'>₹{Item["tournament-prizepool"]}</p>
                            <p className='text-[#686868] font-semibold'>{dayjs(Item["tournament-start-date"]).format('MMM D')} - {dayjs(Item["tournament-end-date"]).format('MMM D')}</p>
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
                <p className='text-lg font-semibold text-center'> Add tournaments</p>
            </div>
            <div className="flex flex-col">
                <p className='tracking-widest text-[#BFC3C3]'>ONGOING</p>
                <div className="flex flex-col mt-4">
                   {OngoingList}
                </div>
            </div>
            <div className="flex flex-col mt-9">
                <p className='tracking-widest text-[#BFC3C3]'>UPCOMING</p>
                <div className="flex flex-col mt-4">
                    {UpcomingList}
                </div>
            </div>
            <div className="flex flex-col mt-9">
                <p className='tracking-widest text-[#BFC3C3]'>COMPLETED</p>
                <div className="flex flex-col mt-4">
                    {CompletedList}
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