// pffy idioms (JavaScript)
// git: https://github.com/pffy/idioms-js
// lic: https://unlicense.org/

const p = 'sheng1 ri4 kuai4 le4';

console.log();
console.log(p);
console.log('pmash: %s', pmash(p));
console.log('pdash: %s', pdash(p));
console.log('pbash: %s', pbash(p));
console.log('psmash: %s', psmash(p));
console.log('pcrash: %s', pcrash(p));
console.log('phash: %s', phash(p));
console.log();

const h = '生日快乐';
console.log();
console.log(h);
console.log('aerate: %s', aerate(h));

const a = pmash(p);
console.log();
console.log(a);
console.log('atomize: %s', atomize(a));

const v = 'shi4     shi4              shi4';
console.log();
console.log(v);
console.log('vacuum: %s', vacuum(v));

const u = 'u:,ǚ,ǘ,ǜ,ǖ,ü,v';
console.log();
console.log(u);
console.log('pumlaut: %s', pumlaut(u));
console.log();

// returns pinyin string without no spaces
function pmash(str) {
  return str.toLowerCase().replace(/\W/g,'');
}

// returns pinyin string without no digits, and no spaces
function pbash(str) {
  return str.toLowerCase().replace(/\W|\d/g,'');
}

// returns pinyi string with pinyin initials
function psmash(str) {
  return str.toLowerCase().match(/(\b(\w{1}))/g,'').join('');
}

// returns pinyin string with pinyin initials, ordered by alpha
function pcrash(str) {
  return str.toLowerCase().match(/(\b(\w{1}))/g,'').sort().join('');
}

// returns pinyin string of unique letters, ordered by alpha
function phash(str) {

  // using "unique values filter" solution found here:
  // https://stackoverflow.com/a/14438954

  return str.toLowerCase().replace(/\W|\d/g,'').split('')
    .filter((v, i, a) => a.indexOf(v) === i).sort().join('');
}

// returns pinyin string with no digits, and spaces relaced by dashes
function pdash(str) {
  return str.toLowerCase().replace(/\d/g,'').replace(/\s/g,'-');
}

// returns multi-byte string with exactly one space between characters
function aerate(mbstr) {
  return mbstr.match(/\p{Script=Han}/ug).join(' ');
}

// returns string after removing extra space between words
function vacuum(str) {
  return str.toLowerCase().replace(/[^\S\n]{2,}/g, ' ');
}

// returns string after removing extra space between words
function pumlaut(str) {
  re = /[ǚǘǜǖüv]/g
  return str.toLowerCase().replace(/\d/,'')
    .replace('u:', 'uu').replace(re, 'uu');
}

// returns pinyin string with exactly one space between numbered pinyin
function atomize(str) {
  return str.replace(/([a-zA-Z]{1,6}[1-6])/g, '$1 ');
}


