import BotClient from "../classes/client";

export default function YesOrNo(client: BotClient, value: any = false) {
    return value ? client.emotes.success : client.emotes.error;
}