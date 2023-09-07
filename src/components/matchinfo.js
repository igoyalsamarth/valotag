import { useParams } from "react-router-dom";
import tournaments from '../database/tournaments.json'

export default function MatchInfo() {
    const {id} = useParams();

    const specificMatch = tournaments
                                    .map(Item => Item['tournament-matches']
                                    .filter((Items) => {return(Items['match-serial'] === Number(id));}))
                                    .filter((Item) => Object.keys(Item).length).flat();
    return(
        <h1 className="text-white">{specificMatch[0]['match-team1']} vs {specificMatch[0]['match-team2']}</h1>
    );
}