"use client";

import { Button } from "@/components/ui/button";

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <div>
            <h1>Error</h1>
            <p>{error.message}</p>
            <Button onClick={() => reset()}>Try Again</Button>
        </div>
    );
}
