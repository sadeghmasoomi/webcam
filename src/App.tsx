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
        <h1>are you allow camera?????</h1>
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
