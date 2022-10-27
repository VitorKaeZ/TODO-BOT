import { SlashCommandBuilder } from "discord.js";

const suggestionCommand = new SlashCommandBuilder()
        .setName('sugestao')
        .setDescription('Deixe sua idéia!')
        .addRoleOption((option) => option.setName('área').setDescription('Área da sugestão').setRequired(true)
        )
         .addStringOption((option) => option.setName('assunto').setDescription('Assunto da sugestão. ex: Mudar Logotipo.').setRequired(true))
         .addStringOption((option) => option.setName('conteúdo').setDescription('Conteúdo da sugestão').setRequired(true));

export default suggestionCommand.toJSON()