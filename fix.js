const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');

    // Fix double class attribute
    // <main id="swup" class="transition-fade  class="max-w-5xl mx-auto px-6 py-10 md:py-16 relative z-10"">
    content = content.replace(/class="transition-fade\s+class="/g, 'class="transition-fade ');
    
    // Also remove the trailing quote that might have been left over if the original had class="..." 
    // Wait, the original regex was:
    // content.replace(/<main([^>]*)>/, '<main id="swup" class="transition-fade $1">')
    // So if $1 was ` class="max-w-5xl..."`, the result was `<main id="swup" class="transition-fade  class="max-w-5xl..."">`
    // If I just replace `class="transition-fade  class="` with `class="transition-fade `
    // It becomes `<main id="swup" class="transition-fade max-w-5xl..."">`
    // Notice the trailing `"` at the very end of the tag. Let's fix that cleanly.

    content = content.replace(/<main id="swup" class="transition-fade\s+class="([^"]+)"">/g, '<main id="swup" class="transition-fade $1">');
    content = content.replace(/<main id="swup" class="transition-fade\s+class="([^"]+)">/g, '<main id="swup" class="transition-fade $1">');

    // Let's just do a manual replace for each file if it's messed up.
    // Let's just regex:
    content = content.replace(/<main([^>]*)>/g, (match) => {
        // clean up multiple id="swup" or classes
        if(match.includes('id="swup"')) {
            let inner = match.replace('<main', '').replace('>', '');
            // remove id="swup"
            inner = inner.replace(/id="swup"/g, '');
            // extract all classes
            let classes = ['transition-fade'];
            let classMatch;
            const classRegex = /class="([^"]+)"/g;
            while ((classMatch = classRegex.exec(inner)) !== null) {
                classes.push(...classMatch[1].split(' '));
            }
            
            // Remove duplicates
            classes = [...new Set(classes.filter(c => c.trim() !== ''))];
            
            // Remove the old class attributes from inner
            inner = inner.replace(/class="[^"]*"/g, '').replace(/class=""/g, '').replace(/"">/g, '');
            // remove lingering quotes
            inner = inner.replace(/"/g, '').replace(/=/g, ''); // wait, this destroys other attributes!
            
            return match; // fallback
        }
        return match;
    });

    fs.writeFileSync(file, content, 'utf8');
}
