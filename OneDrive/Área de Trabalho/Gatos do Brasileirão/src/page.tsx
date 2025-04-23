import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const players = [
  {
    id: 1,
    name: "Jogador Exemplo",
    team: "Cruzeiro",
    image: "/images/jogador-exemplo.jpg",
    votes: 0,
  },
  // Adicione os jogadores reais aqui
];

export default function Home() {
  const [votes, setVotes] = useState(players.map((player) => player.votes));

  const handleVote = (index) => {
    const newVotes = [...votes];
    newVotes[index] += 1;
    setVotes(newVotes);
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-800 text-center mb-6">
        Gato do Brasileirão 2025
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Vote nos jogadores mais bonitos da Série A!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {players.map((player, index) => (
          <Card key={player.id} className="text-center">
            <CardContent>
              <img
                src={player.image}
                alt={player.name}
                className="w-full h-64 object-cover rounded-xl"
              />
              <h2 className="text-xl font-semibold mt-4">{player.name}</h2>
              <p className="text-blue-600">{player.team}</p>
              <Button
                className="mt-4"
                onClick={() => handleVote(index)}
              >
                Votar ({votes[index]})
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
