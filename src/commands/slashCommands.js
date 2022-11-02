import suggestionCommand from './suggestionCommand.js'

import { config as dotEnvCfg } from 'dotenv'
import { REST, Routes } from 'discord.js'
import clearCommand from './clearCommand.js'
dotEnvCfg()
const commands = [ suggestionCommand, clearCommand]

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN_APP);

const slashCommands = async () => {
  try {
    console.log('Started refreshing application (/) commands.');
    
    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });
    
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
  
}


export default slashCommands