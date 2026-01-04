// when the game is inited,get player and dealer 2 random cards respectively

import { get } from "http";

// when hit button is clicked ,get a random card from the deck and add to player's hand
// calculate player's hand value
// player's hand value is 21,player wins,black jack!
// player's hand value exceeds 21,dealer wins
// player's hand value is less than 21,player can choose to hit or stand

// when stand button is clicked,get a random card from the deck and add to dealer's hand until dealer's hand value is >=17
// calculate dealer's hand value
// dealer's hand value is 21,dealer wins,black jack!
// dealer's hand value exceeds 21,player wins
// dealer's hand value is less than 21
// compare player's hand value and dealer's hand value,
// player's hand value is greater,player wins
// dealer's hand value is greater,dealer wins
// if both hand values are equal,draw

// 如果都大于咋办


// when the game is inited,get player and dealer 2 random cards respectively
const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const suits = ["♠️", "♣️", "♦️", "♥️"];
const initialDeck = ranks.map(rank => suits.map(suit => ({ "rank": rank, "suit": suit }))).flat();

export interface Card {
    rank: string,
    suit: string
}
const gameStatus: {
    playerHand: Card[],
    dealerHand: Card[],
    // 存放分发卡牌之后的剩余的牌
    deck: Card[],
    message: string
} = {
    playerHand: [],
    dealerHand: [],
    deck: initialDeck,
    message: ""
}

function getRandomCard(desk: Card[], count: number) {
    const randomIndexSet = new Set<number>();
    while (randomIndexSet.size < count) {
        // Math.random() generate a random number between 0 and 1
        let randomIndex = Math.floor(Math.random() * desk.length);
        randomIndexSet.add(randomIndex);
    }
    const randomCards = desk.filter((_, index) => randomIndexSet.has(index));
    const remainingDesk = desk.filter((_, index) => !randomIndexSet.has(index));
    return [randomCards, remainingDesk];
}

// 每一次游戏执行一次
export function GET() {
    // reset game status
    gameStatus.playerHand = [];
    gameStatus.dealerHand = [];
    gameStatus.deck = initialDeck;
    gameStatus.message = "";

    // initially deal 2 cards to player and dealer respectively
    const [dealerCards, remainingDesk] = getRandomCard(gameStatus.deck, 2);
    const [playerCards, newRemainingDesk] = getRandomCard(remainingDesk, 2);
    gameStatus.dealerHand = dealerCards;
    gameStatus.playerHand = playerCards;
    gameStatus.deck = newRemainingDesk;
    gameStatus.message = "";
    return new Response(JSON.stringify({
        playerHand: gameStatus.playerHand,
        dealerHand: [gameStatus.dealerHand[0], { rank: "?", suit: "?" }],
        message: gameStatus.message
    }), {
        status: 200
    });
}
// when hit button is clicked ,get a random card from the deck and add to player's hand
// calculate player's hand value
// player's hand value is 21,player wins,black jack!
// player's hand value exceeds 21,dealer wins
// player's hand value is less than 21,player can choose to hit or stand

// when stand button is clicked,get a random card from the deck and add to dealer's hand until dealer's hand value is >=17
// calculate dealer's hand value
// dealer's hand value is 21,dealer wins,black jack!
// dealer's hand value exceeds 21,player wins
// dealer's hand value is less than 21
// compare player's hand value and dealer's hand value,
// player's hand value is greater,player wins
// dealer's hand value is greater,dealer wins
// if both hand values are equal,draw

// 如果都大于咋办