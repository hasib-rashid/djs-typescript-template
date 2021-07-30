import Command from '../../constants/command';

const BanCommand: Command = {
    name: 'ban',
    description: 'Ban Someone',
    aliases: [
        ''
    ],
    guildOnly: false,
    ownerOnly: false,
    disabled: false,
    nsfw: false,
    cooldown: 0,

    async run(client, message, args) {
        // @ts-ignore
        message.member?.ban(message.mentions.users.first())
    },
}

export default BanCommand;