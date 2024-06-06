/* eslint-disable no-unused-vars */
import React from 'react';
import HousePage from '../../components/HousePage/index.jsx';
import gryffindorVideo from '../../assets/videos/grifinoria.mp4';
import gryffindorStudent from '../../assets/images/cassio-grifinoria-moldura.png';
import houseCrest from '../../assets/images/casas/gryffindor.png';

const Gryffindor = () => {
  return (
    <HousePage
      videoSrc={gryffindorVideo}
      studentImage={gryffindorStudent}
      studentText="Bem-vindo(a) querido aluno da Grifinória! O que iremos aprender hoje?"
      crest={houseCrest}
    />
  );
};

export default Gryffindor;
