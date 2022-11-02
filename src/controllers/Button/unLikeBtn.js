import { getMyDb } from "../../../db/db.js"
import { newLikeRow } from "../../components/rowComponent.js"


const unlikeController = async (interaction) => {
    const db = await getMyDb()
    const sugestaoID = interaction.message.interaction?.id || interaction.message.reference?.messageId || interaction.message.id
    const dados = await db.data.suggestions.find(element => element.id == sugestaoID)
    if (dados.unlikes.find(element => element == interaction.user.id) ) return interaction.reply({content: "Você já votou!!", ephemeral: true})
        if (dados.likes.find(element => element == interaction.user.id) ) {
            const likeIndex = dados.likes.indexOf(interaction.user.id)
            dados.likes.splice(likeIndex,1)
        }
            dados.unlikes.push(`${interaction.user.id}`)
            db.write()
            db.read()
            let likes = dados.likes.length
            let unlikes = dados.unlikes.length
            const newLikeRows = await newLikeRow(likes,unlikes)
            likes = 0
            unlikes = 0
            await interaction.update({components:[newLikeRows]})
}

export default unlikeController 