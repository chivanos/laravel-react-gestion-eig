import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes,useHref} from 'react-router-dom';
import Eig from './Eig';
import 'bootstrap/dist/css/bootstrap.min.css'
import Register from './Register';
import Login from './Login';
import MainDw from './Page/MainDw';
import MainWd from './Page/MainWd';
import MainDg from './Page/MainDg';
import MainMv from './Page/MainMv';
import AjoutDw from './Page/DW/AjoutDw';
import AjoutWd from './Page/WD/AjoutWd';
import AjoutMv from './Page/MV/AjoutMv';
import AjoutDg from './Page/DG/AjoutDg';
import Maindwpro from './Promotion/Maindwpro'
import Maindgpro from './Promotion/Maindgpro'
import Mainwdpro from './Promotion/Mainwdpro'
import Mainmvpro from './Promotion/Mainmvpro'
import DocumentsPdfb from './PDFDeveloppement/DocumentsPdfb';
import DocumentsPdfc from './PDFDeveloppement/DocumentsPdfc';
import DocumentsPdfem from './PDFDeveloppement/DocumentsPdfem';
import DocumentsPdfDgc from './PDFDG/DocumentsPdfDgc';
import DocumentsPdfWdc from './PDFWD/DocumentsPdfWdc';
import DocumentsPdfMvc from './PDFMV/DocumentsPdfMvc';
import DocumentsPdfDgb from './PDFDG/DocumentsPdfDgb';
import DocumentsPdfWdb from './PDFWD/DocumentsPdfWdb';
import DocumentsPdfMvb from './PDFMV/DocumentsPdfMvb';
import DocumentsPdfDgem from './PDFDG/DocumentsPdfDgem';
import DocumentsPdfWdem from './PDFWD/DocumentsPdfWdem';
import DocumentsPdfMvem from './PDFMV/DocumentsPdfMvem';
import Ajoutdwpro from './Promotion/Compdw/Ajoutdwpro'
import './Style.css';
import Ajoutwdpro from './Promotion/Compwd/Ajoutwdpro'
import Ajoutdgpro from './Promotion/Compdg/Ajoutdgpro'
import Ajoutmvpro from './Promotion/Compmv/Ajoutmvpro'
import ViewDw from './Page/DW/ViewDw'
import EditDw from './Page/DW/EditDw'
import ViewDg from './Page/DG/ViewDg'
import EditDg from './Page/DG/EditDg'
import ViewMv from './Page/MV/ViewMv'
import EditMv from './Page/MV/EditMv'
import ViewWd from './Page/WD/ViewWd'
import EditWd from './Page/WD/EditWd'
import Parametre from './Page/Parametre';
import Bienvenue from './Bienvenue';
import Authentification from './Authentification';
const root = ReactDOM.createRoot(document.getElementById('root'));


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAMgFTrSsHrWTftRQd7Ttykxaqt5HRHjmE",
//   authDomain: "react-store-20abc.firebaseapp.com",
//   projectId: "react-store-20abc",
//   storageBucket: "react-store-20abc.appspot.com",
//   messagingSenderId: "282626832722",
//   appId: "1:282626832722:web:455064c8f2bd8a2a8ae28b",
//   measurementId: "G-1PWL7CSVHB"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Bienvenue />} />
        <Route path='/authent' element={<Authentification />} />
        <Route path='/eighome' element={<Eig />} />
        <Route path='/voirstdw/:std' element={<ViewDw />} />
        <Route path='/editstdw/:ie' element={<EditDw />} />
        <Route path='/voirstdg/:stt' element={<ViewDg />} />
        <Route path='/editstdg/:ig' element={<EditDg />} />
        <Route path='/voirstwd/:sti' element={<ViewWd />} />
        <Route path='/editstwd/:iw' element={<EditWd />} />
        <Route path='/voirstmv/:stid' element={<ViewMv />} />
        <Route path='/editstmv/:ii' element={<EditMv />} />
        <Route path='/developpementweb' element={<MainDw />} />
        <Route path='/webdesign' element={<MainWd />} />
        <Route path='/designgraphique' element={<MainDg />} />
        <Route path='/montagevideo' element={<MainMv />} />
        <Route path='/dwpro' element={<Maindwpro />} />
        <Route path='/wdpro' element={<Mainwdpro />} />
        <Route path='/dgpro' element={<Maindgpro />} />
        <Route path='/mvpro' element={<Mainmvpro />} />
        <Route path='/ajoutdeveloppeur' element={<AjoutDw />} />
        <Route path='/ajoutwebdesigner' element={<AjoutWd />} />
        <Route path='/ajoutdesignergraphique' element={<AjoutDg/>} />
        <Route path='/ajoutmonteurvideo' element={<AjoutMv />} />
        <Route path='/ajoutdwpro' element={<Ajoutdwpro />} />
        <Route path='/ajoutwdpro' element={<Ajoutwdpro />} />
        <Route path='/ajoutdgpro' element={<Ajoutdgpro/>} />
        <Route path='/ajoutmvpro' element={<Ajoutmvpro />} />
        <Route path='/pdf-download-c' element={<DocumentsPdfc />} />
        <Route path='/pdf-download-b' element={<DocumentsPdfb />} />
        <Route path='/pdf-download-em' element={<DocumentsPdfem />} />
        <Route path='/pdf-download-dgc' element={<DocumentsPdfDgc />} />
        <Route path='/pdf-download-wdc' element={<DocumentsPdfWdc />} />
        <Route path='/pdf-download-mvc' element={<DocumentsPdfMvc />} />
        <Route path='/pdf-download-dgem' element={<DocumentsPdfDgem />} />
        <Route path='/pdf-download-wdem' element={<DocumentsPdfWdem />} />
        <Route path='/pdf-download-mvem' element={<DocumentsPdfMvem />} />
        <Route path='/pdf-download-dgb' element={<DocumentsPdfDgb />} />
        <Route path='/pdf-download-wdb' element={<DocumentsPdfWdb />} />
        <Route path='/pdf-download-mvb' element={<DocumentsPdfMvb />} />
        <Route path='/registeredme' element={<Register />} />
        <Route path='/loginme' element={<Login />} />
        {/* <Route path='/cmv' element={<Cmv />} />
        <Route path='/cdw' element={<Cdw />} />
        <Route path='/cdg' element={<Cdg />} />
        <Route path='/cwd' element={<Cwd />} /> */}
        <Route path='/parametre' element={<Parametre />} />
      </Routes>
    </BrowserRouter>
  </>
)


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import Test from './Test';

// const root = ReactDOM.createRoot(document.getElementById('root'));


// root.render(
//     <>
//         <Test />
//     </>
// )