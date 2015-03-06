var app = angular.module("Panorama", []);

var artistes = [
  {
    'id':1,
    'name':'ALESIA',
    'jour':'SAMEDI 4 AVRIL',
    'jourId':2,
    'heure':'05h00',
    'heureId':5,
    'ordre_passage':16,
    'style':'Electro',
    'isChecked':'FALSE',
    'salle':'Sésame',
    'salleId':3,
    'youtube':'https://youtube.com/watch?v=M0wWYKfl-Q8',
    'facebook':'https://www.facebook.com/alesia14thstreet?fref=ts',
    'twitter':'',
    'soundcloud':'',
    'description':'Les jeunes producteurs Devoted To God et Nomak forment ALESIA, projet le plus influent du collectif Point Point dont les membres seront tous présents cette année au festival. Leur musique s\'est propagée à la vitesse de la lumière sur la toile au point d\'attirer l\'attention de Skrillex, qui leur a proposé de sortir leur EP « Andrea » sur son label Oswla et de partager l\'affiche en compagnie de Diplo lors d\'une longue tournée aux Etats-Unis. Les productions du duo sont redoutables et mélangent tous azimuts bass music, electro, sonorités industrielles et trap music. La prestation d\'ALESIA sur la scène Sésame devrait, à n\'en pas douter, être l\'un des moments forts de ce samedi.',
    'pic_link_black':'images/artistes/1.jpg',
    'pic_link_color':'images/artistes/1_c.jpg'
  },
  {
    'id':2,
    'name':'THE BLOODY BEETROOTS (SBCR)',
    'jour':'VENDREDI 3 AVRIL',
    'jourId':1,
    'heure':'00h35',
    'heureId':0,
    'ordre_passage':11,
    'style':'Electro',
    'isChecked':'FALSE',
    'salle':'Grand Hall',
    'salleId':1,
    'youtube':'https://youtube.com/watch?v=JqLSn5i6CeQ',
    'facebook':'https://www.facebook.com/thebloodybeetroots?fref=ts',
    'twitter':'',
    'soundcloud':'',
    'description':'Les BLOODY BEETROOTS… A moins de débarquer d’une autre planète, impossible d’avoir été épargné par la formation la plus énervée du monde de l’electro au cours de ces 8 dernières années. Avec 2 albums et 11 EP, mais surtout grâce à leurs performances live tapageuses, les BLOODY BEETROOTS ont ouvert une brèche entre le punk, le hard rock et l’electro, pour mieux faire entrer tous ses éléments en fusion. De ce magma surgissent des déflagrations tectoniques d’une puissance imparable. Après 2 premiers passages en formation complète sur les terres morlaisiennes, Sir Bob Cornelius Rifo nous revient cette fois seul aux manettes. Leader charismatique du groupe, SBCR va s’employer avec sa rage habituelle à affoler les sismographes, et porter le public à incandescence. Woop Woop !',
    'pic_link_black':'images/artistes/2.jpg',
    'pic_link_color':'images/artistes/2_c.jpg'
  },
  {
    'id':3,
    'name':'BLUTCH',
    'jour':'VENDREDI 3 AVRIL',
    'jourId':1,
    'heure':'22h00',
    'heureId':22,
    'ordre_passage':3,
    'style':'Electro',
    'isChecked':'FALSE',
    'salle':'Chapiteau',
    'salleId':2,
    'youtube':'https://youtube.com/watch?v=Sr1l4OVQMmo',
    'facebook':'https://www.facebook.com/pages/Blutch/333167113396807?fref=ts',
    'twitter':'',
    'soundcloud':'',
    'description':'Révélé aux Transmusicales en 2014, ce beatmaker breton pioche dans tous les styles musicaux pour créer sa propre palette sonore. Tout comme ses contemporains Fakear ou Superpoze, BLUTCH a les oreilles baladeuses. Ses beats entêtants construits autour de samples épars et de nappes oniriques, emportent loin l\'auditeur. Mêlant pulsations hip hop et house, ses productions évoquent tour à tour les ambiances ouatées de Boards Of Canada ou les envolées électro nineties de Bonobo. Et c\'est sur scène, armé d\'un contrôleur et casquette vissée sur la tête, que le jeune producteur révèle pleinement tous ses talents d\'alchimiste.',
    'pic_link_black':'images/artistes/3.jpg',
    'pic_link_color':'images/artistes/3_c.jpg'
  },
  {
    'id':4,
    'name':'BORIS BREJCHA',
    'jour':'VENDREDI 3 AVRIL',
    'jourId':1,
    'heure':'03h35',
    'heureId':3,
    'ordre_passage':17,
    'style':'Electro',
    'isChecked':'FALSE',
    'salle':'Grand Hall',
    'salleId':1,
    'youtube':'https://youtube.com/watch?v=uUQ8Wgqayp4',
    'facebook':'https://www.facebook.com/BorisBrejcha.Official?fref=ts',
    'twitter':'',
    'soundcloud':'',
    'description':'Sans fracas, BORIS BREJCHA est en train de se faire une place de choix parmi l’élite de la techno. Et c’est bien mérité. L’Allemand fait partie de ses musiciens qui ont hissé la production au rang de science. Inventeur de son propre style, la high-tech minimal, il fait preuve d’une incroyable maîtrise dans le design sonore : bassline, percussions, textures, mélodies, arrangements… rien n’est laissé au hasard pour parvenir à un résultat imparable. BREJCHA cultive l’indépendance comme une valeur essentielle. Il vient d’ailleurs de créer FCKNG SERIOUS, une microstructure-laboratoire qui fait à la fois office de label et de tourneur. Après avait marqué la 16ème édition par un set démentiel, on est très impatients de retrouver BORIS BREJCHA pour clore cette première soirée en beauté.',
    'pic_link_black':'images/artistes/4.jpg',
    'pic_link_color':'images/artistes/4_c.jpg'
  },
  {
    'id':5,
    'name':'BRODINSKI',
    'jour':'SAMEDI 4 AVRIL',
    'jourId':2,
    'heure':'23h20',
    'heureId':23,
    'ordre_passage':7,
    'style':'Electro',
    'isChecked':'FALSE',
    'salle':'Grand Hall',
    'salleId':1,
    'youtube':'https://youtube.com/watch?v=VQu-rJEoYQY',
    'facebook':'https://www.facebook.com/brodinski?fref=ts',
    'twitter':'',
    'soundcloud':'',
    'description':'Label manager, Dj, producteur... BRODINSKI fait partie de ces artistes français devenus absolument incontournables. Avec Yuksek, Woodkid et The Shoes, il a écrit les lettres de noblesse de la scène électronique rémoise. Et que dire de son label Bromance, crée en 2011 avec Manu Barron, devenu une référence internationale ? Mais si tout lui réussit, c\'est surtout parce qu\'il a su imprimer sa patte, à la croisée de deux mondes musicaux : la techno et le hip hop. Non seulement ils nous a tous fait danser au moins une fois dans notre vie, mais il a aussi conquis le cœur de monstres sacrés comme Kanye West, pour qui il a endossé le rôle de producteur sur l’album « Yeezus ». Petite info : son premier album sort en mars 2015... Un bon avant-goût de ce qui vous attend un mois plus tard !',
    'pic_link_black':'images/artistes/5.jpg',
    'pic_link_color':'images/artistes/5_c.jpg'
  },
  {
    'id':6,
    'name':'BRULIN',
    'jour':'DIMANCHE 5 AVRIL',
    'jourId':3,
    'heure':'21h00',
    'heureId':21,
    'ordre_passage':1,
    'style':'Electro',
    'isChecked':'FALSE',
    'salle':'Coatelan',
    'salleId':4,
    'youtube':'https://youtube.com/watch?v=NOVID',
    'facebook':'https://www.facebook.com/brulinmusic?fref=ts',
    'twitter':'',
    'soundcloud':'',
    'description':'BRÜLIN, c’est Vincent Brülin, c’est-à-dire une moustache bien taillée, une chemise aux motifs étranges surmontée d’une paire de bretelles bien tendues. Mais c’est aussi et surtout un sens du groove diabolique ! Membre du groupe Fortune, multi-instrumentiste confirmé, il a collaboré avec Alain Chamfort, L, Diving with Andy ou Gaël Faure. Accompagné sur scène par Christophe Axford aux machines et Emiliano Turi à la batterie, BRÜLIN compose des chansons synth-pop aux mélodies colorées, où s’entrelacent émotions intimes et énergie contagieuse. Son premier EP doit voir le jour très prochainement. A découvrir !',
    'pic_link_black':'images/artistes/6.jpg',
    'pic_link_color':'images/artistes/6_c.jpg'
  },
  {
    'id':7,
    'name':'COELY',
    'jour':'SAMEDI 4 AVRIL',
    'jourId':2,
    'heure':'21h20',
    'heureId':21,
    'ordre_passage':3,
    'style':'Electro',
    'isChecked':'FALSE',
    'salle':'Sésame',
    'salleId':3,
    'youtube':'https://youtube.com/watch?v=m3f8-oxLXr8',
    'facebook':'https://www.facebook.com/Coely?fref=ts',
    'twitter':'',
    'soundcloud':'',
    'description':'A tout juste 21 ans, COELY est la petite bombe hip hop du moment. Dotée d’un talent hyper précoce, elle signait un contrat avec le label indépendant Beatville dès l\'âge de 18 ans. La rappeuse a rapidement mis la communauté hip hop belge à ses pieds, comme en attestent les divers awards qu’elle a déjà récoltés. Mais COELY ne compte pas s’arrêter en si bon chemin. Depuis 2013, ses passages dans les grands festivals européens ont fait le buzz. Grâce à un flow entraînant, une voix électrisante et une sincérité rayonnante, COELY offre sur scène un hip hop original, où les respirations R&B font l’effet du souffle qui précède l’explosion. A découvrir !',
    'pic_link_black':'images/artistes/7.jpg',
    'pic_link_color':'images/artistes/7_c.jpg'
  },
  {
    'id':8,
    'name':'COTTON CLAW',
    'jour':'SAMEDI 4 AVRIL',
    'jourId':2,
    'heure':'22h00',
    'heureId':22,
    'ordre_passage':4,
    'style':'Electro',
    'isChecked':'FALSE',
    'salle':'Chapiteau',
    'salleId':2,
    'youtube':'https://youtube.com/watch?v=EyRpVITtDxk',
    'facebook':'https://www.facebook.com/CottonClaw?fref=ts',
    'twitter':'',
    'soundcloud':'',
    'description':'Lassé de l\'obscurité de leurs studios respectifs, les 4 membres de COTTON CLAW ont décidé d\'unir leurs talents. Plus qu\'un simple collectif de producteurs, Lilea Narrative, Zo aka La Chauve-Souris, YoggyOne, Zerolex forment un véritable groupe au même titre que Birdy Nam Nam. Fort de ses expériences en solo, chacun apporte sa pierre à l\'édifice, créant une synergie peu commune. Armés de contrôleurs pads et de beaucoup d\'ingéniosité, le quatuor fait se rencontrer house feutrée et down tempo option abstract hip-hop. En résulte un son aussi savant qu\'hypnotique. Ne vous fiez donc pas à leur nom cotonneux, les griffes de ces quatre-là sont affutées comme jamais lorsqu\'il s\'agit de mettre le feu.',
    'pic_link_black':'images/artistes/8.jpg',
    'pic_link_color':'images/artistes/8_c.jpg'
  },
  {
    'id':9,
    'name':'DBFC',
    'jour':'SAMEDI 4 AVRIL',
    'jourId':2,
    'heure':'20h30',
    'heureId':20,
    'ordre_passage':2,
    'style':'Electro',
    'isChecked':'FALSE',
    'salle':'Grand Hall',
    'salleId':1,
    'youtube':'https://youtube.com/watch?v=xbS_wO1_nLQ',
    'facebook':'https://www.facebook.com/DBFCtheband?fref=ts',
    'twitter':'',
    'soundcloud':'',
    'description':'Constitué autour des compositeurs et producteurs Dombrance et David Shaw, DBFC ne se définit pas comme un groupe mais comme une sorte de « Gentlemen\'s Club ». Pourtant, à l\'écoute de leur musique, certes élégante, mais tapageuse, on pourrait penser que, la nuit venue, le quatuor fréquente également le Fight Club. A la manière des groupes de Manchester tels que Happy Mondays ou New Order, DBFC envisage la scène comme une fête. Ils sont aussi à l\'aise dans l\'écriture pop que dans la confection d\'hymnes dance imparables. Mais au fait, que peuvent bien signifier les initiales DBFC ? Et bien sachez que seuls les membres de ce club pourraient vous le révéler. Bienvenue au club tout de même !',
    'pic_link_black':'images/artistes/9.jpg',
    'pic_link_color':'images/artistes/9_c.jpg'
  },
  {
    'id':10,
    'name':'DDDXIE',
    'jour':'DIMANCHE 5 AVRIL',
    'jourId':3,
    'heure':'23h50',
    'heureId':23,
    'ordre_passage':3,
    'style':'Electro',
    'isChecked':'FALSE',
    'salle':'Coatelan',
    'salleId':4,
    'youtube':'https://youtube.com/watch?v=sw1U9ylqJ4k',
    'facebook':'https://www.facebook.com/DDDXIE?fref=ts',
    'twitter':'',
    'soundcloud':'',
    'description':'Co-fondateur de l\'excellent label lillois Alpage Records (qui abrite Marklion ou Bodybeat), Olivier Durteste est également producteur sous le nom de DDDXIE. Alias sous lequel il a sorti deux maxis et signé un remix de « Time To Dance » de The Shoes. Il dit aimer « jouer la techno d\'avant les Djs stars » : le concours d\'ego et la facilité, très peu pour lui ! DDDXIE porte l\'intransigeance en bandoulière. Sa techno est à l\'image de celle d\'Arnaud Rebotini : confectionnée avec des vieilles boites à rythmes et des synthés analogiques, elle se veut radicale et directe. Ses productions ne s\'embarrassent d\'aucun artifice et vont droit au but.',
    'pic_link_black':'images/artistes/10.jpg',
    'pic_link_color':'images/artistes/10_c.jpg'
  },
  {
    'id':11,
    'name':'DON RIMINI B2B SURFING LEONS',
    'jour':'VENDREDI 3 AVRIL',
    'jourId':1,
    'heure':'21h00',
    'heureId':21,
    'ordre_passage':2,
    'style':'Electro',
    'isChecked':'FALSE',
    'salle':'Grand Hall',
    'salleId':1,
    'youtube':'https://youtube.com/watch?v=z1BVZ0PMs9M',
    'facebook':'https://www.facebook.com/donrimini?fref=ts',
    'twitter':'',
    'soundcloud':'',
    'description':'4 ans après son passage remarqué à Panoramas, le producteur électro DON RIMINI revient semer la terreur sur le dancefloor du Grand Club. Cette fois-ci il sera accompagné de SURFING LEONS, Dj belge (donc forcément fou) multi-casquette : programmateur des Francofolies de Spa mais également taulier du label Format T. Ces deux-là ont pour point commun la même culture musicale à 360 degrés et l\'amour du head banging, et passent du coq à l\'âne en un claquement de doigt et en totale décontraction : rock, hip-hop, électro, tout y passe ! Soit un mix à quatre mains de musique d\'hier, d\'aujourd\'hui et de demain.',
    'pic_link_black':'images/artistes/11.jpg',
    'pic_link_color':'images/artistes/11_c.jpg'
  },
  {
    'id':12,
    'name':'FALABELLA',
    'jour':'SAMEDI 4 AVRIL',
    'jourId':2,
    'heure':'20h00',
    'heureId':20,
    'ordre_passage':1,
    'style':'Electro',
    'isChecked':'FALSE',
    'salle':'Sésame',
    'salleId':3,
    'youtube':'https://youtube.com/watch?v=TravJxyeXeo',
    'facebook':'https://www.facebook.com/FalabellaMusic?fref=ts',
    'twitter':'',
    'soundcloud':'',
    'description':'FALABELLA est le projet solo de Xavier Laporte, leader du groupe brestois Im Takt. Estampillés « Label Charrues » en 2014, Xavier et son acolyte Bertrand Roudaut ont fait forte impression sur la scène carhaisienne. Armés de synthétiseurs, de pads électroniques et de guitares, le duo mène la danse sur tous les fronts. Aussi dansante qu\'émotionnelle, leur électro chaloupée est faite de jolis paradoxes : froide en apparence, elle se pare de couleurs chatoyantes en empruntant au tropicalisme ses sonorités percussives. FALABELLA s\'autorise également de belles échappées pop grâce au chant aérien de Xavier, évoquant tour à tour les productions atmosphériques de Caribou et l\'electronica de Four Tet.',
    'pic_link_black':'images/artistes/12.jpg',
    'pic_link_color':'images/artistes/12_c.jpg'
  },
  {
    'id':13,
    'name':'FAR TOO LOUD',
    'jour':'VENDREDI 3 AVRIL',
    'jourId':1,
    'heure':'03h00',
    'heureId':3,
    'ordre_passage':15,
    'style':'Electro',
    'isChecked':'FALSE',
    'salle':'Sésame',
    'salleId':3,
    'youtube':'https://youtube.com/watch?v=VlnBh0hRpfM',
    'facebook':'https://www.facebook.com/fartooloud?fref=ts',
    'twitter':'',
    'soundcloud':'',
    'description':'Pour se faire un nom, les musiciens empruntent parfois des chemins tortueux. Dans le cas d’Oliver Cash, les choses furent assez simples et pourraient se résumer ainsi : la basse ! Navigant entre l’electro-house, le breakbeat et le dubstep, Oliver est devenu avec FAR TOO LOUD l’une des figures de proue de la bass music « made in UK », grâce à des titres qui lui ont offert une visibilité internationale, et qui laissent assez largement entrevoir ses intentions : « Bass Association », « Firestorm » ou encore « Drop The Bomb ». Son passage en novembre au Club Coatelan avait confirmé aux chanceux présents tout le bien qu’on en pense. Et s’il fête ses 10 ans de carrière cette année, rien ne semble pouvoir ralentir FAR TOO LOUD, le compteur toujours bloqué à 128 BPM. Play It Loud!',
    'pic_link_black':'images/artistes/13.jpg',
    'pic_link_color':'images/artistes/13_c.jpg'
  },
  {
    'id':14,
    'name':'FKJ LIVE',
    'jour':'SAMEDI 4 AVRIL',
    'jourId':2,
    'heure':'23h00',
    'heureId':23,
    'ordre_passage':6,
    'style':'Electro',
    'isChecked':'FALSE',
    'salle':'Chapiteau',
    'salleId':2,
    'youtube':'https://youtube.com/watch?v=ftLxvw_eFN0',
    'facebook':'https://www.facebook.com/frenchkiwijuice?fref=ts',
    'twitter':'',
    'soundcloud':'',
    'description':'Tu aimes le jus de kiwi ? Ça tombe bien parce que FKJ, ça veut dire French Kiwi Juice. Plus qu\'un amateur de fruits, le jeune Tourangeau est un musicien passionné et ses productions le prouvent. Des sonorités électroniques mais aussi soul, funk, et même R&B révèlent la très large palette musicale qui se cache sous ses dreadlocks. Membre du très en vogue label parisien Roche Musique, il crée l\'événement à chaque nouveau morceau. C\'est donc naturellement qu\'il enchaîne les scènes dans toute la France, et même jusqu\'en Asie ! Au programme de son projet live, des machines mais aussi des vrais instruments pour une performance artistique et électronique comme on les aime. Alors, vous venez faire le plein de vitamines ?',
    'pic_link_black':'images/artistes/14.jpg',
    'pic_link_color':'images/artistes/14_c.jpg'
  },
  {
    'id':15,
    'name':'FLAVIEN BERGER',
    'jour':'DIMANCHE 5 AVRIL',
    'jourId':3,
    'heure':'22h20',
    'heureId':22,
    'ordre_passage':2,
    'style':'Electro',
    'isChecked':'FALSE',
    'salle':'Coatelan',
    'salleId':4,
    'youtube':'https://youtube.com/watch?v=vrQxXjzkIFU',
    'facebook':'https://www.facebook.com/pages/Flavien-Berger/345609982248978?fref=ts',
    'twitter':'',
    'soundcloud':'',
    'description':'Loin de ses œuvres de jeunesse composées sur une Playstation, FLAVIEN BERGER pense désormais sa musique comme une suite de mouvements. A la fois organique et numérique, sa musique fait s\'alterner longues plages ambiant et moments de transe électroniques. Son chant, trituré et samplé à l\'infini, se retrouve au cœur de chacune de ses compositions. Sur scène, à l\'heure des shows ultra calibrés, Flavien prend la tangente, créant une musique de l\'instant qui s\'affranchit de tout schéma préétabli. Son dernier EP « Mars Balnéaire », véritable odyssée rétro-futuriste, emprunte autant à la surf pop et au krautrock qu’à l’esprit dada de notre Brigitte Fontaine régionale.',
    'pic_link_black':'images/artistes/15.jpg',
    'pic_link_color':'images/artistes/15_c.jpg'
  },
  {
    'id':16,
    'name':'THE GEEK & VRV',
    'jour':'SAMEDI 4 AVRIL',
    'jourId':2,
    'heure':'01h30',
    'heureId':1,
    'ordre_passage':11,
    'style':'Electro',
    'isChecked':'FALSE',
    'salle':'Chapiteau',
    'salleId':2,
    'youtube':'https://youtube.com/watch?v=qlS_q3ywnN4',
    'facebook':'https://www.facebook.com/thegeekxvrv?fref=ts',
    'twitter':'',
    'soundcloud':'',
    'description':'Avec leurs productions construites autour de samples empruntés au jazz ou à la soul, ce duo parisien s\'inscrit clairement dans la mouvance glitch hop : cette forme mutante de hip hop faite de rupture et d\'accidents, pratiquée par Prefuse 73 ou The Glitch Mob. Depuis leur signature sur le label américain OWSLA, la popularité de THE GEEK x VRV va grandissante. Ils ont assurés les premières parties de Pretty Lights et Gramatik et ont été adoubés par 20syl de C2C ou Odesza. Leur morceau « It\'s Because », playlisté sur Nova et relayé massivement sur la chaine YouTube TheSoundYouNeed a fini d\'asseoir la réputation ce duo de beamaker à suivre de très près.',
    'pic_link_black':'images/artistes/16.jpg',
    'pic_link_color':'images/artistes/16_c.jpg'
  },
  {
    'id':17,
    'name':'INFECTED MUSHROOM',
    'jour':'VENDREDI 3 AVRIL',
    'jourId':1,
    'heure':'02h05',
    'heureId':2,
    'ordre_passage':14,
    'style':'Electro',
    'isChecked':'FALSE',
    'salle':'Grand Hall',
    'salleId':1,
    'youtube':'https://youtube.com/watch?v=wQ3bJN1zLKw',
    'facebook':'https://www.facebook.com/infectedmushroom?fref=ts',
    'twitter':'',
    'soundcloud':'',
    'description':'Originaire d\'Israël, ce duo composé d\'Erez Eisen et Amit Duvdevani est un groupe majeur de la scène psychedelic trance. Leur premier album, « The Gathering », sorti en 1999 devient rapidement un classique du genre. En incluant dans leurs productions électroniques la guitare ou le piano, accordant également une place de plus en plus importante au chant, le groupe a beaucoup fait évoluer sa musique. Grâce à l\'éclectisme de leur démarche, piochant vers d\'autres styles comme la drum\'n\'bass et le dubstep, le duo s\'est affranchi de ses premiers amours. Toujours alambiqué dans sa forme mais davantage accessible avec ses mélodies plus pop, la musique du groupe attire désormais un très large public. En tournée mondiale pour défendre leur nouvel album « Friends On Mushroom », ils font étape à Panoramas pour l’une des deux seules dates en France.',
    'pic_link_black':'images/artistes/17.jpg',
    'pic_link_color':'images/artistes/17_c.jpg'
  },
  {
    'id':18,
    'name':'JOACHIM PASTOR',
    'jour':'SAMEDI 4 AVRIL',
    'jourId':2,
    'heure':'00h00',
    'heureId':0,
    'ordre_passage':8,
    'style':'Electro',
    'isChecked':'FALSE',
    'salle':'Sésame',
    'salleId':3,
    'youtube':'https://youtube.com/watch?v=uO3lN-hugaQ',
    'facebook':'https://www.facebook.com/JoachimPastor?fref=ts',
    'twitter':'',
    'soundcloud':'',
    'description':'JOAKIM PASTOR fait partie de ces producteurs de musique électronique dont le parcours commence très jeune… au conservatoire. Doté d’une solide éducation musicale classique, Joakim ne se fait pourtant pas prier lorsque l’un de ses professeurs l’encourage à troquer ses instruments contre un ordinateur. Et bien lui en a pris, car quelques années plus tard, ses premières productions se font repérer par Sébastien Leger puis Popof, ce dernier sortant en 2009 l’EP « Diform » sur son label Form. Aujourd’hui membre de la nouvelle écurie Hungry Music, aux côtés de ses potes Worakls et N’TO, JOAKIM PASTOR défend une tech-house subtile, groovy et mélodieuse.',
    'pic_link_black':'images/artistes/18.jpg',
    'pic_link_color':'images/artistes/18_c.jpg'
  },
  {
    'id':19,
    'name':'JOKE',
    'jour':'VENDREDI 3 AVRIL',
    'jourId':1,
    'heure':'22h40',
    'heureId':22,
    'ordre_passage':6,
    'style':'Electro',
    'isChecked':'FALSE',
    'salle':'Sésame',
    'salleId':3,
    'youtube':'https://youtube.com/watch?v=XgpLF0Qvh9M',
    'facebook':'https://www.facebook.com/the.jokejoke?fref=ts',
    'twitter':'',
    'soundcloud':'',
    'description':'0',
    'pic_link_black':'images/artistes/19.jpg',
    'pic_link_color':'images/artistes/19_c.jpg'
  },
  {
    'id':20,
    'name':'KAYTRANADA',
    'jour':'VENDREDI 3 AVRIL',
    'jourId':1,
    'heure':'23h20',
    'heureId':23,
    'ordre_passage':8,
    'style':'Electro',
    'isChecked':'FALSE',
    'salle':'Grand Hall',
    'salleId':1,
    'youtube':'https://youtube.com/watch?v=0ymI54DuMj8',
    'facebook':'https://www.facebook.com/Kaytranada?fref=ts',
    'twitter':'',
    'soundcloud':'',
    'description':'D\'abord repéré sous l\'alias Kaytradamus, ce beatmaker montréalais a très vite su s\'extraire de la jungle « soundcloudienne » en infusant une bonne dose de house à ses beats hip hop. Digne descendant de Jay Dilla ou Prefuse 73 donc, mais pas que… Car à la manière d\'un Jamie XX ou de Flume, KAYTRANADA excelle dans les deux registres. Son imparable hit « At All », sa collaboration avec les mythiques rappeurs de Mobb Deep ou encore ses remixes pour Diclosure et Janet Jackson sont là pour en témoigner. Grand admirateur du mythique producteur de rap Madlib, le Canadien fait preuve de la même ouverture d\'esprit et du sens de l\'innovation que son mentor. Aujourd\'hui signé sur le prestigieux label anglais XL Recordings, KAYTRANADA viendra présenter les titres de son premier album à paraitre courant 2015.',
    'pic_link_black':'images/artistes/20.jpg',
    'pic_link_color':'images/artistes/20_c.jpg'
  },
  {
    'id':21,
    'name':'KINK LIVE',
    'jour':'VENDREDI 3 AVRIL',
    'jourId':1,
    'heure':'03h15',
    'heureId':3,
    'ordre_passage':16,
    'style':'Electro',
    'isChecked':'FALSE',
    'salle':'Chapiteau',
    'salleId':2,
    'youtube':'https://youtube.com/watch?v=-0MoCENw8OQ',
    'facebook':'https://www.facebook.com/kink303?fref=ts',
    'twitter':'',
    'soundcloud':'',
    'description':'Strahil Velchev est parvenu à entrer dans la hype des producteurs-remixers les plus courus, sans mettre un pied en dehors de l’underground. Fan d’Aphex Twin comme de Jeff Mills, KiNK allie l’énergie de l’acid techno, le groove de la house, à la pure expérimentation sonore. Collectionneur de synthétiseurs modulaires (ceux qui ont des câbles et des boutons partout), KiNK est aussi un passionné d’innovations digitales, et n’hésite pas à expérimenter toute sorte de nouvelles machines sur scène. Hyper généreux en live, le Bulgare est capable d’improviser un jam au clavier à la manière d’un pianiste de jazz. Ses passages sont encore trop rares en France. A ne pas manquer !',
    'pic_link_black':'images/artistes/21.jpg',
    'pic_link_color':'images/artistes/21_c.jpg'
  },
  {
    'id':22,
    'name':'LAURENT GARNIER',
    'jour':'SAMEDI 4 AVRIL',
    'jourId':2,
    'heure':'02h20',
    'heureId':2,
    'ordre_passage':12,
    'style':'Electro',
    'isChecked':'FALSE',
    'salle':'Grand Hall',
    'salleId':1,
    'youtube':'https://youtube.com/watch?v=Bj8425Ma6F8',
    'facebook':'https://www.facebook.com/laurentgarnierofficial?fref=ts',
    'twitter':'',
    'soundcloud':'',
    'description':'Le « est-il encore nécessaire de présenter… ? » de cette édition 2015 est attribué à : LAURENT GARNIER ! De ses débuts de Dj à la fin des années 80 en tant que résident du mythique club Hacienda de Manchester jusqu\'à l\'avènement de la French Touch à l\'échelle planétaire, LAURENT GARNIER aura été de toutes les révolutions de la musique électronique. Tout à la fois passeur et acteur essentiel du mouvement, il a révélé les plus grands à travers ses Dj sets marathon. Devenu à son tour producteur dans les années 90, il a marqué de son empreinte indélébile le monde de la techno avec des morceaux emblématiques comme « Crispy Bacon » ou « Flashback ». Fervent défenseur de la technosphère, il est régulièrement désigné comme l’ambassadeur de la techno française. De Daft Punk à Brodinski, tous lui disent merci. Et nous aussi !',
    'pic_link_black':'images/artistes/22.jpg',
    'pic_link_color':'images/artistes/22_c.jpg'
  },
  {
    'id':23,
    'name':'LIDO',
    'jour':'VENDREDI 3 AVRIL',
    'jourId':1,
    'heure':'00h15',
    'heureId':0,
    'ordre_passage':10,
    'style':'Electro',
    'isChecked':'FALSE',
    'salle':'Chapiteau',
    'salleId':2,
    'youtube':'https://youtube.com/watch?v=1_WeBcBeuWU',
    'facebook':'https://www.facebook.com/Lidogotsongs?fref=ts',
    'twitter':'',
    'soundcloud':'',
    'description':'Après avoir accueilli Cashmere Cat l\'année dernière, voici avec LIDO, un autre poulain de l\'écurie Pelican Fly qui vient nous rendre visite. Derrière le rideau ne se cache pas une troupe de danseuses de cabaret mais bien un jeune norvégien qui saura lui aussi vous réchauffer le cœur. Tout comme ses copains de label, c\'est une musique très sensuelle que nous offre Lido, mélangeant beats hip hop, envolées nappes électroniques et harmonies R’N’B. Et en plus de son très bel EP « I Love You », Lido est un habitué des remix, transformant les morceaux de Flight Facilities, Alt-J ou encore Banks en petits bijoux boostés de grosses vibes. Prêt pour faire des vagues avec ton corps ?',
    'pic_link_black':'images/artistes/23.jpg',
    'pic_link_color':'images/artistes/23_c.jpg'
  },
  {
    'id':24,
    'name':'LOUIE P',
    'jour':'VENDREDI 3 AVRIL',
    'jourId':1,
    'heure':'22h40',
    'heureId':22,
    'ordre_passage':5,
    'style':'Electro',
    'isChecked':'FALSE',
    'salle':'Grand Hall',
    'salleId':1,
    'youtube':'https://youtube.com/watch?v=XWtIdL1U6iE',
    'facebook':'https://www.facebook.com/pages/Louie-P-Celestic/115799631828171?fref=ts',
    'twitter':'',
    'soundcloud':'',
    'description':'Dans la famille Celestin, je demande Louis-Philippe, le petit frère de Kevin... un peu plus connu sous son pseudo : Kaytranada ! A l’adolescence, ces deux garnements disparaissent des journées entières dans la cave familiale, où va éclore The Celestics, dans lequel LOUIE P rappe sur les premières productions hip hop du grand frère. Aujourd’hui signatures du label californien HW&W (aux côtés de STWO, notamment), les frères Celestin incarnent l’avant-garde de cette alliance fertile entre le hip hop et les musiques électroniques. Auteur d’une mixtape « Cause I Wanna », LOUIS P expose en 60 titres toute l’étendue de sa culture musicale, faisant se côtoyer Kaytranada (bien-sûr), SBTRKT, Method Man ou encore Mr Oizo. Bref, préparez-vous à un warm-up ultra ambiancé sur des beats hip hop, funk, dancehall et electro.',
    'pic_link_black':'images/artistes/24.jpg',
    'pic_link_color':'images/artistes/24_c.jpg'
  },
  {
    'id':25,
    'name':'MADBEN CYNETICS',
    'jour':'SAMEDI 4 AVRIL',
    'jourId':2,
    'heure':'03h00',
    'heureId':3,
    'ordre_passage':13,
    'style':'Electro',
    'isChecked':'FALSE',
    'salle':'Chapiteau',
    'salleId':2,
    'youtube':'https://youtube.com/watch?v=t9ZgvVnjHds',
    'facebook':'https://www.facebook.com/madbenofficial?ref=ts&fref=ts',
    'twitter':'',
    'soundcloud':'',
    'description':'Passé du statut d’étoile montante au rang de valeur sûre de la scène techno hexagonale, MADBEN vient présenter son nouveau live project. CYMATICS, c’est l’alliance de la vidéo et de la musique, grâce à un dispositif scénique dans lequel MADBEN disparait derrière des écrans illuminés par son acolyte Monsieur Nuage. Ce live se déploie comme une forme de dialogue entre lumière et son, un jeu entre couleurs et textures, une performance où la musique devient étincelante. Fidèle apôtre de l’esprit rave, prêcheur d’une techno où Laurent Garnier, Agoria et Electric Rescue font figure de trinité, MADBEN nous promet de beaux moments d’extase.',
    'pic_link_black':'images/artistes/25.jpg',
    'pic_link_color':'images/artistes/25_c.jpg'
  },
  {
    'id':26,
    'name':'MAX COOPER',
    'jour':'SAMEDI 4 AVRIL',
    'jourId':2,
    'heure':'03h30',
    'heureId':3,
    'ordre_passage':14,
    'style':'Electro',
    'isChecked':'FALSE',
    'salle':'Sésame',
    'salleId':3,
    'youtube':'https://youtube.com/watch?v=KHQDGohpBsQ',
    'facebook':'https://www.facebook.com/maxcoopermax?fref=ts',
    'twitter':'',
    'soundcloud':'',
    'description':'Inclassable parmi les genres et sous-genres de la musique électronique, MAX COOPER est tout simplement un artiste. Titulaire d’un doctorat, se destinant à la recherche en génétique, la musique devient son seul et unique projet à partir de 2010. L’œuvre de ce Londonien d\'adoption, né à Belfast, est en perpétuel mouvement. Scientifique et artiste, technicien et passionné, MAX COOPER mène une démarche expérimentale en dehors des sentiers battus. Ses sets représentent des expériences véritablement inédites, un passage dans un monde onirique, où le Britannique semble convier l’ADN des musiques électroniques pour mieux le recombiner sous vos yeux. Prêt pour le voyage ?',
    'pic_link_black':'images/artistes/26.jpg',
    'pic_link_color':'images/artistes/26_c.jpg'
  },
  {
    'id':27,
    'name':'MIDSIDE',
    'jour':'VENDREDI 3 AVRIL',
    'jourId':1,
    'heure':'23h00',
    'heureId':23,
    'ordre_passage':7,
    'style':'Electro',
    'isChecked':'FALSE',
    'salle':'Chapiteau',
    'salleId':2,
    'youtube':'https://youtube.com/watch?v=_HqV-ZSohJU',
    'facebook':'https://www.facebook.com/musicmidside?fref=ts',
    'twitter':'',
    'soundcloud':'',
    'description':'Brest ne se contente pas de nous offrir l’un des meilleurs festivals français avec Astropolis, elle voit naitre aussi des artistes de talent. La preuve une nouvelle fois avec MIDSIDE. Rapidement repéré par Dealeur de Musique, le Brestois se fait un nom grâce à deux titres aux sonorités tech-house : « Le Grand Jacques » (en hommage à Brel), et le remix de « Loveland » de Milky Chance, qui totalisent aujourd’hui plus d\'1 million d\'écoutes sur Soundcloud ! Pas de quoi prendre la grosse tête pour un artiste dont la musique reflète une sincérité non feinte. MIDSIDE continue d\'explorer de nouveaux horizons et nous prépare un mix house techno taillé pour la danse.',
    'pic_link_black':'images/artistes/27.jpg',
    'pic_link_color':'images/artistes/27_c.jpg'
  },
  {
    'id':28,
    'name':'MMMMM',
    'jour':'VENDREDI 3 AVRIL',
    'jourId':1,
    'heure':'20h00',
    'heureId':20,
    'ordre_passage':1,
    'style':'Electro',
    'isChecked':'FALSE',
    'salle':'Sésame',
    'salleId':3,
    'youtube':'https://youtube.com/watch?v=UT3S85Ovw8o',
    'facebook':'https://www.facebook.com/mmmmmtheband?fref=ts',
    'twitter':'',
    'soundcloud':'',
    'description':'« MmMmM c\'est le bruit d\'un cyclomoteur au démarrage, les premiers mots d\'un bébé ». Les six membres du groupe MmMmM, fans de Philippe Katerine, partagent avec le chanteur la même autodérision et un véritable amour du potache. Originaires de Saint-Lô, ces joyeux drilles sont tous multi-instrumentistes : guitares, synthés, batteries, boites à rythmes, tout y passe. En résultent un joyeux bordel, une pop hédoniste qui prend tout son sens sur scène. Un groupe anti-crise, totalement décomplexé et pétri d\'influences : house, hip hop, post punk, ce melting pot musical rappelle, dans l\'esprit, l\'éclectisme des Beastie Boys ou les excentriques collages The Avalanches.',
    'pic_link_black':'images/artistes/28.jpg',
    'pic_link_color':'images/artistes/28_c.jpg'
  },
  {
    'id':29,
    'name':'MOD3RN',
    'jour':'SAMEDI 4 AVRIL',
    'jourId':2,
    'heure':'01h30',
    'heureId':1,
    'ordre_passage':10,
    'style':'Electro',
    'isChecked':'FALSE',
    'salle':'Sésame',
    'salleId':3,
    'youtube':'https://youtube.com/watch?v=m5B9B9sZ9hA',
    'facebook':'https://www.facebook.com/pages/M%C3%B6d3rn/170692996426386?fref=ts',
    'twitter':'',
    'soundcloud':'',
    'description':'Parlons sérieusement. Si vous voulez vivre une expérience live hors du commun, ne ratez surtout pas MOD3RN ! Derrière ce projet se cachent trois artistes talentueux de la scène électronique française: Electric Rescue, Traumer et Maxime Dangles. Le résultat ? Une claque techno. Après déjà 4 EPs sortis sur le label éponyme, les six mains de MOD3RN ont su se faire remarquer grâce un live implacable : analogique et innovant, fait d\'improvisations mais maîtrisé à la perfection... Que demander de plus ? Après le mythique Rex Club et Astropolis en juillet dernier, à votre tour de vivre la vie MOD3RN !',
    'pic_link_black':'images/artistes/29.jpg',
    'pic_link_color':'images/artistes/29_c.jpg'
  },
  {
    'id':30,
    'name':'NOISIA',
    'jour':'VENDREDI 3 AVRIL',
    'jourId':1,
    'heure':'00h00',
    'heureId':0,
    'ordre_passage':9,
    'style':'Electro',
    'isChecked':'FALSE',
    'salle':'Sésame',
    'salleId':3,
    'youtube':'https://youtube.com/watch?v=SAO-lzl3vVQ',
    'facebook':'https://www.facebook.com/noisia?fref=ts',
    'twitter':'',
    'soundcloud':'',
    'description':'Après 11 ans d’existence, rien ne permet de penser que NOISIA va ralentir la cadence. Enorme machine de drum’n’bass-dubstep, le trio hollandais poursuit sa cavalcade dans l’underground. Potes depuis le lycée, Nik, Thijs et Martijn cultivent le même goût pour le gros son, à coups de basses telluriques, de breaks matraqueurs et de drops vertigineux. Les plus grands noms font appel à leur talent. Jugez plutôt : Moby, The Prodigy, Skrillex, Deadmau5 mais aussi le groupe de métal Korn font partie de leur tableau de chasse. NOISIA collabore également avec Foreign Beggars, avec qui ils signent l’album I Am Legion qui contient notamment « Contact », un carton drum-rap-dubstep qui enregistre plus de 10 millions de vues sur YouTube à ce jour. A n’en pas douter, ces vieux routiers connaissent par cœur le plan à appliquer pour démonter tous les dancefloors. Celui de Langolvas ne fera pas exception !',
    'pic_link_black':'images/artistes/30.jpg',
    'pic_link_color':'images/artistes/30_c.jpg'
  },
  {
    'id':31,
    'name':'ONIRIS',
    'jour':'DIMANCHE 5 AVRIL',
    'jourId':3,
    'heure':'02h50',
    'heureId':2,
    'ordre_passage':5,
    'style':'Electro',
    'isChecked':'FALSE',
    'salle':'Coatelan',
    'salleId':4,
    'youtube':'https://youtube.com/watch?v=Qtj7_G-z2gw',
    'facebook':'https://www.facebook.com/onirisdj?fref=ts',
    'twitter':'',
    'soundcloud':'',
    'description':'Originaire du sud de la France, ONIRIS y a développé son goût pour la house de Chicago et la techno de Détroit, et a commencé sa carrière musicale en organisant dans des raves et en mixant avec ses potes au pays des cigales. Petit à petit, il trouve sa patte, et décide en 2011 d\'envoyer ses morceaux au grand Laurent Garnier qui n’hésite pas à en playlister deux dans son émission de radio « It is what it is ». Depuis, la reconnaissance ne cesse d’augmenter. Astropolis Records ne s’y est pas trompé, en signant ONIRIS pour leur deuxième sortie. Une étoile montante de la techno pour clôturer cette 18ème édition, que « raver » de mieux ?',
    'pic_link_black':'images/artistes/31.jpg',
    'pic_link_color':'images/artistes/31_c.jpg'
  },
  {
    'id':32,
    'name':'POINT POINT',
    'jour':'SAMEDI 4 AVRIL',
    'jourId':2,
    'heure':'00h00',
    'heureId':0,
    'ordre_passage':9,
    'style':'Electro',
    'isChecked':'FALSE',
    'salle':'Chapiteau',
    'salleId':2,
    'youtube':'https://youtube.com/watch?v=WtM8uOifd2c',
    'facebook':'https://www.facebook.com/pointpointparis?fref=ts',
    'twitter':'',
    'soundcloud':'',
    'description':'Propulsés par un single au titre trompeur, « Life in Grey », les quatre membres de POINT POINT ne se sont depuis, pas reposés sur leurs lauriers. Par l\'intermédiaire de leurs mixtapes « Filet Mignon », en collectif ou sous différents alias, le quatuor ne cesse de créer des ponts en France comme à l\'étranger, fricotant avec des artistes tel que Lido, Phazz ou le label Mad Decent. Leur musique follement libre et créative est difficilement localisable sur la mappemonde musicale. Le collectif parisien, proche dans l\'esprit de leurs compatriotes de Club Cheval, fait constamment le grand écart stylistique entre futur R&B et sonorités technoïdes.',
    'pic_link_black':'images/artistes/32.jpg',
    'pic_link_color':'images/artistes/32_c.jpg'
  },
  {
    'id':33,
    'name':'RECONDITE',
    'jour':'DIMANCHE 5 AVRIL',
    'jourId':3,
    'heure':'01h20',
    'heureId':1,
    'ordre_passage':4,
    'style':'Electro',
    'isChecked':'FALSE',
    'salle':'Coatelan',
    'salleId':4,
    'youtube':'https://youtube.com/watch?v=KKYYAbGpw6A',
    'facebook':'https://www.facebook.com/ReconditeMusic?fref=ts',
    'twitter':'',
    'soundcloud':'',
    'description':'S’il n’avait pas opté pour la musique, Lorenz Brunner confesse qu’il aurait aimé devenir psychothérapeute. Ce n’est donc probablement pas un hasard si sa musique possède une dimension aussi cérébrale, s’aventurant dans les méandres intérieurs. En 4 ans, le jeune allemand a su s’imposer grâce à un son intense et planant à la fois, entre deep house et techno minimale, dont les effets sur les synapses se propagent irrésistiblement dans le reste du corps. Côté scène, pas de mauvaise surprise possible, car il ne joue que ses propres titres… Habitué à partager le plateau avec Sven Väth ou Richie Hawtin, la venue de RECONDITE à Coatelan s’annonce comme l’un des moments forts de cette édition.',
    'pic_link_black':'images/artistes/33.jpg',
    'pic_link_color':'images/artistes/33_c.jpg'
  },
  {
    'id':34,
    'name':'SALUT C\'EST COOL',
    'jour':'VENDREDI 3 AVRIL',
    'jourId':1,
    'heure':'21h20',
    'heureId':21,
    'ordre_passage':4,
    'style':'Electro',
    'isChecked':'FALSE',
    'salle':'Sésame',
    'salleId':3,
    'youtube':'https://youtube.com/watch?v=Kxa8PIw4LfI',
    'facebook':'https://www.facebook.com/salutcestcool?fref=ts',
    'twitter':'',
    'soundcloud':'',
    'description':'Envie d’une bonne grosse suée ? On a ce qu\'il vous faut. Découverts il y a quelques années au détour de vidéos absurdes postées sur la toile, SALUT C’EST COOL s’est depuis construit une belle réputation : celle du groupe le plus sérieusement barré de notre époque. Prenez des rythmes eurodance vicieux poussés à l\'extrême, des paroles pas banales, ajoutez à cela des références kitsch au DIY des années 90, et vous n’obtenez qu’un petit aperçu de SALUT C’EST COOL. Chorale dadaïste qui ferait dégénérer un goûter d\'anniversaire en rave improvisée, le groupe échappe à toutes les catégories. A la fin de leurs concerts, reste surtout l’impression d’avoir vécu un moment fort… et une odeur de sueur.',
    'pic_link_black':'images/artistes/34.jpg',
    'pic_link_color':'images/artistes/34_c.jpg'
  },
  {
    'id':35,
    'name':'SAVANT',
    'jour':'VENDREDI 3 AVRIL',
    'jourId':1,
    'heure':'01h30',
    'heureId':1,
    'ordre_passage':12,
    'style':'Electro',
    'isChecked':'FALSE',
    'salle':'Sésame',
    'salleId':3,
    'youtube':'https://youtube.com/watch?v=IFM4qahWo6E',
    'facebook':'https://www.facebook.com/SavantOfficial?fref=ts',
    'twitter':'',
    'soundcloud':'',
    'description':'Il y a des artistes prolifiques, et puis il y a SAVANT. Selon la légende, ce Forest Gump de la production en serait à pas moins de 10 000 titres ! Conscient de sa spécificité, Aleksander Vinter va prendre comme alias le nom du syndrome dont il est porteur – savant – qui se caractérise par des capacités cognitives hors normes. Bien qu’il n’ait sorti officiellement « que » 10 albums en 3 ans, difficile de s’y retrouver devant une telle profusion. Allant du 8 bits de pur geek au dubstep grandiloquent, en passant par le romantisme pop, ici les mots d’ordres sont toujours l’inventivité et la liberté. Le Norvégien décrit d’ailleurs son processus de création comme la recherche d’heureux hasards, rassemblés sous forme de collages cubistes. N’hésitant pas à offrir toutes ses productions en téléchargement libre, SAVANT incarne l’avant-garde de la nouvelle génération digitale.',
    'pic_link_black':'images/artistes/35.jpg',
    'pic_link_color':'images/artistes/35_c.jpg'
  },
  {
    'id':36,
    'name':'STWO',
    'jour':'VENDREDI 3 AVRIL',
    'jourId':1,
    'heure':'01h45',
    'heureId':1,
    'ordre_passage':13,
    'style':'Electro',
    'isChecked':'FALSE',
    'salle':'Chapiteau',
    'salleId':2,
    'youtube':'https://youtube.com/watch?v=dxNv92VOO_I',
    'facebook':'https://www.facebook.com/StwoFR?fref=ts',
    'twitter':'',
    'soundcloud':'',
    'description':'Du haut de ses 21 ans, le français STWO est le symbole d\'une nouvelle génération d\'artistes. Hyperactif sur le web, il fait partie de ceux dont le succès rime avec 2.0. Son premier morceau « You » suivi de son EP « Moans » ont séduit toute la blogosphère, et lui ont permis de se faire un nom sur la scène florissante du beatmaking. Il fait maintenant partie de ces artistes estampillés Soulection ou HW&W, à l\'origine d\'un son original et peut-être inclassable, à la croisée du hip hop et des musiques électroniques. Une famille musicale ? Probablement les potes des labels qu\'il a fréquentés, dont notamment Kaytranada et Ta-Ku. Mais notre pressentiment, c’est que STWO va rapidement jouer d’égal à égal avec eux dans la cour des grands.',
    'pic_link_black':'images/artistes/36.jpg',
    'pic_link_color':'images/artistes/36_c.jpg'
  },
  {
    'id':37,
    'name':'SUPER DISCOUNT 3 LIVE',
    'jour':'SAMEDI 4 AVRIL',
    'jourId':2,
    'heure':'22h00',
    'heureId':22,
    'ordre_passage':4,
    'style':'Electro',
    'isChecked':'FALSE',
    'salle':'Grand Hall',
    'salleId':1,
    'youtube':'https://youtube.com/watch?v=hc0S9Qg9Imc',
    'facebook':'https://www.facebook.com/EtienneDeCrecyNetwork?fref=ts&rf=110357905651814',
    'twitter':'',
    'soundcloud':'',
    'description':'Avec Laurent Garnier, Etienne de Crécy est l\'autre légende de la musique électronique française présente cette année. Issu de la scène versaillaise, il est aux yeux de beaucoup le véritable précurseur du son French Touch, d\'abord avec le duo Motorbass en 1995 puis avec SUPER DISCOUNT en 1996, projet collaboratif regroupant Philippe Zdar, Air ou encore Alex Gopher. 4 ans après son passage à Panoramas à bord de son imposant Cube, Etienne de Crécy revient à Morlaix présenter le troisième volet de SUPER DISCOUNT. Un album plus pop et funky que les précédents, qui recèle des pépites telles que « Hashtag My Ass » ou « You ». Sur scène, de Crécy s’arroge les services de ses fidèles et acolytes Alex Gopher et Julien Delfaud, pour un show résolument tourné vers le dancefloor.',
    'pic_link_black':'images/artistes/37.jpg',
    'pic_link_color':'images/artistes/37_c.jpg'
  },
  {
    'id':38,
    'name':'SUPERPOZE',
    'jour':'SAMEDI 4 AVRIL',
    'jourId':2,
    'heure':'22h30',
    'heureId':22,
    'ordre_passage':5,
    'style':'Electro',
    'isChecked':'FALSE',
    'salle':'Sésame',
    'salleId':3,
    'youtube':'https://youtube.com/watch?v=rTz26pKS4A8',
    'facebook':'https://www.facebook.com/SuperpozeMusic?fref=ts',
    'twitter':'',
    'soundcloud':'',
    'description':'Décidément, la scène caennaise est une vraie mine d\'or. Après Fakear qui nous a rendu visite l\'année dernière, c\'est au tour du tout aussi talentueux SUPERPOZE de prendre la relève. Il est le jeune producteur electo hip hop qui monte, et multiplie les occasions de nous le rappeler. En plus de ses collaborations avec d\'autres artistes de la scène française du beatmaking (Thylacine, Stwo, Fakear...), il s\'est fait connaître sous le pseudo Kuage (en duo avec Adrien de Concrete Knives) avec le très bon « A part of you ». Ah oui, il a aussi son propre label Combien Mille Records. Sans oublier l\'annonce d\'un album en 2015… qu’il viendra défendre en live pour la première fois à Panoramas !',
    'pic_link_black':'images/artistes/38.jpg',
    'pic_link_color':'images/artistes/38_c.jpg'
  },
  {
    'id':39,
    'name':'TALE OF US',
    'jour':'SAMEDI 4 AVRIL',
    'jourId':2,
    'heure':'04h20',
    'heureId':4,
    'ordre_passage':15,
    'style':'Electro',
    'isChecked':'FALSE',
    'salle':'Grand Hall',
    'salleId':1,
    'youtube':'https://youtube.com/watch?v=p7MZAPEXbPo',
    'facebook':'https://www.facebook.com/TaleOfUs?fref=ts',
    'twitter':'',
    'soundcloud':'',
    'description':'Duo réunissant Matteo Milleri et Carmine Conte, TALE OF US est l’un des phénomènes techno les plus importants de notre époque. Découverts en 2009 par Seth Troxler, puis adoubé par les plus grands noms, TALE OF US fait désormais partie du gotha de la planète techno. Elus 2èmes meilleurs DJ 2013 par les lecteurs de Resident Advisor, leur succès tient à cet équilibre délicat qui est aussi leur marque de fabrique : une techno ultra dansante, pleine d’émotion et de sensibilité. Début janvier, nos deux globe-trotters annoncent sur leur page Facebook qu’ils doivent faire un break pour « se retrouver et retrouver leur créativité ». Par chance, ce break prendra fin en avril. Car après leur passage à Panoramas, TALE OF US enchainera sur les festivals Time Warp et Coatchella. Inutile de vous dire que leur venue à Morlaix constitue un véritable évènement.',
    'pic_link_black':'images/artistes/39.jpg',
    'pic_link_color':'images/artistes/39_c.jpg'
  },
  {
    'id':40,
    'name':'TCHAMI',
    'jour':'SAMEDI 4 AVRIL',
    'jourId':2,
    'heure':'00h50',
    'heureId':0,
    'ordre_passage':10,
    'style':'Electro',
    'isChecked':'FALSE',
    'salle':'Grand Hall',
    'salleId':1,
    'youtube':'https://youtube.com/watch?v=z5ZdjwbQnXc',
    'facebook':'https://www.facebook.com/iamTchami?fref=ts',
    'twitter':'',
    'soundcloud':'',
    'description':'En l\'espace de deux petites années et quelques sorties éparses sur des labels prestigieux comme Spinnin\' Records ou Fool\'s Gold, le parisien TCHAMI s\'est imposé comme une valeur montante de la scène électronique internationale. S\'il qualifie sa musique de « future house » c\'est surtout dans le but de s\'affranchir des codes inhérents au genre, lui insuffler une touche toute personnelle. TCHAMI se plait à injecter une forme de spiritualité dans sa musique. En rendant ainsi hommage aux légendes de la house music, le supplément d\'âme de ses productions le démarque de ses contemporains. Adoubé par Diplo et Aluna George, plébiscité par Janet Jackson et Tribe Called Quest, il a partagé la scène avec Skrillex ou Dj Snake. Bref, n\'en jetez plus ! TCHAMI met tout le monde d\'accord.',
    'pic_link_black':'images/artistes/40.jpg',
    'pic_link_color':'images/artistes/40_c.jpg'
  },
{
    'id':41,
    'name':'SAYCET',
    'jour':'VENDREDI 3 AVRIL',
    'jourId':1,
    'heure':'18h00',
    'heureId':18,
    'ordre_passage':0,
    'style':'Electro',
    'isChecked':'FALSE',
    'salle':'Grand Hall',
    'salleId':1,
    'youtube':'https://youtube.com/watch?v=z5ZdjwbQnXc',
    'facebook':'https://www.facebook.com/iamTchami?fref=ts',
    'twitter':'',
    'soundcloud':'',
    'description':'SAYCET est le projet de Pierre Lefeuvre, producteur parisien qui mêle avec élégance des influences allant de la musique contemporaine à l’électronica, en passant par la pop. Sur scène, Pierre est accompagné de Louise Roam (chant, violon, claviers) et de Zita Cochet (scénographie, projection video). SAYCET présentera son tout nouvel album Mirage, à l’occasion d’un spectacle dans le sous-sol du futur équipement SE/cW, avec une scénographie spécialement adaptée au site de la Manufacture.',
    'pic_link_black':'images/artistes/41.jpg',
    'pic_link_color':'images/artistes/41_c.jpg'
  },

  {
    'id':42,
    'name':'MANSFIELD TYA',
    'jour':'SAMEDI 4 AVRIL',
    'jourId':2,
    'heure':'18h00',
    'heureId':18,
    'ordre_passage':0,
    'style':'Electro',
    'isChecked':'FALSE',
    'salle':'Grand Hall',
    'salleId':1,
    'youtube':'https://youtube.com/watch?v=z5ZdjwbQnXc',
    'facebook':'https://www.facebook.com/iamTchami?fref=ts',
    'twitter':'',
    'soundcloud':'',
    'description':'Initiée l’année dernière avec un concert de Rodolphe Burger à la salle des fêtes de la Maison du Peuple, l’idée du concert dans un lieu secret est simple : inviter des musiciens à se produire dans un des lieux chargés d’histoire que recèle notre territoire. Ce faisant, il s’agit aussi d’inviter le public à découvrir ce riche patrimoine souvent méconnu. Cette année, les clés de cet endroit tenu secret seront confiées à Mansfield Tya. Pour l’occasion, le duo de chanson indie composé de Julia Lanoë et Carla Pallone, nous propose « June, ten years after ». Un retour, 10 ans après, sur leur premier album, revisité en version Lo-Fi. Ambiance intimiste et frissons garantis. • Concert uniquement sur invitation. Gagne ta place le mardi 31 Mars à 17h00 sur le facebook du festival (www.facebook.com/FestivalPanoramasMorlaix)!',
    'pic_link_black':'images/artistes/42.jpg',
    'pic_link_color':'images/artistes/42_c.jpg'
  }


]


