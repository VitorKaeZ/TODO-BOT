import { getMyDb } from "../../../db/db.js";
import { newRow } from "../../components/rowComponent.js";

const btnInteractions = async (interaction) => {
    console.log(interaction)
    const oldEmbed = interaction.message.embeds[0]
    const sugestaoID = interaction.message.interaction.id
    const db = await getMyDb()
    const dados = await db.data.suggestions.find(element => element.id == sugestaoID)


    if (interaction.customId === 'likeBtn') {
        if (dados.likes.find(element => element == interaction.user.id) ) return interaction.reply({content: "Você já votou!!", ephemeral: true})
        if (dados.unlikes.find(element => element == interaction.user.id) ) {
            const likeIndex = dados.unlikes.indexOf(interaction.user.id)
            dados.unlikes.splice(likeIndex,1)
        }
            dados.likes.push(`${interaction.user.id}`)
            db.write()
            db.read()
    }else if (interaction.customId === 'unlikeBtn') {
        if (dados.unlikes.find(element => element == interaction.user.id) ) return interaction.reply({content: "Você já votou!!", ephemeral: true})
        if (dados.likes.find(element => element == interaction.user.id) ) {
            const likeIndex = dados.likes.indexOf(interaction.user.id)
            dados.likes.splice(likeIndex,1)
        }
            dados.unlikes.push(`${interaction.user.id}`)
            db.write()
            db.read()
        }
        let likes = dados.likes.length
        let unlikes = dados.unlikes.length

        console.log(likes, unlikes)
        const newEmbed = oldEmbed
        const newRows = await newRow(likes,unlikes)
        likes = 0
        unlikes = 0


        return interaction.update({components:[newRows]})
         
};


    export default btnInteractions