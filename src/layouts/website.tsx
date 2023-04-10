import { Outlet, useNavigate} from "react-router-dom"
// import { getoneUser } from '../api/user'
import { Input } from 'antd';


const website = () => {

    let userItem = (localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')!) : false

    function thoat(){
        localStorage.removeItem('user')
    }

    var username = document.querySelector('#user')
    const login= document.querySelector('.Login')

    if (userItem.user?.role == 'admin') {
        username?.setAttribute('href', "/admin")
        login?.remove()

    }
    if (userItem.user?.role == 'member') {
        username?.setAttribute('href', "/")
        login?.remove()
    }
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container px-4 px-lg-5">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                                <li className="nav-item"><a className="nav-link active" aria-current="page" href="/">Home</a></li>
                                <Input.Search
                                    style={{ width: 300 }}
                                    placeholder="Nhập tên san phẩm"
                                />
                            </ul>
                            <a className="navbar-brand" id='user'>{userItem.user?.name}
                            <ul>
                                <li><a onClick={()=> thoat()}>Đăng xuất</a></li>
                            </ul>
                        </a>
                            <a className='Login' href="/dangnhap">
                                <button style={{ marginRight: 20 }} className="btn btn-outline-dark" >
                                    Đăng nhập
                                </button>
                            </a>
                            <a className='Login' href="/dangky">
                                <button className="btn btn-outline-dark">
                                    Đăng ký
                                </button>
                            </a>
                        </div>
                    </div>
                </nav>
                <header className="bg-dark py-5">
                    <div className="container px-4 px-lg-5 my-5">
                        <div className="text-center text-white">
                            <h1 className="display-4 fw-bolder">Shop in the World</h1>
                            <p className="lead fw-normal text-white-50 mb-0">Thương hiệu mang tầm quốc tế </p>
                        </div>
                    </div>
                </header>
            </header>
            <main>
                <Outlet />
            </main>
            <footer className="py-5 bg-dark">
                <div className="container"><p className="m-0 text-center text-white">&copy; Lỗ vẫn bán</p></div>
            </footer>
        </div>
    )
}

export default website