"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
/**
 * Collapse the given folder URI and all its descendant directories recursively in the Explorer view.
 */
function collapseRecursively(uri) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Collapse all folders
            yield vscode.commands.executeCommand('workbench.files.action.collapseExplorerFolders');
            // Reveal the target folder so تمرکز (focus) روی آن بماند ولی خودش همچنان بسته باشد
            yield vscode.commands.executeCommand('revealInExplorer', uri);
        }
        catch (err) {
            console.error('Error collapsing folders recursively:', err);
        }
    });
}
function activate(context) {
    // Register command
    const disposable = vscode.commands.registerCommand('tree-pruner.collapseRecursively', (uri) => collapseRecursively(uri));
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map