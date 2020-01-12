
// Initialisation de tous les sprites/anim
function fournirImage(str) {
	var image=loadImage(str);
	return image;
}

function initSpriteTile1(image) {
	var tile1_frames=loadJSON("assets/tiles1.json");
	var tile1_sprites=loadSpriteSheet(image,tile1_frames);
	return tile1_sprites;
}
function initAnimTile1(sprites) {
	var tile1_anim=loadAnimation(sprites);
	return tile1_anim;
}

function initSpriteTile2(image) {
	var tile2_frames=loadJSON("assets/tiles2.json");
	var tile2_sprites=loadSpriteSheet(image,tile2_frames);
	return tile2_sprites;
}
function initAnimTile2(sprites) {
	var tile2_anim=loadAnimation(sprites);
	return tile2_anim;
}

function initSpriteTile3(image) {
	var tile3_frames=loadJSON("assets/tiles3.json");
	var tile3_sprites=loadSpriteSheet(image,tile3_frames);
	return tile3_sprites;
}
function initAnimTile3(sprites) {
	var tile3_anim=loadAnimation(sprites);
	return tile3_anim;
}

function initSpriteTitre(image) {
	var titre_frame=loadJSON("assets/titre.json");
	var titre_sprite=loadSpriteSheet(image,titre_frame);
	return titre_sprite;
}
function initAnimTitre(sprite) {
	var titre_anim=loadAnimation(sprite);
	return titre_anim;
}

function initSpriteEncadre(image) {
	var Encadre_frame=loadJSON("assets/Encadrer.json");
	var Encadre_sprite=loadSpriteSheet(image,Encadre_frame);
	return Encadre_sprite;
}
function initAnimEncadre(sprite) {
	var encadre_anim=loadAnimation(sprite);
	return encadre_anim;
}

function initSpriteFlecheBas(image) {
	var FlecheBas_frame=loadJSON("assets/FlecheBas.json");
	var FlecheBas_sprite=loadSpriteSheet(image,FlecheBas_frame);
	return FlecheBas_sprite;
}
function initAnimFlecheBas(sprite) {
	var flecheBas_anim=loadAnimation(sprite);
	return flecheBas_anim;
}

function initSpriteFlecheHaut(image) {
	var FlecheHaut_frame=loadJSON("assets/FlecheHaut.json");
	var FlecheHaut_sprite=loadSpriteSheet(image,FlecheHaut_frame);
	return FlecheHaut_sprite;
}
function initAnimFlecheHaut(sprite) {
	var flecheHaut_anim=loadAnimation(sprite);
	return flecheHaut_anim;
}

function initSpriteFlecheGauche(image) {
	var FlecheGauche_frame=loadJSON("assets/FlecheGauche.json");
	var FlecheGauche_sprite=loadSpriteSheet(image,FlecheGauche_frame);
	return FlecheGauche_sprite;
}
function initAnimFlecheGauche(sprite) {
	var flecheGauche_anim=loadAnimation(sprite);
	return flecheGauche_anim;
}

function initSpriteFlecheDroite(image) {
	var FlecheDroite_frame=loadJSON("assets/FlecheDroite.json");
	var FlecheDroite_sprite=loadSpriteSheet(image,FlecheDroite_frame);
	return FlecheDroite_sprite;
}
function initAnimFlecheDroite(sprite) {
	var flecheDroite_anim=loadAnimation(sprite);
	return flecheDroite_anim;
}

function initSpritePerso(image) {
	var persos_frame=loadJSON("assets/persos.json");
	var persos_sprite=loadSpriteSheet(image,persos_frame);
	return persos_sprite;
}
function initAnimPerso(sprite) {
	var persos_anim=loadAnimation(sprite);
	return persos_anim;
}

function initSpriteObjet(image) {
	var objets_frame=loadJSON("assets/objets.json");
	var objets_sprite=loadSpriteSheet(image,objets_frame);
	return objets_sprite;
}
function initAnimObjet(sprite) {
	var objets_anim=loadAnimation(sprite);
	return objets_anim;
}

function initSpriteBille(image) {
	var billes_frame=loadJSON("assets/billes.json");
	var billes_sprite=loadSpriteSheet(image,billes_frame);
	return billes_sprite;
}
function initAnimBille(sprite) {
	var billes_anim=loadAnimation(sprite);
	return billes_anim;
}

function initSpriteCoupe(image) {
	var coupe_frame=loadJSON("assets/coupe.json");
	var coupe_sprite=loadSpriteSheet(image,coupe_frame);
	return coupe_sprite;
}
function initAnimCoupe(sprite) {
	var coupe_anim=loadAnimation(sprite);
	return coupe_anim;
}

function initSpriteSpider(image) {
	var spiders_frame=loadJSON("assets/spiders.json");
	var spiders_sprite=loadSpriteSheet(image,spiders_frame);
	return spiders_sprite;
}
function initAnimSpider(sprite) {
	var spiders_anim=loadAnimation(sprite);
	return spiders_anim;
}

