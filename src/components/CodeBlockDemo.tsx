"use client";

import { CodeBlock } from "@/components/ui/code-block";

export function CodeBlockDemo() {
    const code = `const DummyComponent = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div className="p-4 border rounded-lg">
      <button 
        onClick={() => {setCount(prev => prev + 1)}}
        className="px-4 py-2 bg-blue-500 text-white rounded 
        hover:bg-blue-600">
        Increment
      </button>
    </div>
  );
};
`;

    return (
        <div className="max-w-3xl mx-auto w-full">
            <CodeBlock
                language="jsx"
                filename="DummyComponent.jsx"
                highlightLines={[9, 13, 14, 18]}
                code={code}
            />
        </div>
    );
}