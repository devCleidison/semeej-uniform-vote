import { ShirtProps } from "../@types/shirt";
import { useVote } from "../hooks/useVote";

import { useNavigate } from "react-router-dom"

interface CardProps {
  data: ShirtProps;
}

export const Card = ({ data }: CardProps) => {
  const { incrementVote } = useVote();
  const navigate = useNavigate();


  const handleVote = () => {
    incrementVote(data.id);

    setTimeout(() => navigate("/congratulations"), 500);
  };

  return (
    <div className="flex flex-col gap-1 items-center justify-between w-56 max-[1000px]:w-64 pb-6 bg-neutral-50/5 rounded overflow-hidden">
      <img
        src={data.image}
        alt={data.description}
        className="h-72 w-full object-cover"
      />
      <h3 className="text-center font-medium pt-3">{data.title}</h3>
      <p className="text-center text-gray text-sm px-2 pb-3">
        {data.description}
      </p>

      <button
        className="bg-green px-8 py-1.5 rounded hover:bg-green/60 transition-colors"
        onClick={handleVote}
      >
        Votar
      </button>
    </div>
  );
};
