import Box from "../molecules/Box";
import SmileIcon from "../assets/icons/smile.svg"
import styled from "styled-components";
import Link from "next/link";
import createClientHttpInstance from "../axios.setting";
import { useQuery } from "react-query";

const ChallengeButton = () => {
    const clientHttp = createClientHttpInstance();

    const { data } = useQuery(["my", "today"], async () => {
        const res = await clientHttp.get("/post/today")

        if (res.status !== 200) alert(res.data.message);

        return res.data.body;
    });

    return (
        <Box css={{
            padding: "1.5rem 0 1rem",
            width: "100%",
            borderRadius: "2rem",
            background: "#FFFFFF"
        }}>
            <Box css={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignItems: "center"
            }}>

                {
                    !data ? (
                        <>
                            <SmileIcon width="4rem" height="4rem" viewBox="0 0 40 40" />
                            <Title>
                                오늘의 챌린지를 올려주세요!
                            </Title>
                            <StyledLink href="post-new">
                                인증하기
                            </StyledLink>
                        </>
                    ) : (
                        <>
                            <SmileIcon width="4rem" height="4rem" viewBox="0 0 40 40" />
                            <Title>
                                챌린지를 올렸어요!
                            </Title>
                        </>
                    )

                }
            </Box>
        </Box>
    )
}

const Title = styled.h5`
    font-weight: 500;
    font-size: 1.4rem;
    text-align: center;
    letter-spacing: -0.3px;
    color: #051B2C;
`

const StyledLink = styled(Link)`
    display: flex;
    padding: 0.5rem 1rem;
    background: #FE4C40;
    border-radius: 1rem;

    font-weight: 600;
    font-size: 1.5rem;
    line-height: 150%;
    letter-spacing: -0.3;
    color: #FFFFFF;
    border: none;
    cursor: pointer;
`

export default ChallengeButton;