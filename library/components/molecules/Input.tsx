import { cn } from "@/library/utils";
// import { OutputData } from "@editorjs/editorjs";
import dynamic from "next/dynamic";
import { ChangeEvent } from "react";

interface inputProps {
  type?: "text" | "datetime-local" | "textarea" | "rich" | "tag";
  label?: string;
  disabled?: boolean;
  value: string;
  className?: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

// const EditorBlock = dynamic(
//   () => import("@/library/components/organisms/EditorBlock"),
//   {
//     ssr: false,
//   }
// );

const Input = (prop: inputProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && e.currentTarget.value === "") {
      // Remove the last tag when backspace is pressed on an empty input
      const newTags = prop.value.trim().split(" ").slice(0, -1);
      prop.onChange({
        target: { value: newTags.join(" ") },
      } as any);
    } else if (e.key === " " || e.key === "Enter") {
      // Prevent default behavior to avoid adding actual spaces
      e.preventDefault();
      const newTag = e.currentTarget.value.trim();
      if (newTag !== "") {
        // Add the new tag when space or enter is pressed
        const newTags = prop.value.trim() + " " + newTag;
        prop.onChange({
          target: { value: newTags },
        } as any);
        e.currentTarget.value = "";
      }
    }
  };

  const renderInput = () => {
    switch (prop.type) {
      case "textarea":
        return (
          <textarea
            className={cn(
              "bg-[#4e80ff28] p-4 rounded-md h-[113px] outline-none",
              prop.disabled &&
                "bg-white shadow-[0_0_0_2px] shadow-[#4E81FF] outline-none",
              prop.className
            )}
            value={prop.value}
            onChange={prop.onChange}
            disabled={prop.disabled}
          />
        );
      case "rich":
        return (
          <div className=" p-4 bg-[#4e80ff28] min-h-[120px] rounded-md">
            {/* <EditorBlock
              data={JSON.parse(JSON.stringify(prop.value))}
              onChange={(val: OutputData) =>
                prop.onChange({
                  target: { value: JSON.stringify(val) },
                } as any)
              }
              holder="editorjs-container"
            /> */}
          </div>
        );
      case "tag":
        const tags = prop.value.split(" ").filter(Boolean);
        return (
          <div className="flex gap-2 flex-wrap p-4 bg-[#4e80ff28] rounded-md">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="bg-gray-200 rounded-full px-2 text-sm mr-2 flex items-center"
              >
                <span>{tag}</span>
                <span
                  className="ml-1 cursor-pointer font-bold"
                  onClick={() => {
                    const newTags = tags.filter((_, i) => i !== index);
                    prop.onChange({
                      target: { value: newTags.join(" ") },
                    } as any);
                  }}
                >
                  x
                </span>
              </div>
            ))}
            <input
              type="text"
              className={cn(
                "outline-none bg-transparent flex-1",
                prop.className
              )}
              onKeyDown={handleKeyDown}
              disabled={prop.disabled}
            />
          </div>
        );
      default:
        return (
          <input
            type={prop.type}
            className={cn(
              "bg-[#4e80ff28] p-4 rounded-md outline-none w-full",
              prop.disabled &&
                "bg-white shadow-[0_0_0_2px] shadow-[#4E81FF] outline-none",
              prop.className
            )}
            value={prop.value}
            onChange={prop.onChange}
            disabled={prop.disabled}
          />
        );
    }
  };

  return (
    <div className={cn("flex flex-col gap-2 w-full")}>
      {prop.label && <p className=" text-sm font-semibold text-[#2D2D2C]">{prop.label}</p>}
      {renderInput()}
    </div>
  );
};

export default Input;
