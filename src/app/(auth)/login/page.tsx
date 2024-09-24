"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginPage = () => {
    const handleSubmit = () => {
        console.log("Submitted");
    };

    return (
        <div className="h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit} className="w-full max-w-[540px]">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">
                            Welcome Back!
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                type="email"
                                id="email"
                                placeholder="Email"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                type="password"
                                id="password"
                                placeholder="Password"
                            />
                        </div>
                        <div className="flex flex-col-gap-2">
                            <Button type="submit" className="w-full">
                                Submit
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </form>
        </div>
    );
};

export default LoginPage;
