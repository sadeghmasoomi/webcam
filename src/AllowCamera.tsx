import { Button, Modal } from "antd";
import { useEffect, useRef, useState } from "react";

interface Props {
  open: boolean;
  setOpen: any;
  setImage: any;
}

export default function AllowCamera({ open, setOpen, setImage }: Props) {
  const videoRef = useRef<any>(null);
  const canvasRef = useRef<any>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [hasCameraAccess, setHasCameraAccess] = useState(false);

  useEffect(() => {
    startCamera();
  }, [open]);

  const startCamera = async () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setErrorMessage(
        "مرورگر شما از دسترسی به دوربین پشتیبانی نمی‌کند!!!....."
      );
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setHasCameraAccess(true);
      }
      //allow
    } catch (error) {
      console.error("Error accessing camera:", error); //don't allow
    }
  };

  const captureImage = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageDataURL = canvas.toDataURL("image/png");

    if (imageDataURL.length > 2000) {
      setImage(imageDataURL);
      setOpen(false);
    }
  };
  return (
    <Modal
      open={open}
      footer={
        <>
          <Button type="primary" onClick={captureImage}>
            Ok
          </Button>
          <Button type="primary" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            style={{ display: "none" }}
          />
          <canvas ref={canvasRef} style={{ display: "none" }} />
        </>
      }
    >
      <div>
        <h1>دسترسی به دوربین</h1>
        {hasCameraAccess ? (
          <div>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              style={{ width: "100%", maxWidth: "400px" }}
            />
            <p>دسترسی به دوربین با موفقیت انجام شد.</p>
          </div>
        ) : (
          <p>{errorMessage}</p>
        )}
      </div>
    </Modal>
  );
}
