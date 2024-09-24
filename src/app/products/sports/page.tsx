import { redirect } from "next/navigation";

const SportPage = () => {
    const isAdmin = false;
    if (!isAdmin) {
        redirect("/products");
    }
    return <div>Sport Page</div>;
};

export default SportPage;
