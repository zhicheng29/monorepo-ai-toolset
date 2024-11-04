export const routerList = [
  {
    path: "/home",
    element: "/home/index",
    meta: {
      key: "home",
      icon: "HomeOutlined",
      title: "首页",
      isLink: "",
      isHide: false,
      isFull: false,
      isAffix: true
    }
  },
  {
    path: "/dataCentre",
    element: "/dataCentres/index",
    meta: {
      key: "dataCentre",
      icon: "PieChartOutlined",
      title: "数据大屏",
      isLink: "",
      isHide: false,
      isFull: true,
      isAffix: false
    }
  },
  {
    path: "/auth",
    redirect: "/auth/page",
    meta: {
      key: "auth",
      icon: "LockOutlined",
      title: "权限管理",
      isLink: "",
      isHide: false,
      isFull: false,
      isAffix: false
    },
    children: [
      {
        path: "/auth/page",
        element: "/auth/page/index",
        meta: {
          key: "pageMenu",
          icon: "AppstoreOutlined",
          title: "页面权限",
          isLink: "",
          isHide: false,
          isFull: false,
          isAffix: false
        }
      },
      {
        path: "/auth/button",
        element: "/auth/button/index",
        meta: {
          key: "authButton",
          icon: "AppstoreOutlined",
          title: "按钮权限",
          isLink: "",
          isHide: false,
          isFull: false,
          isAffix: false
        }
      }
    ]
  }
];
