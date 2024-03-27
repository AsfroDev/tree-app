import "./Global.css";
import { Modal } from "./Modal";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });

  const updateModalPosition = (e) => {
    setModalPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      {showModal && (
        <div
          className="modal"
          style={{ left: modalPosition.x, top: modalPosition.y, zIndex: 2, }}
        >
          <Modal />
        </div>
      )}

      <div className="container">
        <div className="tree">
          <ul>
            <li>
              <div className="group">
                <div
                  className="box"
                  onMouseEnter={() => setShowModal(true)}
                  onMouseLeave={() => setShowModal(false)}
                  onMouseMove={updateModalPosition}
                >
                  Person
                </div>
                <div
                  className="box"
                  onMouseEnter={() => setShowModal(true)}
                  onMouseLeave={() => setShowModal(false)}
                  onMouseMove={updateModalPosition}
                >
                  Person
                </div>
              </div>
            </li>
            <li>
              <div className="group">
                <div
                  className="box"
                  onMouseEnter={() => setShowModal(true)}
                  onMouseLeave={() => setShowModal(false)}
                  onMouseMove={updateModalPosition}
                >
                  Person
                </div>
                <div
                  className="box"
                  onMouseEnter={() => setShowModal(true)}
                  onMouseLeave={() => setShowModal(false)}
                  onMouseMove={updateModalPosition}
                >
                  Person
                </div>
              </div>
            </li>
            <li>
              <div className="group">
                <div
                  className="box"
                  onMouseEnter={() => setShowModal(true)}
                  onMouseLeave={() => setShowModal(false)}
                  onMouseMove={updateModalPosition}
                >
                  Person
                </div>
                <div
                  className="box"
                  onMouseEnter={() => setShowModal(true)}
                  onMouseLeave={() => setShowModal(false)}
                  onMouseMove={updateModalPosition}
                >
                  Person
                </div>
              </div>
            </li>
            <li>
              <div className="group">
                <div
                  className="box"
                  onMouseEnter={() => setShowModal(true)}
                  onMouseLeave={() => setShowModal(false)}
                  onMouseMove={updateModalPosition}
                >
                  Person
                </div>
                <div
                  className="box"
                  onMouseEnter={() => setShowModal(true)}
                  onMouseLeave={() => setShowModal(false)}
                  onMouseMove={updateModalPosition}
                >
                  Person
                </div>
                <div
                  className="box"
                  onMouseEnter={() => setShowModal(true)}
                  onMouseLeave={() => setShowModal(false)}
                  onMouseMove={updateModalPosition}
                >
                  Person
                </div>
              </div>
            </li>
            <li>
              <div className="group">
                <div
                  className="box"
                  onMouseEnter={() => setShowModal(true)}
                  onMouseLeave={() => setShowModal(false)}
                  onMouseMove={updateModalPosition}
                >
                  Person
                </div>
                <div
                  className="box"
                  onMouseEnter={() => setShowModal(true)}
                  onMouseLeave={() => setShowModal(false)}
                  onMouseMove={updateModalPosition}
                >
                  Person
                </div>
              </div>
            </li>
            <li>
              <div className="group">
                <div
                  className="box"
                  onMouseEnter={() => setShowModal(true)}
                  onMouseLeave={() => setShowModal(false)}
                  onMouseMove={updateModalPosition}
                >
                  Person
                </div>
              </div>
            </li>
            <li>
              <div className="group">
                <div
                  className="box"
                  onMouseEnter={() => setShowModal(true)}
                  onMouseLeave={() => setShowModal(false)}
                  onMouseMove={updateModalPosition}
                >
                  Person
                </div>
                <div
                  className="box"
                  onMouseEnter={() => setShowModal(true)}
                  onMouseLeave={() => setShowModal(false)}
                  onMouseMove={updateModalPosition}
                >
                  Person
                </div>
              </div>
            </li>
            <li>
              <div className="group">
                <div
                  className="box"
                  onMouseEnter={() => setShowModal(true)}
                  onMouseLeave={() => setShowModal(false)}
                  onMouseMove={updateModalPosition}
                >
                  Person
                </div>
              </div>
            </li>
            <li>
              <div className="group">
                <div
                  className="box"
                  onMouseEnter={() => setShowModal(true)}
                  onMouseLeave={() => setShowModal(false)}
                  onMouseMove={updateModalPosition}
                >
                  Person
                </div>
              </div>
            </li>
            <li>
              <div className="group">
                <div
                  className="box"
                  onMouseEnter={() => setShowModal(true)}
                  onMouseLeave={() => setShowModal(false)}
                  onMouseMove={updateModalPosition}
                >
                  Person
                </div>
                <div
                  className="box"
                  onMouseEnter={() => setShowModal(true)}
                  onMouseLeave={() => setShowModal(false)}
                  onMouseMove={updateModalPosition}
                >
                  Person
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
