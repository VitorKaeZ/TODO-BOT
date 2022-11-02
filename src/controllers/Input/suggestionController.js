import { getMyDb } from "../../../db/db.js";
import embedComponent from "../../components/embedComponent.js";
import rowComponent from "../../components/rowComponent.js";

const suggestionController = async (interaction) => {
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
}

export default suggestionController