import Box from "../molecules/Box";
import Image from "next/image";
import styled from "styled-components";
import useDetailDate from "../hooks/useDetailDate";

type Props = {
    lemonOilImage: string;
    proteinImage: string;
    name: string;
    content: string;
    createdAt: string;
    updatedAt: string;
}

const PostSinglePreview = ({
    lemonOilImage,
    proteinImage,
    name,
    content,
    updatedAt
}: Props) => {
    const { getPostDate } = useDetailDate();
    const date = getPostDate(new Date(updatedAt));

    return (
        <Box css={{ width: "100%" }}>
            <Box css={{
                display: "flex",
                flexDirection: "column",
                gap: "1.2rem"
            }}>
                <Container>
                    <Box css={{
                        position: "relative",
                        width: "100%",
                        height: "24rem",
                        overflow: "hidden",
                        borderRadius: "2rem",
                        flex: "0 0 auto"
                    }}>
                        <Image
                            src={`${process.env.NEXT_PUBLIC_API_URL}/storage/` + lemonOilImage}
                            style={{ objectFit: "cover" }}
                            alt={`${name}님의 게시글 이미지 ${lemonOilImage}`}
                            fill />
                    </Box>

                    {
                        proteinImage && (
                            <Box css={{
                                position: "relative",
                                width: "90%",
                                height: "24rem",
                                overflow: "hidden",
                                borderRadius: "2rem",
                                flex: "0 0 auto"
                            }}>
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_API_URL}/storage/` + proteinImage}
                                    style={{ objectFit: "cover" }}
                                    alt={`${name}님의 게시글 이미지 ${proteinImage}`}
                                    fill />
                            </Box>
                        )
                    }
                </Container>
                <Box css={{
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "center",
                    padding: "0 2.4rem"
                }}>
                    <Author>
                        {name}
                    </Author>
                    <CreatedAt>
                        {date}
                    </CreatedAt>
                </Box>
                {
                    content &&
                    <Content style={{ padding: "0 2.4rem" }}>
                        {content.split('\n').map((line, key) => {
                            return (<span key={key}>{line}<br /></span>)
                        })}
                    </Content>
                }
            </Box>
        </Box>
    )
}

const Container = styled.div`
    display: flex;
    gap: 1.2rem;
    flex-wrap: nowrap;
    overflow-x: auto;
    // 스크롤 숨기기
    scrollbar-width: none;
    padding: 0 2.4rem;
    &::-webkit-scrollbar {
        width :0px;
        heihgt: 0px;
        display: none; // Chrome 및 Safari용
    }           
`

const Content = styled.p`
    font-weight: 400;
    letter-spacing: -0.3;
    color: #646D74;
    font-size: 1.5rem;
    line-height: 150%;
`

const Author = styled.h4`
    font-weight: 600;
    font-size: 1.6rem;
    letter-spacing: -0.3;
    color: #051B2C;
`

const CreatedAt = styled.p`
    font-weight: 400;
    font-size: 1.4rem;
    letter-spacing: -0.3;
    color: #051B2C;
`

export default PostSinglePreview;