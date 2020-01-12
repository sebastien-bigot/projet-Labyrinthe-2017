
// Initialisation de la grille de jeu
function initGrille(){
  grille=new Array();
  for(var i=0; i<7;i++){
    grille[i]=new Array();
  }
  x=100;
  y=100;
  for(var i=0; i<7; i++){
    for(var j=0; j<7; j++){
      rdm_idx=getRandomArbitrary(0,3);
      if (rdm_idx<1){
        grille[i][j]= new piece(tile1_anim,x,y,imageAleatoire(), null);
      }
      else if (rdm_idx>=1 && rdm_idx<2 ) {
        grille[i][j]= new piece(tile2_anim,x,y,imageAleatoire(), null);
      }
      else {
        grille[i][j]= new piece(tile3_anim,x,y,imageAleatoire(), null);
      }
      x+=97;
    }
    y+=97;
    x=100;
  }
  return grille;
}
// Fonction random
function getRandomArbitrary(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// Création de la pièce qui rotate (en haut à droite)
function createPieceRotate(){
  var rdm_idx=getRandomArbitrary(0,3);
  if (rdm_idx<1){
    tile_act=new piece(tile1_anim,1000,200,1,null);
    }
  else if (rdm_idx>=1 && rdm_idx<2 ) {
    tile_act=new piece(tile2_anim,1000,200,1,null);
    }
  else {
    tile_act=new piece(tile3_anim,1000,200,1,null);
  }
  return tile_act;
}

// Changement de frame d'une pièece
function changementImage(piece){
  if (piece.rotation==3) piece.rotation=0;
  else piece.rotation+=1;
  return piece
}

// Choix d'une image de la pièce aléatoire
function imageAleatoire(){
  var rdm_idx=getRandomArbitrary(0,3);
  if (rdm_idx<1){
    return 0;
  }
  else if (rdm_idx>=1 && rdm_idx<2 ) {
    return 1;
  }
  else {
    return 2;
  }
}

// Création d'une pièece
function piece(nom, x, y, rotation, objet){
  this.nom=nom;
  this.x=x;
  this.y=y;
  this.rotation=rotation;
  this.objet=objet;
}

// Création d'un joueur
function joueur(img, frame, x, y, listeObjet){
  this.img=img;
  this.frame=frame;
  this.x=x;
  this.y=y;
  this.listeObjet=listeObjet;
  this.listeObjAffichage=null;
  this.nbrObjetRammasse=0;
}

// Création d'un objet
function objet(img,frame, x, y){
  this.img=img;
  this.frame=frame;
  this.x=x;
  this.y=y;
}


function spriteChemin(grille,objet){
  this.grille=grille;
  this.objet=objet;
}

// Création des 18 objets dans la grille
function tabObjet(grille){
  for(var i=0; i<18; i++){
    var bool= false;
    while(bool==false){
      var rdm_x=getRandomArbitrary(0,7);
      var rdm_y=getRandomArbitrary(0,7);
      if(grille[rdm_x][rdm_y].objet==null){
        console.log("Ajout objet");
        grille[rdm_x][rdm_y].objet=new objet(objets_anim,i,grille[rdm_x][rdm_y].x+30, grille[rdm_x][rdm_y].y-30);
        bool= true;
      }
    }
  }
}
// Décaler l'objet en même temps que les pièces
function modifObjet(piece){
  piece.objet.x=piece.x+30;
  piece.objet.y=piece.y-30;
}

//Récupérer l'objet du personnage (qu'il a dans sa liste)
function prendObjet(joueur, piece){
  if(piece.objet!=null){
    if(joueur.listeObjet[joueur.nbrObjetRammasse]==piece.objet.frame){
      piece.objet=null;
      supprObjAffichage(joueur.listeObjAffichage[joueur.nbrObjetRammasse]);
      joueur.nbrObjetRammasse+=1;
      return piece;
    }
  }
  return piece;
}
