const Docs = ({
    params,
}: {
    params: {
        slug: string[];
    };
}) => {
    let title;

    if (params.slug?.length === 1) {
        title = `Feature : ${params.slug[0]}`;
    }

    if (params.slug?.length === 2) {
        title = `Feature : ${params.slug[0]} Concept: ${params.slug[1]}`;
    }

    if (params.slug?.length === 3) {
        title = `Feature : ${params.slug[0]} Concept: ${params.slug[1]} Section: ${params.slug[2]}`;
    }

    if (!params.slug) {
        title = "Docs Page";
    }

    return (
        <div>
            <h1 className="text-2xl">Docs</h1>
            <p>{title}</p>
        </div>
    );
};

export default Docs;
