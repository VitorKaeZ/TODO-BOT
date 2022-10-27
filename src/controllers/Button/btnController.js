import { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } from "discord.js";
import embedComponent from "../../components/embedComponent.js";

const btnInteractions = async (interaction) => {
    const oldEmbed = interaction.message.embeds[0]
    const componentLabel1 = oldEmbed.fields[1].value
    const componentLabel2 = oldEmbed.fields[2].value
    oldEmbed.fields[1].value
    // console.log(componentLabel)
    let label = componentLabel1.match(/(\d+)/)
    let label2 = componentLabel2.match(/(\d+)/)
    // console.log(label)
    let likes = parseInt(label[0]) || 0
    let unlikes = parseInt(label2[0]) || 0
    console.log(likes, unlikes)
    if (interaction.customId === 'likeBtn') {
        likes = likes + 1

    }else if (interaction.customId === 'unlikeBtn') {
        unlikes = unlikes + 1
    }
    console.log(likes, unlikes)

        const field = oldEmbed.fields
        const newEmbed = oldEmbed
        const likeField = { value: `\`${likes}\` `, name: `👍`, inline: true }
        const unlikeField = { value: `\`${unlikes}\` `, name: `👎`, inline: true }
        newEmbed.fields[1] = likeField
        newEmbed.fields[2] = unlikeField
        likes = 0
        unlikes = 0
        return interaction.update({embeds:[newEmbed]})
               
            // .then((msg) => {
            //     msg.push({ count: 0})
            // })
        const component = interaction.component
        // console.log(component)
};


    export default btnInteractions