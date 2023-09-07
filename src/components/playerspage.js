import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import skrossiImage from '../assets/skrossi.jpg'


export default function PlayersPage(){

    const [isCompetitive, setIsCompetetive] = useState(true)
    const [playersList, setPlayersList] = useState([]);
    //const [isCompleted, setIsCompleted] = useState(false);
    const [index, setIndex] = useState(10)
    const players = playersList.slice(0,index);
    const getData = () => {
        fetch('https://raw.githubusercontent.com/igoyalsamarth/valotag/main/public/players.json')
        .then((res) => res.json())
        .then((json) => setPlayersList(json))
        .catch((e) => console.log(e))
    }
    const PlayerSpotlight = playersList.map(Item => ({"player-serial":Item['player-serial'],"player-name":Item['player-name'],...Item['player-ranked-stats']}))
                                    .sort((a,b) => {return (a['ranked-leaderboard'] - b['ranked-leaderboard'])})
                                    .slice(0,3)

    const PlayerSpotlights = PlayerSpotlight.map((Item, index, {length}) => {
        return(
            <Link to={'./' + Item['player-serial']} key={Item['player-serial']}>
                <div style={{backgroundImage: `url(${skrossiImage})`}} className={`bg-cover flex bg-blue-500 rounded-lg h-[300px] border-8 border-solid items-end ${(index === 0?'border-[#FFBA35]': index ===1?'border-[#757575]':'border-[#935A05]')}`}>
                    <div className="flex pb-8 pl-8 uppercase text-xl font-bold w-full bg-gradient-to-t from-black to-transparent pt-4 rounded-b-lg">{Item['player-name']}</div>
                </div>
            </Link>
        )
    });

    //const PlayerProfilesCompetitive = players.map(Item => ({"player-serial":Item['player-serial'],"player-name":Item['player-name'],...Item['player-ranked-stats']}))
    //                                            .sort((a,b) => {return (a['ranked-leaderboard'] - b['ranked-leaderboard'])})
    //                                            .slice(3)
    const PlayerProfilesRanked = players.map(Item => ({"player-serial":Item['player-serial'],"player-name":Item['player-name'],...Item['player-ranked-stats']}))
                                                  .filter((Item) => !PlayerSpotlight.find((Child) => Item['player-serial'] === Child['player-serial']))
                                                  .map((Item,index,{length}) => {
        return(
            <Link to={'./' + Item['player-serial']} key={Item['player-serial']}>
                <div style={{backgroundImage: `url(${skrossiImage})`}} className={`bg-cover flex bg-black rounded-lg h-[300px] items-end`}>
                    <div className="flex pb-8 pl-8 uppercase text-xl font-bold w-full bg-gradient-to-t from-black to-transparent pt-4 rounded-b-lg">{Item['player-name']}</div>
                </div>
            </Link>
        )
    });

    const PlayerProfilesCompetitive = players.map(Item => ({"player-serial":Item['player-serial'],"player-name":Item['player-name'],...Item['player-competitive-stats']}))
                                        .sort((a,b) => {return (a['competitive-acs'] - b['competitive-acs'])})
                                        .map((Item,index,{length}) => {
        return(
            <Link to={'./' + Item['player-serial']} key={Item['player-serial']}>
                <div style={{backgroundImage: `url(${skrossiImage})`}} className={`bg-cover flex bg-black rounded-lg h-[300px] items-end`}>
                    <div className="flex pb-8 pl-8 uppercase text-xl font-bold w-full bg-gradient-to-t from-black to-transparent pt-4 rounded-b-lg">{Item['player-name']}</div>
                </div>
            </Link>
        )
    });

    //const loadMore = () => {
    //    setIndex(index + 1);
    //    index >= playersList.length-1 ? setIsCompleted(true) : setIsCompleted(false);
    //}

    const switchValues = () => {
        setIsCompetetive(!isCompetitive);
    }

    useEffect(() => {
        getData()
    }, [])

    return(
        <div className="flex flex-col">
            <div className='flex flex-row gap-4 justify-center align-middle items-center bg-[#393939] rounded-lg p-6 hover:bg-[#353535] mb-9'>
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                    <path d="M24.5 16H8.5M16.5 24L16.5 8" stroke="white" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className='text-lg font-semibold text-center'> Add player</p>
            </div>
            <div className="flex flex-col mb-9">
                <div className="flex flex-row">
                    <p className='tracking-widest text-[#BFC3C3] flex flex-1'>PLAYER SPOTLIGHTS</p>
                </div>
                <div className="flex mt-4">
                    <div className="grid grid-cols-3 grid-rows-1 gap-4 place-items-stretch grow">
                        {PlayerSpotlights}
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row">
                    <p className='tracking-widest text-[#BFC3C3] flex flex-1'>PLAYER PROFILES</p>
                    <div className="flex flex-row gap-4">
                        <p className="text-[#BFC3C3] tracking-widest">COMPETITIVE</p>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" onClick={() => switchValues()}/>
                            <div className="w-[42px] h-6 bg-[#FFFFFF] rounded-full peer dark:bg-[#D0D9DA] peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[2.5px] after:left-[3px] after:bg-white after:rounded-full after:h-[18px] after:w-[18px] after:transition-all peer-checked:bg-[#FF4655]">
                            </div>
                        </label>
                        <p className="text-[#BFC3C3] tracking-widest">RANKED</p>
                    </div>
                </div>
                <div className="flex my-4">
                    <div className="grid grid-cols-3 gap-4 place-items-stretch grow">
                        {isCompetitive?PlayerProfilesCompetitive: PlayerProfilesRanked}
                    </div>
                </div> 
            </div>
        </div>
    );
}