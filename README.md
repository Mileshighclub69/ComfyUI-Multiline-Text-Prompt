\# ComfyUI Multiline Prompt Sequencer



A lightweight, zero-dependency custom node for ComfyUI that allows you to easily manage and execute a large sequence of prompts from a single multiline text box. 



Perfect for batching 100+ generations in a row without dealing with messy routing nodes or external looping systems.



\## Features



\- \*\*Multiline Input:\*\* Paste or write your prompts directly into a single node, using one line per prompt.

\- \*\*Visual UI Auto-Counter:\*\* The `current\_line` display widget physically ticks up or down on your screen in real-time as ComfyUI runs through your queue.

\- \*\*Native Boundary Looping:\*\* Automatically wraps back around to the first line (index `0`) when it hits the end of your prompt list.

\- \*\*Three Core Modes:\*\*

&#x20; - `increment`: Automatically moves down the list line-by-line on every queue run.

&#x20; - `decrease`: Automatically moves backward up the list on every queue run.

&#x20; - `fixed`: Keeps the selected prompt frozen on the current active line.



\## Installation



1\. Open your terminal or command prompt.

2\. Navigate to your ComfyUI custom nodes directory:

&#x20;  ```bash

&#x20;  cd ComfyUI/custom\_nodes

&#x20;  ```

3\. Clone this repository:

&#x20;  ```bash

&#x20;  git clone https://github.com

&#x20;  ```

4\. Completely restart ComfyUI.



\## How to Use



1\. Double-click your ComfyUI canvas, search for \*\*Multiline Prompt Sequencer\*\*, and add it.

2\. Connect the `current\_prompt` output directly into your \*\*CLIP Text Encode\*\* node.

3\. Paste a list of text prompts into the node (ensure each distinct prompt is on its own separate line).

4\. Set the `mode` dropdown to `increment`.

5\. Open the \*\*Extra Options\*\* panel under the ComfyUI "Queue Prompt" button, set your \*\*Batch count\*\* to match your list size, and hit \*\*Queue Prompt\*\*.



\## License



This project is licensed under the MIT License - see the \[LICENSE](LICENSE) file for details.



