# VS Code Foo grammar

This is a template for use with
[vscode-grammar-builder](https://github.com/noxabellus/vscode-grammar-builder) and [vscode-grammar-types](https://github.com/noxabellus/vscode-grammar-types)

+ Find/Replace all instances of `foo` with your language ID/extension.
Be sure to use the `Preserve Case` option

+ Find/Replace all instances of `ffs` with your language's file extension

+ Replace `foo` in file names (src/foo.config.json`)
with your language name

+ Update author / publisher / description in `package.json`

+ Replace the unlicense `LICENSE` with your preferred license and update the field in `package.json`

+ The usual VS Code extension stuff like adding an icon, replacing this readme, etc

+ Write your grammar in TypeScript with regex literals, builder functions etc

+ Build, package, and install
1. `npm run build`
2. `npm run package`
3. `npm run install`
