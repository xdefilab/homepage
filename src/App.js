import logo from "./images/logo.png"
import logoBg from "./images/logoBg.png"
import stc3 from "./images/stc3.png"
import stc2 from "./images/stc2.png"
import stc1 from "./images/stc1.png"
import titleIcon from "./images/pic_title.png"
import bottomLogo from "./images/bottom-logo.png"
import "./App.css"

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="container">
          <div class="headerContent">
            <img src={logo} alt="" height="30" />
            <div className="navList">
              <a href="/">AboutXDeFiLab</a>
              <a href="/">RiskDisclosure</a>
            </div>
          </div>
        </div>
      </div>
      <div className="section1">
        <div className="sectionBG">
          <img src={logoBg} width="83%" alt="" />
        </div>
        <div
          className="container"
          style={{
            position: "absolute",
            left: "50%",
            marginLeft: -600,
            top: 0,
          }}
        >
          <div className="section1Content">
            <div className="title">
              A Well Established <br />
              DeFi Protocol Stack
            </div>
            <div className="subTitle">
              The xDex, xFarm, xHalfLife and DAO Protocol has been audited and
              released on public Kovan Testnet.
            </div>
            <div className="subTitle">
              The xPerp and xNsure Protocol will release soon!{" "}
            </div>
            <br />
            <br />
            <a
              className="colorfulBtn"
              variant="contained"
              color="primary"
              href="/"
            >
              WHITEPAPER
              <svg
                className="w-6 h-6"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="section2">
        <div className="container">
          <div className="section2Content">
            <div className="section2TextContent">
              <div className="title">XDex: Optimized Multi Asset AMM Dex</div>
              <div className="subTitle">
                Trustless and Permissionless. Accept any standard and
                non-deflating ERC20.
              </div>
            </div>
            <div className="sectionImgBG">
              <img src={stc3} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="section3">
        <div className="container">
          <div className="section2Content">
            <div className="sectionImgBG">
              <img src={stc2} alt="" />
            </div>
            <div className="section2TextContent">
              <div className="title">XFarm: None for Pre-sale, Pre-mint </div>
              <div className="subTitle">
                Fair launch and Antifragile. XDEX token distributed 100% based
                on community consessus and participation.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section3" style={{ marginBottom: 67 }}>
        <div className="container">
          <div className="section2Content">
            <div className="section2TextContent">
              <div className="title">XHalfLife: Trustless Money Stream </div>
              <div className="subTitle">
                Any XDEX from XFarm voting pool, ordinary pool, and founder{" "}
                <br />
                teams' fund, is rewarded through xHalfLife protocol.
                Withdrawable reward updated in every block.
                <br />
              </div>
            </div>
            <div className="sectionImgBG">
              <img src={stc1} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="roadMap">
        <div className="container">
          <div className="mainTitle">
            <img src={titleIcon} alt="" />
            &nbsp; Farming Timetable&nbsp;
            <img src={titleIcon} alt="" />
          </div>
          <div className="contain">
            <div className="divider"></div>
            <div className="mapContent">
              <div className="contentItem">
                <div className="roadMapItem">
                  <div className="roadMapItemContent">
                    <div className="title">Early Stage Farming Pools</div>
                    <div className="subContent">
                      DEX Indexes
                      <br />
                      Community Establishment
                      <br />
                      Medium Connections
                      <br />
                    </div>
                  </div>
                </div>
                <div
                  className="circle active"
                  style={{ margin: "0 42px" }}
                ></div>
                <div className="textContent">
                  <div className="title">Stage 1</div>
                  <div className="subTitle">From Block #1 to #40000</div>
                </div>
              </div>

              <div className="contentItem" style={{ marginTop: 40 }}>
                <div className="textContent" style={{ textAlign: "right" }}>
                  <div className="title">Stage 2</div>
                  <div className="subTitle">From Block #40001 to #120000</div>
                </div>
                <div className="circle" style={{ margin: "0 42px" }}></div>
                <div className="roadMapItem">
                  <div className="roadMapItemContent">
                    <div className="title">Target Specific User Groups</div>
                    <div className="subContent">
                      NFT Indexes
                      <br />
                      xPerp Audited
                    </div>
                  </div>
                </div>
              </div>

              <div className="contentItem" style={{ marginTop: 50 }}>
                <div className="roadMapItem">
                  <div className="roadMapItemContent">
                    <div className="title">Permissionless Farming Pools</div>
                    <div className="subContent">
                      1st Stage Milestone Airdrop
                      <br />
                      xPERP launch
                      <br />
                      xNsure development
                      <br />
                    </div>
                  </div>
                </div>
                <div className="circle" style={{ margin: 42 }}></div>
                <div className="textContent">
                  <div className="title">Stage 3</div>
                  <div className="subTitle">From Block #120001 to #280000</div>
                </div>
              </div>

              <div className="contentItem" style={{ marginTop: 50 }}>
                <div className="textContent" style={{ textAlign: "right" }}>
                  <div className="title">Stage 4</div>
                  <div className="subTitle">From Block #280001 to #600000</div>
                </div>
                <div className="circle" style={{ margin: 42 }}></div>
                <div className="roadMapItem">
                  <div className="roadMapItemContent">
                    <div className="title">General User Groups</div>
                    <div className="subContent">
                      General DeFi / ETH Mining Users
                      <br />
                      xNsure Audited
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <img src={bottomLogo} alt="" height="32" />
      </div>
    </div>
  )
}

export default App
