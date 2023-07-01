import { lazy } from "react";
import Box from "../molecules/Box";

interface LayoutProps {
    children: React.ReactNode;
}

const BottomNavigation = lazy(
    () => import('../organisms/BottomNavigation'),
);
const UserProfile = lazy(
    () => import('../organisms/UserProfile'),
);

export default function DefaultLayout({ children }: LayoutProps) {
    return (
        <Box css={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            overflow: "hidden",
        }}>
            <UserProfile />
            <Box css={{
                width: "100%",
                height: "100%",
                overflowY: "scroll",
                overflowX: "hidden",
            }}>
                <main>{children}</main>
            </Box>
            <BottomNavigation />
        </Box>
    );
}


