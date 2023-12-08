const NotionParse = require('@kodaps/notion-parse');
const dotenv = require('dotenv');

dotenv.config();

const go = async () => {

  if (process.env.NOTION_TOKEN) {
    await NotionParse.parseNotion(process.env.NOTION_TOKEN, './src/content', [
      { databaseId: process.env.NOTION_PORTFOLIO_DATABASE_ID || '', contentType: 'Portfolio' },      
    ], true)
  } else {
    console.error('Missing NOTION_TOKEN environment variable');
  }

};

go().then(() => {
  console.log('Done');
});