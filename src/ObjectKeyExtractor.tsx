
import { createSignal } from "solid-js";


const ObjectKeyExtractor = () => {
	const [jsonInput, setJsonInput] = createSignal("");
	const [keysOutput, setKeysOutput] = createSignal("");

	const handleInputChange = (e: Event) => {
		const target = e.target as HTMLTextAreaElement;
		setJsonInput(target.value);
	};

	const handleExtractKeys = () => {
		try {
			const obj = JSON.parse(jsonInput());
			const keys = Object.keys(obj);
			setKeysOutput(keys.join(",\n"));
		} catch (err) {
			setKeysOutput("Invalid JSON");
		}
	};

	return (
		<div class="p-4 max-w-lg mx-auto">
			<h2 class="text-base text-black mb-2">Object Key Extractor</h2>
			<textarea
				class="w-full h-32 p-2 border rounded mb-2 text-sm"
				placeholder="Paste your JSON object here..."
				value={jsonInput()}
				onInput={handleInputChange}
			/>
			<button
				class="bg-black text-white px-4 py-2 rounded mb-2"
				onClick={handleExtractKeys}
			>
				Extract Keys
			</button>
			<textarea
				class="w-full h-32 p-2 border rounded text-sm"
				placeholder="Keys will appear here..."
				value={keysOutput()}
				readOnly
				onFocus={e => e.target.select()}
			/>
		</div>
	);
};

export default ObjectKeyExtractor;
