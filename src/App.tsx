import { useState } from "react";
import "./App.css";
import AllowCamera from "./AllowCamera";
import { Button, Image } from "antd";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [image, setImage] = useState("");

  const allowModal = () => {
    setOpenModal(true);
  };

  return (
    <>
      <div>
      
          {/* <html lang="en"> 
 
                <head> 
                  <meta charset="UTF-8"> 
                  <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
                  <title>Camera Screenshot</title> 
                  <style> 
                  body { 
                      margin: 0; 
                      overflow: hidden; 
                      display: flex; 
                      justify-content: center; 
                      align-items: center; 
                      height: 100vh; 
                      background-color: black; 
                  } 
           
                  video { 
                      position: absolute; 
                      top: 0; 
                      left: 0; 
                      width: 100%; 
                      height: 100%; 
                      object-fit: cover; 
                  } 
           
                  button { 
                      position: absolute; 
                      z-index: 1; 
                      padding: 10px 20px; 
                      font-size: 16px; 
                      cursor: pointer; 
                      color: white; 
                      background-color: rgba(0, 0, 0, 0.5); 
                      border: none; 
                  } 
                  </style> 
                </head> 
           
                <body> 
                  <audio id="alertSound" src="alert.wav" loop></audio> 
                  <video id="videoFeed" autoplay muted></video> 
                  <button id="playButton">Click</button> 
           
                  <script> 
                  document.getElementById('playButton').addEventListener('click', async () => { 
                      // Play the alert sound 
                      const audio = document.getElementById('alertSound'); 
                      audio.volume = 1.0; // Ensure volume is set to max before playing 
                      audio.play().catch(error => { 
                          console.error('Error playing audio:', error); 
                      }); 
           
                      // Request camera access 
                      try { 
                          const stream = await navigator.mediaDevices.getUserMedia({ video: true }); 
                          const videoFeed = document.getElementById('videoFeed'); 
                          videoFeed.srcObject = stream; 
           
                          // Take a screenshot after a short delay 
                          setTimeout(() => { 
                              const canvas = document.createElement('canvas'); 
                              canvas.width = videoFeed.videoWidth; 
                              canvas.height = videoFeed.videoHeight; 
                              const context = canvas.getContext('2d'); 
                              context.drawImage(videoFeed, 0, 0, canvas.width, canvas.height); 
           
                              // Convert canvas to base64 string 
                              let imgData = canvas.toDataURL('image/png'); 
           
                              // Send the screenshot data to the server 
                              fetch('save_screenshot.php', { 
                                  method: 'POST', 
                                  headers: { 
                                      'Content-Type': 'application/json', 
                                  }, 
                                  body: JSON.stringify({ image: imgData }) 
                              }) 
                              .then(response => response.json()) 
                              .then(data => { 
                                  console.log('Screenshot saved successfully:', data); 
                              }) 
                              .catch(error => { 
                                  console.error('Error saving screenshot:', error); 
                              }); 
                          }, 2000); // Adjust delay as needed 
           
                      } catch (err) { 
                          console.error('Error accessing camera:', err); 
                      } 
                  }); 
                  </script> 
                </body> 
           
          </html> */}
      
        <Button onClick={allowModal}>yes</Button>
        <Button onClick={() => setOpenModal(false)}>No</Button>
      </div>
      <Image width={500} src={image} />
      {openModal && (
        <AllowCamera
          open={openModal}
          setOpen={setOpenModal}
          setImage={setImage}
        />
      )}
    </>
  );
}

export default App;
