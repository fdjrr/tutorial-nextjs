"use client";

function getRandomItem(arr: string[]) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const DetailSectionPage = ({
    params,
}: {
    params: { noteId: string; sectionId: string };
}) => {
    const item = getRandomItem(["", "b", "c"]);

    if (item === "") {
        throw new Error("Item is empty!");
    }

    return (
        <div>
            Detail Note : {params.noteId} Section Page : {params.sectionId}
        </div>
    );
};

export default DetailSectionPage;
