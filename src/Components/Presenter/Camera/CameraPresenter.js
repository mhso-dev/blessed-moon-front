import React, { useRef } from "react";
import styled from "styled-components";
import { useUserMedia } from "../../../Hooks/useUserMedia";
import { useUserDevices } from "../../../Hooks/useUserDevices";
import FaceFrame from "../Common/FaceFrame";
import CameraViewerWrapper from "../Common/CameraViewerWrapper";
import CameraIconWrapper from "../Common/CameraIconWrapper";
import adapter from "webrtc-adapter";

const Wrapper = styled.div`
  position: relative;
`;

const Title = styled.span`
  font-weight: 600;
  margin-top: 5px;
  z-index: 2;
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
  const cameraDevices = useUserDevices();

  const constraints = {
    audio: false,
    video: {
      deviceId: { exact: cameraDevices[0] },
    },
  };
  const mediaStream = useUserMedia(constraints);

  if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
    videoRef.current.srcObject = mediaStream;
  }

  function handleCanPlay() {
    videoRef.current.play();
    console.log("hi");
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
          autoplay
          muted
          playsinline
        />
      </CameraViewerWrapper>
    </Wrapper>
  );
};
