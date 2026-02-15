import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
    icon?: LucideIcon;
    title: string;
    description: string;
    action?: React.ReactNode;
    className?: string;
}

export function EmptyState({
    icon: Icon,
    title,
    description,
    action,
    className,
}: EmptyStateProps) {
    return (
        <div className={cn(
            "flex flex-col items-center justify-center p-8 text-center h-full min-h-[300px]",
            className
        )}>
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-zinc-900/50 border border-white/5 mb-4 shadow-inner">
                {Icon && <Icon className="w-8 h-8 text-zinc-500" />}
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">{title}</h3>
            <p className="text-sm text-zinc-400 max-w-sm mb-6 leading-relaxed text-balance">
                {description}
            </p>
            {action && (
                <div className="mt-2">
                    {action}
                </div>
            )}
        </div>
    );
}
