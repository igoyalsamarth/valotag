export default function SearchBar(){
    return(
        <div className="flex flex-row p-4 gap-4 w-full items-center">
            <form className=" flex flex-1 bg-[#252525] rounded-lg pointer-events-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="absolute ml-2 mt-3.5">
                    <path d="M19.2763 20.6901C19.6575 21.0898 20.2905 21.1048 20.6901 20.7237C21.0898 20.3425 21.1048 19.7095 20.7237 19.3099L19.2763 20.6901ZM17.8889 10.4444C17.8889 14.5559 14.5559 17.8889 10.4444 17.8889V19.8889C15.6605 19.8889 19.8889 15.6605 19.8889 10.4444H17.8889ZM10.4444 17.8889C6.33299 17.8889 3 14.5559 3 10.4444H1C1 15.6605 5.22842 19.8889 10.4444 19.8889V17.8889ZM3 10.4444C3 6.33299 6.33299 3 10.4444 3V1C5.22842 1 1 5.22842 1 10.4444H3ZM10.4444 3C14.5559 3 17.8889 6.33299 17.8889 10.4444H19.8889C19.8889 5.22842 15.6605 1 10.4444 1V3ZM15.7763 17.0201L19.2763 20.6901L20.7237 19.3099L17.2237 15.6398L15.7763 17.0201Z" fill="#B4BEC0"/>
                </svg>
                <input id='test' type = 'text' placeholder="Search.." className=' bg-[#252525] rounded-lg pl-10 pr-2 py-3 text-xl w-full placeholder:text-[#555]'/>
            </form>
            <form className="flex flex-row gap-2">
                <button className=": place-self-center text-lg font-semibold text-[#252525] bg-[#FFF] border border-[#DDD] border-solid rounded-lg px-8 py-2.5">
                    Log In
                </button>
                <button className=" text-lg font-semibold text-[#F0F5F5] bg-[#FF4655] border border-[#FF2436] border-solid rounded-lg px-8 py-2.5">
                    Sign Up
                </button>
            </form>
        </div>
    );
}