import React from "react";
import ParagraphsForm from "./paragraphs/paragraphsForm.jsx";
import '../components/styles/App.css'

//Landing page
const Principal = () => {
  return (
    <div id = 'principal' className="d-flex justify-content-center align-items-center flex-column pt-5">
      <div>
        <h2>¡Bienvenido a la página de CarShop!</h2>
      </div>
      <div>
        <ParagraphsForm
          classParagraph="text-center my-5"
          textparagraph="Inicie sesión para poder hacer un registro completo de sus, datos, los datos de su vehiculo y los servicios que ofrecemos!"
        />
      </div>
    </div>
  );
};

export default Principal;
