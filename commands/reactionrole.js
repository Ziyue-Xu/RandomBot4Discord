module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message.",
    async execute(message, args, Discord, client) {
        const channel = '861009544225226753'
        const redTeamRole = message.guild.roles.cache.find(role => role.name ==="Red");
        const blueTeamRole = message.guild.roles.cache.find(role => role.name === "Blue");
        const whiteTeamRole = message.guild.roles.cache.find(role => role.name === "White");
        const greenTeamRole = message.guild.roles.cache.find(role => role.name === "Green");

        const blueTeamEmoji = '🟦';
        const redTeamEmoji = '🟥';
        const greenTeamEmoji = '🟩';
        const whiteTeamEmoji = '⬜';


        let embed = new Discord.MessageEmbed()
            .setColor('#ffffff')
            .setTitle('Pick your color!')
            .setDescription('Picking a color sets your name tag to that color!\n\n'
                + `${blueTeamEmoji} for blue team\n`
                + `${redTeamEmoji} for red team`
                + `${greenTeamEmoji} for green team`
                + `${whiteTeamEmoji} for white team`);
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(blueTeamEmoji);
        messageEmbed.react(whiteTeamEmoji);
        messageEmbed.react(greenTeamEmoji);
        messageEmbed.react(redTeamEmoji);
        
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === redTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(redTeamRole);
                }
                if (reaction.emoji.name === blueTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(blueTeamRole);
                }
                if (reaction.emoji.name === whiteTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(whiteTeamRole);
                }
                if (reaction.emoji.name === greenTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(greenTeamRole);
                }
                else {
                    return;
                }
            }
        });

        client.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === redTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(redTeamRole);
                }
                if (reaction.emoji.name === blueTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(blueTeamRole);
                }
                if (reaction.emoji.name === whiteTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(whiteTeamRole);
                }
                if (reaction.emoji.name === greenTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(greenTeamRole);
                }
                else {
                    return;
                }
            }
        })
    }
}