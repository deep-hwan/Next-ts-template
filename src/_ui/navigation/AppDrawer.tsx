/** @jsxImportSource @emotion/react */
import { ForwardedRef, ReactNode, forwardRef, useCallback, useEffect, useRef } from "react";
import { BlurLayer } from "../index";

// --------------------------------------------
// -------------- Type Interface --------------
// --------------------------------------------
interface Props {
    open: boolean;
    onCancel: () => void;
    cancelTabIconActive?: boolean;
    children: ReactNode;
    backgroundColor?: string;
    cancelIconColor?: string;
}

// ---------------------------------------
// -------------- AppDrawer --------------
// ---------------------------------------
export const AppDrawer = forwardRef((props: Props, ref?: ForwardedRef<HTMLDivElement>) => {
    const { open, onCancel, cancelTabIconActive = true, cancelIconColor } = props;
    const drawerRef = useRef<HTMLDivElement>(null);

    const clickModalOutside = useCallback(
        (event: MouseEvent) => {
            if (open && drawerRef.current && !drawerRef.current.contains(event.target as Node)) onCancel();
        },
        [open, onCancel, drawerRef],
    );

    useEffect(() => {
        drawerRef.current?.scrollTo(0, 0);

        if (open) document.body.style.overflowY = "hidden";
        else document.body.style.overflowY = "auto";

        document.addEventListener("mousedown", clickModalOutside);
        return () => document.removeEventListener("mousedown", clickModalOutside);
    });

    return (
        <>
            {open && <BlurLayer zIndex={1999} />}

            <div
                ref={drawerRef}
                css={{
                    zIndex: 2000,
                    width: "100%",
                    maxWidth: 320,
                    position: "fixed",
                    top: 0,
                    bottom: 0,
                    right: open ? "0" : "-100%",
                    background:
                        props.backgroundColor ??
                        `linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.9) 100%);`,
                    backdropFilter: "blur(4px)",
                    paddingRight: `max(0px, env(safe-area-inset-right))`,
                    transition: "0.3s ease-in-out",
                }}
            >
                <div
                    css={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "end",
                        padding: "14px 14px 6px",
                    }}
                >
                    {cancelTabIconActive ? (
                        <button type="button" onClick={() => onCancel()} css={{ padding: 5 }}>
                            {CancelIcon({ fill: cancelIconColor ?? "#ccc" })}
                        </button>
                    ) : (
                        ""
                    )}
                </div>

                <div
                    ref={ref}
                    css={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        flexWrap: "nowrap",
                        zIndex: 10,
                        overflowY: "auto",
                        "::-webkit-scrollbar": { display: "none" },
                    }}
                >
                    {props.children}
                </div>
            </div>
        </>
    );
});

const CancelIcon = ({ fill }: { fill: string }) => {
    return (
        <svg width="22" height="22" viewBox="0 0 26 26">
            <path
                id="xIcon"
                d="M26.334,7.95a13,13,0,1,0,0,18.384,13,13,0,0,0,0-18.384M19.761,21.286l-2.619-2.619-2.621,2.621A1.079,1.079,0,0,1,13,19.761l2.621-2.621L13,14.525A1.079,1.079,0,0,1,14.526,13l2.616,2.617L19.758,13a1.076,1.076,0,0,1,1.522,1.522l-2.616,2.616,2.621,2.619-.23.23.23-.23a1.079,1.079,0,0,1-1.526,1.526"
                transform="translate(-4.141 -4.142)"
                fill={fill}
            />
        </svg>
    );
};
