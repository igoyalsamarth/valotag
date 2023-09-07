import { useParams } from "react-router-dom";
import players from '../database/players.json'

export default function PlayerInfo() {
    const {id} = useParams();

    const specificPlayer = players.filter((Item) => {
        return(Item['player-serial'] === Number(id));
    });

    return(
        <h1 className="text-white">{specificPlayer[0]['player-team']} {specificPlayer[0]['player-name']}</h1>
    );
}