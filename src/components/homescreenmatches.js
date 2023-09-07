import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import RelativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(RelativeTime)



export default function HomeScreenMatches(){

    const [matches,setMatches] = useState([]);
    const getData = () => {
        fetch('https://raw.githubusercontent.com/igoyalsamarth/valotag/main/public/tournaments.json')
        .then((res) => res.json())
        .then((json) => setMatches(json.map(value => value['tournament-matches'].map(child => ({"tournament-name":value['tournament-name'], ...child})))
                                            .flat()
                                            .sort((a,b) => (dayjs(a['match-time']).isAfter(dayjs(b['match-time']))? -1 : 1))))
        .catch((e) => console.log(e))
    }
    useEffect(() => {
        getData()
    }, [])

    const OngoingMatches = matches
                             .filter(Item => {return(dayjs().isSame(dayjs(Item['match-time']),'d'));
                            })
    const UpcomingMatches = matches
                             .filter(Item => {return(dayjs().isBefore(dayjs(Item['match-time'])));
                            })
                            .sort((a,b) => (dayjs(a['match-time']).isAfter(dayjs(b['match-time']))? 1 :-1))
                            .slice(0,3);
    const CompletedMatches = matches
                            .filter(Item => {return(dayjs().isAfter(dayjs(Item['match-time'])));
                           })
                           .sort((a,b) => (dayjs(a['match-time']).isBefore(dayjs(b['match-time']))? 1 :-1))
                           .slice(0,3)

    const finalList = [...OngoingMatches, ...UpcomingMatches, ...CompletedMatches].map((Item,index,{length}) => {
        return(
            <Link to={'matches/' + Item['match-serial']} key={Item['match-serial']}>
                <div className={`flex flex-row gap-2 bg-[#2C2C2C] py-2 px-4 hover:bg-[#353535] ${(length === 1 ? 'rounded-lg' :(index===0 ? 'rounded-t-lg mb-0.5' : index===length-1 ? 'rounded-b-lg mt-0.5' : 'my-0.5'))}`}>
                    <div className='flex flex-1 py-1.5 w-[13vw] '>
                        <div className='flex flex-col w-[12vw] gap-2 '>
                            <p className='flex flex-1 font-semibold text-lg leading-5'>{Item['match-team1']} vs {Item['match-team2']}</p>
                            <p className='font-semibold text-[#555] leading-5 truncate'>{Item['tournament-name']}</p>
                        </div>
                    </div>
                    <div className='justify-center flex'>
                        {dayjs().add(1,'d').isBefore(dayjs(Item['match-time'])) ?
                        <p className='flex tracking-wide text-xs bg-[#393939] px-2.5 py-1 rounded-lg font-semibold justify-center self-center text-center'>
                            {dayjs(Item['match-time']).fromNow()}  
                        </p> :
                        dayjs().isAfter(dayjs(Item['match-time'])) ?
                        <p className='flex tracking-wide text-xs bg-[#393939] px-2.5 py-1 rounded-lg font-semibold justify-center self-center text-center'>
                            {dayjs(Item['match-time']).fromNow()}
                        </p> :
                        <p className='flex tracking-wide text-xs bg-red-500 px-2.5 py-1 rounded-lg font-semibold justify-center self-center text-center'>
                            LIVE
                        </p>
                    }
                    </div>
                </div>
            </Link>
        );
    });

    return(
        <>
            <div className="flex flex-col">
                {finalList}
            </div>        
        </>
    );
}