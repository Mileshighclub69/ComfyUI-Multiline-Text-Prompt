import { app } from "../../../scripts/app.js";
import { api } from "../../../scripts/api.js";

app.registerExtension({
    name: "MultilinePromptSequencer.AutoIncrement",
    async setup() {
        // Listen for the custom update event from the backend
        api.addEventListener("multiline_sequencer_update", (event) => {
            const detail = event.detail;
            if (!detail) return;

            // Find the specific node on the canvas by its unique ID
            const node = app.graph.getNodeById(detail.node_id);
            if (node && node.widgets) {
                // Find the current_line widget and update its value
                const widget = node.widgets.find(w => w.name === "current_line");
                if (widget) {
                    widget.value = detail.next_line;
                }
            }
        });
    }
});
