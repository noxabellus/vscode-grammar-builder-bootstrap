import { promises as fs } from 'fs';
import { TMGrammar } from 'vscode-grammar';
import { identifier, punctuation, stringLiteral } from './repository/index.js';

(async function () { return await fs.readFile('package.json', 'utf-8') })();

const grammar: TMGrammar = {
    name: 'foo',
    scopeName: 'source.foo',
    patterns: [
        { include: '#stringLiteral' },
        { include: '#punctuation' },
        { include: '#identifier' },
    ],
    repository: {
        identifier,
        punctuation,
        stringLiteral,
    },
};

export default grammar;
