import styled from 'styled-components';
import LeftIcon from '../assets/icons/mingcute_left.svg';
import Box from '../molecules/Box';
import Link from 'next/link';

const PageHeader = () => {
    return (
        <Box css={{
            width: "100%",
            padding: "1rem 2rem",
            background: "#ffffff"
        }}>
            <Box css={{
                display: "flex",
                alignItems: "center",
                gap: "1rem"
            }}>
                <Link href="/">
                    <LeftIcon width="2.4rem" height="2.4rem" viewBox="0 0 24 24" />
                </Link>
                <Title>
                    게시글 작성
                </Title>
            </Box>
        </Box>
    )
}

const Title = styled.h5`
    font-weight: 700;
    font-size: 1.8rem;
    letter-spacing: -0.3;
    color: #051B2C;
`
export default PageHeader