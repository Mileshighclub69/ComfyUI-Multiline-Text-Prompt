# ComfyUI Multiline Prompt Sequencer

A lightweight, zero-dependency custom node for ComfyUI that sequentially executes a list of prompts line-by-line from a single text box. Perfect for batching 100+ generations smoothly without messy routing nodes or download 500 node-nodepacks.

<img width="1136" height="832" alt="{6307E341-7E39-4BA8-AE1A-AB6CBB378A0B}" src="https://github.com/user-attachments/assets/70b4db48-6b62-49fa-9b2e-09d4bdcc5952" />


## Features

- **Multiline Input:** Paste your prompt list directly, using one line per unique prompt.
- **Seamless Looping:** Automatically wraps back around to the first line when it reaches the end of your list.

  
## Installation

### Option 1: Manual Installation
1. Navigate to your `ComfyUI/custom_nodes` directory.
2. Clone this repository:
   ```bash
   git clone https://github.com/Mileshighclub69/ComfyUI-Multiline-Text-Prompt
   ```

### Option 2: Windows Portable Automated Script
If you use the ComfyUI Windows Portable version, you can automate this:
1. Either download [InstallMySneed.bat](https://raw.githubusercontent.com/Mileshighclub69/ComfyUI-Multiline-Text-Prompt/refs/heads/main/InstallMySneed.bat) and place it directly inside your `ComfyUI_windows_portable` folder.
   Or right click the link and `Save Link As...` into your `ComfyUI_windows_portable` (where your ComfyUI folder and .bat file for starting comfyui is.
2. Double-click `InstallMySneed.bat` and it automatically installs the node.



## How to Use

1. Add the **Multiline Prompt Sequencer** node to your canvas.
2. Connect `current_prompt` directly into your **CLIP Text Encode** node.
3. Paste your prompts into the text box (one distinct prompt per line).
4. Set the `mode` dropdown to `increment`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
