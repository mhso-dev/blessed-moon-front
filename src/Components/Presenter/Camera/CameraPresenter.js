import React, { useRef } from "react";
import styled from "styled-components";
import { useUserMedia } from "../../../Hooks/useUserMedia";

const CAPTURE_OPTIONS = {
  audio: false,
  video: { facingMode: "environment" },
};

const Wrapper = styled.div`
  position: relative;
`;

const Title = styled.span`
  font-weight: 600;
  margin-top: 5px;
  z-index: 2;
`;
const CameraIconWrapper = styled.div`
  background-color: rgba(150, 150, 150, 0.8);
  height: 20vh;
  width: 100%;
`;

const FaceFrame = styled.div`
  max-width: 768px;
  width: 100%;
  height: 80vh;
  box-shadow: inset 0px 0px 0px 20px rgba(253, 121, 168, 0.5);
  position: absolute;
  z-index: 1;
`;

const CameraViewerWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  height: 100vh;
`;
const Camera = styled.video`
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  /* Center the video */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
`;

export default () => {
  const videoRef = useRef();
  const mediaStream = useUserMedia(CAPTURE_OPTIONS);

  if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
    videoRef.current.srcObject = mediaStream;
  }

  function handleCanPlay() {
    videoRef.current.play();
  }

  return (
    <Wrapper>
      <CameraViewerWrapper>
        <Title>Blessed Moon</Title>
        <FaceFrame></FaceFrame>
        <CameraIconWrapper>Menu Here!</CameraIconWrapper>
        <Camera
          ref={videoRef}
          onCanPlay={handleCanPlay}
          autoPlay
          playsInline
          muted
        />
      </CameraViewerWrapper>
    </Wrapper>
  );
};
