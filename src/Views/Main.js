
import sample2 from '../Assests/img/sample2.svg';
import sample3 from '../Assests/img/sample3.svg';
import sample4 from '../Assests/img/sample4.svg';
import sample5 from '../Assests/img/sample5.svg';
import sample6 from '../Assests/img/sample6.svg';
import sample7 from '../Assests/img/sample7.svg';
import * as QuickSightEmbedding from 'amazon-quicksight-embedding-sdk';
import { useEffect } from 'react';
// const AWS = require('aws-sdk');
// const https = require('https');
// var quicksight = new AWS.Service({
//     apiConfig: require('./quicksight-2018-04-01.min.json'),
//     region: 'us-east-1',
// });

// console.log(quicksight.config.apiConfig.operations);

// quicksight.listUsers({
//     // Enter your actual AWS account ID
//     'AwsAccountId': '271682672624', 
//     'Namespace': 'default',
// }, function(err, data) {
//     console.log('---');
//     console.log('Errors: ');
//     console.log(err);
//     console.log('---');
//     console.log('Response: ');
//     console.log(data);
// });
let dashboard;

function embedDashboard() {
    var containerDiv = document.getElementById("embeddingContainer");
    var options = {
        // replace this dummy url with the one generated via embedding API
        url: "https://us-west-2.quicksight.aws.amazon.com/embed/3fc498f4-238d-44e5-bdf0-80ce76d9fb0f?isauthcode=true&identityprovider=quicksight&code=authcode",  
        container: containerDiv,
        scrolling: "no",
        height: "700px",
        width: "1000px",
        footerPaddingEnabled: true
    };
    dashboard = QuickSightEmbedding.embedDashboard(options);
}
// function embedDashboard(embedUrl) {
//     //embedUrl is being returned as expected
//     const options = {
//         url: embedUrl,
//         container: document.getElementById("embeddingContainer"),
//         scrolling: "no",
//         height: "700px",
//         width: "1000px",
//         locale: "en-US",
//         footerPaddingEnabled: true,
//     };
//     let dashboard = embedDashboard(options);
//     dashboard.on("error", onError);
//     dashboard.on("load", onDashboardLoad);
// }
// //Neither onDashboardLoad nor onError are being called
//  function onDashboardLoad(payload) {
//     console.log("Do something when the dashboard is fully loaded.", payload);
// }
// function onError(payload) {
//     console.log("Do something when the dashboard fails loading", payload);
// }
const Main = () => {

    useEffect(() => {
        embedDashboard();
    }, [])

    return(
        <div>
            <div className="section-1">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col title">Select your own data source</div>
                </div>
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-4">
                        <div className="sample-para">Aliquam sit amet dui ut neque rutrum accumsan a vitae nulla. Proin eget augue laoreet elit molestie vulputate a sed felis. Ut lacinia scelerisque dui, ut bibendum nunc finibus eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</div>
                    </div>
                    <div className="col-sm-4">
                    <select>
                        <option value="" disabled selected hidden>Select your data...</option>
                    </select>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
            <div className="section-2">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col title">Dow Jones Industrial Average</div>
                </div>
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-6" id="embeddingContainer">
                        <img src={sample6} alt="sample"/>
                    </div>
                    <div className="col-sm-2">
                        <div className="sample-para">Real Time Price. Currency in USD</div>
                        <div className="price">30,211.91</div>
                        <div className="sample-para">Growth</div>
                        <div className="growth">+229.29 (+0.76%)</div>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
            <div className="section-3">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col title">Dow Jones Industrial Performance</div>
                </div>
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <div className="sample-para">Aliquam sit amet dui ut neque rutrum accumsan a vitae nulla. Proin eget augue laoreet elit molestie vulputate a sed felis. Ut lacinia scelerisque dui, ut bibendum nunc finibus eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</div>
                        <img src={sample2} alt="sample"/>
                        <div className="sample-para">Nulla malesuada ipsum dui, nec tempus orci interdum eu. Vivamus ultricies, ipsum sed maximus mollis, ipsum tortor scelerisque urna, nec posuere massa nisl at metus. Suspendisse pellentesque massa quis lectus vulputate ultrices. Duis ullamcorper ante in libero scelerisque tempus. Suspendisse sit amet enim nec neque mollis suscipit.</div>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
            <div className="section-4">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col title">What is the impact on the Dow Jones Industrial Performance?</div>
                </div>
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8 sample-para">Fusce pretium varius tortor, ac finibus lectus mollis at. Donec congue efficitur risus, sed sollicitudin purus pharetra rutrum. Maecenas viverra eu massa at vulputate. Nunc pulvinar, ante vel condimentum egestas, nibh turpis hendrerit lorem, nec fringilla ante nunc a lacus. Mauris sed tortor dignissim, pellentesque elit quis, sollicitudin sem. Duis scelerisque, magna a porttitor mollis, sem elit volutpat dui, ut pellentesque turpis turpis nec turpis. Nulla facilisi. Praesent pretium est ac dolor dapibus fermentum. Aenean eu risus dignissim, euismod purus ut, euismod ex.</div>
                    <div className="col-sm-2"></div>
                </div>
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-4">
                        <div className="image-caption">Image Caption</div>
                        <img src={sample3} alt="sample"/>
                    </div>
                    <div className="col-sm-4">
                        <div className="pie-data">
                            <div>Top Products</div>
                            <br/>
                            <div>ImageCLASS 2200 Advanced Copier</div>
                            <div
                                style={{
                                    font: "normal normal bold 22px/29px Roboto",
                                    color: "#E27323"
                                }}
                            >11220&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+67.43</div>
                            <hr/>
                            <div>EX90 Videoconferencing Unit</div>
                            <div
                                style={{
                                    font: "normal normal bold 22px/29px Roboto",
                                    color: "#E27323"
                                }}
                            >10891&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+59.27</div>
                            <hr/>
                            <div>Ibico EPK-21</div>
                            <div
                                style={{
                                    font: "normal normal bold 22px/29px Roboto",
                                    color: "#E27323"
                                }}
                            >9834&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+47.81</div>
                            <hr/>
                            <div>3D Systems Cube Printer</div>
                            <div
                                style={{
                                    font: "normal normal bold 22px/29px Roboto",
                                    color: "#E27323"
                                }}
                            >8713&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+41.20</div>
                            <hr/>
                        </div>
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
            <div className="section-5">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col title">What changed Dow Jones Industrial Performance?</div>
                </div>
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8 sample-para">Fusce pretium varius tortor, ac finibus lectus mollis at. Donec congue efficitur risus, sed sollicitudin purus pharetra rutrum. Maecenas viverra eu massa at vulputate. Nunc pulvinar, ante vel condimentum egestas, nibh turpis hendrerit lorem, nec fringilla ante nunc a lacus. Mauris sed tortor dignissim, pellentesque elit quis, sollicitudin sem. Duis scelerisque, magna a porttitor mollis, sem elit volutpat dui, ut pellentesque turpis turpis nec turpis. Nulla facilisi. Praesent pretium est ac dolor dapibus fermentum. Aenean eu risus dignissim, euismod purus ut, euismod ex.</div>
                    <div className="col-sm-2"></div>
                </div>
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-6">
                        <div className="image-caption">Image Caption</div>
                        <img src={sample4} alt="sample"/>
                    </div>
                    <div className="col-sm-2">
                        <div className="image-caption">Image Caption</div>
                        <img src={sample5} alt="sample"/>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
            <div className="section-6">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col title">How does this impact the attribution of revenue?</div>
                </div>
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8 sample-para">Aliquam sit amet dui ut neque rutrum accumsan a vitae nulla. Proin eget augue laoreet elit molestie vulputate a sed felis. Ut lacinia scelerisque dui, ut bibendum nunc finibus eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis facilisis tellus nec dui accumsan, in tincidunt metus fermentum. Aliquam porta diam est, in cursus lectus convallis non. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc id Leo luctus, tempus diam vitae, tincidunt neque. Sed odio neque, blandit vitae mi ut, placerat accumsan nibh.</div>
                    <div className="col-sm-2"></div>
                </div>
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-4">
                        <div className="image-caption">Image Caption</div>
                        <img src={sample6} alt="sample"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={sample7} alt="sample"/>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
        </div>
    )
}

export default Main;