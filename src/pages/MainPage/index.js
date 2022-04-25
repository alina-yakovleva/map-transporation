import { DeleteOutlined } from "@ant-design/icons";
import { Button, Layout, List, Typography } from "antd";
import { Resizable } from "re-resizable";

import { useDispatch, useSelector } from "react-redux";
import Map from "../../components/Map";
import {
  addApp,
  removeApp,
  setSelected,
  updateWaypoint,
} from "../../store/actions";

const MainPage = () => {
  const applications = useSelector((state) => state.apps);
  const selected = useSelector((state) => state.selected);
  const dispatch = useDispatch();

  const onChange = (waypoint, index) => {
    dispatch(updateWaypoint(waypoint, index));
  };

  const onAdd = () => {
    const newObj = {
      id: Date.now(),
      name: "Заявка" + Math.floor(Math.random() * 101),
      waypoints: [
        [52.751244, 37.618423],
        [59.753444, 45.618423],
      ],
    };
    dispatch(addApp(newObj));
  };

  const onRemove = (id, e) => {
    e.stopPropagation();
    dispatch(removeApp(id));
  };

  return (
    <Layout hasSider>
      <div className="ant-layout-sider ant-layout-sider-dark">
        <div className="ant-layout-sider-children">
          <Resizable
            minWidth={250}
            maxWidth={500}
            enable={{
              top: false,
              right: true,
              bottom: false,
              left: false,
              topRight: false,
              bottomRight: false,
              bottomLeft: false,
              topLeft: false,
            }}
          >
            <List
              style={{ background: "white", height: "100vh", fontSize: "20px" }}
              size="small"
              header={<div>Заявки на перевозку</div>}
              footer={
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    onClick={onAdd}
                    style={{ fontSize: "15px" }}
                    type="primary"
                  >
                    Добавить заявку
                  </Button>
                </div>
              }
              bordered
              dataSource={applications}
              renderItem={(application) => (
                <List.Item
                  style={{ display: "flex", justifyContent: "space-between" }}
                  className={selected?.id === application.id ? "active" : null}
                  onClick={() => dispatch(setSelected(application))}
                >
                  {application.name}
                  <Button
                    onClick={(e) => onRemove(application.id, e)}
                    icon={<DeleteOutlined />}
                  ></Button>
                </List.Item>
              )}
            />
          </Resizable>
        </div>
      </div>
      <Layout.Content>
        {selected ? (
          <Map waypoints={selected?.waypoints} onChange={onChange} />
        ) : (
          <div className="empty-selected">
            <Typography.Title>Выберите заявку</Typography.Title>
          </div>
        )}
      </Layout.Content>
    </Layout>
  );
};
export default MainPage;
