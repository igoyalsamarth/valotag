import React from "react";
import { Link } from "react-router-dom";
import newsHeader from '../../assets/news-header.jpg'
import calendarIcon from '../../assets/calendar.svg'
import mastersLogo from '../../assets/masters.png'
//import torunaments from '../database/tournaments.json'
import news from '../../database/news.json'
//import TournamentInfo from "./tournamentinfo";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';
import HomeScreenMatches from "./homescreenmatches";
import logoValo from '../../assets/logoValo.png'

dayjs.extend(relativeTime)


export default function Home(){

    const HomeBanner = () => {
        return(
            <Link to={'news/' + news[0]['news-serial']}>
                <div className='banner flex flex-col bg-cover h-[22.5vw] rounded-lg' style={{backgroundImage: `url(${newsHeader})`}}>
                    <div className="flex-1 ml-6 mt-6 tracking-widest font-bold text-[#BFC3C3]">LATEST NEWS
                    </div>
                    <div className="flex flex-row pl-6 pb-9 bg-gradient-to-t from-black to-zinc-950/0 rounded-b-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none" className="self-start stroke-2 mt-1">
                            <path d="M21 9.33334C21 7.47683 20.2625 5.69635 18.9497 4.3836C17.637 3.07084 15.8565 2.33334 14 2.33334C12.1435 2.33334 10.363 3.07084 9.05025 4.3836C7.7375 5.69635 7 7.47683 7 9.33334C7 17.5 3.5 19.8333 3.5 19.8333H24.5C24.5 19.8333 21 17.5 21 9.33334Z" stroke="#F1E809" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16.0181 24.5C15.813 24.8536 15.5186 25.1471 15.1644 25.3511C14.8102 25.5551 14.4086 25.6625 13.9998 25.6625C13.591 25.6625 13.1894 25.5551 12.8352 25.3511C12.481 25.1471 12.1866 24.8536 11.9814 24.5" stroke="#F1E809" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <div className="flex flex-col ml-4">
                            <p className=" font-bold text-2xl">{news[0]['news-heading']}</p>
                            <p className="font-semibold text-[#686868] ">Published {dayjs(news[0]['news-date']).format('HH:MM')} IST, {dayjs(news[0]['news-date']).format('DD.MM.YY')}</p>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }

    const moreNews =  news.slice(1,6)
                          .map((Item,index,{length}) => {
        return(
            <Link to={'news/' + Item['news-serial']} key={Item['news-serial']}>
                    <div className={`flex flex-row bg-[#2C2C2C] p-6 hover:bg-[#353535] ${(index === 0? 'rounded-t-lg mb-0.5' : index === length-1 ? 'rounded-b-lg mt-0.5' : 'my-0.5')}`}>
                        <img src={newsHeader} alt="Thumbnail" className="w-[8.5vw] h-[5.5vw] rounded-lg self-center"></img>
                        <div className="flex flex-col ml-4 py-1">
                            <p className="flex flex-1 font-semibold text-lg leading-5 w-[24vw]">{Item['news-heading']}</p>
                            <div className="flex flex-row gap-1">
                                <img src={calendarIcon} alt="calendar" className="w-[16px] h-[16px] self-center mb-0.5"></img>
                                <p className="text-[#555] font-semibold">{dayjs(Item['news-date']).fromNow()}</p>
                            </div>
                        </div>
                    </div>
            </Link>
        );
    });
    

    return(
        <div className="flex gap-4">
        <div className="flex flex-col w-2/3">
            {HomeBanner()}
            <div className='more-news  flex flex-col mt-8'>
                <p className="tracking-widest text-[#BFC3C3]">MORE NEWS</p>
                <div className="mt-5 flex flex-col">
                    {moreNews}
                </div>
            </div>
            <div className="tournaments mt-8">
            <p className="tracking-widest text-[#BFC3C3]">TOURNAMENTS</p>
                    <div className="flex flex-col mt-4">
                        <div className="flex flex-row mb-1">
                            <div className="flex flex-row w-1/2 bg-[#2C2C2C] p-4 rounded-lg mr-1">
                                <div className="flex w-[4.5vw] h-[4.5vw] p-4 bg-[#393939] rounded-lg self-center">
                                    <img src={mastersLogo} alt="Logo"></img>
                                </div>
                                <div className="flex flex-col py-2 ml-6 gap-1">
                                    <p className="flex font-bold text-xl">Valorant Masters</p>
                                    <p className="flex font-semibold text-[#686868]">Today, Starts 20:35</p>
                                </div>
                            </div>
                            <div className="flex flex-row w-1/2 bg-[#2C2C2C] p-4 rounded-lg ml-1">
                                <div className="flex w-[4.5vw] h-[4.5vw] p-4 bg-[#393939] rounded-lg self-center">
                                    <img src={mastersLogo} alt="Logo"></img>
                                </div>
                                <div className="flex flex-col pt-2 gap-1 ml-6">
                                    <p className="flex font-bold text-xl">Valorant Masters</p>
                                    <p className="flex font-semibold text-[#686868]">Today, Starts 20:35</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row mt-1">
                            <div className="flex flex-row w-1/2 bg-[#2C2C2C] p-4 rounded-lg mr-1">
                                <div className="flex w-[4.5vw] h-[4.5vw] p-4 bg-[#393939] rounded-lg self-center">
                                    <img src={mastersLogo} alt="Logo"></img>
                                </div>
                                <div className="flex flex-col pt-2 gap-1 ml-6">
                                    <p className="flex font-bold text-xl">Valorant Masters</p>
                                    <p className="flex font-semibold text-[#686868]">Today, Starts 20:35</p>
                                </div>
                            </div>
                            <div className="flex flex-row w-1/2 bg-[#2C2C2C] p-4 rounded-lg ml-1">
                                <div className="flex w-[4.5vw] h-[4.5vw] p-4 bg-[#393939] rounded-lg self-center">
                                    <img src={mastersLogo} alt="Logo"></img>
                                </div>
                                <div className="flex flex-col pt-2 gap-1 ml-6">
                                    <p className="flex font-bold text-xl">Valorant Masters</p>
                                    <p className="flex font-semibold text-[#686868]">Today, Starts 20:35</p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            </div>
            <div className='flex flex-col w-1/3'>
            <div className='flex flex-col gap-4'>
              <div className='flex text-2xl font-bold bg-[#2C2C2C] rounded-lg py-6 px-4 gap-2 h-[88px] items-center'>
                <img src={logoValo} alt='Logo' className='w-[20px] h-[20px]'></img>
                Matches
              </div>
                <HomeScreenMatches />
            </div>
        </div>
            </div>
    );
}