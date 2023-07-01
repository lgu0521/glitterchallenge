import styled from "styled-components"
import Box from "../molecules/Box"
import ProgressBar from "../molecules/ProgressBar"
import { useQuery } from "react-query"
import createClientHttpInstance from "../axios.setting"
import { useState } from "react"
import Skeleton from "./ChallengeProgressSkeleton"

const ChallengeProgress = () => {
    const clientHttp = createClientHttpInstance();
    // 현재 진행률
    const [total, setTotal] = useState(0);
    const [progress, setProgress] = useState(0);
    const money = Number((30000 / 59).toFixed(2));

    const { isLoading, data } = useQuery(['my', 'statistics'], async () => {
        const res= await clientHttp.get(`/post/my/statistics`);
        if(res.status !== 200) alert(res.data.message);

        return res.data.body;
    });

    return (
        <Box css={{
            padding: "1.5rem 1rem 1rem",
            width: "100%",
            borderRadius: "1rem",
            background: "#FFFFFF"
        }}>
            <Head>
                <Title>진행률🏃‍♀️
                    {
                        isLoading ? <Skeleton width="20%" /> :
                            <Span>{Math.floor(((Number(data?.lemonOilImage) + Number(data?.proteinImage) + Number(data?.isExercise)) / 59) * 100)}%</Span>
                    }
                </Title>

                <Content>
                    {
                        isLoading ? <Skeleton /> :
                            (money * (Number(data?.lemonOilImage) + Number(data?.proteinImage) + Number(data?.isExercise))).toFixed(2)

                    }
                    원
                </Content>
            </Head>
            <Body>
                <ProgressBar percent={Math.floor(((Number(data?.lemonOilImage) + Number(data?.proteinImage) + Number(data?.isExercise)) / 59) * 100)} color="#FFD262" backgroundColor="#E5E5E5" />
            </Body>
        </Box>
    )
}

const Title = styled.h3`
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 150%;
    letter-spacing: -0.3px;
    color: #051B2C;
`

const Span = styled.span`
    font-weight: 400;
    font-size: 1.5rem;
    letter-spacing: -0.3px;
    color: #051B2C;
`

const Content = styled.h3`
    font-weight: 500;
    font-size: 1.5rem;
    letter-spacing: -0.3px;
    color: #95A1AC;
`

const Head = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Body = styled.div`
    margin-top: 0.5rem;
`

export default ChallengeProgress