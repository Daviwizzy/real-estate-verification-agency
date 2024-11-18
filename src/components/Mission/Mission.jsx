import "./Mission.css";

function Mission() {
    return (
        <div className="mission-container container-margin paddings">
            <div className="ourMissionLeft">
                <h1>
                    OUR <br /> MISSION
                </h1>

                <p>
                    Get the clarity and confidence you need to make smart
                    property investments. Don’t wait until it’s too verify your 
                    property with Verizone now.
                </p>
            </div>

            <div className="ourMissionRight">
                <img src="Frame 1000005353.svg" alt="" className="bcg-1" />
                <div className="ourMissionImg1">
                    <img src="Frame 1000005327.svg" alt="" className="img1" />
                    <img src="Frame 1000005328.svg" alt=""  className="img12"/>
                </div>
                <div className="ourMissionImg2">
                    <img src="Frame 1000005330.svg" alt="" className="img3" />
                    <img src="Frame 1000005329.svg" alt="" className="img4" />
                </div>
                <img src="Frame 1000005203.svg" alt="" className="bcg-2" />

                <img src="Vector.svg" alt="" className="bcg-3 bcg-33" />
            </div>
        </div>
    );
}

export default Mission;
