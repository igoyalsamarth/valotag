import { useParams } from "react-router-dom";
import tournaments from '../../database/tournaments.json'

export default function TournamentInfo() {
    const {id} = useParams();

    const specificTournament = tournaments.filter((Item) => {
        return(Item['tournament-serial'] === Number(id));
    });

    return(
        <h1 className="text-white">{specificTournament[0]['tournament-name']}</h1>
    );
}