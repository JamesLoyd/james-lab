import { createSignal } from 'solid-js';

/**
 * MarkdownListToColumn (SolidJS)
 * Input: Markdown bullet list ("- item" per line)
 * Output: Markdown table column
 */
export default function MarkdownListToColumn() {
  const [input, setInput] = createSignal('');
  const [output, setOutput] = createSignal('');

  const handleTransform = () => {
    const items = input()
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.startsWith('- '))
      .map(line => line.slice(2).trim());
    const maxLen = items.length > 0 ? Math.max(...items.map(i => i.length)) : 1;
    const pad = (str: string) => str + ' '.repeat(maxLen - str.length);
    let result = '';
    items.forEach(item => {
      result += `| ${pad(item)} |\n`;
    });
    setOutput(result.trim());
  };

  return (
    <div class="p-4 max-w-lg mx-auto">
      <h2 class="text-lg mb-2">Markdown List to Table Column</h2>
      <label class="block mb-2">Markdown List Input:</label>
      <textarea
        value={input()}
        onInput={e => setInput(e.currentTarget.value)}
        rows={6}
        class="border rounded px-2 py-1 mb-4 w-full"
        placeholder="- Apple\n- Banana\n- Cherry"
      />
      <button
        onClick={handleTransform}
        class="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Transform
      </button>
      <label class="block mb-2">Markdown Table Column Output:</label>
      <textarea
        value={output()}
        readOnly
        rows={input().split('\n').length + 2}
        class="border rounded px-2 py-1 w-full bg-gray-100"
      />
    </div>
  );
}
