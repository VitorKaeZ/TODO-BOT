import { getMyDb } from "../../../db/db.js";

const btnInteractions = async (interaction) => {
    // console.log(interaction)
    const oldEmbed = interaction.message.embeds[0]
    const componentLabel1 = oldEmbed.fields[1].value
    const componentLabel2 = oldEmbed.fields[2].value
    const label = componentLabel1.match(/(\d+)/)
    const label2 = componentLabel2.match(/(\d+)/)
    const sugestaoID = interaction.message.interaction.id
    const db = await getMyDb()
    const dados = await db.data.suggestions.find(element => element.id == sugestaoID)


    if (interaction.customId === 'likeBtn') {
        if (dados.likes.find(element => element == interaction.user.id) ) return interaction.reply({content: "Você já votou!!", ephemeral: true})
        if (dados.unlikes.find(element => element == interaction.user.id) ) {
            const likeIndex = dados.unlikes.indexOf(interaction.user.id)
            dados.unlikes.splice(likeIndex,1)
            dados.likes.push(`${interaction.user.id}`)
            db.write()
            db.read()}
        }else if (interaction.customId === 'unlikeBtn') {
            if (dados.unlikes.find(element => element == interaction.user.id) ) return interaction.reply({content: "Você já votou!!", ephemeral: true})
            if (dados.likes.find(element => element == interaction.user.id) ) {
                const likeIndex = dados.likes.indexOf(interaction.user.id)
                dados.likes.splice(likeIndex,1)
                dados.unlikes.push(`${interaction.user.id}`)
                db.write()
                db.read()
            }
            // dados.unlikes.push(`${interaction.user.id}`)
            // db.write()
            // db.read()
        }
        let likes = dados.likes.length
        let unlikes = dados.unlikes.length

        console.log(likes, unlikes)
        const newEmbed = oldEmbed
        const likeField = { value: `\`${likes}\` `, name: `👍`, inline: true }
        const unlikeField = { value: `\`${unlikes}\` `, name: `👎`, inline: true }
        
        
        
        newEmbed.fields[1] = likeField
        newEmbed.fields[2] = unlikeField
        likes = 0
        unlikes = 0


        return interaction.update({embeds:[newEmbed]})
         
};


    export default btnInteractions