function affichePieceRotate(tile_act) {
  var pieceRotate=createSprite(tile_act.x,tile_act.y);
  pieceRotate.addAnimation('rotate',tile_act.nom);
  pieceRotate.animation.stop();
	pieceRotate.animation.changeFrame(tile_act.rotation)
	return pieceRotate;
}

function afficherTitre(titre_anim){
	titre_sprite=createSprite(1000,100);
  titre_sprite.addAnimation('Afficher',titre_anim);
}

function afficherEncadrer(Encadrer_anim){
	Encadrer_sprite=createSprite(1000,700);
  Encadrer_sprite.addAnimation('Afficher',Encadrer_anim);
}

function afficherGrille(grille){
	var chemin = new Array();
	for(var i=0; i<7; i++){
		chemin[i]=new Array();
    for(var j=0; j<7; j++){
			chemin[i][j]=new spriteChemin(null, null);
			chemin[i][j].grille=createSprite(grille[i][j].x,grille[i][j].y);
			chemin[i][j].grille.addAnimation('Afficher',grille[i][j].nom);
			chemin[i][j].grille.animation.stop();
			chemin[i][j].grille.animation.changeFrame(grille[i][j].rotation);
			chemin[i][j].grille.mouseActive=true;
			if(grille[i][j].objet!=null){
				chemin[i][j].objet=createSprite(grille[i][j].objet.x, grille[i][j].objet.y);
				chemin[i][j].objet.addAnimation('Afficher', grille[i][j].objet.img);
				chemin[i][j].objet.animation.changeFrame(grille[i][j].objet.frame);
				chemin[i][j].objet.animation.stop();
			}
    }
  }
	return chemin;
}

//Retirer pièce de la grille
function removeGrille(grille){
	for(var i=0; i<7; i++){
    for(var j=0; j<7; j++){
			removeSprite(grille[i][j].grille);
			if(grille[i][j].objet!=null){
				removeSprite(grille[i][j].objet);
			}
    }
  }
}

//Affichage des fleches autour du plateau
function afficherFleche(){
	tabFleche=new Array();
	for(var i=0; i<7;i++){
		tabFleche[i]=new Array();
	}

	x=100;
	y=35;
	fleche_act=FlecheBas_anim;
	for(var i=0; i<4; i++){
		for(var j=0; j<7; j++){
			tabFleche[i][j]=createSprite(x,y);
			tabFleche[i][j].addAnimation('Afficher',fleche_act);
			tabFleche[i][j].animation.changeFrame(j);
			tabFleche[i][j].animation.stop();
			tabFleche[i][j].mouseActive=true;
			if(fleche_act==FlecheHaut_anim || fleche_act==FlecheBas_anim){
				x+=97;
			}
			else {
				y+=97;
			}
		}
		if(i==0){
			fleche_act=FlecheGauche_anim;
			x=100+(97*7)-71+35;
			y=100;
		}
		else if (i==1) {
			fleche_act=FlecheHaut_anim;
			x=100;
			y=100+(97*7)-71+35;
		}
		else if(i==2){
			fleche_act=FlecheDroite_anim;
			x=35;
			y=100;
		}
	}
	return tabFleche;
}

// Remove d'une fleche
function removeFleche(tabFleche){
	for(var i=0; i<4; i++){
		for(var j=0; j<7; j++){
			removeSprite(tabFleche[i][j]);
		}
	}
}

//Afficher perso dans la grille
function afficherPerso(joueur){
	var perso= new Array();
	for(var i=0; i<joueur.length; i++){
		perso[i]=createSprite(joueur[i].x, joueur[i].y);
		perso[i].addAnimation('Afficher', joueur[i].img);
		perso[i].animation.changeFrame(joueur[i].frame);
		perso[i].animation.stop();
	}
	return perso;
}

// Remove le perso de la grille
function removePerso(joueur){
	for(var i=0; i<joueur.length; i++){
		removeSprite(joueur[i]);
	}
}

// Affiche les objets à l'extérieur du plateau
function afficherObjetJoueur(joueur,x,y){
    var liste = joueur.listeObjet;
    var listeObj = new Array();
    for(var i=0;i<joueur.listeObjet.length;i++){
        var tmp=createSprite(x,y);
        tmp.addAnimation('Affiche', objets_anim);
        tmp.animation.stop();
        x+=40;
        listeObj[i]=tmp;
        tmp.animation.changeFrame(liste[i]);
    }
    return listeObj;
}

//Suppression d'un objet en dehors de la grille
function supprObjAffichage(obj){
    removeSprite(obj);
}

// Affichage d'un perso en dehors de la grille
function afficherPersoInterface(joueur,x,y){
	var perso = createSprite(x,y);
	perso.addAnimation('afficher',joueur.img);
	perso.animation.changeFrame(joueur.frame);
	perso.animation.stop();
	return perso;
}
