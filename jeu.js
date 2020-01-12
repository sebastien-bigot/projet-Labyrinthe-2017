
//Création de toutes les variables nécessaires pour le jeu
var img;

var tile1_frames;
var tile2_frames;
var tile3_frames;
var titre_frames;
var Encadrer_frames;
var FlecheBas_frames;
var FlecheDroite_frames;
var FlecheGauche_frames;
var FlecheHaut_frames;
var persos_frames;
var objets_frames;
var billes_frames;
var coupe_frames;
var spiders_frames;

var tile1_sprites;
var tile2_sprites;
var tile3_sprites;
var titre_sprites;
var Encadrer_sprites;
var FlecheBas_sprites;
var FlecheDroite_sprites;
var FlecheGauche_sprites;
var FlecheHaut_sprites;
var persos_sprites;
var objets_sprites;
var billes_sprites;
var coupe_sprites;
var spiders_sprites;

var tile1_anim;
var tile2_anim;
var tile3_anim;
var titre_anim;
var Encadrer_anim;
var FlecheBas_anim;
var FlecheDroite_anim;
var FlecheGauche_anim;
var FlecheHaut_anim;
var persos_anim;
var objets_anim;
var billes_anim;
var coupe_anim;
var spiders_anim;

var rdm_idx;

var tile_act;
var chemin_act;
var fleche_act;


var frame=0;

var grille;
var tabFleche;
var imageGrille;

var x;
var y;

var perso;
var persoSprite;

var insertPiece="false";
var deplacementJoueur="false";
var numJoueur=0;

//Chargement de tous les sprites/anim
function preload(){
  img=fournirImage("sprites/sprite.png");

	tile1_sprites=initSpriteTile1(img);
	tile1_anim=initAnimTile1(tile1_sprites);

	tile2_sprites=initSpriteTile2(img);
	tile2_anim=initAnimTile2(tile2_sprites);

	tile3_sprites=initSpriteTile3(img);
	tile3_anim=initAnimTile3(tile3_sprites);

	titre_sprites=initSpriteTitre(img);
	titre_anim=initAnimTitre(titre_sprites);

	Encadrer_sprites=initSpriteEncadre(img);
	Encadrer_anim=initAnimEncadre(Encadrer_sprites);

	FlecheBas_sprites=initSpriteFlecheBas(img);
	FlecheBas_anim=initAnimFlecheBas(FlecheBas_sprites);

	FlecheHaut_sprites=initSpriteFlecheHaut(img);
	FlecheHaut_anim=initAnimFlecheHaut(FlecheHaut_sprites);

	FlecheGauche_sprites=initSpriteFlecheGauche(img);
	FlecheGauche_anim=initAnimFlecheGauche(FlecheGauche_sprites);

	FlecheDroite_sprites=initSpriteFlecheDroite(img);
	FlecheDroite_anim=initAnimFlecheDroite(FlecheDroite_sprites);

	persos_sprites=initSpritePerso(img);
	persos_anim=initAnimPerso(persos_sprites);

	objets_sprites=initSpriteObjet(img);
	objets_anim=initAnimObjet(objets_sprites);

	billes_sprites=initSpriteBille(img);
	billes_anim=initAnimBille(billes_sprites);

	coupe_sprites=initSpriteCoupe(img);
	coupe_anim=initAnimCoupe(coupe_sprites);

	spiders_sprites=initSpriteSpider(img);
	spiders_anim=initAnimSpider(spiders_sprites);
}

function setup() {
	//Création du canvas
  clear();
  createCanvas(1200,780);

    // Affichage d'une pièce aléatoire en haut à droite
  pieceRotate=createPieceRotate();
  spritePieceRotate=affichePieceRotate(pieceRotate);
  spritePieceRotate.mouseActive=true;


  // Affichage du Titre du jeu
  afficherTitre(titre_anim);

  // Affichage du cadre
  afficherEncadrer(Encadrer_anim);

  // Initialisation de la grille
  grille=initGrille();

  // Affichage des 18 objets sur le plateau aléatoirement
  tabObjet(grille);

  // Affichage de la grille avec les images en rotation aléatoire
  spriteGrille=afficherGrille(grille);

  // Affichage des flèches
  tabFleche=afficherFleche(tabFleche);

 // Création d'un personnage sur le plateau ayant une liste d'objet à récupérer
  perso=new Array();
  perso[0]=new joueur(persos_anim,8,100,100,[0,1,2,3,4,5]);
  perso[1]=new joueur(persos_anim,1,391,100,[6,7,8,9,10,11]);
  perso[2]=new joueur(persos_anim,2,682,100,[12,13,14,15,16,17]);
  persoSprite=afficherPerso(perso);


  perso[0].listeObjAffichage=afficherObjetJoueur(perso[0],950,350);
  afficherPersoInterface(perso[0],925,315);
  perso[1].listeObjAffichage=afficherObjetJoueur(perso[1],950,450);
  afficherPersoInterface(perso[1],925,415);
  perso[2].listeObjAffichage=afficherObjetJoueur(perso[2],950,550);
  afficherPersoInterface(perso[2],925,515);
}

