import { getMyDb } from "../../../db/db.js"
import { newLikeRow, todoRow } from "../../components/rowComponent.js"


const initialBtnController = async (interaction) => {
    const db = await getMyDb()
    const sugestaoID = interaction.message.interaction?.id || interaction.message.reference?.messageId || interaction.message.id
    const dados = await db.data.suggestions.find(element => element.id == sugestaoID)
    if (dados.authorId === interaction.user.id) {
        const embedData = interaction.message.embeds.map((embedData) => {
            return embedData
        })
            const channel = interaction.guild.channels.cache.get(process.env.INITIAL_CHANNEL)
            const label = "Em Andamento"
            embedData[0].fields[1].value = label
            const todoRows = todoRow
            channel.send({ embeds: embedData, components: [todoRows]}).then((data) => {
                dados.id = data.id
                dados.status = label
                db.write()
                interaction.message.delete({ timeout: 2000})
            })
    }
}

export default initialBtnController 