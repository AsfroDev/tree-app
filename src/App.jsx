import "./Global.css";
import { Modal } from "./Modal";
import { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setShowModal(true);
    setModalPosition({ x: e.clientX + -85, y: e.clientY + -68 });
  };

  const handleMouseLeave = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="container">
        <div className="tree">
          <ul>
            <li>
              <div className="group">
                <div
                  className="box"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  Person
                </div>
                <div
                  className="box"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  Person
                </div>
              </div>
            </li>
            <li>
              <div className="group">
                <div
                  className="box"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  Person
                </div>
                <div
                  className="box"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  Person
                </div>
              </div>
            </li>
            <li>
              <div className="group">
                <div
                  className="box"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  Person
                </div>
                <div
                  className="box"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  Person
                </div>
              </div>
            </li>
            <li>
              <div className="group">
                <div
                  className="box"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  Person
                </div>
                <div
                  className="box"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  Person
                </div>
                <div
                  className="box"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  Person
                </div>
              </div>
            </li>
            <li>
              <div className="group">
                <div
                  className="box"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  Person
                </div>
                <div
                  className="box"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  Person
                </div>
              </div>
            </li>
            <li>
              <div className="group">
                <div
                  className="box"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  Person
                </div>
              </div>
            </li>
            <li>
              <div className="group">
                <div
                  className="box"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  Person
                </div>
                <div
                  className="box"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  Person
                </div>
              </div>
            </li>
            <li>
              <div className="group">
                <div
                  className="box"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  Person
                </div>
              </div>
            </li>
            <li>
              <div className="group">
                <div
                  className="box"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  Person
                </div>
              </div>
            </li>
            <li>
              <div className="group">
                <div
                  className="box"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  Person
                </div>
                <div
                  className="box"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  Person
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {showModal &&
        ReactDOM.createPortal(
          <div
            className="modal"
            style={{
              left: modalPosition.x,
              top: modalPosition.y,
              zIndex: 9999,
              position: "fixed",
            }}
          >
            <Modal />
          </div>,
          document.body
        )}
    </>
  );
}

export default App;
