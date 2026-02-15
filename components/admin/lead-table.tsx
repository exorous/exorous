"use client";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";
import { Mail, Edit, Zap, Download } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { useRouter } from "next/navigation";
// Removed server action import
import { EmptyState } from "@/components/ui/empty-state";

interface LeadTableProps {
    leads: any[];
}

export function LeadTable({ leads }: LeadTableProps) {
    const router = useRouter();
    const [isUpdating, setIsUpdating] = useState(false);

    const getCategoryBadge = (category: string | null) => {
        switch (category) {
            case "HOT":
                return <Badge className="bg-red-500/10 text-red-500 border-red-500/20 px-3 flex items-center gap-1">🔥 HOT</Badge>;
            case "WARM":
                return <Badge className="bg-orange-500/10 text-orange-500 border-orange-500/20 px-3">WARM</Badge>;
            case "COLD":
                return <Badge className="bg-zinc-500/10 text-zinc-500 border-zinc-500/20 px-3">COLD</Badge>;
            default:
                return <Badge variant="outline">NEW</Badge>;
        }
    };

    const getStatusBadge = (status: string) => {
        switch (status) {
            case "BOOKED":
                return <Badge className="bg-primary/10 text-primary border-primary/20">BOOKED</Badge>;
            case "DORMANT":
                return <Badge className="bg-zinc-500/10 text-zinc-500 border-zinc-500/20">DORMANT</Badge>;
            default:
                return <Badge variant="outline">{status}</Badge>;
        }
    };

    async function handleUpdate(formData: FormData, leadId: string) {
        setIsUpdating(true);
        try {
            const status = formData.get("status") as string;
            const category = formData.get("category") as string;

            const response = await fetch(`/api/admin/leads/${leadId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ status, category }),
            });

            if (!response.ok) {
                throw new Error("Failed to update lead");
            }

            toast.success("Lead updated successfully");
            router.refresh();
        } catch (error) {
            console.error("Failed to update lead:", error);
            toast.error("Failed to update lead");
        } finally {
            setIsUpdating(false);
        }
    }


    return (
        <div className="bg-zinc-900/60 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-white/5 flex items-center justify-between bg-zinc-900/40">
                <h2 className="text-lg font-bold text-white">Lead Pipeline</h2>
                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        className="bg-white/5 border-white/10 text-zinc-400 hover:text-white"
                        onClick={() => router.refresh()}
                    >
                        Refresh
                    </Button>
                    <form action="/api/admin/export-leads" method="GET">
                        <Button size="sm" type="submit" className="bg-primary text-black font-bold flex items-center gap-2">
                            <Download className="h-4 w-4" />
                            Export CSV
                        </Button>
                    </form>
                </div>
            </div>

            <Table>
                <TableHeader className="bg-zinc-900/20">
                    <TableRow className="border-white/5 hover:bg-transparent">
                        <TableHead className="text-xs uppercase tracking-widest text-zinc-500 py-6">Timestamp</TableHead>
                        <TableHead className="text-xs uppercase tracking-widest text-zinc-500 py-6">Lead Details</TableHead>
                        <TableHead className="text-xs uppercase tracking-widest text-zinc-500 py-6">AI Intelligence</TableHead>
                        <TableHead className="text-xs uppercase tracking-widest text-zinc-500 py-6">Follow-Ups</TableHead>
                        <TableHead className="text-xs uppercase tracking-widest text-zinc-500 py-6">Status</TableHead>
                        <TableHead className="text-right text-xs uppercase tracking-widest text-zinc-500 py-6 pr-8">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {leads.length > 0 ? (
                        leads.map((lead: any) => (
                            <TableRow key={lead.id} className="border-white/5 hover:bg-white/5 transition-colors group">
                                <TableCell className="py-6">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-white font-medium text-sm">{format(new Date(lead.createdAt), 'MMM d, h:mm a')}</span>
                                        <span className="text-[10px] text-muted-foreground uppercase tracking-tighter">ID: {lead.id.slice(-8)}</span>
                                    </div>
                                </TableCell>
                                <TableCell className="py-6">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-white font-bold">{lead.name}</span>
                                        <span className="text-zinc-500 text-xs flex items-center gap-2">
                                            <Mail className="h-3 w-3" /> {lead.email}
                                        </span>
                                    </div>
                                </TableCell>
                                <TableCell className="py-6">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-3">
                                            {getCategoryBadge(lead.category)}
                                            <span className="text-xs font-black text-white">{lead.score}/100</span>
                                        </div>
                                        <p className="text-[10px] text-zinc-500 max-w-[200px] truncate italic">
                                            &quot;{lead.aiReasoning}&quot;
                                        </p>
                                    </div>
                                </TableCell>
                                <TableCell className="py-6">
                                    <div className="flex flex-col gap-1">
                                        {lead.followUps?.length > 0 ? (
                                            lead.followUps.map((fu: any) => (
                                                <div key={fu.id} className="text-[10px] flex items-center gap-2">
                                                    <span className={fu.status === "SENT" ? "text-green-500" : "text-zinc-500"}>
                                                        {fu.status === "SENT" ? "✓" : "○"} Day {fu.sequenceIndex === 1 ? 2 : fu.sequenceIndex === 2 ? 4 : 7}
                                                    </span>
                                                </div>
                                            ))
                                        ) : (
                                            <span className="text-xs text-zinc-600">None scheduled</span>
                                        )}
                                    </div>
                                </TableCell>
                                <TableCell className="py-6">
                                    {getStatusBadge(lead.status)}
                                </TableCell>
                                <TableCell className="text-right py-6 pr-8">
                                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button size="icon" variant="ghost" className="h-8 w-8 text-zinc-400 hover:text-white">
                                                    <Edit className="h-4 w-4" />
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent className="bg-zinc-900 border-white/10 text-white">
                                                <DialogHeader>
                                                    <DialogTitle>Edit Lead: {lead.name}</DialogTitle>
                                                    <DialogDescription>
                                                        Manually override AI classification and status.
                                                    </DialogDescription>
                                                </DialogHeader>
                                                <form action={(formData) => handleUpdate(formData, lead.id)} className="space-y-4 py-4">
                                                    <div className="space-y-2">
                                                        <Label>Status</Label>
                                                        <Select name="status" defaultValue={lead.status}>
                                                            <SelectTrigger className="bg-zinc-800 border-white/10">
                                                                <SelectValue />
                                                            </SelectTrigger>
                                                            <SelectContent className="bg-zinc-800 border-white/10">
                                                                <SelectItem value="NEW">NEW</SelectItem>
                                                                <SelectItem value="QUALIFIED">QUALIFIED</SelectItem>
                                                                <SelectItem value="BOOKED">BOOKED (Stops Follow-ups)</SelectItem>
                                                                <SelectItem value="DORMANT">DORMANT (Stops Follow-ups)</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label>Category</Label>
                                                        <Select name="category" defaultValue={lead.category || "WARM"}>
                                                            <SelectTrigger className="bg-zinc-800 border-white/10">
                                                                <SelectValue />
                                                            </SelectTrigger>
                                                            <SelectContent className="bg-zinc-800 border-white/10">
                                                                <SelectItem value="HOT">HOT</SelectItem>
                                                                <SelectItem value="WARM">WARM</SelectItem>
                                                                <SelectItem value="COLD">COLD</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    </div>
                                                    <DialogFooter>
                                                        <Button
                                                            type="submit"
                                                            className="bg-primary text-black"
                                                            disabled={isUpdating}
                                                        >
                                                            {isUpdating ? "Saving..." : "Save Changes"}
                                                        </Button>
                                                    </DialogFooter>
                                                </form>
                                            </DialogContent>
                                        </Dialog>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={6} className="h-64 p-0">
                                <EmptyState
                                    icon={Zap}
                                    title="No Leads Detected Yet"
                                    description="Your AI agents are standing by. As soon as traffic flows in, leads will appear here automatically."
                                />
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
