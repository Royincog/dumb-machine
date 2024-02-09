import React from "react"
import { FireCMSApp } from "firecms";
import appConfig from "./index";

function App() {
    return <FireCMSApp
        projectId={"rajarshi-roy-chknf"}
        appConfig={appConfig}
    />;
}

export default App
