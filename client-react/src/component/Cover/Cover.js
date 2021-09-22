import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import "./Cover.scss"

 function Cover() {
		const [dataLoading, setDataLoading] = useState(false);

		useEffect(() => {
			setTimeout(() => setDataLoading(false), 1500);
			setDataLoading(true);
		}, []);

		return (
			<>
				{dataLoading ? (
					<div className="d-flex justify-content-center align-items-center vh-100">
						<div className="spinner-border" role="status">
							<span className="sr-only">Loading...</span>
						</div>
					</div>
				) : (
					<>
						<div className="container-fluid sliderbg">
							<div className="container">
								<div className="row p-4">
									{/*視覺輪播圖*/}
									<div className="homeCarousel col p-0">
										<div>
											<img src="/Mainphotos/13.jpg" alt="" />
										</div>
										<div>
											<img src="/Mainphotos/25.jpg" alt="" />
										</div>
										<div>
											<img src="/Mainphotos/20.jpg" alt="" />
										</div>
										<div>
											<img src="/Mainphotos/28.jpg" alt="" />
										</div>
										<div>
											<img src="/Mainphotos/66.jpg" alt="" />
										</div>
									</div>
									{/*水果盒動畫*/}
									<div className="coverfloat col">
										<img
											src="/Mainphotos/2.png"
											className="boxanimate"
											alt=""
										/>
										<h3 className="text-center">精緻水果盒 週週宅配到你家</h3>
										<div className="d-flex justify-content-center">
											<Link to="/Main">
												<div className="enterbtn">點此進入</div>
											</Link>
											<div className="howsub-btn">了解訂閱方案</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</>
				)}
			</>
		);
 }
export default Cover;