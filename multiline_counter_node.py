import random
from server import PromptServer

class MultilinePromptSequencer:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "multiline_text": ("STRING", {"multiline": True, "default": "A beautiful sunset over mountains\nA futuristic cyberpunk street at night\nA close up portrait of an astronaut"}),
                "current_line": ("INT", {"default": 0, "min": 0, "max": 999999, "step": 1}),
                "mode": (["increment", "decrease", "fixed"], {"default": "increment"}),
            },
            "hidden": {"unique_id": "UNIQUE_ID"}
        }

    RETURN_TYPES = ("STRING", "INT")
    RETURN_NAMES = ("current_prompt", "line_index")
    FUNCTION = "get_current_line"
    CATEGORY = "utils/text"

    def get_current_line(self, multiline_text, current_line, mode, unique_id=None):
        # Split text and drop completely empty lines
        lines = [line.strip() for line in multiline_text.splitlines() if line.strip()]
        if not lines:
            lines = [""]
        total_lines = len(lines)

        # Always use modulo loop math to ensure it never crashes if values overflow
        index = current_line % total_lines
        selected_prompt = lines[index]

        # Calculate the next line index based on mode for the UI to update
        next_line = current_line
        if mode == "increment":
            # Apply modulo math here to loop back to 0 when it exceeds total lines
            next_line = (current_line + 1) % total_lines
        elif mode == "decrease":
            # Apply modulo math here to wrap backwards to the last index if it drops below 0
            next_line = (current_line - 1) % total_lines

        # Send a custom message to the frontend UI to update this specific node's widget
        if unique_id is not None:
            PromptServer.instance.send_sync("multiline_sequencer_update", {
                "node_id": unique_id,
                "next_line": next_line
            })

        return {
            "ui": {"text": [selected_prompt]},
            "result": (selected_prompt, index)
        }

    @classmethod
    def IS_CHANGED(s, **kwargs):
        return random.random()

NODE_CLASS_MAPPINGS = {"MultilinePromptSequencer": MultilinePromptSequencer}
NODE_DISPLAY_NAME_MAPPINGS = {"MultilinePromptSequencer": "Multiline Prompt Sequencer"}
