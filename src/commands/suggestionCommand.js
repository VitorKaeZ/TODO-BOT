import { SlashCommandBuilder } from "discord.js";

const suggestionCommand = new SlashCommandBuilder()
        .setName('sugestao')
        .setDescription('Deixe sua idéia!')
        .addRoleOption((option) => option.setName('área').setDescription('Área da sugestão').setRequired(true)
        // .setChoices(
        //         { name: 'Developers', value: 'Developers'},
        //         { name: 'Design', value: 'Design'},
        //  ))
        )
         .addStringOption((option) => option.setName('conteúdo').setDescription('Coloque o conteúdo da sugestão').setRequired(true));

export default suggestionCommand.toJSON()