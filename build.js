const fs = require('fs-extra');
const JavaScriptObfuscator = require('javascript-obfuscator');
const path = require('path');

const srcDir = './src';
const distDir = './dist';

const obfuscationOptions = {
    compact: true,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 1,
    deadCodeInjection: true,
    deadCodeInjectionThreshold: 1,
    debugProtection: false,
    disableConsoleOutput: true,
    identifierNamesGenerator: 'hexadecimal',
    log: false,
    numbersToExpressions: true,
    renameGlobals: false,
    rotateStringArray: true,
    selfDefending: true,
    shuffleStringArray: true,
    simplify: true,
    splitStrings: true,
    stringArray: true,
    stringArrayEncoding: ['rc4'],
    stringArrayThreshold: 1
};

async function build() {
    console.log('Starting build...');

    // 1. Clean dist
    await fs.emptyDir(distDir);
    console.log('Cleaned dist directory.');

    // 2. Copy src to dist
    await fs.copy(srcDir, distDir);
    console.log('Copied src to dist.');

    // 3. Obfuscate specific files
    const filesToObfuscate = [
        'js/index.js',
        'js/totalkalori.js'
    ];

    for (const file of filesToObfuscate) {
        const srcPath = path.join(srcDir, file);
        const distPath = path.join(distDir, file);

        if (await fs.pathExists(srcPath)) {
            const code = await fs.readFile(srcPath, 'utf8');
            const obfuscationResult = JavaScriptObfuscator.obfuscate(code, obfuscationOptions);
            const obfuscatedCode = obfuscationResult.getObfuscatedCode();

            await fs.writeFile(distPath, obfuscatedCode);
            console.log(`Obfuscated ${file}`);
        } else {
            console.warn(`File not found: ${srcPath}`);
        }
    }

    console.log('Build complete.');
}

build().catch(err => console.error(err));
