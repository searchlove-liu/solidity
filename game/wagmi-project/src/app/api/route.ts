// difine the utility functions for dynamoDB
// 文件名: dynamodb-blackjack.ts

import {
    DynamoDBClient,
    // 如果你想明确看到低层错误，可以导入，但通常用 DocumentClient 更方便
} from "@aws-sdk/client-dynamodb";

import {
    DynamoDBDocumentClient,
    GetCommand,
    PutCommand,
    UpdateCommand,
} from "@aws-sdk/lib-dynamodb";

// ======================== 配置客户端 ========================
// 推荐在生产环境中使用环境变量或 AWS IAM Role
// 这里用默认 credential chain（~/.aws/credentials 或 EC2/ECS/Lambda 的角色）
const client = new DynamoDBClient({
    region: "ap-northeast-1-tpe-1",
    credentials: {
        accessKeyId: process.env.AWS_USER_ACCESS_KEY || "",
        secretAccessKey: process.env.AWS_USER_ACCESS_KEY_SECRET || ""
    }
});

const ddbDocClient = DynamoDBDocumentClient.from(client, {
    // 可选：移除 undefined 值（v3 默认不会移除）
    marshallOptions: { removeUndefinedValues: true },
});

const TABLE_NAME = "blackJack";

// ======================== 类型定义（推荐） ========================
interface BlackjackItem {
    player: string;     // partition key
    score?: number;     // 你要存的字段（可以为 undefined）
    // 你还可以加其他字段，例如：createdAt, nickname 等
    [key: string]: any;
}

// ======================== 1. 写入 / 更新 score ========================
/**
 * 保存或更新玩家的分数（使用 PutCommand 全量覆盖）
 */
async function saveScore(player: string, score: number): Promise<void> {
    const params = {
        TableName: TABLE_NAME,
        Item: {
            player,
            score,
            // 你可以在这里加更多字段
            updatedAt: new Date().toISOString(),
        } as BlackjackItem,
    };

    try {
        await ddbDocClient.send(new PutCommand(params));
        console.log(`成功保存 ${player} 的分数: ${score}`);
    } catch (err) {
        console.error("保存分数失败:", err);
        throw err;
    }
}

/**
 * 只更新 score 字段（推荐在已有其他字段时使用）
 */
async function updateScore(player: string, score: number): Promise<void> {
    const params = {
        TableName: TABLE_NAME,
        Key: { player },
        UpdateExpression: "SET score = :s, updatedAt = :t",
        ExpressionAttributeValues: {
            ":s": score,
            ":t": new Date().toISOString(),
        },
        ReturnValues: "UPDATED_NEW" as const, // 可选：返回更新后的字段
    };

    try {
        const result = await ddbDocClient.send(new UpdateCommand(params));
        console.log(`更新 ${player} 的分数成功`, result.Attributes);
    } catch (err) {
        console.error("更新分数失败:", err);
        throw err;
    }
}

// ======================== 2. 读取分数 ========================
async function getScore(player: string): Promise<number | undefined> {
    const params = {
        TableName: TABLE_NAME,
        Key: { player },
    };

    try {
        const { Item } = await ddbDocClient.send(new GetCommand(params));

        if (!Item) {
            console.log(`玩家 ${player} 不存在`);
            return undefined;
        }

        const data = Item as BlackjackItem;
        console.log(`玩家 ${player} 的当前分数:`, data.score);
        return data.score;
    } catch (err) {
        console.error("读取失败:", err);
        throw err;
    }
}

// ======================== 使用示例 ========================
async function xxx() {
    try {
        // 写 / 覆盖
        await saveScore("alice", 1200);

        // 只更新分数（推荐）
        await updateScore("alice", 1500);

        // 读取
        const score = await getScore("alice");
        console.log("最终读取到的分数:", score);

        // 读取不存在的玩家
        await getScore("nobody");
    } catch (err) {
        console.error("程序执行出错:", err);
    }
}


// when the game is inited,get player and dealer 2 random cards respectively
import { get } from "http";
import { json } from "stream/consumers";


// when the game is inited,get player and dealer 2 random cards respectively
const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const suits = ["♠️", "♣️", "♦️", "♥️"];
const initialDeck = ranks.map(rank => suits.map(suit => ({ "rank": rank, "suit": suit }))).flat();

const DEFAULT_PLAYER = "player";

