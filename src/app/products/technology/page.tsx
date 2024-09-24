"use client";

import { Input } from "@/components/ui/input";
import React, { useState } from "react";

const TechnologyPage = () => {
    const [search, setSearch] = useState("");

    return (
        <div>
            <h1>Technology Page : {search}</h1>
            <Input onChange={(e) => setSearch(e.target.value)} />
        </div>
    );
};

export default TechnologyPage;
