import styled from 'styled-components';
import Box from '../molecules/Box';
import { NextPageWithLayout } from './_app';
import DefaultLayout from '../templates/DefaultLayout';
import { ReactElement, lazy } from 'react';

const ChallengeProgress = lazy(
  () => import('../organisms/ChallengeProgress'),
);
const ChallengeButton = lazy(
  () => import('../organisms/ChallengeButton'),
);

const MyPage: NextPageWithLayout = () => {
  return (
    <Wrap>
      <Box css={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        width: "100%",
        padding: '1.5rem  2rem 1.7rem',
      }}>
        <ChallengeProgress />
        <ChallengeButton />
        
      </Box>
    </Wrap>
  )
}

MyPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  )
}
const Wrap = styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
  background: #F8F9FA;
  height :100%;
  width : 100%;
`

export default MyPage