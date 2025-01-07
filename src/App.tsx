import { useEffect, useState } from "react";
import "./App.css";
import AllowCamera from "./AllowCamera";
import {
  UserOutlined,
  ArrowLeftOutlined,
  MoreOutlined,
  AppstoreOutlined,
  PlaySquareOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Col,
  Image,
  Layout,
  Row,
  Space,
  Typography,
} from "antd";
const { Text } = Typography;

const headerStyle = {
  display: "flex",
  alignItems: "center",
  padding: " 1vw 6vw",
};
const profileStyle = {
  display: "flex",
  padding: " 1vw 6vw",
};
const numbersStyle = {
  display: "flex",
  alignItems: "center",
  rowGap: 1,
};
const storiesStyle = {
  display: "flex",
  alignItems: "center",
  padding: "6vw 1vw",
  gap: "20px",
};
const sectionsStyle = {
  display: "flex",
  justifyContent: "center",
  height: "40px",
  fontSize: "25px",
};

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [image, setImage] = useState("");
  const [ip, setIP] = useState("");

  const getData = async () => {
    // const res = await axios.get("https://api.ipify.org/?format=json");
    // console.log(res.data);
    // setIP(res.data.ip);
  };
  useEffect(() => {
    // console.log("browserVersion", mobileModel);
    //passing getData method to the lifecycle method
    setOpenModal(true);
    getData();
  }, []);

  return (
    <>
      <div>
        <Layout className="app-container">
          <div style={{ backgroundColor: "#000", color: "white" }}>
            <Row style={headerStyle}>
              <Col style={{ alignItems: "right" }} flex={1}>
                <ArrowLeftOutlined />
              </Col>
              <Col flex={3}>
                <h3>User Name</h3>
              </Col>
              <Col flex={1}>
                <MoreOutlined />
              </Col>
            </Row>
            <Row style={profileStyle}>
              <Col flex={3}>
                <Avatar
                  style={{ backgroundColor: "#EEE" }}
                  size={75}
                  icon={<UserOutlined />}
                />
              </Col>
              <Col flex={2}>
                <Space direction="vertical" style={numbersStyle}>
                  <Text style={{ color: "white" }} strong>
                    50
                  </Text>
                  <Text style={{ color: "white" }}>posts</Text>
                </Space>
              </Col>
              <Col flex={2}>
                <Space direction="vertical" style={numbersStyle}>
                  <Text style={{ color: "white" }} strong>
                    321
                  </Text>
                  <Text style={{ color: "white" }}>followers</Text>
                </Space>
              </Col>
              <Col flex={2}>
                <Space direction="vertical" style={numbersStyle}>
                  <Text style={{ color: "white" }} strong>
                    123
                  </Text>
                  <Text style={{ color: "white" }}>following</Text>
                </Space>
              </Col>
            </Row>
            <Space direction="vertical">
              <Text style={{ color: "white" }} strong>
                User Name
              </Text>
              <h2>Your IP Address is</h2>
              <h4>{ip}</h4>
              <Text style={{ color: "white" }}>
                description: sfhsfsfs sfjskfsdkjsdd sfhskjhdkg skfjs jfkshw
                sfhsk hskj sfdjsdglhglsdgdsdlfgsk jdskdjskjghsdkjghdskjsdg
                sfjsdgkjsdhkjsdhkdjsdh
              </Text>
            </Space>
            <Row>
              <Col span={10}>
                <Button
                  style={{ width: "95%", marginLeft: "4px" }}
                  type="primary"
                >
                  Follow
                </Button>
              </Col>
              <Col span={10}>
                <Button style={{ width: "95%", margin: "0 4px" }}>
                  Message
                </Button>
              </Col>
              <Col span={4}>
                <Button style={{ width: "95%", marginRight: "4px" }}>
                  +<UserOutlined />
                </Button>
              </Col>
            </Row>
            <Row style={storiesStyle}>
              <Avatar style={{ backgroundColor: "#EEE" }} size={70} />
              <Avatar style={{ backgroundColor: "#EEE" }} size={70} />
              <Avatar style={{ backgroundColor: "#EEE" }} size={70} />
              <Avatar style={{ backgroundColor: "#EEE" }} size={70} />
            </Row>
            <Row>
              <Col style={sectionsStyle} flex={3}>
                <AppstoreOutlined />
              </Col>
              <Col style={sectionsStyle} flex={3}>
                <PlaySquareOutlined />
              </Col>
              <Col style={sectionsStyle} flex={3}>
                <UserOutlined />
              </Col>
            </Row>
          </div>
          <Row>
            <Col span={8}>
              <Image height={150} width={"100%"} />
            </Col>
            <Col span={8}>
              <Image height={150} width={"100%"} />
            </Col>
            <Col span={8}>
              <Image height={150} width={"100%"} />
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <Image height={150} width={"100%"} />
            </Col>
            <Col span={8}>
              <Image height={150} width={"100%"} />
            </Col>
            <Col span={8}>
              <Image height={150} width={"100%"} />
            </Col>
          </Row>
        </Layout>
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
