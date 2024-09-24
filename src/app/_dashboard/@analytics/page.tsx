import { Card } from "@/components/ui/card";

function getRandomItem(arr: string[]) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const Analytics = () => {
    const item = getRandomItem(["", "b", "c"]);

    if (item === "") {
        throw new Error("Item is empty!");
    }

    return (
        <Card className="w-[500px] p-2 flex justify-center items-center">
            Analytics
        </Card>
    );
};

export default Analytics;
