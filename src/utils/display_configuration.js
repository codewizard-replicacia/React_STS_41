export const tripViewConfig = {
Details: [
  {
    key: "TripId",
    value: "TripId",
    type: "text",
    editable: false,
    required: true
  },
  {
    key: "StartTime",
    value: "StartTime",
    type: "date",
    editable: false,
    required: true
  },
],
Other: [

],
Type: [
    Route
    $entityTypesMap.get(Document)
    $entityTypesMap.get(Document).hasStream()
    org.apache.olingo.client.core.edm.xml.ClientCsdlEntityType@200606de
    false
    false
    {
      key: "TripRoute",
      value: "Route Name",
      type: "lookup",
      editable: true,
      required: true
    },
  ],
}
export const routeViewConfig = {
Details: [
  {
    key: "RouteId",
    value: "Id",
    type: "text",
    editable: false,
    required: true
  },
  {
    key: "From",
    value: "From",
    type: "date",
    editable: false,
    required: true
  },
  {
    key: "To",
    value: "To",
    type: "text",
    editable: false,
    required: true
  },
  {
    key: "RouteName",
    value: "Route Name",
    type: "text",
    editable: false,
    required: true
  },
],
Other: [

],
Type: [
    Document
    $entityTypesMap.get(Document)
    $entityTypesMap.get(Document).hasStream()
    org.apache.olingo.client.core.edm.xml.ClientCsdlEntityType@2ef8a8c3
    true
    true
  ],
}
