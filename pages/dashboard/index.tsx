import Content from "@components/Content";
import { useCallback } from "react";

const Dashboard = () => {
  const headerButtons = useCallback(() => {
    return (
      <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
        Sample
      </button>
    );
  }, []);

  return (
    <Content title="Dashboard" leftContent={headerButtons}>
      <div className="w-screen">Dashboard</div>
    </Content>
  );
};

export default Dashboard;
