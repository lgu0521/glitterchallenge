import Box from "../molecules/Box";
import Image from "next/image";
import { useQuery } from "react-query";
import styled from "styled-components";
import createClientHttpInstance from "../axios.setting";
import UserProfileSkeleton from "./UserProfileSkeleton";

const UserProfile = () => {
    const clientHttp = createClientHttpInstance();

    const { data: user, isLoading } = useQuery("user", async () => {
        const res = await clientHttp.get(`/user`);
        if (res.status !== 200) {
            alert(res.data.message)
        }

        return res.data.body;
    }, {
        staleTime: Infinity
    });

    if (isLoading) return (
        <UserProfileSkeleton />
    )

    return (
        <Box css={{ width: "100%", padding: "1rem 2rem", background: "#ffffff" }}>
            <Box css={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                <Box css={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem"
                }}>
                    <ProfileImage>
                        <Image src={user?.profileUrl} alt={`${user?.name} 프로필 사진`} width={35} height={35} />
                    </ProfileImage>
                    <UserName>
                        {user?.name}님 글리어터 1기
                    </UserName>
                </Box>
                {/* <SettingIcon width="2.4rem" height="2.4rem" viewBox="0 0 24 24" /> */}
            </Box>
        </Box>
    )
}

const ProfileImage = styled.div`
    img {
        border-radius : 50%;
        object-fit : cover;
    }
`

const UserName = styled.h5`
    font-weight: 700;
    font-size: 1.8rem;
    letter-spacing: -0.3px;
    color: #051B2C;
`

export default UserProfile;