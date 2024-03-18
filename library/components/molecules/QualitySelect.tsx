import React, { ChangeEvent } from "react";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import * as Select from "@radix-ui/react-select";

import { cn } from "@/library/utils";

interface selectProps {
  type?: string;
  label?: string;
  input: boolean;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const QualitySelect = (prop: selectProps) => (
  <div className="flex flex-col gap-2 w-[18%] items-center font-semibold text-[#484E62]">
    {prop.label && <p className="text-sm font-medium">{prop.label}</p>}
    <Select.Root>
      <Select.Trigger
        className="inline-flex text-[#484E62] items-center font-outfit justify-between border border-[#138FA8] rounded-[32px] w-[162px] p-6 px-[15px] leading-none h-[44px] bg-white shadow-[0_0_0_2px] shadow-[#DEE6E5] outline-none"
        aria-label="Project"
      >
        <Select.Value placeholder="Select Quality" />
        <Select.Icon>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
          <Select.ScrollUpButton className="flex items-center justify-center bg-white cursor-default">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="p-[5px] font-outfit">
            <Select.Group>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="extreme">Extreme</SelectItem>
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white cursor-default">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  </div>
);

QualitySelect.displayName = "QualitySelect";

const SelectItem = React.forwardRef<
  HTMLDivElement,
  {
    value: string;
    disabled?: boolean;
    className?: string;
    children: React.ReactNode;
  }
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <Select.Item
      className={cn(
        "leading-none rounded-[3px] flex items-center h-[25px] p-5 pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-[#DEE6E5] data-[highlighted]:text-violet1",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
});

export default QualitySelect;
