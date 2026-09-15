import { app } from "../../../scripts/app.js";

app.registerExtension({
    name: "MultilinePromptSequencer.AutoIncrement",
    async beforeRegisterNodeDef(nodeType, nodeData, app) {
        if (nodeData.name === "MultilinePromptSequencer") {
            
            // Hook into the creation of this specific node type
            const onNodeCreated = nodeType.prototype.onNodeCreated;
            nodeType.prototype.onNodeCreated = function () {
                const r = onNodeCreated ? onNodeCreated.apply(this, arguments) : undefined;

                // Find our widgets
                const currentLineWidget = this.widgets.find((w) => w.name === "current_line");
                const modeWidget = this.widgets.find((w) => w.name === "mode");
                const textWidget = this.widgets.find((w) => w.name === "multiline_text");

                if (currentLineWidget) {
                    // Override the serializeValue function. 
                    // This runs sequentially for every item in your Batch Count right when you queue it.
                    currentLineWidget.serializeValue = () => {
                        const currentValue = currentLineWidget.value;
                        const mode = modeWidget ? modeWidget.value : "increment";
                        
                        // Parse text lines to calculate accurate loop/modulo max bounds
                        const lines = textWidget && textWidget.value 
                            ? textWidget.value.split('\n').map(l => l.strip ? l.strip() : l.trim()).filter(Boolean)
                            : [];
                        const totalLines = lines.length > 0 ? lines.length : 1;

                        let nextValue = currentValue;

                        // Increment or decrease the counter smoothly for the next item in the batch
                        if (mode === "increment") {
                            nextValue = (currentValue + 1) % totalLines;
                        } else if (mode === "decrease") {
                            nextValue = (currentValue - 1 + totalLines) % totalLines;
                        }

                        // Update the visual UI widget immediately so the user sees it advance
                        // We use setTimeout to ensure it doesn't interrupt the active serialization loop
                        setTimeout(() => {
                            currentLineWidget.value = nextValue;
                        }, 0);

                        // Return the strictly sequential number for this specific queued task
                        return currentValue;
                    };
                }
                return r;
            };
        }
    }
});
