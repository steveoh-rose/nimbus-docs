import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function SelectDemo() {
  return (
    <Select defaultValue="us-east">
      <SelectTrigger className="w-[220px]">
        <SelectValue placeholder="Select a region" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="us-east">US East</SelectItem>
        <SelectItem value="us-west">US West</SelectItem>
        <SelectItem value="eu-central">EU Central</SelectItem>
        <SelectItem value="ap-southeast">AP Southeast</SelectItem>
      </SelectContent>
    </Select>
  )
}