app.controller("PanoCtrl",function($scope) {


	$scope.artistes = artistes;

	$scope.artisteNotIncludes = [];
	angular.copy($scope.artistes, $scope.artisteNotIncludes);
	$scope.artisteIncludes = [];
	$scope.predicate = 'ordre_passage';
	$scope.cpt = [0,0,0];
    $scope.day_pano=1;



	$scope.includeArtiste = function(artiste) {



		var i = $.inArray(artiste, $scope.artisteIncludes);
		if (i > -1) {
			$scope.cpt[artiste.jourId - 1]--;
			artiste.isChecked = false;
			$scope.artisteIncludes.splice(i, 1);
			$scope.artisteNotIncludes.push(artiste);
		} else {
			$scope.cpt[artiste.jourId - 1]++;
			artiste.isChecked = true;
			$scope.artisteIncludes.push(artiste);
			$scope.artisteNotIncludes.splice($.inArray(artiste, $scope.artisteNotIncludes), 1);
		}

	} 

	$scope.artisteFilter = function(artiste) {
		if ($scope.artisteIncludes.length >= 0) {
			if ($.inArray(artiste, $scope.artisteIncludes) < 0)
				return;
		}

		return artiste;
	}


	$scope.verouillerBox = function(artiste) {
		if($scope.cpt[artiste.jourId - 1]>6){
			if($.inArray(artiste, $scope.artisteIncludes)>-1)
				return false;
			else
				return true;
		}    	
		else
			return false;
	}

	$scope.verouillerStyle = function(artiste) {
		if($scope.verouillerBox(artiste)){
			return "label_verouille";
		}
	}

	$scope.dayChecked  = function() {
		return $scope.day_pano;
	}
	$scope.affichageJour  = function() {
		if($scope.day_pano==1)
			return "VENDREDI 3 AVRIL 2015 - PAYS DE MORLAIX (29)";
		else if ($scope.day_pano==2)
			return "SAMEDI 4 AVRIL 2015 - PAYS DE MORLAIX (29)";
		else if($scope.day_pano==3)
			return "DIMANCHE 5 AVRIL 2015 - PAYS DE MORLAIX (29)";
		else
			return;
	}




	$scope.dayFilter = function(artiste) {
		if (artiste.jourId == $scope.day_pano)
			return artiste;
		else
			return;
	}

	$scope.change = function(artiste) {
		artiste.isChecked=true;
	} 

	$scope.calculatePosition = function(index) {
		var nbArtistes = $scope.cpt[$scope.day_pano-1];
		var marge;
		if(index==0)
			marge = -90 + (390/nbArtistes);
		else
			marge = -210 + (840/nbArtistes);
		return "margin-left:"+marge+"px;";
	}

	$scope.stylingTimeline = function(artiste, index) {
		//Artiste en haut
		if(index%2==0){
			if(artiste.length>15 && artiste.length<=18){
				if((artiste.split(" ").length - 1)>=2)
					return "top:19px;";
				else
					return "top:1px;";
			}
			else if (artiste.length>15)
				return "top:1px;";
			else
				return "top:19px;";
		}
		//Artiste en bas
		else
			if(artiste.length>15 && artiste.length<=18){
				if((artiste.split(" ").length - 1)>=2)
					return "bottom:116px;";
				else
					return "bottom:135px;";
			}
			else if (artiste.length>15)
				return "bottom:135px;";
			
			else
				return "bottom:116px;";
		}


		$scope.stylingListe = function(artiste) {
			if(artiste.length>15 && (artiste.split(" ").length - 1)<2 && artiste.length<18)
				return "height:44px;";
			else if(artiste.length>=18)
				return "height:44px;";
		}

        $scope.reset = function(){
            var jour = $scope.day_pano;
            $('.url_pano').addClass('hidden');
            $('#generate').removeClass('hidden');

            if($scope.cpt[jour-1]==0)
                return;
            else{
                for(var i = ($scope.artisteIncludes.length - 1) ; i>=0;i--){
                    if($scope.artisteIncludes[i].jourId==jour){
                        $scope.artisteIncludes[i].isChecked=false;
                        $scope.artisteIncludes.splice(i,1);
                        $scope.cpt[jour-1]--;
                    }

                }
            }


        }

        $scope.resetRadio = function(jour){
            $scope.day_pano=jour;
            $('.url_pano').addClass('hidden');
            $('#generate').removeClass('hidden');   
        }
	});

// app.controller("RandomCtrl",function($scope) {

// 	$scope.randomNumber = Math.floor(Math.random()*10001);




// });
