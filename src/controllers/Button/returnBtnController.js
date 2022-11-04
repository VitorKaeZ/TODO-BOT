import { getMyDb } from "../../../db/db.js"
import rowComponent from "../../components/rowComponent.js"


const returnBtnController = async (interaction) => {
    const db = await getMyDb()
    const roleId = interaction.message.embeds[0].fields[0].value
    const role = interaction.message.guild.roles.cache.get(roleId.slice(3, roleId.length - 1))
    const sugestaoID = interaction.message.interaction?.id || interaction.message.reference?.messageId || interaction.message.id
    const dados = await db.data.suggestions.find(element => element.id == sugestaoID)
    if (dados.authorId === interaction.user.id) {
        const embedData = interaction.message.embeds.map((embedData) => {
            return embedData
        })
            const channel = interaction.guild.channels.cache.get(process.env.SUGGESTION_CHANNEL)
            const label = "Em Votação"
            embedData[0].fields[1].value = label
            const rows = rowComponent
            rows.components[0].data.label = dados.likes.length
            rows.components[1].data.label = dados.unlikes.length
            channel.send({ embeds: embedData, components: [rows]}).then((data) => {
                dados.id = data.id
                dados.status = label
                db.write()
                data.startThread({
                        name: `<@${role.name}> - ${data.embeds[0].title}`,
                        autoArchiveDuration: 60,
                        type: 'GUILD_PUBLIC_THREAD',
                        reason: 'thread'
                });
                interaction.message.delete({ timeout: 2000})
                rows.components[0].data.label = 0
                rows.components[1].data.label = 0
            })
    }
}

export default returnBtnController 