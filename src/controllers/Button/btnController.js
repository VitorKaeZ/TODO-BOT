import { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } from "discord.js";
import embedComponent from "../../components/embedComponent.js";

const btnInteractions = async (interaction) => {
    console.log(interaction.message.embeds[0].fields)
    const oldEmbed = interaction.message.embeds[0]
    const avatar = interaction.user.displayAvatarURL()
    const authorName =  interaction.member.nickname
    const userUrl =  interaction.user.id
    const componentLabel = interaction.component.label
    let label = parseInt(componentLabel.slice(3))
    let likes = label == NaN ? 0 : label
    // console.log(typeof(label))
    // console.log(likes)
    let unlikes 
    if (interaction.customId === 'likeBtn') {
        // const exampleEmbed = new EmbedBuilder()
        // .setTitle('Some title')
        // .setDescription('Description after the edit');

    // interaction.update({ components: [ActionRow],
    //     fetchReply: true }).then((msg) => {
    //         msg.edit({embeds:[exampleEmbed]});
    //     })
        // likes = label + 1
        // console.log(likes)
    }else if (interaction.customId === 'unlikeBtn') {
        unlikes = label + 1
        console.log(typeof(unlikes))
        console.log(unlikes)
    }

    const ActionRow = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('likeBtn')
                .setLabel(`👍 ${likes}`)
                .setStyle(ButtonStyle.Success),
        ).addComponents(
            new ButtonBuilder()
                .setCustomId('unlikeBtn')
                .setLabel(`👎 ${unlikes}`)
                .setStyle(ButtonStyle.Danger),
        )
        .addComponents(
            new ButtonBuilder()
                .setCustomId('endBtn')
                .setLabel('Encerrar')
                .setStyle(ButtonStyle.Primary),
        )

        const field = oldEmbed.fields
        const newEmbed = oldEmbed
        const likeField = { value: '👍 0 - 👎 0', name: 'Votação', inline: true }
        newEmbed.fields[1] = likeField
        return interaction.update({embeds:[newEmbed]})
               
            // .then((msg) => {
            //     msg.push({ count: 0})
            // })
        const component = interaction.component
        // console.log(component)
};


    export default btnInteractions