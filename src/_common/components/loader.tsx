import { Box } from "@radix-ui/themes";
import React from "react";

const Loader = () => {
    return (
        <>
            <style>
                {`
                :root {
                    --duration: 1.5s;
                    --container-size: 250px;
                    --box-size: 33px;
                    --box-border-radius: 15%;
                }
                
                html, body {
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .container {
                    width: var(--container-size);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    position: relative;
                }

                .📦 {
                    width: var(--box-size);
                    height: var(--box-size);
                    position: relative;
                    display: block;
                    transform-origin: -50% center;
                    border-radius: var(--box-border-radius);
                }

                .📦:after {
                    content: '';
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    right: 0;
                    background-color: lightblue;
                    border-radius: var(--box-border-radius);
                    box-shadow: 0px 0px 10px 0px rgba(28, 159, 255, 0.4);
                }

                .📦:nth-child(1) {
                    animation: slide var(--duration) ease-in-out infinite alternate;
                }

                .📦:nth-child(1):after {
                    animation: color-change var(--duration) ease-in-out infinite alternate;
                }

                .📦:nth-child(2) {
                    animation: flip-1 var(--duration) ease-in-out infinite alternate;
                }

                .📦:nth-child(2):after {
                    background-color: #1C9FFF;
                    animation: squidge-1 var(--duration) ease-in-out infinite alternate;
                }

                .📦:nth-child(3) {
                    animation: flip-2 var(--duration) ease-in-out infinite alternate;
                }

                .📦:nth-child(3):after {
                    background-color: #1FB1FD;
                    animation: squidge-2 var(--duration) ease-in-out infinite alternate;
                }

                .📦:nth-child(4) {
                    animation: flip-3 var(--duration) ease-in-out infinite alternate;
                }

                .📦:nth-child(4):after {
                    background-color: #22C7FB;
                    animation: squidge-3 var(--duration) ease-in-out infinite alternate;
                }

                .📦:nth-child(5) {
                    animation: flip-4 var(--duration) ease-in-out infinite alternate;
                }

                .📦:nth-child(5):after {
                    background-color: #23D3FB;
                    animation: squidge-4 var(--duration) ease-in-out infinite alternate;
                }

                @keyframes slide {
                    0% { background-color: #1795FF; transform: translateX(0vw); }
                    100% { background-color: #23D3FB; transform: translateX(calc(var(--container-size) - (var(--box-size) * 1.25))); }
                }

                @keyframes color-change {
                    0% { background-color: #1795FF; }
                    100% { background-color: #23D3FB; }
                }

                @keyframes flip-1 {
                    0%, 15% { transform: rotate(0); }
                    35%, 100% { transform: rotate(-180deg); }
                }

                @keyframes squidge-1 {
                    5% { transform-origin: center bottom; transform: scaleX(1) scaleY(1); }
                    15% { transform-origin: center bottom; transform: scaleX(1.3) scaleY(0.7); }
                    25%, 20% { transform-origin: center bottom; transform: scaleX(0.8) scaleY(1.4); }
                    55%, 100% { transform-origin: center top; transform: scaleX(1) scaleY(1); }
                    40% { transform-origin: center top; transform: scaleX(1.3) scaleY(0.7); }
                }

                /* Repeat for flip-2 to flip-4 and squidge-2 to squidge-4, increasing percentages accordingly */
                `}
            </style>
            <Box className="container">
                <Box className="📦"></Box>
                <Box className="📦"></Box>
                <Box className="📦"></Box>
                <Box className="📦"></Box>
                <Box className="📦"></Box>
            </Box>
        </>
    );
};

export default Loader;
