import Command from '../../constants/command';

const PingCommand: Command = {
    name: 'ping',
    description: 'Check the ping',
    aliases: [
        ''
    ],
    guildOnly: false,
    ownerOnly: false,
    disabled: false,
    nsfw: false,
    cooldown: 0,

    async run(client, message, args) {
        message.channel.send({ content: "Pong" })
    },
}

export default PingCommand;