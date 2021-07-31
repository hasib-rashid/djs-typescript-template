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
        console.log("morlam")
        message.channel.send("Pong!")
    },
}

export default PingCommand;