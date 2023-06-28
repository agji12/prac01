import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, NavLink, Outlet, Route, Routes } from 'react-router-dom';
import { Table } from 'antd';
import Nav from 'react-bootstrap/Nav';
import Dash from './pages/dash/dash';

const Shop = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Chinese Score',
      dataIndex: 'chinese',
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 3,
      },
    },
    {
      title: 'Math Score',
      dataIndex: 'math',
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },
    },
    {
      title: 'English Score',
      dataIndex: 'english',
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      chinese: 98,
      math: 60,
      english: 70,
    },
    {
      key: '2',
      name: 'Jim Green',
      chinese: 98,
      math: 66,
      english: 89,
    },
    {
      key: '3',
      name: 'Joe Black',
      chinese: 98,
      math: 90,
      english: 70,
    },
    {
      key: '4',
      name: 'Jim Red',
      chinese: 88,
      math: 99,
      english: 89,
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  return(
    <Table columns={columns} dataSource={data} onChange={onChange} />
  );
}

function Navi() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/dashboard">메인</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/business" eventKey="link-1">판매자 회원 관리</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/client" eventKey="link-2">이용자 회원 관리</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/shop" eventKey="link-3">공구샵 관리</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/board" eventKey="link-4">게시판 관리</Nav.Link>
      </Nav.Item>
      
    </Nav>
  );
}


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navi></Navi>
        <Routes>
          <Route path='/dashboard' element={<Dash/>}></Route>
          <Route path='/shop' element={<Shop/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
