import { EmbedBuilder } from "@discordjs/builders";
import { getMyDb } from "../../../db/db.js";
import embedComponent from "../../components/embedComponent.js";
import rowComponent from "../../components/rowComponent.js";

const inputInteractions = async (interaction) => {
        if (interaction.commandName === 'sugestao') {
            const db = await getMyDb()
            const { id:areaId, name:areaName } = interaction.options._hoistedOptions[0].role
            const assunto = interaction.options._hoistedOptions[1].value     
            const embed = await embedComponent(interaction)
            const row = rowComponent
            await interaction.reply( { embeds: embed, components: [row], fetchReply: true} )
            .then((msg) => {
                msg.startThread({
                    name: `${areaName} - ${assunto}`,
                    autoArchiveDuration: 60,
                    type: 'GUILD_PUBLIC_THREAD',
                    reason: 'thread'
                });
            }).catch((err) => console.error(err))

                db.data.suggestions.push({
                    id:interaction.id,
                    authorId: interaction.user.id,
                    areaId,
                    likes:[],
                    unlikes:[],
                    status:'Em Votação'
                })
               db.write()      
        }else if (interaction.commandName === 'clear') {
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
    }

    export default inputInteractions