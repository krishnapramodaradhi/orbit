import { Badge } from "../ui/badge";

const StatusBadge = ({ status }: { status: string }) => {
  const statusColorMapping: Record<string, string> = {
    "not started": "bg-gray-700",
    "in progress": "bg-blue-700",
    completed: "bg-green-700",
    "on hold": "bg-yellow-700",
  };

  const badgeColor = statusColorMapping[status.toLowerCase()] || "bg-gray-700";

  return (
    <Badge asChild className={badgeColor}>
      <span className="text-white">{status}</span>
    </Badge>
  );
};

export default StatusBadge;
