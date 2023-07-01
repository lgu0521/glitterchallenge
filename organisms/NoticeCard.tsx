import styled from "styled-components";
import Box from "../molecules/Box";

const NoticeCard = () => {
    return (
        <Box css={{
            background: "#FFE4E4",
            padding: "1.5rem 2.4rem",
            width: "100%"
        }}>
            <Box css={{
                display: "flex",
                alignItems: "center",
                gap: "1rem"
            }}>
                <TypographyH5>
                    📣 공지사항
                </TypographyH5>
                <TypographyP>
                    글리어터 인증방법 확인하기
                </TypographyP>
            </Box>
        </Box>
    )
};


const TypographyH5 = styled.h5`
    color: #051B2C;
    font-size: 1.6rem;
    font-weight: 700;
    letter-spacing: -0.3;
`
const TypographyP = styled.p`
    color: #051B2C;
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: -0.3;
`
export default NoticeCard