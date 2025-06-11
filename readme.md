# Tree Pruner

**Tree Pruner** is a lightweight VS Code extension that helps you collapse all descendant folders of a selected directory in the Explorer with a single command or keyboard shortcut.

## Features

* **Recursive Collapse**: Collapse a selected folder and all of its nested subfolders in the VS Code Explorer.
* **Keyboard Shortcut**: Quickly collapse using `Ctrl+K Ctrl+Shift+C` (in both Explorer and Editor contexts).
* **Context Menu Command**: Right-click any folder in the Explorer and choose **Collapse Folder Recursively**.
* **Collapse All**: Collapse every open folder in the Explorer using `Ctrl+Shift+X`.

## Installation

1. **From the Marketplace**

   * In VS Code, open the Extensions view (`Ctrl+Shift+X`).
   * Search for **Tree Pruner**.
   * Click **Install**.

2. **Manual (.vsix) Install**

   ```bash
   vsce package
   code --install-extension tree-pruner-0.0.1.vsix
   ```

## Usage

1. **Recursive Collapse Command**

   * **Explorer**: Right-click a folder and select **Collapse Folder Recursively**.
   * **Shortcut**: Press `Ctrl+K Ctrl+Shift+C` when focus is in the Explorer or an open editor.

2. **Collapse All Command**

   * Press `Ctrl+Shift+X` to collapse every open folder in the Explorer.

## Configuration

No additional configuration is required. The default keybindings and commands should work out of the box.

## Extension Settings

This extension contributes no custom settings.

## Keyboard Shortcuts

| Shortcut              | Action                               |
| --------------------- | ------------------------------------ |
| `Ctrl+K Ctrl+Shift+C` | Collapse selected folder recursively |
| `Ctrl+Shift+X`        | Collapse all folders in Explorer     |

## Release Notes

### 0.0.1

* Initial release with recursive collapse functionality

## Contributing

Contributions and feedback are welcome! Feel free to open issues or submit pull requests on [GitHub](https://github.com/YourUserName/tree-pruner).

## License

[MIT](LICENSE)