export interface Card {
    rank: string,
    suit: string
}
const gameStatus: {
    playerHand: Card[],
    dealerHand: Card[],
    // 存放分发卡牌之后的剩余的牌
    deck: Card[],
    message: string,
    score: number
} = {
    playerHand: [],
    dealerHand: [],
    deck: initialDeck,
    message: "",
    score: 0
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

// 每一次游戏执行一次,用于初始化游戏状态
export async function GET() {
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

    try {
        const data = await getScore(DEFAULT_PLAYER);
        if (!data) {
            gameStatus.score = 0;
        } else {
            gameStatus.score = data;
        }

    } catch (error) {
        console.error("Error initializing game state:", error);
        return new Response(JSON.stringify({ message: "Error fetching data from dynamoDB" }), { status: 500 });
    }

    return new Response(JSON.stringify({
        playerHand: gameStatus.playerHand,
        dealerHand: [gameStatus.dealerHand[0], { rank: "?", suit: "?" }],
        message: gameStatus.message,
        score: gameStatus.score
    }), {
        status: 200
    });
}

export async function POST(request: Request) {
    const { action } = await request.json();
    if (action === "hit") {
        // when hit button is clicked ,get a random card from the deck and add to player's hand
        const [card, remainingDesk] = getRandomCard(gameStatus.deck, 1);
        gameStatus.playerHand.push(...card);
        gameStatus.deck = remainingDesk;
        // calculate player's hand value
        const playerHandValue = calculateHandValue(gameStatus.playerHand);
        // player's hand value is 21,player wins,black jack!
        // player's hand value exceeds 21,dealer wins
        // player's hand value is less than 21,player can choose to hit or stand
        if (playerHandValue === 21) {
            gameStatus.message = "Player wins!";
            gameStatus.score += 100;
        } else if (playerHandValue > 21) {
            gameStatus.message = "Dealer wins!";
            gameStatus.score -= 10;
        }
    } else if (action === "stand") {
        // when stand button is clicked,get a random card from the deck and add to dealer's hand until dealer's hand value is >=17
        while (calculateHandValue(gameStatus.dealerHand) < 17) {
            const [card, remainingDesk] = getRandomCard(gameStatus.deck, 1);
            gameStatus.dealerHand.push(...card);
            gameStatus.deck = remainingDesk;
        }
        // calculate dealer's hand value
        const dealerHandValue = calculateHandValue(gameStatus.dealerHand)
        // dealer's hand value exceeds 21,player wins
        if (dealerHandValue > 21) {
            gameStatus.message = "Player wins!"
            gameStatus.score += 100;
        }
        // dealer's hand value is 21,dealer wins,black jack!
        else if (dealerHandValue === 21) {
            gameStatus.message = "Dealer wins!";
            gameStatus.score -= 10;
        }
        // dealer's hand value is less than 21
        else {
            // compare player's hand value and dealer's hand value
            // player's hand value is greater,player wins
            // dealer's hand value is greater,dealer wins
            // if both hand values are equal,draw
            const playerHandValue = calculateHandValue(gameStatus.playerHand);
            if (playerHandValue > dealerHandValue) {
                gameStatus.message = "Player wins! ";
                gameStatus.score += 100;
            } else if (playerHandValue < dealerHandValue) {
                gameStatus.message = "Dealer wins!";
                gameStatus.score -= 10;
            } else {
                gameStatus.message = "It's a draw!";
            }
        }
    } else {
        return new Response(JSON.stringify({ message: "Invalid action" }), { status: 400 });
    }

    try {
        await updateScore(DEFAULT_PLAYER, gameStatus.score);
    }
    catch (error) {
        console.error("Error updating score:", error);
        return new Response(JSON.stringify({ message: "Error updating score in dynamoDB" }), { status: 500 });
    }

    return new Response(JSON.stringify({
        playerHand: gameStatus.playerHand,
        dealerHand: gameStatus.message === "" ? [gameStatus.dealerHand[0], { rank: "?", suit: "?" } as Card] : gameStatus.dealerHand,
        message: gameStatus.message,
        score: gameStatus.score
    }), {
        status: 200
    });
}

function calculateHandValue(hand: Card[]) {
    let value = 0;
    // A的数量，如果NewValue = 11（A） + olderVale > 21,则将A按1计算,否则按11计算 
    let aceCount = 0;
    hand.forEach(card => {
        if (card.rank === "A") {
            aceCount += 1;
            value += 11;
            // 这三者都按10计算
        } else if (["K", "Q", "J"].includes(card.rank)) {
            value += 10;
        } else {
            value += parseInt(card.rank);
        }
    });
    while (value > 21 && aceCount > 0) {
        value -= 10;
        aceCount -= 1;
    }
    return value;
}


// 如果都大于咋办