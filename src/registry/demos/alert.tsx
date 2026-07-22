import { AlertCircleIcon, TerminalIcon } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function AlertDemo() {
  return (
    <div className="grid w-full max-w-md gap-4">
      <Alert>
        <TerminalIcon />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the CLI.
        </AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>Connection failed</AlertTitle>
        <AlertDescription>
          Check your API credentials and try again.
        </AlertDescription>
      </Alert>
    </div>
  )
}
