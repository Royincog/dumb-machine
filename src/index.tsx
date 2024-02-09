import { FireCMSAppConfig } from "firecms";
//import { SampleEntityView } from "./entity_views/SampleEntityView";
import { dumbblogcollection } from "./collections/dumbblog";

const appConfig: FireCMSAppConfig = {
  version: "1",
  collections: [dumbblogcollection],
//   propertyConfigs: [
//     {
//       name: "String with color",
//       key: "color",
//       property: {
//         dataType: "string",
//         name: "Main color",
//         Preview: ({ value }) => {
//           return (
//             <div
//               style={{
//                 width: 20,
//                 height: 20,
//                 backgroundColor: value,
//                 borderRadius: "4px",
//               }}
//             />
//           );
//         },
//       },
//     },
//   ],
  //Disabling Entity Views
  /* entityViews: [
    {
      key: "sample_entity_view",
      name: "Sample entity view",
      Builder: SampleEntityView,
    },
  ],*/
};

export default appConfig;
