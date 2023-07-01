import { type } from 'os';
import React from 'react';
import styled, { keyframes } from 'styled-components';
import Box from '../molecules/Box';

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

const SkeletonCardWrapper = styled.div<{ width: number | string, height: number | string }>`
  width: ${props => typeof props.width === "number" ? props.width + "rem" : props.width};
  height: ${props => typeof props.height === "number" ? props.height + "rem" : props.height};
  background-color: #f0f0f0;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
`;

const SkeletonShimmer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #f0f0f0 8%, #e0e0e0 18%, #f0f0f0 33%);
  background-size: 800px 104px;
  animation: ${shimmer} 1s infinite linear;
`;

const PostSinglePreviewSkeleton = () => {
  return (
    <Box css={{
      display: "flex",
      flexDirection: "column",
      gap: "1.2rem"
    }}>
      <SkeletonCardWrapper width="100%" height={20}>
        <SkeletonShimmer />
      </SkeletonCardWrapper>
      <SkeletonCardWrapper width="100%" height={1.2}>
        <SkeletonShimmer />
      </SkeletonCardWrapper>
      <SkeletonCardWrapper width="100%" height={1.2}>
        <SkeletonShimmer />
      </SkeletonCardWrapper>
    </Box>
  );
};

export default PostSinglePreviewSkeleton;
