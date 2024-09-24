export default function DashboardLayout({
    children,
    analytics,
    social,
    users,
}: {
    children: React.ReactNode;
    analytics: React.ReactNode;
    social: React.ReactNode;
    users: React.ReactNode;
}) {
    return (
        <div>
            <div>{children}</div>
            <div className="flex gap-2">
                <div className="flex flex-col">
                    <div className="mb-3">{users}</div>
                    <div>{social}</div>
                </div>
                <div className="flex flex-1">{analytics}</div>
            </div>
        </div>
    );
}
