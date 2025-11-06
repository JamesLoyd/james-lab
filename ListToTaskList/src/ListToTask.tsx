
import { createSignal } from "solid-js";

export const ListToTask = () => {
    const [input, setInput] = createSignal("");
    const formatted = () =>
        input()
            .split(/\r?\n/)
            .filter((line: string) => line.trim() !== "")
            .map((line: string) => `- [ ] ${line}`)
            .join("\n");

    return (
        <div>
            <textarea
                style={{ border: "2px solid black", width: "100%", "min-height": "100px" }}
                value={input()}
                onInput={e => setInput(e.currentTarget.value)}
                placeholder="Enter your list, one item per line..."
            />
            <h3>Task List Output:</h3>
            <div
                style={{
                    border: "2px solid #888",
                    width: "100%",
                    "min-height": "100px",
                    "max-height": "300px",
                    "margin-top": "10px",
                    "white-space": "pre-wrap",
                    padding: "8px",
                    background: "#fafafa",
                    "overflow-y": "auto",
                    "user-select": "text",
                    cursor: "text"
                }}
                tabIndex={0}
                onClick={e => {
                    const el = e.currentTarget;
                    // Select all text in the div on click
                    if (window.getSelection && document.createRange) {
                        const range = document.createRange();
                        range.selectNodeContents(el);
                        const sel = window.getSelection();
                        sel?.removeAllRanges();
                        sel?.addRange(range);
                    }
                }}
            >
                {formatted()}
            </div>
        </div>
    );
};