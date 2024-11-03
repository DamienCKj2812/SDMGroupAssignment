import * as Toast from "@radix-ui/react-toast";
import { Box } from "@radix-ui/themes";
import React, { useEffect } from "react";

const ToastPopover = ({
    openToast,
    setOpenToast,
    status,
    children,
}: {
    openToast: boolean;
    setOpenToast: (open: boolean) => void;
    status?: "success" | "failed";
    children: React.ReactNode;
}) => {
    useEffect(() => {
        let timer;
        if (openToast) {
            timer = setTimeout(() => {
                setOpenToast(false);
            }, 3000);
        }
        return () => clearTimeout(timer); // Clear timeout if component unmounts or openToast changes
    }, [openToast]);

    return (
        <Toast.Root className="ToastRoot" open={openToast} onOpenChange={setOpenToast}>
            {children}
            {status == "success" && <Box style={{ background: "#0ae448", height: "100%", width: "10px", marginLeft: "auto" }} />}
        </Toast.Root>
    );
};

export default ToastPopover;
