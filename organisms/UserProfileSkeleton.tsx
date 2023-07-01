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

const SkeletonCardWrapper = styled.div<{ width: number | string, height: number | string, borderRadius?: number }>`
  width: ${props => typeof props.width === "number" ? props.width + "rem" : props.width};
  height: ${props => typeof props.height === "number" ? props.height + "rem" : props.height};
  background-color: #f0f0f0;
  border-radius: ${props => props.borderRadius ? props.borderRadius + "rem" : "2rem"};
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

const UserProfileSkeleton = () => {
  return (
    <Box css={{ width: "100%", padding: "1rem 2rem", background: "#ffffff" }}>
      <Box css={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        <Box css={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          width: "100%"
        }}>
          <div>
            <SkeletonCardWrapper width={3.5} height={3.5} borderRadius={50}>
              <SkeletonShimmer />
            </SkeletonCardWrapper>
          </div>
          <div style={{ width: "50%" }}>
            <SkeletonCardWrapper width="100%" height={1.2}>
              <SkeletonShimmer />
            </SkeletonCardWrapper>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default UserProfileSkeleton;
