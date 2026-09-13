import { app } from "../../../scripts/app.js";

app.registerExtension({
    name: "MultilinePromptSequencer.AutoIncrement",
    async beforeRegisterNodeDef(nodeType, nodeData, app) {
        if (nodeData.name === "MultilinePromptSequencer") {
            const onExecuted = nodeType.prototype.onExecuted;
            nodeType.prototype.onExecuted = function (message) {
                if (onExecuted) onExecuted.apply(this, arguments);

                const currentLineWidget = this.widgets.find(w => w.name === "current_line");
                const modeWidget = this.widgets.find(w => w.name === "mode");
                const multilineTextWidget = this.widgets.find(w => w.name === "multiline_text");

                if (!currentLineWidget || !modeWidget || !multilineTextWidget) return;

                const text = multilineTextWidget.value || "";
                const lines = text.split("\n").map(l => l.trim()).filter(l => l.length > 0);
                const totalLines = lines.length || 1;

                let currentVal = currentLineWidget.value;
                const mode = modeWidget.value;

                // Always seamlessly loop at boundaries
                if (mode === "increment") {
                    currentVal += 1;
                    if (currentVal >= totalLines) currentVal = 0; 
                } else if (mode === "decrease") {
                    currentVal -= 1;
                    if (currentVal < 0) currentVal = totalLines - 1; 
                }

                currentLineWidget.value = currentVal;
            };
        }
    }
});
