import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-full max-w-sm">
      <TabsList className="w-full">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="team">Team</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>Update your account details.</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Name, email, and password settings live here.
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="team">
        <Card>
          <CardHeader>
            <CardTitle>Team</CardTitle>
            <CardDescription>Manage members and roles.</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Invite teammates and assign permissions here.
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
