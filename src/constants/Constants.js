//Take to redux
export const DragDropData = {
  parent: {},
  key: "",
  value: {}
};

export const Data = {
  HeaderText: "XML Editor",
  HeaderSubText: "© CodeDestine.com",
  TreeView: "TreeView",
  TextView: "TextView",
  FileName: "File.xml"
};

export const Type = {
  Element: "Element",
  Text: "Text"
};

export const MenusData = ["Json Editor", "Save Online", "Help"];

export const Default = {
  ElementName: "New_Element",
  TextName: "New_Text",
  MaxTagLength: 50,
  Tab: "  ",
  XML: {
    note: {
      type: Type.Element,
      expand: true,

      elements: [
        {
          to: {
            type: Type.Element,
            expand: true,
            attributes: {
              name: "value",
              height: 1
            },
            elements: [
              { tove: { type: Type.Text, expand: true, cdata: false } }
            ]
          }
        },
        {
          from: {
            type: Type.Element,
            expand: true,
            attributes: {
              name: "value",
              height: 1
            },
            elements: [
              { Jani: { type: Type.Text, expand: true, cdata: false } }
            ]
          }
        },
        {
          heading: {
            type: Type.Element,
            expand: true,
            attributes: {
              name: "value",
              height: 1
            },
            elements: [
              { Remainder: { type: Type.Text, expand: true, cdata: false } }
            ]
          }
        },
        {
          heading: {
            type: Type.Element,
            expand: true,
            attributes: {
              name: "value",
              height: 1
            },
            elements: [
              {
                "Don't forget me this weekend!": {
                  type: Type.Text,
                  expand: true,
                  cdata: false
                }
              },
              {
                "Don't forget me this weekend!": {
                  type: Type.Text,
                  expand: true,
                  cdata: false
                }
              },
              {
                "Don't forget me this weekend!": {
                  type: Type.Text,
                  expand: true,
                  cdata: false
                }
              },
              {
                "Don't forget me this weekend!": {
                  type: Type.Text,
                  expand: true,
                  cdata: false
                }
              },
              {
                "Don't forget me this weekend!": {
                  type: Type.Text,
                  expand: true,
                  cdata: false
                }
              },
              {
                "Don't forget me this weekend!": {
                  type: Type.Text,
                  expand: true,
                  cdata: false
                }
              },
              {
                "Don't forget me this weekend!": {
                  type: Type.Text,
                  expand: true,
                  cdata: false
                }
              },
              {
                "Don't forget me this weekend!": {
                  type: Type.Text,
                  expand: true,
                  cdata: false
                }
              },
              {
                "Don't forget me this weekend!": {
                  type: Type.Text,
                  expand: true,
                  cdata: false
                }
              },
              {
                "Don't forget me this weekend!": {
                  type: Type.Text,
                  expand: true,
                  cdata: false
                }
              },
              {
                "Don't forget me this weekend!": {
                  type: Type.Text,
                  expand: true,
                  cdata: false
                }
              },
              {
                "Don't forget me this weekend!": {
                  type: Type.Text,
                  expand: true,
                  cdata: false
                }
              },
              {
                "Don't forget me this we": {
                  type: Type.Text,
                  expand: true,
                  cdata: false
                }
              },
              {
                "Don't forget me this weekend!": {
                  type: Type.Text,
                  expand: true,
                  cdata: false
                }
              },
              {
                "Don't forget me this weekend!": {
                  type: Type.Text,
                  expand: true,
                  cdata: false
                }
              },
              {
                "Don't forget me this weekend!": {
                  type: Type.Text,
                  expand: true,
                  cdata: false
                }
              },
              {
                "Don't forget me this weekend!": {
                  type: Type.Text,
                  expand: true,
                  cdata: false
                }
              },
              {
                "Don't forget me this weekend!": {
                  type: Type.Text,
                  expand: true,
                  cdata: false
                }
              },
              {
                "Don't forget me this weekend!": {
                  type: Type.Text,
                  expand: true,
                  cdata: false
                }
              },
              {
                "Don't forget me this weekend!": {
                  type: Type.Text,
                  expand: true,
                  cdata: false
                }
              },
              {
                "Don't forget me this weekend!": {
                  type: Type.Text,
                  expand: true,
                  cdata: false
                }
              }
            ]
          }
        }
      ]
    }
  }
};

export const NewXML = {
  root: {
    type: Type.Element,
    expand: true,
    elements: [
      {
        child: {
          type: Type.Element,
          expand: true,
          elements: []
        }
      },
      {
        TextElement: {
          type: Type.Text,
          expand: true,
          cdata: false
        }
      }
    ]
  }
};
