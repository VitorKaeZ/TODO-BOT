import { Client, GatewayIntentBits, REST, Routes } from 'discord.js'
import { config as dotEnvCfg } from 'dotenv'
dotEnvCfg()

const client = new Client({ 
    intents:  [GatewayIntentBits.Guilds
    ] })

client.login(process.env.TOKEN_APP)
    
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
    
client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

        if (interaction.commandName === 'sugestao') {
            await interaction.reply('Pong!');
        }
});
    

const commands = [
  {
    name: 'sugestao',
    description: 'Deixe sua ideia!',
    options: [ 
        {
            name: 'conteúdo',
            description: 'Conteúdo!',
            type: 3,
            required: true,
        },
    ],
  },
]

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN_APP);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})()