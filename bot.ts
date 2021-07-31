import { config } from "dotenv";
config();
import Client from "./classes/client";

new Client({
    token: process.env.TOKEN,
    ownerID: "548038495617417226",
    commandDir: `${__dirname}/commands`,
    eventDir: `${__dirname}/events`,
    prefix: ".",
    emotes: {
        success: "<a:checkmark:840147155112165406>",
        error: "<a:error:840147176360378388>",
        loading: "<a:loading:840147214193917963>",
        bot: "<:bot:841733069458899015>",
        chat: "<:chat:841735309258653708>",
    },
});