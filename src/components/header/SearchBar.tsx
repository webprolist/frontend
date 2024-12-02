import {
  Command,
  CommandInput,
} from "@/components/ui/command"

export default function SearchBar() {
  return (
    <>
      <Command className="flex flex-1 justify-center rounded">
        <CommandInput placeholder="Type a command or search..." />
      </Command>
    </>
  )
}
