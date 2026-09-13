# ComfyUI Multiline Prompt Sequencer

A lightweight, zero-dependency custom node for ComfyUI that sequentially executes a list of prompts line-by-line from a single text box. Perfect for batching 100+ generations smoothly without messy routing nodes.

<img width="1136" height="832" alt="{6307E341-7E39-4BA8-AE1A-AB6CBB378A0B}" src="https://github.com/user-attachments/assets/70b4db48-6b62-49fa-9b2e-09d4bdcc5952" />


## Features

- **Multiline Input:** Paste your prompt list directly, using one line per unique prompt.
- **Visual Auto-Counter:** The `current_line` widget physically ticks up or down on your dashboard in real-time.
- **Seamless Looping:** Automatically wraps back around to the first line when it reaches the end of your list.
- **Three Modes:** `increment` (move down the list), `decrease` (move up the list), and `fixed` (freeze on the current line).

## Installation

Install via comfyui manager or:

1. Navigate to your ComfyUI custom nodes directory:
   ```bash
   cd ComfyUI/custom_nodes
   ```
2. Clone this repository:
   ```bash
   git clone https://github.com/Mileshighclub69/ComfyUI-Multiline-Text-Prompt.git
   ```
3. Completely restart ComfyUI and refresh your browser.

## How to Use

1. Add the **Multiline Prompt Sequencer** node to your canvas.
2. Connect `current_prompt` directly into your **CLIP Text Encode** node.
3. Paste your prompts into the text box (one distinct prompt per line).
4. Set the `mode` dropdown to `increment`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
