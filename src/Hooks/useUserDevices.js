import { useState, useEffect } from "react";
import produce from "immer";
export function useUserDevices() {
  const [cameraDevices, setCameraDevices] = useState([]);

  useEffect(() => {
    async function enableCameras() {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();

        devices.forEach((device) => {
          if (device.kind === "videoinput") {
            setCameraDevices(produce((draft) => draft.concat(device.groupId)));
          }
        });
      } catch (err) {
        // Removed for brevity
        console.log(err);
      }
    }

    if (cameraDevices.length === 0) {
      console.log("camera enable");
      enableCameras();
    } else {
      console.log("hello");
    }
  }, [cameraDevices]);

  return cameraDevices;
}
