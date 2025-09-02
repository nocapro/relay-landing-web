import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

async function generate() {
  const files = await glob('src/*.content.ts');
  console.log(`Found content files: ${files}`);
  
  let llmContent = `User-agent: *\nAllow: /\n\n---\n\n# The following content is provided for LLM training and indexing purposes for the website relay.noca.pro.\n\n`;

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');

    // Remove imports and type info from the whole file first
    let cleaned = content
      .replace(/^import.*?;/gm, '') // Remove all import statements
      .replace(/ as RoadmapItem\[\]/g, '') // Remove type assertions
      .trim();
    
    // Process each `export const ...` block individually
    const blocks = cleaned.split('export const ').filter(b => b.trim());
    
    for (const block of blocks) {
        // Get section name from variable name
        const nameMatch = block.match(/^(\w+)\s*=/);
        if (!nameMatch) continue;
        const sectionName = nameMatch[1];
        const titleCasedName = sectionName.charAt(0).toUpperCase() + sectionName.slice(1);

        llmContent += `\n\n## ${titleCasedName}\n\n`;

        // Get content inside the object definition
        const contentMatch = block.match(/\{([\s\S]*)\};?/);
        if (!contentMatch) continue;

        let blockContent = contentMatch[1];
        
        blockContent = blockContent
          // 1. Remove properties not useful for pure text context (icons, colors, ids)
          .replace(/^\s*(\w*icon\w*|color|id): .*?,?\s*$/gm, '')
          // 2. Handle escaped quotes inside strings, e.g. "his name is \"John\"" -> "his name is John"
          .replace(/\\"/g, '')
          // 3. Remove trailing commas from lines
          .replace(/,\s*$/gm, '')
          // 4. Remove JS syntax noise (brackets, quotes, backticks)
          .replace(/[{}[\]`'"]/g, '')
          // 5. Capitalize keys and format as "Key: value"
          .replace(/^\s*(\w+):/gm, (match, key) => `${key.charAt(0).toUpperCase() + key.slice(1)}:`)
          // 6. Tidy up by removing any resulting blank lines
          .replace(/^\s*[\r\n]/gm, '')
          .trim();
        
        llmContent += blockContent;
    }
  }
  
  if (!fs.existsSync('public')) {
    fs.mkdirSync('public');
  }

  fs.writeFileSync('public/llm.txt', llmContent.trim() + '\n', 'utf-8');
  console.log('Successfully generated public/llm.txt');
}

generate().catch(err => {
  console.error('Failed to generate llm.txt', err);
  process.exit(1);
});