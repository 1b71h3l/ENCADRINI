import React, { useState } from "react";
import { Link } from "react-router-dom";
import EnseignantSidebar from "../../components/Sidebar/EnseignantSidebar";
import AdminNavbar from "../../components/Navbar/AdminNavbar";
import PERSON from "../../images/PERSON.jpg";

const UserProfile = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
    console.log("meriem");
  };
  return (
    <>
      <div className="SingleUser">
        <EnseignantSidebar />
        <div className="SingleUserContainer">
          <AdminNavbar />
          <div>
            <div className="row">
              <div className="col-md-3">
                <img className="profilepic" src={PERSON} alt="person" />
              </div>
              <div className="col-md-6">
                <div className="profile-head">
                  <h5>Meriem Baha</h5>
                  <h6>m.baha@esi-sba.dz</h6>
                  <h6>Administrateur de l'application</h6>
                </div>
                <div className="container">
                  <div className="bloc-tabs">
                    <button
                      className={
                        toggleState === 1 ? "tabs active-tabs" : "tabs"
                      }
                      onClick={() => toggleTab(1)}
                    >
                      Informations personelles
                    </button>
                  </div>
                </div>
              </div>

              <div className="row-info content-tabs">
                <div
                  className={
                    toggleState === 1 ? "content  active-content" : "content"
                  }
                >
                  <div className="detailItem">
                    <span className="ItemKey">Date de naissance</span>
                    <span className="ItemValue vertical-align">
                      21 novembre 2001
                    </span>
                  </div>
                  <div className="detailItem">
                    <span className="ItemKey">lieu de naissance</span>
                    <span className="ItemValue vertical-align">jijel</span>
                  </div>
                  <div className="detailItem">
                    <span className="ItemKey">wilaya</span>
                    <span className="ItemValue vertical-align">jijel</span>
                  </div>
                  <div className="detailItem">
                    <span className="ItemKey">Adresse</span>
                    <span className="ItemValue vertical-align">ben Achour</span>
                  </div>
                  <div className="detailItem">
                    <span className="ItemKey">situation</span>
                    <span className="ItemValue vertical-align">
                      Celibataire
                    </span>
                  </div>
                  <div className="detailItem">
                    <span className="ItemKey">Numero de telephone</span>
                    <span className="ItemValue vertical-align">0699690726</span>
                  </div>
                  <div className="detailItem">
                    <span className="ItemKey">Sexe</span>
                    <span className="ItemValue vertical-align">Female</span>
                  </div>
                </div>
              </div>
              <Link className="linktoResetPw" to="/ResetPassword">
                <button className="EditpwBtn">Modifier le mot de passe</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
