import styled from "styled-components"
import HomeIcon from '../assets/icons/home.svg'
import NewRedPostIcon from '../assets/icons/new-post_red.svg'
import NewGrayPostIcon from '../assets/icons/new-post_gray.svg'
import Link from "next/link"
import Box from "../molecules/Box"
import { useRouter } from "next/router"

const BottomNavigation = () => {
    const router = useRouter();

    return (
        <Wrap>
            <Container>
                <Link href="/">
                    <Box css={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
                        <HomeIcon fill={"/" === router.pathname ? "#FE4C40" : "#95A1AC"} />
                        <Label style={{ color: "/" === router.pathname ? "#FE4C40" : "#95A1AC" }}>홈</Label>
                    </Box>
                </Link>
                <Link href="/my-page">
                    <Box css={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
                        {
                            "/my-page" === router.pathname ? <NewRedPostIcon /> : <NewGrayPostIcon />}
                        <Label style={{ color: "/my-page" === router.pathname ? "#FE4C40" : "#95A1AC" }}>인증하기</Label>
                    </Box>
                </Link>
            </Container>
        </Wrap>
    )
}

const Wrap = styled.div`
    width : 100%;
    border-top : 1px solid #DDE1E4;
`

const Container = styled.div`
    width : 100%;
    height : 8rem;
    background : #fff;
    display : flex;
    align-items: center;
    justify-content: center;
    gap: 7rem;
`
const Label = styled.label`
    color: #FE4C40
    text-align: center;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.6rem;
    letter-spacing: -0.3;
`
export default BottomNavigation