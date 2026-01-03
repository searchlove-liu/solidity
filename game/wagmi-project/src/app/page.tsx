"use client";
import { useEffect, useState } from "react";
export default function Page() {
  const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const suits = ["♠️", "♣️", "♦️", "♥️"];
  const initialDeck = ranks.map(rank => suits.map(suit => ({ "rank": rank, "suit": suit }))).flat();

  const [deck, setDeck] = useState<{ rank: string; suit: string }[]>([]);
  const [winner, setWinner] = useState<string>("");
  const [message, setMessage] = useState<string>("");


  useEffect(() => {
    setDeck(initialDeck);
    setWinner("player");
    setMessage("Black Jack!");
  }, [])

  return (
    <div className="flex flex-col gap-2 items-center justify-center h-screen bg-gray-300" style={{ color: "black" }}>
      <h1 className="text-3xl bold">Welcome to Web3 game BlackJack</h1>
      <h2 className={`text-2xl bold ${winner === "player" ? "bg-green-300" : "bg-amber-300"}`}>{message}</h2>
      <div className="mt-4">
        <h2>dealer's hand</h2>
        <div className="flex flex-row gap-2">
          {
            deck.slice(0, 3).map((card, index) => (
              <div key={index} className="w-32 h-42 border-1 border-black bg-white rounded-md flex flex-col justify-between">
                <p className="self-start p-2 test-lg" style={{ color: "black" }} >{card.rank}</p>
                <p className="self-center p-2 text-3xl">{card.suit}</p>
                <p className="self-end p-2 test-1g" style={{ color: "black" }} >{card.rank}</p>
              </div>
            ))
          }
        </div>
      </div>

      <div>
        <h2>Player's hand</h2>
        <div className="flex flex-row gap-2">
          {
            deck.slice(0, 3).map((card, index) => (
              <div key={index} className="w-32 h-42 border-1 border-black bg-white rounded-md flex flex-col justify-between">
                <p className="self-start p-2 test-lg" style={{ color: "black" }} >{card.rank}</p>
                <p className="self-center p-2 text-3xl">{card.suit}</p>
                <p className="self-end p-2 test-1g" style={{ color: "black" }} >{card.rank}</p>
              </div>
            ))
          }
        </div>
      </div>

      <div className="flex flex-row gap-2 mt-4">
        <button className="bg-amber-300 rounded-md p-2">Hit</button>
        <button className="bg-amber-300 rounded-md p-2">Stand</button>
        <button className="bg-amber-300 rounded-md p-2">Reset</button>
      </div>
    </div>

  )
}