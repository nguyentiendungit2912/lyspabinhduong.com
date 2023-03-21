import { Link } from 'react-router-dom'
import React from 'react'
import Icon1 from '../../assets/img/features/banner-01.png'
import Icon2 from '../../assets/img/features/banner-02.png'
import Icon3 from '../../assets/img/features/banner-03.png'

const Feature = () => {
    return (
        <>
            <section className="feature-area p-relative fix">
                <div className="containe-fluid">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="feature-box">
                                <div className="text">
                                    <h5>ƯU ĐÃI DÀNH CHO NỮ</h5>
                                    <h3>Chăm Sóc Tốt Nhất Cho Phụ Nữ Làn Da & Cơ Thể</h3>
                                    {/* <Link to="/service-details">Start Now</Link> */}
                                </div>
                                <img src={Icon1} alt="icon01" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="feature-box">
                                <div className="text">
                                    <h5>ƯU ĐÃI DÀNH CHO NAM</h5>
                                    <h3>Có được ánh sáng rực rỡ nhất với các sản phẩm dành cho người đàn ông của chúng tôi</h3>
                                    {/* <Link to="/service-details">Start Now</Link> */}
                                </div>
                                <img src={Icon2} alt="icon01" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="feature-box">
                                <div className="text">
                                    <h5>ƯU ĐÃI DÀNH CHO CẶP ĐÔI</h5>
                                    <h3>Nhận Sự Chăm Sóc Tốt Nhất Cho Các Cặp Đôi</h3>
                                    {/* <Link to="/service-details">Start Now</Link> */}
                                </div>
                                <img src={Icon3} alt="icon01" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Feature