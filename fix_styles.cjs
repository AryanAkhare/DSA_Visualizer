const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src', 'Algorithms');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

const replacements = [
    { regex: /color:\s*['"]#333['"]/gi, replacement: "color: 'var(--text-main, #FFFFFF)'" },
    { regex: /color:\s*['"]#1f2937['"]/gi, replacement: "color: 'var(--text-main, #FFFFFF)'" },
    { regex: /color:\s*['"]#111827['"]/gi, replacement: "color: 'var(--text-main, #FFFFFF)'" },
    { regex: /color:\s*['"]#212121['"]/gi, replacement: "color: 'var(--text-main, #FFFFFF)'" },
    { regex: /color:\s*['"]black['"]/gi, replacement: "color: 'var(--text-main, #FFFFFF)'" },
    { regex: /color:\s*['"]#000['"]/gi, replacement: "color: 'var(--text-main, #FFFFFF)'" },
    { regex: /color:\s*#333;/gi, replacement: "color: var(--text-main, #FFFFFF);" },
    { regex: /color:\s*#1f2937;/gi, replacement: "color: var(--text-main, #FFFFFF);" },
    { regex: /color:\s*#111827;/gi, replacement: "color: var(--text-main, #FFFFFF);" },
    { regex: /color:\s*#212121;/gi, replacement: "color: var(--text-main, #FFFFFF);" },
    { regex: /color:\s*black;/gi, replacement: "color: var(--text-main, #FFFFFF);" },
    { regex: /color:\s*#000;/gi, replacement: "color: var(--text-main, #FFFFFF);" },

    { regex: /backgroundColor:\s*['"]#f1f1f1['"]/gi, replacement: "backgroundColor: 'rgba(255,255,255,0.05)'" },
    { regex: /backgroundColor:\s*['"]#e0e0e0['"]/gi, replacement: "backgroundColor: 'rgba(255,255,255,0.1)'" },
    { regex: /backgroundColor:\s*['"]#f0f2f5['"]/gi, replacement: "backgroundColor: 'rgba(255,255,255,0.05)'" },
    { regex: /backgroundColor:\s*['"]#fff['"]/gi, replacement: "backgroundColor: 'transparent'" },
    { regex: /backgroundColor:\s*['"]white['"]/gi, replacement: "backgroundColor: 'transparent'" },
    { regex: /background-color:\s*#f1f1f1;/gi, replacement: "background-color: rgba(255,255,255,0.05);" },
    { regex: /background-color:\s*#e0e0e0;/gi, replacement: "background-color: rgba(255,255,255,0.1);" },
    { regex: /background-color:\s*#f0f2f5;/gi, replacement: "background-color: rgba(255,255,255,0.05);" },
    { regex: /background-color:\s*#fff;/gi, replacement: "background-color: transparent;" },
    { regex: /background-color:\s*white;/gi, replacement: "background-color: transparent;" },
];

let filesModified = 0;

walkDir(directoryPath, function(filePath) {
    if (filePath.endsWith('.jsx') || filePath.endsWith('.css')) {
        let originalContent = fs.readFileSync(filePath, 'utf8');
        let newContent = originalContent;
        
        replacements.forEach(({regex, replacement}) => {
            newContent = newContent.replace(regex, replacement);
        });

        if (originalContent !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            filesModified++;
            console.log(`Modified: ${filePath}`);
        }
    }
});

console.log(`Done. Modified ${filesModified} files.`);
