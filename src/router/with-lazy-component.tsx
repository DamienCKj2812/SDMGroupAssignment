import React, { Suspense } from "react"; // Import React explicitly
import { Spinner } from "@radix-ui/themes";

export function withLazyComponent(Children) {
    return (
        <Suspense fallback={<Spinner />}>
            <Children />
        </Suspense>
    );
}
