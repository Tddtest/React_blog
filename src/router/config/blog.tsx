/***
 * @auth: dmx
 * @time: 2020/7/7
 * @func:
 * @params:
 * @return:
 * @updateTime:
 ***/
import React from 'react';
import Loadable from 'react-loadable';
import RouteWithSubRouters from '../RouteWithSubRouters';
import Tag from '../../pages/blog-manage/tag';
import loadings from '../loadings';
import {
  UnderlineOutlined,
  FontSizeOutlined,
  BgColorsOutlined,
  SmallDashOutlined,
  PieChartOutlined,
} from '@ant-design/icons';

const blog = [
  {
    // 2级级路由
    component: Tag,
    icon: <UnderlineOutlined />,
    name: '博客面板',
    path: '/blog-dashboard',
  },
  {
    // 2级级路由
    component: RouteWithSubRouters,
    icon: <UnderlineOutlined />,
    name: '标签管理',
    path: '/tag',
    routes: [
      {
        // 3级级路由
        component: RouteWithSubRouters,
        icon: <FontSizeOutlined />,
        name: '标签列表',
        path: '/list',
        routes: [
          {
            // 4级级路由
            component: Loadable({
              loader: () => import('../../pages/blog-manage/tag'),
              ...loadings,
            }),
          },
          {
            path: '/create',
            icon: <BgColorsOutlined />,
            name: '新建标签',
            component: Loadable({
              loader: () => import('../../pages/blog-manage/tag/CreateTag'),
              ...loadings,
            }),
          }
        ]
      },
      {
        // 3级级路由
        component: RouteWithSubRouters,
        icon: <FontSizeOutlined />,
        name: '测试',
        path: '/test',
        routes: [
          {
            // 4级级路由
            component: Loadable({
              loader: () => import('../../pages/blog-manage/tag'),
              ...loadings,
            }),
          },
          {
            path: '/create',
            icon: <BgColorsOutlined />,
            name: '新建测试',
            component: Loadable({
              loader: () => import('../../pages/blog-manage/tag/CreateTag'),
              ...loadings,
            }),
          }
        ]
      }
    ]
  },
  {
    // 2级级路由
    component: RouteWithSubRouters,
    icon: <SmallDashOutlined />,
    name: '文章管理',
    path: '/article',
    routes: [
      {
        // 3级级路由
        component: RouteWithSubRouters,
        icon: <PieChartOutlined />,
        name: '文章列表',
        path: '/list',
        routes: [
          {
            // 4级级路由
            component: Loadable({
              loader: () => import('../../pages/more-pages'),
              ...loadings,
            }),
          },
          {
            path: '/create',
            icon: <BgColorsOutlined />,
            name: '新建文章',
            component: Loadable({
              loader: () => import('../../pages/blog-manage/tag/CreateTag'),
              ...loadings,
            }),
          }
        ]
      }
    ]
  }
];

export default blog;