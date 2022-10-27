
const btnInteractions = async (interaction) => {
    const oldEmbed = interaction.message.embeds[0]
    const componentLabel1 = oldEmbed.fields[1].value
    const componentLabel2 = oldEmbed.fields[2].value
    const label = componentLabel1.match(/(\d+)/)
    const label2 = componentLabel2.match(/(\d+)/)
    let likes = parseInt(label[0]) || 0
    let unlikes = parseInt(label2[0]) || 0

        if (interaction.customId === 'likeBtn') {
            likes = likes + 1

        }else if (interaction.customId === 'unlikeBtn') {
            unlikes = unlikes + 1
        }

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