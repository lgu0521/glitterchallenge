import styled from "styled-components";
import Box from "../molecules/Box";
import PostSinglePreview from "./PostSinglePreview";
import { useInfiniteQuery } from "react-query";
import { useEffect, useRef } from "react";
import createClientHttpInstance from "../axios.setting";
import PostSinglePreviewSkeleton from "./PostSinglePreviewSkeleton";

const PostList = () => {
    const clientHttp = createClientHttpInstance();
    const ref = useRef<HTMLDivElement>(null);

    const fetchProjects = async ({ pageParam = 0 }) => {
        const res = await clientHttp.get(`${process.env.NEXT_PUBLIC_API_URL}/post?limit=15&offset=${pageParam}`);
        if(res.status !== 200){
            alert(res.data.message)
        }

        const body = res.data.body;

        if (body.items.length === 0) return {
            data: [],
            nextCursor: undefined
        }

        return {
            data: body.items,
            nextCursor: body.nextCursor
        }
    }

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isLoading,
        isFetchingNextPage
    } = useInfiniteQuery({
        queryKey: ['post', 'list'],
        queryFn: fetchProjects,
        getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
        // 5분 동안 캐시를 유지한다.
        staleTime: 1000 * 60 * 5,
    })

    useEffect(() => {
        if (!ref.current) return;
        if (!hasNextPage) return;

        const io = new IntersectionObserver((entries, observer) => {
            if (entries[0].isIntersecting) {
                fetchNextPage();
            }
        });

        io.observe(ref.current);

        return () => {
            io.disconnect();
        };

    }, [fetchNextPage, hasNextPage]);

    return (
        <Box css={{
            width: "100%",
            height: "100%",
            padding: "2rem 0",
            background: "#FFFFFF"
        }}>
            <Box css={{
                display: "flex",
                flexDirection: "column",
                gap: "5rem",
                width: "100%"
            }}>
                {
                    isLoading ?
                        <>
                            <PostSinglePreviewSkeleton />
                            <PostSinglePreviewSkeleton />
                            <PostSinglePreviewSkeleton />
                        </>
                        : data ? data.pages.map((group) => {
                            return group.data?.map((item: any, key: number) => (
                                <PostSinglePreview key={key} {...item} />
                            ))
                        }) :
                            <Box css={{ width: "100%", height: "100%", textAlign: "center", marginTop: "40%" }}>
                                게시글이 없어요
                            </Box>
                }
                {
                    isFetchingNextPage && <p>데이터 불러오는 중</p>
                }
                <div style={{ padding: "1px" }} ref={ref} />
            </Box>
        </Box>
    )
}

const Title = styled.h3`
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 18px;
    letter-spacing: -0.3;
    color: #000000;
`

export default PostList;