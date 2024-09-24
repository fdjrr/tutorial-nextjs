"use client";

import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";

const FoodPage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    console.log(searchParams.get("q"));

    return (
        <div className="h-[900px]">
            <h1 className="text-3xl">Food Page</h1>
            <Button onClick={() => router.push("/products")}>
                Back to Product
            </Button>
        </div>
    );
};

export default FoodPage;
