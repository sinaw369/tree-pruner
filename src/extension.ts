import * as vscode from 'vscode';

/**
 * Collapse the given folder URI and all its descendant directories recursively in the Explorer view.
 */
async function collapseRecursively(uri: vscode.Uri) {
  try {
    // Collapse all folders
    await vscode.commands.executeCommand('workbench.files.action.collapseExplorerFolders');
    // Reveal the target folder so تمرکز (focus) روی آن بماند ولی خودش همچنان بسته باشد
    await vscode.commands.executeCommand('revealInExplorer', uri);
  } catch (err) {
    console.error('Error collapsing folders recursively:', err);
  }
}


export function activate(context: vscode.ExtensionContext) {
  // Register command
  const disposable = vscode.commands.registerCommand(
    'tree-pruner.collapseRecursively',
    (uri: vscode.Uri) => collapseRecursively(uri)
  );
  context.subscriptions.push(disposable);
}

export function deactivate() {}
