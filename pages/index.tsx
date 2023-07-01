import styled from 'styled-components';
import type { NextPageWithLayout } from './_app'
import DefaultLayout from '../templates/DefaultLayout';
import { ReactElement, lazy } from 'react';

const NoticeCard = lazy(
  () => import('../organisms/NoticeCard'),
);
const PostList = lazy(
  () => import('../organisms/PostList'),
);

const Main: NextPageWithLayout = () => {
  return (
    <Wrap>
      <Container>
        <NoticeCard />
        <PostList />
      </Container>
    </Wrap>
  )
}

Main.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  )
}

const Container = styled.div`
  width: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
  width : 0px;
  height: 0px;
}
`
const Wrap = styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
  background: #F8F9FA;
  height :100%;
  width : 100%;
`

export default Main
