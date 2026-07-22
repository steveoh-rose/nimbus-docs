import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const connections = [
  { id: "cc-01921", name: "acme-prod-east", status: "active", throughput: "2.1 Gbps" },
  { id: "cc-01922", name: "acme-staging", status: "provisioning", throughput: "—" },
  { id: "cc-01923", name: "globex-eu-central", status: "active", throughput: "820 Mbps" },
  { id: "cc-01924", name: "initech-backup", status: "degraded", throughput: "110 Mbps" },
]

const statusVariant: Record<string, "default" | "secondary" | "destructive"> = {
  active: "default",
  provisioning: "secondary",
  degraded: "destructive",
}

export default function DataTableDemo() {
  return (
    <div className="w-full max-w-2xl overflow-hidden rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Connection ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Throughput</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {connections.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="font-mono text-xs text-muted-foreground">
                {row.id}
              </TableCell>
              <TableCell className="font-medium">{row.name}</TableCell>
              <TableCell>
                <Badge variant={statusVariant[row.status]} className="capitalize">
                  {row.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">{row.throughput}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
