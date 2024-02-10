import { Trash2, Copy } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const Clipboard = () => {
  const [copiedText, setCopiedText] = useState<any[]>([]);

  const getCopiedText = useCallback(async () => {
    if (!document.hasFocus()) {
      return console.error("Document is not focused.");
    }

    try {
      const text = await navigator.clipboard.readText();
      setCopiedText((prev) => [...prev, text]);
    } catch (error) {
      console.error("Error in getting copied text", error);
    }
  }, []);

  useEffect(() => {
    getCopiedText();
  }, []);

  console.log(copiedText);

  return (
    <>
      <nav className="text-center font-semibold text-xl pb-3 shadow-sm">Clipboard Master</nav>
      <main>
        <section className="flex justify-between items-center p-3">
          <h2 className="text-lg font-normal">History</h2>
          <button className="text-sm font-semibold text-blue-500">Clear All</button>
        </section>

        <div key={"index"} className="mb-4 px-3">
          <div className="bg-gray-100 p-2 rounded-md shadow-sm flex items-center">
            <div className="w-full flex flex-col">
              <span className="text-black text-sm">Software Development</span>
              <span className="text-gray-600 mt-1">11-02-2024 00:51</span>
            </div>

            <div className="flex items-center gap-2">
              <Copy size={15} color={"blue"} className="cursor-pointer hover:text-blue-700" />
              <Trash2 size={15} color={"red"} className="cursor-pointer hover:text-red-700" />
            </div>
          </div>
        </div>

        {/* <section className="p-3">
          <p className="text-sm font-normal">No clipboard history available</p>
        </section> */}
      </main>
    </>
  );
};

export default Clipboard;
