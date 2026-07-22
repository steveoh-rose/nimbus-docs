import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function AuthCardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Sign in to Nimbus</CardTitle>
        <CardDescription>
          Enter your work email below to sign in to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="auth-email">Email</Label>
          <Input id="auth-email" type="email" placeholder="you@consoleconnect.com" />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="auth-password">Password</Label>
            <a href="#" className="text-xs text-muted-foreground underline underline-offset-4">
              Forgot password?
            </a>
          </div>
          <Input id="auth-password" type="password" />
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button className="w-full">Sign in</Button>
        <Button variant="outline" className="w-full">
          Sign in with SSO
        </Button>
      </CardFooter>
    </Card>
  )
}
