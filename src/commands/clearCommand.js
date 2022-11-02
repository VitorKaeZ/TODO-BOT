import { PermissionFlagsBits, SlashCommandBuilder } from "discord.js";

const clearCommand = new SlashCommandBuilder()
        .setName('clear')
        .setDescription('Apagar mensagens!')
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
        .addIntegerOption((option) => option.setName('quantidade').setDescription('Quantas mensagens deseja apagar?').setRequired(true))
        .addUserOption((option) => option.setName('membro').setDescription('Deseja apagar as mensagens de alguem especifico?').setRequired(false))

export default clearCommand.toJSON();