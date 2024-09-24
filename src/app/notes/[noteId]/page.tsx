import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
    params: { noteId: string };
};

function getRandomItem(arr: string[]) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export const generateMetadata = ({ params }: Props): Metadata => {
    return {
        title: `Note ${params.noteId}`,
        description: `Detail Note ${params.noteId}`,
    };
};

const DetailNotePage = ({ params }: Props) => {
    if (parseInt(params.noteId) > 100) {
        notFound();
    }

    const item = getRandomItem(["", "b", "c"]);

    if (item === "") {
        throw new Error("Item is empty!");
    }

    return <div>Detail Note Page : {params.noteId}</div>;
};

export default DetailNotePage;