function draw(){
  clear();
  background(0,0,0);
  textSize(32);
  fill(255,255,255);
  text('Joueur 1', 950, 330);
  text('Joueur 2', 950, 430);
  text('Joueur 3', 950, 530);

  if (insertPiece=="false" && deplacementJoueur=="false"){
    textSize(20);
    text('Au tour du joueur '+(numJoueur+1), 870,680);
    text('Orientez la pièce libre puis', 870,715);
    text('choississez une entrée ...', 870,735);
    if(spritePieceRotate.mouseIsOver && mouseWentDown(LEFT)) {
      console.log("Appui pièce rotation");
      pieceRotate=changementImage(pieceRotate);
      removeSprite(spritePieceRotate);
      spritePieceRotate=affichePieceRotate(pieceRotate);
      spritePieceRotate.mouseActive=true;
    }

    for(var i=0;i<4;i++){
  	  for(var j=0;j<7;j++){
  		    if(tabFleche[i][j].mouseIsOver && mouseWentDown(LEFT)) {
  			       console.log("Appui sur Fleche "+i+" "+ j);
               removeGrille(spriteGrille);
               if (i==0){
                 pieceRotate=appuie0(grille,pieceRotate, perso, j);
               }

               else if (i==1){
                 pieceRotate=appuie1(grille,pieceRotate,perso,j);
               }

               else if (i==2){
                 pieceRotate=appuie2(grille,pieceRotate,perso,j);
               }

               else if (i==3){
                 pieceRotate=appuie3(grille,pieceRotate,perso, j);
               }
               spriteGrille=afficherGrille(grille);
               removeSprite(spritePieceRotate);
               spritePieceRotate=affichePieceRotate(pieceRotate);
               spritePieceRotate.mouseActive=true;
               removeFleche(tabFleche);
               tabFleche=afficherFleche();
               removePerso(persoSprite);
               persoSprite=afficherPerso(perso);
               insertPiece="true";
  		    }
  	 }
    }
  }

  if(insertPiece=="true" && deplacementJoueur=="false"){
    textSize(20);
    text('Au tour du joueur '+(numJoueur+1), 870,680);
    text('Choissisez une case d arrivée', 869,715);
    for(var i=0;i<7;i++){
      for(var j=0;j<7;j++){
        if(spriteGrille[i][j].grille.mouseIsOver && mouseWentDown(LEFT)){
          console.log("Appui sur chemin "+i+" "+ j);
          removePerso(persoSprite);
          removeFleche(tabFleche);
          removeGrille(spriteGrille);
          perso[numJoueur].x=grille[i][j].x;
          perso[numJoueur].y=grille[i][j].y;
          grille[i][j]=prendObjet(perso[numJoueur], grille[i][j]);
          spriteGrille=afficherGrille(grille);
          persoSprite=afficherPerso(perso);
          tabFleche=afficherFleche();
          deplacementJoueur="true";
        }
      }
    }
  }

  if(insertPiece=="true" && deplacementJoueur=="true"){
    if(perso[numJoueur].nbrObjetRammasse==6){
      clear();
      background(0,0,0);
      textSize(32);
      fill(255,255,255);
      text('Joueur 1', 950, 330);
      text('Joueur 2', 950, 430);
      text('Joueur 3', 950, 530);
      textSize(20);
      text('Le joueur '+(numJoueur+1)+" a gagné", 870,680);
      noLoop();
    }
    insertPiece="false";
    deplacementJoueur="false";
    if (numJoueur==2){
      numJoueur=0;
    }
    else{
      numJoueur+=1;
    }
  }

  drawSprites();
}
