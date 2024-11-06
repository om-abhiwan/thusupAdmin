import { Outlet } from "react-router-dom"
import "./Layout.css"
import { Col, Row } from "react-bootstrap"
import Sidebar from "../components/sidebar/Sidebar"
import Header from "../components/header/Header"

const Layout = () => {
    return (
        <div className="layout">
            <Row>
                <Col sm={3} >
                    <div className="layoutSidebar">
                        <Sidebar />
                    </div>
                </Col>
                <Col sm={9} >
                    <div className="rightCol">
                        <div className="layoutHeader">
                            <Header />
                        </div>
                        <div className="layoutContent">
                            <Outlet />
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Layout