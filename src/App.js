import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import {
  View,
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  SplitLayout,
  SplitCol,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import Home from "./panels/Home";
import Persik from "./panels/Persik";
import Empty from './panels/Empty'

const App = () => {
  const [activePanel, setActivePanel] = useState("home");
  const [fetchedUser] = useState(null);

  const go = React.useCallback((e) => {
    setActivePanel(e);
  }, []);

  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout >
            <SplitCol>
              <View activePanel={activePanel}>
				<Empty id="empty" go={go} />
                <Home id="home" fetchedUser={fetchedUser} go={go} />
                <Persik id="persik" go={go} />
              </View>
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default App;
