import {
  AppstoreOutlined,
  BookOutlined,
  InsertRowLeftOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  FileImageOutlined,
  CustomerServiceOutlined,

} from '@ant-design/icons';
import { MenuProps } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];
function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}
export const menuUser: MenuItem[] = [
  getItem('Banner', '/user/banner', <FileImageOutlined />),
  getItem('Sự kiện', '/user/event', <UserOutlined />),
  getItem('Tin tức', '/user/news', <AppstoreOutlined />),

  getItem('Dịch vụ', '/user/serviceCoffee', <InsertRowLeftOutlined />),
  getItem('Khách hàng thân thiết', '/user/customer-following', <BookOutlined />),
];
export const menuAdmin: MenuItem[] = [
  getItem('Quản Lý User', '/admin/user', <UserOutlined />),
  getItem('Quản Lý Customer', '/admin/customer', <CustomerServiceOutlined />),
  getItem('Yêu cầu duyệt', '/admin/request', <BookOutlined />),
  getItem('Quản Lý Banner', '/admin/banner', <FileImageOutlined />),
  getItem('Restrict Account', '/admin/restrictAccount', <FileImageOutlined />),
];
