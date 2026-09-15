# ComfyUI Multiline Prompt Sequencer

A lightweight, zero-dependency custom node for ComfyUI that sequentially executes a list of prompts line-by-line from a single text box. Perfect for batching 100+ generations smoothly without messy routing nodes or downloading 500 node-nodepacks.

<img width="1612" height="739" alt="{E1BEF528-63A9-4EFB-A3F0-9648948A9655}" src="https://github.com/user-attachments/assets/9b3fd81d-5064-4f2e-bb1e-1e2c32f7b434" />


## Features

- **Multiline Input:** Paste your prompt list directly, using one line per unique prompt.
- **Seamless Looping:** Automatically wraps back around to the first line when it reaches the end of your list.

  
## Installation

Use the ComfyUI manager or:

### Option 1: Manual Installation
1. Navigate to your `ComfyUI/custom_nodes` directory.
2. Clone this repository:
   ```bash
   git clone https://github.com/Mileshighclub69/ComfyUI-Multiline-Text-Prompt
   ```

### Option 2: Manual Download (No Git Required)
1. Download and extract the ZIP file from the [GitHub repository](https://github.com/Mileshighclub69/ComfyUI-Multiline-Text-Prompt/archive/refs/heads/main.zip).
2. Move the extracted folder into `ComfyUI/custom_nodes` so that it looks like `ComfyUI/custom_nodes/ComfyUI-Multiline-Text-Prompt`

### Option 3: Automated Windows Script (.bat File) (Git required)
You can also download my [InstallMySneed.bat](https://raw.githubusercontent.com/Mileshighclub69/ComfyUI-Multiline-Text-Prompt/refs/heads/main/InstallMySneed.bat) file by right clicking the hyperlink then picking `Save Link As...` into your `ComfyUI_windows_portable` folder and run it to automatically install the node.



## How to Use

1. Add the **Multiline Prompt Sequencer** node to your canvas.
2. Connect `current_prompt` directly into your **CLIP Text Encode** node.
3. Paste your prompts into the text box (one distinct prompt per line).
4. Set the `mode` dropdown to `increment`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
