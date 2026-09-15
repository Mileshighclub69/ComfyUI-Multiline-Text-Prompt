import random

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
            }
        }

    RETURN_TYPES = ("STRING", "INT")
    RETURN_NAMES = ("current_prompt", "line_index")
    FUNCTION = "get_current_line"
    CATEGORY = "utils/text"

    def get_current_line(self, multiline_text, current_line, mode):
        # Split text and drop completely empty lines
        lines = [line.strip() for line in multiline_text.splitlines() if line.strip()]
        if not lines:
            lines = [""]
        total_lines = len(lines)

        # Always use modulo loop math based on what the frontend sent us
        index = current_line % total_lines
        selected_prompt = lines[index]

        return {
            "ui": {"text": [selected_prompt]},
            "result": (selected_prompt, index)
        }

    @classmethod
    def IS_CHANGED(s, **kwargs):
        return random.random()

NODE_CLASS_MAPPINGS = {"MultilinePromptSequencer": MultilinePromptSequencer}
NODE_DISPLAY_NAME_MAPPINGS = {"MultilinePromptSequencer": "Multiline Prompt Sequencer"}
