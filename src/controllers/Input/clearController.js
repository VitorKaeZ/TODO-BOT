import { EmbedBuilder } from "discord.js"

const clearController = async (interaction) => {
    const { channel, options } = interaction
    const amount = options.getInteger('quantidade')
    const target = options.getUser('membro')

    const messages = await channel.messages.fetch({
        limit: amount +1
    })
    const res = new EmbedBuilder().setColor(0x5fb041)

    if(target) {
        let i = 0
        const filtered = []

        messages.filter((msg) => {
            if (msg.author.id === target.id && amount > i) {
                filtered.push(msg)
                i++
            }
        })
        await channel.bulkDelete(filtered).then(messages => {
            res.setDescription(`Foram deletadas ${messages.size} mensagens do Membro ${target}.`)
            interaction.reply({embeds: [res], ephemeral: true})
        })
    } else {
        await channel.bulkDelete(amount, true).then(messages => {
            res.setDescription(`Foram deletadas ${messages.size} mensagens.`)
            interaction.reply({embeds: [res], ephemeral: true})
        })
    }
}

export default clearController