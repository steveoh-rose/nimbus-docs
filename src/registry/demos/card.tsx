import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function CardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Bandwidth usage</CardTitle>
        <CardDescription>This month across all connections.</CardDescription>
        <CardAction>
          <Button variant="ghost" size="sm">
            View
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-semibold">4.2 TB</p>
        <p className="text-sm text-muted-foreground">+12% from last month</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full">
          View report
        </Button>
      </CardFooter>
    </Card>
  )
}
