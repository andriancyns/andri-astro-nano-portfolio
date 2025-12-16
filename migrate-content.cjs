#!/usr/bin/env node

/**
 * Migration script to convert existing content to Keystatic format
 * 
 * Keystatic expects:
 * - Blog: src/content/blog/{slug}/index.yaml + index.mdoc (or just index.md with YAML frontmatter)
 * - Projects: src/content/projects/{slug}/index.yaml + index.mdoc
 * - Work: src/content/work/{slug}.yaml + {slug}.mdoc
 */

const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.join(__dirname, 'src/content');

// Parse frontmatter from markdown file
function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { data: {}, content: content };
  
  const yamlStr = match[1];
  const body = match[2];
  
  // Simple YAML parser for our use case
  const data = {};
  yamlStr.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();
      
      // Remove quotes
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      
      // Handle arrays (simple case)
      if (value.startsWith('[') && value.endsWith(']')) {
        try {
          value = JSON.parse(value.replace(/'/g, '"'));
        } catch (e) {
          // Keep as string if parsing fails
        }
      }
      
      // Handle booleans
      if (value === 'true') value = true;
      if (value === 'false') value = false;
      
      data[key] = value;
    }
  });
  
  return { data, content: body.trim() };
}

// Convert date to Keystatic format (YYYY-MM-DD)
function formatDate(dateStr) {
  if (!dateStr) return null;
  
  // Handle "Jul 24 2025" format
  const months = {
    'Jan': '01', 'Feb': '02', 'Mar': '03', 'Apr': '04',
    'May': '05', 'Jun': '06', 'Jul': '07', 'Aug': '08',
    'Sep': '09', 'Oct': '10', 'Nov': '11', 'Dec': '12'
  };
  
  // Try different formats
  let match = dateStr.match(/^(\w+)\s+(\d+)\s+(\d+)$/);
  if (match) {
    const [, month, day, year] = match;
    const monthNum = months[month] || '01';
    return `${year}-${monthNum}-${day.padStart(2, '0')}`;
  }
  
  // Try MM/DD/YYYY format
  match = dateStr.match(/^(\d+)\/(\d+)\/(\d+)$/);
  if (match) {
    const [, month, day, year] = match;
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  }
  
  // Already in YYYY-MM-DD format
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    return dateStr;
  }
  
  return dateStr;
}

// Migrate blog posts
function migrateBlog() {
  const blogDir = path.join(CONTENT_DIR, 'blog');
  const entries = fs.readdirSync(blogDir);
  
  let migrated = 0;
  entries.forEach(entry => {
    const entryPath = path.join(blogDir, entry);
    if (!fs.statSync(entryPath).isDirectory()) return;
    
    const indexPath = path.join(entryPath, 'index.md');
    if (!fs.existsSync(indexPath)) return;
    
    const content = fs.readFileSync(indexPath, 'utf-8');
    const { data, content: body } = parseFrontmatter(content);
    
    // Format for Keystatic
    const formattedDate = formatDate(data.date);
    
    // Create new frontmatter with proper format
    const newFrontmatter = [
      '---',
      `title: "${data.title || ''}"`,
      `description: "${(data.description || '').replace(/"/g, '\\"')}"`,
      `date: "${formattedDate || ''}"`,
      `draft: ${data.draft || false}`,
    ];
    
    if (data.image) {
      newFrontmatter.push(`image: "${data.image}"`);
    }
    
    if (data.tags && Array.isArray(data.tags)) {
      newFrontmatter.push(`tags: ${JSON.stringify(data.tags)}`);
    }
    
    newFrontmatter.push('---');
    
    const newContent = newFrontmatter.join('\n') + '\n\n' + body;
    
    fs.writeFileSync(indexPath, newContent);
    migrated++;
    console.log(`✓ Migrated blog: ${entry}`);
  });
  
  console.log(`\nBlog: ${migrated} posts migrated`);
  return migrated;
}

// Migrate projects
function migrateProjects() {
  const projectsDir = path.join(CONTENT_DIR, 'projects');
  const entries = fs.readdirSync(projectsDir);
  
  let migrated = 0;
  entries.forEach(entry => {
    const entryPath = path.join(projectsDir, entry);
    if (!fs.statSync(entryPath).isDirectory()) return;
    
    const indexPath = path.join(entryPath, 'index.md');
    if (!fs.existsSync(indexPath)) return;
    
    const content = fs.readFileSync(indexPath, 'utf-8');
    const { data, content: body } = parseFrontmatter(content);
    
    const formattedDate = formatDate(data.date);
    
    const newFrontmatter = [
      '---',
      `title: "${data.title || ''}"`,
      `description: "${(data.description || '').replace(/"/g, '\\"')}"`,
      `date: "${formattedDate || ''}"`,
      `draft: ${data.draft || false}`,
    ];
    
    if (data.demoURL) {
      newFrontmatter.push(`demoURL: "${data.demoURL}"`);
    }
    if (data.repoURL) {
      newFrontmatter.push(`repoURL: "${data.repoURL}"`);
    }
    
    newFrontmatter.push('---');
    
    const newContent = newFrontmatter.join('\n') + '\n\n' + body;
    
    fs.writeFileSync(indexPath, newContent);
    migrated++;
    console.log(`✓ Migrated project: ${entry}`);
  });
  
  console.log(`\nProjects: ${migrated} projects migrated`);
  return migrated;
}

// Migrate work experience
function migrateWork() {
  const workDir = path.join(CONTENT_DIR, 'work');
  const entries = fs.readdirSync(workDir);
  
  let migrated = 0;
  entries.forEach(entry => {
    if (!entry.endsWith('.md')) return;
    
    const filePath = path.join(workDir, entry);
    const content = fs.readFileSync(filePath, 'utf-8');
    const { data, content: body } = parseFrontmatter(content);
    
    const formattedDateStart = formatDate(data.dateStart);
    const formattedDateEnd = data.dateEnd === 'Present' ? 'Present' : formatDate(data.dateEnd);
    
    const newFrontmatter = [
      '---',
      `company: "${data.company || ''}"`,
      `role: "${data.role || ''}"`,
      `dateStart: "${formattedDateStart || ''}"`,
      `dateEnd: "${formattedDateEnd || ''}"`,
      '---'
    ];
    
    const newContent = newFrontmatter.join('\n') + '\n\n' + body;
    
    fs.writeFileSync(filePath, newContent);
    migrated++;
    console.log(`✓ Migrated work: ${entry}`);
  });
  
  console.log(`\nWork: ${migrated} entries migrated`);
  return migrated;
}

// Run migration
console.log('Starting content migration to Keystatic format...\n');

const blogCount = migrateBlog();
const projectsCount = migrateProjects();
const workCount = migrateWork();

console.log('\n========================================');
console.log('Migration complete!');
console.log(`Total: ${blogCount + projectsCount + workCount} files migrated`);
console.log('========================================');
