import fs from 'node:fs';
import {createHash} from 'node:crypto';
const assets=['styles.css','theories.js','formulas.js','formula-audit.js','developments.js','questions.js','problems.js','evidence.js','passports.js','profiles.js','workspace.js','app.js'];
const versions=Object.fromEntries(assets.map(file=>[file,createHash('sha256').update(fs.readFileSync(file)).digest('hex').slice(0,16)]));
let html=fs.readFileSync('index.html','utf8');
for(const [file,hash] of Object.entries(versions))html=html.replace(new RegExp('(\\./'+file.replaceAll('.','\\.')+')(?:\\?v=[^"\\s]*)?(?=")','g'),'$1?v='+hash);
const indexHash=createHash('sha256').update(html).digest('hex').slice(0,16);
const preview=fs.readFileSync('docs/responsive-check.html','utf8').replace(/index\.html(?:\?v=[^#'" ]*)?#/g,'index.html?v='+indexHash+'#');
for(const [file,expected] of [['index.html',html],['docs/responsive-check.html',preview]]){
 if(process.argv.includes('--check')){if(fs.readFileSync(file,'utf8')!==expected)throw new Error(`Stale asset versions in ${file}. Run npm run assets.`);}else fs.writeFileSync(file,expected);
}
console.log('Content-hashed asset references '+(process.argv.includes('--check')?'verified.':'updated.'));
