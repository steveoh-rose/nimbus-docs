import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function InputDemo() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="email-demo">Email</Label>
      <Input id="email-demo" type="email" placeholder="you@consoleconnect.com" />
    </div>
  )
}
