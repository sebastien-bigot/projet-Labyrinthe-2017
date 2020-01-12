function appuie0(grille, pieceRotate, joueur, j){
  var tmp=grille[6][j];
  tmp.x=1000;
  tmp.y=200;
  pieceRotate.x=grille[0][j].x;
  pieceRotate.y=grille[0][j].y;
  for(var i=6; i>0; i--){
    grille[i][j]=grille[i-1][j];
    grille[i][j].y+=97;
    if(grille[i][j].objet!=null){
      grille[i][j].objet.y+=97
    }
  }
  grille[0][j]=pieceRotate;
  grille[0][j].objet=tmp.objet;
  if(grille[0][j].objet!=null){
    modifObjet(grille[0][j]);
  }
  for(var i=0; i<joueur.length;i++){
    if (joueur[i].x==grille[0][j].x){
      if(joueur[i].y==682){
        joueur[i].y=100;
      }
      else {
        joueur[i].y+=97;
      }
    }
  }
  return tmp;
}

function appuie1(grille, pieceRotate, joueur, i){
  var tmp=grille[i][0];
  tmp.x=1000;
  tmp.y=200;
  pieceRotate.x=grille[i][6].x;
  pieceRotate.y=grille[i][6].y;
  for(var j=0; j<6; j++){
    grille[i][j]=grille[i][j+1];
    grille[i][j].x-=97;
    if(grille[i][j].objet!=null){
      grille[i][j].objet.x-=97
    }
  }
  grille[i][6]=pieceRotate;
  grille[i][6].objet=tmp.objet;
  if(grille[i][6].objet!=null){
    modifObjet(grille[i][6]);
  }
  for(var j=0; j<joueur.length;j++){
    if (joueur[j].y==grille[i][0].y){
      if(joueur[j].x==100){
        joueur[j].x=682;
      }
      else {
        joueur[j].x-=97;
      }
    }
  }
  return tmp;
}


function appuie2(grille, pieceRotate, joueur,j){
  var tmp=grille[0][j];
  tmp.x=1000;
  tmp.y=200;
  pieceRotate.x=grille[6][j].x;
  pieceRotate.y=grille[6][j].y;
  for (var i=0; i<6; i++){
    grille[i][j]=grille[i+1][j];
    grille[i][j].y-=97;
    if(grille[i][j].objet!=null){
      grille[i][j].objet.y-=97
    }
  }
  grille[6][j]=pieceRotate;
  grille[6][j].objet=tmp.objet;
  if(grille[6][j].objet!=null){
    modifObjet(grille[6][j]);
  }
  for(var i=0; i<joueur.length;i++){
    if (joueur[i].x==grille[6][j].x){
      if(joueur[i].y==100){
        joueur[i].y=682;
      }
      else {
        joueur[i].y-=97;
      }
    }
  }
  return tmp;
}

function appuie3(grille, pieceRotate, joueur, i){
  var tmp=grille[i][6];
  tmp.x=1000;
  tmp.y=200;
  pieceRotate.x=grille[i][0].x;
  pieceRotate.y=grille[i][0].y;
  for(var j=6; j>0; j--){
    grille[i][j]=grille[i][j-1];
    grille[i][j].x+=97;
    if(grille[i][j].objet!=null){
      grille[i][j].objet.x+=97
    }
  }
  grille[i][0]=pieceRotate;
  grille[i][0].objet=tmp.objet;
  if(grille[i][0].objet!=null){
    modifObjet(grille[i][0]);
  }
  for(var j=0; j<joueur.length;j++){
    if (joueur[j].y==grille[i][0].y){
      if(joueur[j].x==682){
        joueur[j].x=100;
      }
      else {
        joueur[j].x+=97;
      }
    }
  }
  return tmp;
}
