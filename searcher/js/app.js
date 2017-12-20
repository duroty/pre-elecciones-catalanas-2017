var DRTEleccionesCat = DRTEleccionesCat || {};
DRTEleccionesCat = (function() {
	var year1 = "2017";
	var year2 = "2015";
	var BASE_PATH = "http://elecciones2017pre.electiona.com/elecciones/elecciones-catalanas-2017";
	var JSON_BASE_PATH = "https://premium-pre.electiona.com/catalanas/data/results/data/5";
	var BACKUP_BASE_PATH = "https://elecciones.duroty.com/catalanas";
	var initiated = false;
	var chartsEnabled = false;
	var regions = [{"code":"abrera","id":"m1-p8","type":"m","value":"Abrera"},{"code":"aguilar-de-segarra","id":"m2-p8","type":"m","value":"Aguilar de Segarra"},{"code":"aiguafreda","id":"m14-p8","type":"m","value":"Aiguafreda"},{"code":"alella","id":"m3-p8","type":"m","value":"Alella"},{"code":"alpens","id":"m4-p8","type":"m","value":"Alpens"},{"code":"l-ametlla-del-valles","id":"m5-p8","type":"m","value":"L' Ametlla del Vallès"},{"code":"arenys-de-mar","id":"m6-p8","type":"m","value":"Arenys de Mar"},{"code":"arenys-de-munt","id":"m7-p8","type":"m","value":"Arenys de Munt"},{"code":"argencola","id":"m8-p8","type":"m","value":"Argençola"},{"code":"argentona","id":"m9-p8","type":"m","value":"Argentona"},{"code":"artes","id":"m10-p8","type":"m","value":"Artés"},{"code":"avia","id":"m11-p8","type":"m","value":"Avià"},{"code":"avinyo","id":"m12-p8","type":"m","value":"Avinyó"},{"code":"avinyonet-del-penedes","id":"m13-p8","type":"m","value":"Avinyonet del Penedès"},{"code":"badalona","id":"m15-p8","type":"m","value":"Badalona"},{"code":"badia-del-valles","id":"m904-p8","type":"m","value":"Badia del Vallès"},{"code":"baga","id":"m16-p8","type":"m","value":"Bagà"},{"code":"balenya","id":"m17-p8","type":"m","value":"Balenyà"},{"code":"balsareny","id":"m18-p8","type":"m","value":"Balsareny"},{"code":"barbera-del-valles","id":"m252-p8","type":"m","value":"Barberà del Vallès"},{"code":"barcelona","id":"m19-p8","type":"m","value":"Barcelona"},{"code":"begues","id":"m20-p8","type":"m","value":"Begues"},{"code":"bellprat","id":"m21-p8","type":"m","value":"Bellprat"},{"code":"berga","id":"m22-p8","type":"m","value":"Berga"},{"code":"bigues-i-riells","id":"m23-p8","type":"m","value":"Bigues i Riells"},{"code":"borreda","id":"m24-p8","type":"m","value":"Borredà"},{"code":"el-bruc","id":"m25-p8","type":"m","value":"El Bruc"},{"code":"el-brull","id":"m26-p8","type":"m","value":"El Brull"},{"code":"les-cabanyes","id":"m27-p8","type":"m","value":"Les Cabanyes"},{"code":"cabrera-d-anoia","id":"m28-p8","type":"m","value":"Cabrera d'Anoia"},{"code":"cabrera-de-mar","id":"m29-p8","type":"m","value":"Cabrera de Mar"},{"code":"cabrils","id":"m30-p8","type":"m","value":"Cabrils"},{"code":"calaf","id":"m31-p8","type":"m","value":"Calaf"},{"code":"calders","id":"m34-p8","type":"m","value":"Calders"},{"code":"caldes-de-montbui","id":"m33-p8","type":"m","value":"Caldes de Montbui"},{"code":"caldes-d-estrac","id":"m32-p8","type":"m","value":"Caldes d'Estrac"},{"code":"calella","id":"m35-p8","type":"m","value":"Calella"},{"code":"calldetenes","id":"m37-p8","type":"m","value":"Calldetenes"},{"code":"callus","id":"m38-p8","type":"m","value":"Callús"},{"code":"calonge-de-segarra","id":"m36-p8","type":"m","value":"Calonge de Segarra"},{"code":"campins","id":"m39-p8","type":"m","value":"Campins"},{"code":"canet-de-mar","id":"m40-p8","type":"m","value":"Canet de Mar"},{"code":"canovelles","id":"m41-p8","type":"m","value":"Canovelles"},{"code":"canoves-i-samalus","id":"m42-p8","type":"m","value":"Cànoves i Samalús"},{"code":"canyelles","id":"m43-p8","type":"m","value":"Canyelles"},{"code":"capellades","id":"m44-p8","type":"m","value":"Capellades"},{"code":"capolat","id":"m45-p8","type":"m","value":"Capolat"},{"code":"cardedeu","id":"m46-p8","type":"m","value":"Cardedeu"},{"code":"cardona","id":"m47-p8","type":"m","value":"Cardona"},{"code":"carme","id":"m48-p8","type":"m","value":"Carme"},{"code":"casserres","id":"m49-p8","type":"m","value":"Casserres"},{"code":"castell-de-l-areny","id":"m57-p8","type":"m","value":"Castell de l'Areny"},{"code":"castellar-de-n-hug","id":"m52-p8","type":"m","value":"Castellar de n'Hug"},{"code":"castellar-del-riu","id":"m50-p8","type":"m","value":"Castellar del Riu"},{"code":"castellar-del-valles","id":"m51-p8","type":"m","value":"Castellar del Vallès"},{"code":"castellbell-i-el-vilar","id":"m53-p8","type":"m","value":"Castellbell i el Vilar"},{"code":"castellbisbal","id":"m54-p8","type":"m","value":"Castellbisbal"},{"code":"castellcir","id":"m55-p8","type":"m","value":"Castellcir"},{"code":"castelldefels","id":"m56-p8","type":"m","value":"Castelldefels"},{"code":"castellet-i-la-gornal","id":"m58-p8","type":"m","value":"Castellet i la Gornal"},{"code":"castellfollit-de-riubregos","id":"m60-p8","type":"m","value":"Castellfollit de Riubregós"},{"code":"castellfollit-del-boix","id":"m59-p8","type":"m","value":"Castellfollit del Boix"},{"code":"castellgali","id":"m61-p8","type":"m","value":"Castellgalí"},{"code":"castellnou-de-bages","id":"m62-p8","type":"m","value":"Castellnou de Bages"},{"code":"castelloli","id":"m63-p8","type":"m","value":"Castellolí"},{"code":"castelltercol","id":"m64-p8","type":"m","value":"Castellterçol"},{"code":"castellvi-de-la-marca","id":"m65-p8","type":"m","value":"Castellví de la Marca"},{"code":"castellvi-de-rosanes","id":"m66-p8","type":"m","value":"Castellví de Rosanes"},{"code":"centelles","id":"m67-p8","type":"m","value":"Centelles"},{"code":"cercs","id":"m268-p8","type":"m","value":"Cercs"},{"code":"cerdanyola-del-valles","id":"m266-p8","type":"m","value":"Cerdanyola del Vallès"},{"code":"cervello","id":"m68-p8","type":"m","value":"Cervelló"},{"code":"collbato","id":"m69-p8","type":"m","value":"Collbató"},{"code":"collsuspina","id":"m70-p8","type":"m","value":"Collsuspina"},{"code":"copons","id":"m71-p8","type":"m","value":"Copons"},{"code":"corbera-de-llobregat","id":"m72-p8","type":"m","value":"Corbera de Llobregat"},{"code":"cornella-de-llobregat","id":"m73-p8","type":"m","value":"Cornellà de Llobregat"},{"code":"cubelles","id":"m74-p8","type":"m","value":"Cubelles"},{"code":"dosrius","id":"m75-p8","type":"m","value":"Dosrius"},{"code":"esparreguera","id":"m76-p8","type":"m","value":"Esparreguera"},{"code":"esplugues-de-llobregat","id":"m77-p8","type":"m","value":"Esplugues de Llobregat"},{"code":"l-espunyola","id":"m78-p8","type":"m","value":"L' Espunyola"},{"code":"l-estany","id":"m79-p8","type":"m","value":"L' Estany"},{"code":"figaro-montmany","id":"m134-p8","type":"m","value":"Figaró-Montmany"},{"code":"figols","id":"m80-p8","type":"m","value":"Fígols"},{"code":"fogars-de-la-selva","id":"m82-p8","type":"m","value":"Fogars de la Selva"},{"code":"fogars-de-montclus","id":"m81-p8","type":"m","value":"Fogars de Montclús"},{"code":"folgueroles","id":"m83-p8","type":"m","value":"Folgueroles"},{"code":"fonollosa","id":"m84-p8","type":"m","value":"Fonollosa"},{"code":"font-rubi","id":"m85-p8","type":"m","value":"Font-rubí"},{"code":"les-franqueses-del-valles","id":"m86-p8","type":"m","value":"Les Franqueses del Vallès"},{"code":"gaia","id":"m90-p8","type":"m","value":"Gaià"},{"code":"gallifa","id":"m87-p8","type":"m","value":"Gallifa"},{"code":"la-garriga","id":"m88-p8","type":"m","value":"La Garriga"},{"code":"gava","id":"m89-p8","type":"m","value":"Gavà"},{"code":"gelida","id":"m91-p8","type":"m","value":"Gelida"},{"code":"gironella","id":"m92-p8","type":"m","value":"Gironella"},{"code":"gisclareny","id":"m93-p8","type":"m","value":"Gisclareny"},{"code":"la-granada","id":"m94-p8","type":"m","value":"La Granada"},{"code":"granera","id":"m95-p8","type":"m","value":"Granera"},{"code":"granollers","id":"m96-p8","type":"m","value":"Granollers"},{"code":"gualba","id":"m97-p8","type":"m","value":"Gualba"},{"code":"guardiola-de-bergueda","id":"m99-p8","type":"m","value":"Guardiola de Berguedà"},{"code":"gurb","id":"m100-p8","type":"m","value":"Gurb"},{"code":"l-hospitalet-de-llobregat","id":"m101-p8","type":"m","value":"L' Hospitalet de Llobregat"},{"code":"els-hostalets-de-pierola","id":"m162-p8","type":"m","value":"Els Hostalets de Pierola"},{"code":"igualada","id":"m102-p8","type":"m","value":"Igualada"},{"code":"jorba","id":"m103-p8","type":"m","value":"Jorba"},{"code":"la-llacuna","id":"m104-p8","type":"m","value":"La Llacuna"},{"code":"la-llagosta","id":"m105-p8","type":"m","value":"La Llagosta"},{"code":"llica-d-amunt","id":"m107-p8","type":"m","value":"Lliçà d'Amunt"},{"code":"llica-de-vall","id":"m108-p8","type":"m","value":"Lliçà de Vall"},{"code":"llinars-del-valles","id":"m106-p8","type":"m","value":"Llinars del Vallès"},{"code":"lluca","id":"m109-p8","type":"m","value":"Lluçà"},{"code":"malgrat-de-mar","id":"m110-p8","type":"m","value":"Malgrat de Mar"},{"code":"malla","id":"m111-p8","type":"m","value":"Malla"},{"code":"manlleu","id":"m112-p8","type":"m","value":"Manlleu"},{"code":"manresa","id":"m113-p8","type":"m","value":"Manresa"},{"code":"marganell","id":"m242-p8","type":"m","value":"Marganell"},{"code":"martorell","id":"m114-p8","type":"m","value":"Martorell"},{"code":"martorelles","id":"m115-p8","type":"m","value":"Martorelles"},{"code":"les-masies-de-roda","id":"m116-p8","type":"m","value":"Les Masies de Roda"},{"code":"les-masies-de-voltrega","id":"m117-p8","type":"m","value":"Les Masies de Voltregà"},{"code":"el-masnou","id":"m118-p8","type":"m","value":"El Masnou"},{"code":"masquefa","id":"m119-p8","type":"m","value":"Masquefa"},{"code":"matadepera","id":"m120-p8","type":"m","value":"Matadepera"},{"code":"mataro","id":"m121-p8","type":"m","value":"Mataró"},{"code":"mediona","id":"m122-p8","type":"m","value":"Mediona"},{"code":"moia","id":"m138-p8","type":"m","value":"Moià"},{"code":"molins-de-rei","id":"m123-p8","type":"m","value":"Molins de Rei"},{"code":"mollet-del-valles","id":"m124-p8","type":"m","value":"Mollet del Vallès"},{"code":"monistrol-de-calders","id":"m128-p8","type":"m","value":"Monistrol de Calders"},{"code":"monistrol-de-montserrat","id":"m127-p8","type":"m","value":"Monistrol de Montserrat"},{"code":"montcada-i-reixac","id":"m125-p8","type":"m","value":"Montcada i Reixac"},{"code":"montclar","id":"m130-p8","type":"m","value":"Montclar"},{"code":"montesquiu","id":"m131-p8","type":"m","value":"Montesquiu"},{"code":"montgat","id":"m126-p8","type":"m","value":"Montgat"},{"code":"montmajor","id":"m132-p8","type":"m","value":"Montmajor"},{"code":"montmaneu","id":"m133-p8","type":"m","value":"Montmaneu"},{"code":"montmelo","id":"m135-p8","type":"m","value":"Montmeló"},{"code":"montornes-del-valles","id":"m136-p8","type":"m","value":"Montornès del Vallès"},{"code":"montseny","id":"m137-p8","type":"m","value":"Montseny"},{"code":"muntanyola","id":"m129-p8","type":"m","value":"Muntanyola"},{"code":"mura","id":"m139-p8","type":"m","value":"Mura"},{"code":"navarcles","id":"m140-p8","type":"m","value":"Navarcles"},{"code":"navas","id":"m141-p8","type":"m","value":"Navàs"},{"code":"la-nou-de-bergueda","id":"m142-p8","type":"m","value":"La Nou de Berguedà"},{"code":"odena","id":"m143-p8","type":"m","value":"Òdena"},{"code":"olerdola","id":"m145-p8","type":"m","value":"Olèrdola"},{"code":"olesa-de-bonesvalls","id":"m146-p8","type":"m","value":"Olesa de Bonesvalls"},{"code":"olesa-de-montserrat","id":"m147-p8","type":"m","value":"Olesa de Montserrat"},{"code":"olivella","id":"m148-p8","type":"m","value":"Olivella"},{"code":"olost","id":"m149-p8","type":"m","value":"Olost"},{"code":"olvan","id":"m144-p8","type":"m","value":"Olvan"},{"code":"oris","id":"m150-p8","type":"m","value":"Orís"},{"code":"orista","id":"m151-p8","type":"m","value":"Oristà"},{"code":"orpi","id":"m152-p8","type":"m","value":"Orpí"},{"code":"orrius","id":"m153-p8","type":"m","value":"Òrrius"},{"code":"pacs-del-penedes","id":"m154-p8","type":"m","value":"Pacs del Penedès"},{"code":"palafolls","id":"m155-p8","type":"m","value":"Palafolls"},{"code":"palau-solita-i-plegamans","id":"m156-p8","type":"m","value":"Palau-solità i Plegamans"},{"code":"palleja","id":"m157-p8","type":"m","value":"Pallejà"},{"code":"la-palma-de-cervello","id":"m905-p8","type":"m","value":"La Palma de Cervelló"},{"code":"el-papiol","id":"m158-p8","type":"m","value":"El Papiol"},{"code":"parets-del-valles","id":"m159-p8","type":"m","value":"Parets del Vallès"},{"code":"perafita","id":"m160-p8","type":"m","value":"Perafita"},{"code":"piera","id":"m161-p8","type":"m","value":"Piera"},{"code":"pineda-de-mar","id":"m163-p8","type":"m","value":"Pineda de Mar"},{"code":"el-pla-del-penedes","id":"m164-p8","type":"m","value":"El Pla del Penedès"},{"code":"la-pobla-de-claramunt","id":"m165-p8","type":"m","value":"La Pobla de Claramunt"},{"code":"la-pobla-de-lillet","id":"m166-p8","type":"m","value":"La Pobla de Lillet"},{"code":"polinya","id":"m167-p8","type":"m","value":"Polinyà"},{"code":"el-pont-de-vilomara-i-rocafort","id":"m182-p8","type":"m","value":"El Pont de Vilomara i Rocafort"},{"code":"pontons","id":"m168-p8","type":"m","value":"Pontons"},{"code":"el-prat-de-llobregat","id":"m169-p8","type":"m","value":"El Prat de Llobregat"},{"code":"prats-de-llucanes","id":"m171-p8","type":"m","value":"Prats de Lluçanès"},{"code":"els-prats-de-rei","id":"m170-p8","type":"m","value":"Els Prats de Rei"},{"code":"premia-de-dalt","id":"m230-p8","type":"m","value":"Premià de Dalt"},{"code":"premia-de-mar","id":"m172-p8","type":"m","value":"Premià de Mar"},{"code":"puigdalber","id":"m174-p8","type":"m","value":"Puigdàlber"},{"code":"puig-reig","id":"m175-p8","type":"m","value":"Puig-reig"},{"code":"pujalt","id":"m176-p8","type":"m","value":"Pujalt"},{"code":"la-quar","id":"m177-p8","type":"m","value":"La Quar"},{"code":"rajadell","id":"m178-p8","type":"m","value":"Rajadell"},{"code":"rellinars","id":"m179-p8","type":"m","value":"Rellinars"},{"code":"ripollet","id":"m180-p8","type":"m","value":"Ripollet"},{"code":"la-roca-del-valles","id":"m181-p8","type":"m","value":"La Roca del Vallès"},{"code":"roda-de-ter","id":"m183-p8","type":"m","value":"Roda de Ter"},{"code":"rubi","id":"m184-p8","type":"m","value":"Rubí"},{"code":"rubio","id":"m185-p8","type":"m","value":"Rubió"},{"code":"rupit-i-pruit","id":"m901-p8","type":"m","value":"Rupit i Pruit"},{"code":"sabadell","id":"m187-p8","type":"m","value":"Sabadell"},{"code":"sagas","id":"m188-p8","type":"m","value":"Sagàs"},{"code":"saldes","id":"m190-p8","type":"m","value":"Saldes"},{"code":"sallent","id":"m191-p8","type":"m","value":"Sallent"},{"code":"sant-adria-de-besos","id":"m194-p8","type":"m","value":"Sant Adrià de Besòs"},{"code":"sant-agusti-de-llucanes","id":"m195-p8","type":"m","value":"Sant Agustí de Lluçanès"},{"code":"sant-andreu-de-la-barca","id":"m196-p8","type":"m","value":"Sant Andreu de la Barca"},{"code":"sant-andreu-de-llavaneres","id":"m197-p8","type":"m","value":"Sant Andreu de Llavaneres"},{"code":"sant-antoni-de-vilamajor","id":"m198-p8","type":"m","value":"Sant Antoni de Vilamajor"},{"code":"sant-bartomeu-del-grau","id":"m199-p8","type":"m","value":"Sant Bartomeu del Grau"},{"code":"sant-boi-de-llobregat","id":"m200-p8","type":"m","value":"Sant Boi de Llobregat"},{"code":"sant-boi-de-llucanes","id":"m201-p8","type":"m","value":"Sant Boi de Lluçanès"},{"code":"sant-cebria-de-vallalta","id":"m203-p8","type":"m","value":"Sant Cebrià de Vallalta"},{"code":"sant-celoni","id":"m202-p8","type":"m","value":"Sant Celoni"},{"code":"sant-climent-de-llobregat","id":"m204-p8","type":"m","value":"Sant Climent de Llobregat"},{"code":"sant-cugat-del-valles","id":"m205-p8","type":"m","value":"Sant Cugat del Vallès"},{"code":"sant-cugat-sesgarrigues","id":"m206-p8","type":"m","value":"Sant Cugat Sesgarrigues"},{"code":"sant-esteve-de-palautordera","id":"m207-p8","type":"m","value":"Sant Esteve de Palautordera"},{"code":"sant-esteve-sesrovires","id":"m208-p8","type":"m","value":"Sant Esteve Sesrovires"},{"code":"sant-feliu-de-codines","id":"m210-p8","type":"m","value":"Sant Feliu de Codines"},{"code":"sant-feliu-de-llobregat","id":"m211-p8","type":"m","value":"Sant Feliu de Llobregat"},{"code":"sant-feliu-sasserra","id":"m212-p8","type":"m","value":"Sant Feliu Sasserra"},{"code":"sant-fost-de-campsentelles","id":"m209-p8","type":"m","value":"Sant Fost de Campsentelles"},{"code":"sant-fruitos-de-bages","id":"m213-p8","type":"m","value":"Sant Fruitós de Bages"},{"code":"sant-hipolit-de-voltrega","id":"m215-p8","type":"m","value":"Sant Hipòlit de Voltregà"},{"code":"sant-iscle-de-vallalta","id":"m193-p8","type":"m","value":"Sant Iscle de Vallalta"},{"code":"sant-jaume-de-frontanya","id":"m216-p8","type":"m","value":"Sant Jaume de Frontanyà"},{"code":"sant-joan-de-vilatorrada","id":"m218-p8","type":"m","value":"Sant Joan de Vilatorrada"},{"code":"sant-joan-despi","id":"m217-p8","type":"m","value":"Sant Joan Despí"},{"code":"sant-julia-de-cerdanyola","id":"m903-p8","type":"m","value":"Sant Julià de Cerdanyola"},{"code":"sant-julia-de-vilatorta","id":"m220-p8","type":"m","value":"Sant Julià de Vilatorta"},{"code":"sant-just-desvern","id":"m221-p8","type":"m","value":"Sant Just Desvern"},{"code":"sant-llorenc-d-hortons","id":"m222-p8","type":"m","value":"Sant Llorenç d'Hortons"},{"code":"sant-llorenc-savall","id":"m223-p8","type":"m","value":"Sant Llorenç Savall"},{"code":"sant-marti-d-albars","id":"m225-p8","type":"m","value":"Sant Martí d'Albars"},{"code":"sant-marti-de-centelles","id":"m224-p8","type":"m","value":"Sant Martí de Centelles"},{"code":"sant-marti-de-tous","id":"m226-p8","type":"m","value":"Sant Martí de Tous"},{"code":"sant-marti-sarroca","id":"m227-p8","type":"m","value":"Sant Martí Sarroca"},{"code":"sant-marti-sesgueioles","id":"m228-p8","type":"m","value":"Sant Martí Sesgueioles"},{"code":"sant-mateu-de-bages","id":"m229-p8","type":"m","value":"Sant Mateu de Bages"},{"code":"sant-pere-de-ribes","id":"m231-p8","type":"m","value":"Sant Pere de Ribes"},{"code":"sant-pere-de-riudebitlles","id":"m232-p8","type":"m","value":"Sant Pere de Riudebitlles"},{"code":"sant-pere-de-torello","id":"m233-p8","type":"m","value":"Sant Pere de Torelló"},{"code":"sant-pere-de-vilamajor","id":"m234-p8","type":"m","value":"Sant Pere de Vilamajor"},{"code":"sant-pere-sallavinera","id":"m189-p8","type":"m","value":"Sant Pere Sallavinera"},{"code":"sant-pol-de-mar","id":"m235-p8","type":"m","value":"Sant Pol de Mar"},{"code":"sant-quinti-de-mediona","id":"m236-p8","type":"m","value":"Sant Quintí de Mediona"},{"code":"sant-quirze-de-besora","id":"m237-p8","type":"m","value":"Sant Quirze de Besora"},{"code":"sant-quirze-del-valles","id":"m238-p8","type":"m","value":"Sant Quirze del Vallès"},{"code":"sant-quirze-safaja","id":"m239-p8","type":"m","value":"Sant Quirze Safaja"},{"code":"sant-sadurni-d-anoia","id":"m240-p8","type":"m","value":"Sant Sadurní d'Anoia"},{"code":"sant-sadurni-d-osormort","id":"m241-p8","type":"m","value":"Sant Sadurní d'Osormort"},{"code":"sant-salvador-de-guardiola","id":"m98-p8","type":"m","value":"Sant Salvador de Guardiola"},{"code":"sant-vicenc-de-castellet","id":"m262-p8","type":"m","value":"Sant Vicenç de Castellet"},{"code":"sant-vicenc-de-montalt","id":"m264-p8","type":"m","value":"Sant Vicenç de Montalt"},{"code":"sant-vicenc-de-torello","id":"m265-p8","type":"m","value":"Sant Vicenç de Torelló"},{"code":"sant-vicenc-dels-horts","id":"m263-p8","type":"m","value":"Sant Vicenç dels Horts"},{"code":"santa-cecilia-de-voltrega","id":"m243-p8","type":"m","value":"Santa Cecília de Voltregà"},{"code":"santa-coloma-de-cervello","id":"m244-p8","type":"m","value":"Santa Coloma de Cervelló"},{"code":"santa-coloma-de-gramenet","id":"m245-p8","type":"m","value":"Santa Coloma de Gramenet"},{"code":"santa-eugenia-de-berga","id":"m246-p8","type":"m","value":"Santa Eugènia de Berga"},{"code":"santa-eulalia-de-riuprimer","id":"m247-p8","type":"m","value":"Santa Eulàlia de Riuprimer"},{"code":"santa-eulalia-de-roncana","id":"m248-p8","type":"m","value":"Santa Eulàlia de Ronçana"},{"code":"santa-fe-del-penedes","id":"m249-p8","type":"m","value":"Santa Fe del Penedès"},{"code":"santa-margarida-de-montbui","id":"m250-p8","type":"m","value":"Santa Margarida de Montbui"},{"code":"santa-margarida-i-els-monjos","id":"m251-p8","type":"m","value":"Santa Margarida i els Monjos"},{"code":"santa-maria-de-besora","id":"m253-p8","type":"m","value":"Santa Maria de Besora"},{"code":"santa-maria-de-corco","id":"m254-p8","type":"m","value":"Santa Maria de Corcó"},{"code":"santa-maria-de-martorelles","id":"m256-p8","type":"m","value":"Santa Maria de Martorelles"},{"code":"santa-maria-de-merles","id":"m255-p8","type":"m","value":"Santa Maria de Merlès"},{"code":"santa-maria-de-miralles","id":"m257-p8","type":"m","value":"Santa Maria de Miralles"},{"code":"santa-maria-de-palautordera","id":"m259-p8","type":"m","value":"Santa Maria de Palautordera"},{"code":"santa-maria-d-olo","id":"m258-p8","type":"m","value":"Santa Maria d'Oló"},{"code":"santa-perpetua-de-mogoda","id":"m260-p8","type":"m","value":"Santa Perpètua de Mogoda"},{"code":"santa-susanna","id":"m261-p8","type":"m","value":"Santa Susanna"},{"code":"santpedor","id":"m192-p8","type":"m","value":"Santpedor"},{"code":"sentmenat","id":"m267-p8","type":"m","value":"Sentmenat"},{"code":"seva","id":"m269-p8","type":"m","value":"Seva"},{"code":"sitges","id":"m270-p8","type":"m","value":"Sitges"},{"code":"sobremunt","id":"m271-p8","type":"m","value":"Sobremunt"},{"code":"sora","id":"m272-p8","type":"m","value":"Sora"},{"code":"subirats","id":"m273-p8","type":"m","value":"Subirats"},{"code":"suria","id":"m274-p8","type":"m","value":"Súria"},{"code":"tagamanent","id":"m276-p8","type":"m","value":"Tagamanent"},{"code":"talamanca","id":"m277-p8","type":"m","value":"Talamanca"},{"code":"taradell","id":"m278-p8","type":"m","value":"Taradell"},{"code":"tavernoles","id":"m275-p8","type":"m","value":"Tavèrnoles"},{"code":"tavertet","id":"m280-p8","type":"m","value":"Tavertet"},{"code":"teia","id":"m281-p8","type":"m","value":"Teià"},{"code":"terrassa","id":"m279-p8","type":"m","value":"Terrassa"},{"code":"tiana","id":"m282-p8","type":"m","value":"Tiana"},{"code":"tona","id":"m283-p8","type":"m","value":"Tona"},{"code":"tordera","id":"m284-p8","type":"m","value":"Tordera"},{"code":"torello","id":"m285-p8","type":"m","value":"Torelló"},{"code":"la-torre-de-claramunt","id":"m286-p8","type":"m","value":"La Torre de Claramunt"},{"code":"torrelavit","id":"m287-p8","type":"m","value":"Torrelavit"},{"code":"torrelles-de-foix","id":"m288-p8","type":"m","value":"Torrelles de Foix"},{"code":"torrelles-de-llobregat","id":"m289-p8","type":"m","value":"Torrelles de Llobregat"},{"code":"ullastrell","id":"m290-p8","type":"m","value":"Ullastrell"},{"code":"vacarisses","id":"m291-p8","type":"m","value":"Vacarisses"},{"code":"vallbona-d-anoia","id":"m292-p8","type":"m","value":"Vallbona d'Anoia"},{"code":"vallcebre","id":"m293-p8","type":"m","value":"Vallcebre"},{"code":"vallgorguina","id":"m294-p8","type":"m","value":"Vallgorguina"},{"code":"vallirana","id":"m295-p8","type":"m","value":"Vallirana"},{"code":"vallromanes","id":"m296-p8","type":"m","value":"Vallromanes"},{"code":"veciana","id":"m297-p8","type":"m","value":"Veciana"},{"code":"vic","id":"m298-p8","type":"m","value":"Vic"},{"code":"vilada","id":"m299-p8","type":"m","value":"Vilada"},{"code":"viladecans","id":"m301-p8","type":"m","value":"Viladecans"},{"code":"viladecavalls","id":"m300-p8","type":"m","value":"Viladecavalls"},{"code":"vilafranca-del-penedes","id":"m305-p8","type":"m","value":"Vilafranca del Penedès"},{"code":"vilalba-sasserra","id":"m306-p8","type":"m","value":"Vilalba Sasserra"},{"code":"vilanova-de-sau","id":"m303-p8","type":"m","value":"Vilanova de Sau"},{"code":"vilanova-del-cami","id":"m302-p8","type":"m","value":"Vilanova del Camí"},{"code":"vilanova-del-valles","id":"m902-p8","type":"m","value":"Vilanova del Vallès"},{"code":"vilanova-i-la-geltru","id":"m307-p8","type":"m","value":"Vilanova i la Geltrú"},{"code":"vilassar-de-dalt","id":"m214-p8","type":"m","value":"Vilassar de Dalt"},{"code":"vilassar-de-mar","id":"m219-p8","type":"m","value":"Vilassar de Mar"},{"code":"vilobi-del-penedes","id":"m304-p8","type":"m","value":"Vilobí del Penedès"},{"code":"viver-i-serrateix","id":"m308-p8","type":"m","value":"Viver i Serrateix"},{"code":"agullana","id":"m1-p17","type":"m","value":"Agullana"},{"code":"aiguaviva","id":"m2-p17","type":"m","value":"Aiguaviva"},{"code":"albanya","id":"m3-p17","type":"m","value":"Albanyà"},{"code":"albons","id":"m4-p17","type":"m","value":"Albons"},{"code":"alp","id":"m6-p17","type":"m","value":"Alp"},{"code":"amer","id":"m7-p17","type":"m","value":"Amer"},{"code":"angles","id":"m8-p17","type":"m","value":"Anglès"},{"code":"arbucies","id":"m9-p17","type":"m","value":"Arbúcies"},{"code":"argelaguer","id":"m10-p17","type":"m","value":"Argelaguer"},{"code":"l-armentera","id":"m11-p17","type":"m","value":"L' Armentera"},{"code":"avinyonet-de-puigventos","id":"m12-p17","type":"m","value":"Avinyonet de Puigventós"},{"code":"banyoles","id":"m15-p17","type":"m","value":"Banyoles"},{"code":"bascara","id":"m16-p17","type":"m","value":"Bàscara"},{"code":"begur","id":"m13-p17","type":"m","value":"Begur"},{"code":"bellcaire-d-emporda","id":"m18-p17","type":"m","value":"Bellcaire d'Empordà"},{"code":"besalu","id":"m19-p17","type":"m","value":"Besalú"},{"code":"bescano","id":"m20-p17","type":"m","value":"Bescanó"},{"code":"beuda","id":"m21-p17","type":"m","value":"Beuda"},{"code":"la-bisbal-d-emporda","id":"m22-p17","type":"m","value":"La Bisbal d'Empordà"},{"code":"biure","id":"m234-p17","type":"m","value":"Biure"},{"code":"blanes","id":"m23-p17","type":"m","value":"Blanes"},{"code":"boadella-i-les-escaules","id":"m29-p17","type":"m","value":"Boadella i les Escaules"},{"code":"bolvir","id":"m24-p17","type":"m","value":"Bolvir"},{"code":"bordils","id":"m25-p17","type":"m","value":"Bordils"},{"code":"borrassa","id":"m26-p17","type":"m","value":"Borrassà"},{"code":"breda","id":"m27-p17","type":"m","value":"Breda"},{"code":"brunyola","id":"m28-p17","type":"m","value":"Brunyola"},{"code":"cabanelles","id":"m31-p17","type":"m","value":"Cabanelles"},{"code":"cabanes","id":"m30-p17","type":"m","value":"Cabanes"},{"code":"cadaques","id":"m32-p17","type":"m","value":"Cadaqués"},{"code":"caldes-de-malavella","id":"m33-p17","type":"m","value":"Caldes de Malavella"},{"code":"calonge","id":"m34-p17","type":"m","value":"Calonge"},{"code":"camos","id":"m35-p17","type":"m","value":"Camós"},{"code":"campdevanol","id":"m36-p17","type":"m","value":"Campdevànol"},{"code":"campelles","id":"m37-p17","type":"m","value":"Campelles"},{"code":"campllong","id":"m38-p17","type":"m","value":"Campllong"},{"code":"camprodon","id":"m39-p17","type":"m","value":"Camprodon"},{"code":"canet-d-adri","id":"m40-p17","type":"m","value":"Canet d'Adri"},{"code":"cantallops","id":"m41-p17","type":"m","value":"Cantallops"},{"code":"capmany","id":"m42-p17","type":"m","value":"Capmany"},{"code":"cassa-de-la-selva","id":"m44-p17","type":"m","value":"Cassà de la Selva"},{"code":"castellfollit-de-la-roca","id":"m46-p17","type":"m","value":"Castellfollit de la Roca"},{"code":"castello-d-empuries","id":"m47-p17","type":"m","value":"Castelló d'Empúries"},{"code":"castell-platja-d-aro","id":"m48-p17","type":"m","value":"Castell-Platja d'Aro"},{"code":"la-cellera-de-ter","id":"m189-p17","type":"m","value":"La Cellera de Ter"},{"code":"celra","id":"m49-p17","type":"m","value":"Celrà"},{"code":"cervia-de-ter","id":"m50-p17","type":"m","value":"Cervià de Ter"},{"code":"cistella","id":"m51-p17","type":"m","value":"Cistella"},{"code":"colera","id":"m54-p17","type":"m","value":"Colera"},{"code":"colomers","id":"m55-p17","type":"m","value":"Colomers"},{"code":"corca","id":"m57-p17","type":"m","value":"Corçà"},{"code":"cornella-del-terri","id":"m56-p17","type":"m","value":"Cornellà del Terri"},{"code":"crespia","id":"m58-p17","type":"m","value":"Crespià"},{"code":"monells-i-sant-sadurni-de-l-heura-cruilles","id":"m901-p17","type":"m","value":"Monells i Sant Sadurní de l'Heura Cruïlles"},{"code":"darnius","id":"m60-p17","type":"m","value":"Darnius"},{"code":"das","id":"m61-p17","type":"m","value":"Das"},{"code":"l-escala","id":"m62-p17","type":"m","value":"L' Escala"},{"code":"espinelves","id":"m63-p17","type":"m","value":"Espinelves"},{"code":"espolla","id":"m64-p17","type":"m","value":"Espolla"},{"code":"esponella","id":"m65-p17","type":"m","value":"Esponellà"},{"code":"el-far-d-emporda","id":"m5-p17","type":"m","value":"El Far d'Empordà"},{"code":"figueres","id":"m66-p17","type":"m","value":"Figueres"},{"code":"flaca","id":"m67-p17","type":"m","value":"Flaçà"},{"code":"foixa","id":"m68-p17","type":"m","value":"Foixà"},{"code":"fontanals-de-cerdanya","id":"m69-p17","type":"m","value":"Fontanals de Cerdanya"},{"code":"fontanilles","id":"m70-p17","type":"m","value":"Fontanilles"},{"code":"fontcoberta","id":"m71-p17","type":"m","value":"Fontcoberta"},{"code":"forallac","id":"m902-p17","type":"m","value":"Forallac"},{"code":"fornells-de-la-selva","id":"m73-p17","type":"m","value":"Fornells de la Selva"},{"code":"fortia","id":"m74-p17","type":"m","value":"Fortià"},{"code":"garrigas","id":"m75-p17","type":"m","value":"Garrigàs"},{"code":"garrigoles","id":"m76-p17","type":"m","value":"Garrigoles"},{"code":"garriguella","id":"m77-p17","type":"m","value":"Garriguella"},{"code":"ger","id":"m78-p17","type":"m","value":"Ger"},{"code":"girona","id":"m79-p17","type":"m","value":"Girona"},{"code":"gombren","id":"m80-p17","type":"m","value":"Gombrèn"},{"code":"gualta","id":"m81-p17","type":"m","value":"Gualta"},{"code":"guils-de-cerdanya","id":"m82-p17","type":"m","value":"Guils de Cerdanya"},{"code":"hostalric","id":"m83-p17","type":"m","value":"Hostalric"},{"code":"isovol","id":"m84-p17","type":"m","value":"Isòvol"},{"code":"jafre","id":"m85-p17","type":"m","value":"Jafre"},{"code":"la-jonquera","id":"m86-p17","type":"m","value":"La Jonquera"},{"code":"juia","id":"m87-p17","type":"m","value":"Juià"},{"code":"llado","id":"m88-p17","type":"m","value":"Lladó"},{"code":"llagostera","id":"m89-p17","type":"m","value":"Llagostera"},{"code":"llambilles","id":"m90-p17","type":"m","value":"Llambilles"},{"code":"llanars","id":"m91-p17","type":"m","value":"Llanars"},{"code":"llanca","id":"m92-p17","type":"m","value":"Llançà"},{"code":"llers","id":"m93-p17","type":"m","value":"Llers"},{"code":"llivia","id":"m94-p17","type":"m","value":"Llívia"},{"code":"lloret-de-mar","id":"m95-p17","type":"m","value":"Lloret de Mar"},{"code":"les-llosses","id":"m96-p17","type":"m","value":"Les Llosses"},{"code":"macanet-de-cabrenys","id":"m102-p17","type":"m","value":"Maçanet de Cabrenys"},{"code":"macanet-de-la-selva","id":"m103-p17","type":"m","value":"Maçanet de la Selva"},{"code":"madremanya","id":"m97-p17","type":"m","value":"Madremanya"},{"code":"maia-de-montcal","id":"m98-p17","type":"m","value":"Maià de Montcal"},{"code":"masarac","id":"m100-p17","type":"m","value":"Masarac"},{"code":"massanes","id":"m101-p17","type":"m","value":"Massanes"},{"code":"meranges","id":"m99-p17","type":"m","value":"Meranges"},{"code":"mieres","id":"m105-p17","type":"m","value":"Mieres"},{"code":"mollet-de-peralada","id":"m106-p17","type":"m","value":"Mollet de Peralada"},{"code":"mollo","id":"m107-p17","type":"m","value":"Molló"},{"code":"montagut-i-oix","id":"m109-p17","type":"m","value":"Montagut i Oix"},{"code":"mont-ras","id":"m110-p17","type":"m","value":"Mont-ras"},{"code":"navata","id":"m111-p17","type":"m","value":"Navata"},{"code":"ogassa","id":"m112-p17","type":"m","value":"Ogassa"},{"code":"olot","id":"m114-p17","type":"m","value":"Olot"},{"code":"ordis","id":"m115-p17","type":"m","value":"Ordis"},{"code":"osor","id":"m116-p17","type":"m","value":"Osor"},{"code":"palafrugell","id":"m117-p17","type":"m","value":"Palafrugell"},{"code":"palamos","id":"m118-p17","type":"m","value":"Palamós"},{"code":"palau-de-santa-eulalia","id":"m119-p17","type":"m","value":"Palau de Santa Eulàlia"},{"code":"palau-sator","id":"m121-p17","type":"m","value":"Palau-sator"},{"code":"palau-saverdera","id":"m120-p17","type":"m","value":"Palau-saverdera"},{"code":"palol-de-revardit","id":"m123-p17","type":"m","value":"Palol de Revardit"},{"code":"pals","id":"m124-p17","type":"m","value":"Pals"},{"code":"pardines","id":"m125-p17","type":"m","value":"Pardines"},{"code":"parlava","id":"m126-p17","type":"m","value":"Parlavà"},{"code":"pau","id":"m128-p17","type":"m","value":"Pau"},{"code":"pedret-i-marza","id":"m129-p17","type":"m","value":"Pedret i Marzà"},{"code":"la-pera","id":"m130-p17","type":"m","value":"La Pera"},{"code":"peralada","id":"m132-p17","type":"m","value":"Peralada"},{"code":"les-planes-d-hostoles","id":"m133-p17","type":"m","value":"Les Planes d'Hostoles"},{"code":"planoles","id":"m134-p17","type":"m","value":"Planoles"},{"code":"pont-de-molins","id":"m135-p17","type":"m","value":"Pont de Molins"},{"code":"pontos","id":"m136-p17","type":"m","value":"Pontós"},{"code":"porqueres","id":"m137-p17","type":"m","value":"Porqueres"},{"code":"el-port-de-la-selva","id":"m140-p17","type":"m","value":"El Port de la Selva"},{"code":"portbou","id":"m138-p17","type":"m","value":"Portbou"},{"code":"les-preses","id":"m139-p17","type":"m","value":"Les Preses"},{"code":"puigcerda","id":"m141-p17","type":"m","value":"Puigcerdà"},{"code":"quart","id":"m142-p17","type":"m","value":"Quart"},{"code":"queralbs","id":"m43-p17","type":"m","value":"Queralbs"},{"code":"rabos","id":"m143-p17","type":"m","value":"Rabós"},{"code":"regencos","id":"m144-p17","type":"m","value":"Regencós"},{"code":"ribes-de-freser","id":"m145-p17","type":"m","value":"Ribes de Freser"},{"code":"riells-i-viabrea","id":"m146-p17","type":"m","value":"Riells i Viabrea"},{"code":"ripoll","id":"m147-p17","type":"m","value":"Ripoll"},{"code":"riudarenes","id":"m148-p17","type":"m","value":"Riudarenes"},{"code":"riudaura","id":"m149-p17","type":"m","value":"Riudaura"},{"code":"riudellots-de-la-selva","id":"m150-p17","type":"m","value":"Riudellots de la Selva"},{"code":"riumors","id":"m151-p17","type":"m","value":"Riumors"},{"code":"roses","id":"m152-p17","type":"m","value":"Roses"},{"code":"rupia","id":"m153-p17","type":"m","value":"Rupià"},{"code":"sales-de-llierca","id":"m154-p17","type":"m","value":"Sales de Llierca"},{"code":"salt","id":"m155-p17","type":"m","value":"Salt"},{"code":"sant-andreu-salou","id":"m157-p17","type":"m","value":"Sant Andreu Salou"},{"code":"sant-aniol-de-finestres","id":"m183-p17","type":"m","value":"Sant Aniol de Finestres"},{"code":"sant-climent-sescebes","id":"m158-p17","type":"m","value":"Sant Climent Sescebes"},{"code":"sant-feliu-de-buixalleu","id":"m159-p17","type":"m","value":"Sant Feliu de Buixalleu"},{"code":"sant-feliu-de-guixols","id":"m160-p17","type":"m","value":"Sant Feliu de Guíxols"},{"code":"sant-feliu-de-pallerols","id":"m161-p17","type":"m","value":"Sant Feliu de Pallerols"},{"code":"sant-ferriol","id":"m162-p17","type":"m","value":"Sant Ferriol"},{"code":"sant-gregori","id":"m163-p17","type":"m","value":"Sant Gregori"},{"code":"sant-hilari-sacalm","id":"m164-p17","type":"m","value":"Sant Hilari Sacalm"},{"code":"sant-jaume-de-llierca","id":"m165-p17","type":"m","value":"Sant Jaume de Llierca"},{"code":"sant-joan-de-les-abadesses","id":"m167-p17","type":"m","value":"Sant Joan de les Abadesses"},{"code":"sant-joan-de-mollet","id":"m168-p17","type":"m","value":"Sant Joan de Mollet"},{"code":"sant-joan-les-fonts","id":"m185-p17","type":"m","value":"Sant Joan les Fonts"},{"code":"sant-jordi-desvalls","id":"m166-p17","type":"m","value":"Sant Jordi Desvalls"},{"code":"sant-julia-de-ramis","id":"m169-p17","type":"m","value":"Sant Julià de Ramis"},{"code":"sant-julia-del-llor-i-bonmati","id":"m903-p17","type":"m","value":"Sant Julià del Llor i Bonmatí"},{"code":"sant-llorenc-de-la-muga","id":"m171-p17","type":"m","value":"Sant Llorenç de la Muga"},{"code":"sant-marti-de-llemena","id":"m172-p17","type":"m","value":"Sant Martí de Llémena"},{"code":"sant-marti-vell","id":"m173-p17","type":"m","value":"Sant Martí Vell"},{"code":"sant-miquel-de-campmajor","id":"m174-p17","type":"m","value":"Sant Miquel de Campmajor"},{"code":"sant-miquel-de-fluvia","id":"m175-p17","type":"m","value":"Sant Miquel de Fluvià"},{"code":"sant-mori","id":"m176-p17","type":"m","value":"Sant Mori"},{"code":"sant-pau-de-seguries","id":"m177-p17","type":"m","value":"Sant Pau de Segúries"},{"code":"sant-pere-pescador","id":"m178-p17","type":"m","value":"Sant Pere Pescador"},{"code":"santa-coloma-de-farners","id":"m180-p17","type":"m","value":"Santa Coloma de Farners"},{"code":"santa-cristina-d-aro","id":"m181-p17","type":"m","value":"Santa Cristina d'Aro"},{"code":"santa-llogaia-d-alguema","id":"m182-p17","type":"m","value":"Santa Llogaia d'Àlguema"},{"code":"santa-pau","id":"m184-p17","type":"m","value":"Santa Pau"},{"code":"sarria-de-ter","id":"m186-p17","type":"m","value":"Sarrià de Ter"},{"code":"camallera-i-llampaies-saus","id":"m187-p17","type":"m","value":"Camallera i Llampaies Saus"},{"code":"la-selva-de-mar","id":"m188-p17","type":"m","value":"La Selva de Mar"},{"code":"serinya","id":"m190-p17","type":"m","value":"Serinyà"},{"code":"serra-de-daro","id":"m191-p17","type":"m","value":"Serra de Daró"},{"code":"setcases","id":"m192-p17","type":"m","value":"Setcases"},{"code":"sils","id":"m193-p17","type":"m","value":"Sils"},{"code":"siurana","id":"m52-p17","type":"m","value":"Siurana"},{"code":"susqueda","id":"m194-p17","type":"m","value":"Susqueda"},{"code":"la-tallada-d-emporda","id":"m195-p17","type":"m","value":"La Tallada d'Empordà"},{"code":"terrades","id":"m196-p17","type":"m","value":"Terrades"},{"code":"torrent","id":"m197-p17","type":"m","value":"Torrent"},{"code":"torroella-de-fluvia","id":"m198-p17","type":"m","value":"Torroella de Fluvià"},{"code":"torroella-de-montgri","id":"m199-p17","type":"m","value":"Torroella de Montgrí"},{"code":"tortella","id":"m200-p17","type":"m","value":"Tortellà"},{"code":"toses","id":"m201-p17","type":"m","value":"Toses"},{"code":"tossa-de-mar","id":"m202-p17","type":"m","value":"Tossa de Mar"},{"code":"ulla","id":"m204-p17","type":"m","value":"Ullà"},{"code":"ullastret","id":"m205-p17","type":"m","value":"Ullastret"},{"code":"ultramort","id":"m203-p17","type":"m","value":"Ultramort"},{"code":"urus","id":"m206-p17","type":"m","value":"Urús"},{"code":"la-vajol","id":"m14-p17","type":"m","value":"La Vajol"},{"code":"la-vall-de-bianya","id":"m208-p17","type":"m","value":"La Vall de Bianya"},{"code":"la-vall-d-en-bas","id":"m207-p17","type":"m","value":"La Vall d'en Bas"},{"code":"vallfogona-de-ripolles","id":"m170-p17","type":"m","value":"Vallfogona de Ripollès"},{"code":"vall-llobrega","id":"m209-p17","type":"m","value":"Vall-llobrega"},{"code":"ventallo","id":"m210-p17","type":"m","value":"Ventalló"},{"code":"verges","id":"m211-p17","type":"m","value":"Verges"},{"code":"vidra","id":"m212-p17","type":"m","value":"Vidrà"},{"code":"vidreres","id":"m213-p17","type":"m","value":"Vidreres"},{"code":"vilabertran","id":"m214-p17","type":"m","value":"Vilabertran"},{"code":"vilablareix","id":"m215-p17","type":"m","value":"Vilablareix"},{"code":"viladamat","id":"m217-p17","type":"m","value":"Viladamat"},{"code":"viladasens","id":"m216-p17","type":"m","value":"Viladasens"},{"code":"vilademuls","id":"m218-p17","type":"m","value":"Vilademuls"},{"code":"viladrau","id":"m220-p17","type":"m","value":"Viladrau"},{"code":"vilafant","id":"m221-p17","type":"m","value":"Vilafant"},{"code":"vilajuiga","id":"m223-p17","type":"m","value":"Vilajuïga"},{"code":"vilallonga-de-ter","id":"m224-p17","type":"m","value":"Vilallonga de Ter"},{"code":"vilamacolum","id":"m225-p17","type":"m","value":"Vilamacolum"},{"code":"vilamalla","id":"m226-p17","type":"m","value":"Vilamalla"},{"code":"vilamaniscle","id":"m227-p17","type":"m","value":"Vilamaniscle"},{"code":"vilanant","id":"m228-p17","type":"m","value":"Vilanant"},{"code":"vila-sacra","id":"m230-p17","type":"m","value":"Vila-sacra"},{"code":"vilaur","id":"m222-p17","type":"m","value":"Vilaür"},{"code":"vilobi-d-onyar","id":"m233-p17","type":"m","value":"Vilobí d'Onyar"},{"code":"vilopriu","id":"m232-p17","type":"m","value":"Vilopriu"},{"code":"abella-de-la-conca","id":"m1-p25","type":"m","value":"Abella de la Conca"},{"code":"ager","id":"m2-p25","type":"m","value":"Àger"},{"code":"agramunt","id":"m3-p25","type":"m","value":"Agramunt"},{"code":"aitona","id":"m38-p25","type":"m","value":"Aitona"},{"code":"els-alamus","id":"m4-p25","type":"m","value":"Els Alamús"},{"code":"alas-i-cerc","id":"m5-p25","type":"m","value":"Alàs i Cerc"},{"code":"l-albages","id":"m6-p25","type":"m","value":"L' Albagés"},{"code":"albatarrec","id":"m7-p25","type":"m","value":"Albatàrrec"},{"code":"albesa","id":"m8-p25","type":"m","value":"Albesa"},{"code":"l-albi","id":"m9-p25","type":"m","value":"L' Albi"},{"code":"alcano","id":"m10-p25","type":"m","value":"Alcanó"},{"code":"alcarras","id":"m11-p25","type":"m","value":"Alcarràs"},{"code":"alcoletge","id":"m12-p25","type":"m","value":"Alcoletge"},{"code":"alfarras","id":"m13-p25","type":"m","value":"Alfarràs"},{"code":"alfes","id":"m14-p25","type":"m","value":"Alfés"},{"code":"algerri","id":"m15-p25","type":"m","value":"Algerri"},{"code":"alguaire","id":"m16-p25","type":"m","value":"Alguaire"},{"code":"alins","id":"m17-p25","type":"m","value":"Alins"},{"code":"almacelles","id":"m19-p25","type":"m","value":"Almacelles"},{"code":"almatret","id":"m20-p25","type":"m","value":"Almatret"},{"code":"almenar","id":"m21-p25","type":"m","value":"Almenar"},{"code":"alos-de-balaguer","id":"m22-p25","type":"m","value":"Alòs de Balaguer"},{"code":"alpicat","id":"m23-p25","type":"m","value":"Alpicat"},{"code":"alt-aneu","id":"m24-p25","type":"m","value":"Alt Àneu"},{"code":"anglesola","id":"m27-p25","type":"m","value":"Anglesola"},{"code":"arbeca","id":"m29-p25","type":"m","value":"Arbeca"},{"code":"arres","id":"m31-p25","type":"m","value":"Arres"},{"code":"arseguel","id":"m32-p25","type":"m","value":"Arsèguel"},{"code":"artesa-de-lleida","id":"m33-p25","type":"m","value":"Artesa de Lleida"},{"code":"artesa-de-segre","id":"m34-p25","type":"m","value":"Artesa de Segre"},{"code":"aspa","id":"m36-p25","type":"m","value":"Aspa"},{"code":"les-avellanes-i-santa-linya","id":"m37-p25","type":"m","value":"Les Avellanes i Santa Linya"},{"code":"baix-pallars","id":"m39-p25","type":"m","value":"Baix Pallars"},{"code":"balaguer","id":"m40-p25","type":"m","value":"Balaguer"},{"code":"barbens","id":"m41-p25","type":"m","value":"Barbens"},{"code":"la-baronia-de-rialb","id":"m42-p25","type":"m","value":"La Baronia de Rialb"},{"code":"bassella","id":"m44-p25","type":"m","value":"Bassella"},{"code":"bausen","id":"m45-p25","type":"m","value":"Bausen"},{"code":"belianes","id":"m46-p25","type":"m","value":"Belianes"},{"code":"bellaguarda","id":"m170-p25","type":"m","value":"Bellaguarda"},{"code":"bellcaire-d-urgell","id":"m47-p25","type":"m","value":"Bellcaire d'Urgell"},{"code":"bell-lloc-d-urgell","id":"m48-p25","type":"m","value":"Bell-lloc d'Urgell"},{"code":"bellmunt-d-urgell","id":"m49-p25","type":"m","value":"Bellmunt d'Urgell"},{"code":"bellpuig","id":"m50-p25","type":"m","value":"Bellpuig"},{"code":"bellver-de-cerdanya","id":"m51-p25","type":"m","value":"Bellver de Cerdanya"},{"code":"bellvis","id":"m52-p25","type":"m","value":"Bellvís"},{"code":"benavent-de-segria","id":"m53-p25","type":"m","value":"Benavent de Segrià"},{"code":"biosca","id":"m55-p25","type":"m","value":"Biosca"},{"code":"es-bordes","id":"m57-p25","type":"m","value":"Es Bòrdes"},{"code":"les-borges-blanques","id":"m58-p25","type":"m","value":"Les Borges Blanques"},{"code":"bossost","id":"m59-p25","type":"m","value":"Bossòst"},{"code":"bovera","id":"m56-p25","type":"m","value":"Bovera"},{"code":"cabanabona","id":"m60-p25","type":"m","value":"Cabanabona"},{"code":"cabo","id":"m61-p25","type":"m","value":"Cabó"},{"code":"camarasa","id":"m62-p25","type":"m","value":"Camarasa"},{"code":"canejan","id":"m63-p25","type":"m","value":"Canejan"},{"code":"castell-de-mur","id":"m904-p25","type":"m","value":"Castell de Mur"},{"code":"castellar-de-la-ribera","id":"m64-p25","type":"m","value":"Castellar de la Ribera"},{"code":"castelldans","id":"m67-p25","type":"m","value":"Castelldans"},{"code":"castellnou-de-seana","id":"m68-p25","type":"m","value":"Castellnou de Seana"},{"code":"castello-de-farfanya","id":"m69-p25","type":"m","value":"Castelló de Farfanya"},{"code":"castellsera","id":"m70-p25","type":"m","value":"Castellserà"},{"code":"cava","id":"m71-p25","type":"m","value":"Cava"},{"code":"cervera","id":"m72-p25","type":"m","value":"Cervera"},{"code":"cervia-de-les-garrigues","id":"m73-p25","type":"m","value":"Cervià de les Garrigues"},{"code":"ciutadilla","id":"m74-p25","type":"m","value":"Ciutadilla"},{"code":"clariana-de-cardener","id":"m75-p25","type":"m","value":"Clariana de Cardener"},{"code":"el-cogul","id":"m76-p25","type":"m","value":"El Cogul"},{"code":"coll-de-nargo","id":"m77-p25","type":"m","value":"Coll de Nargó"},{"code":"la-coma-i-la-pedra","id":"m163-p25","type":"m","value":"La Coma i la Pedra"},{"code":"conca-de-dalt","id":"m161-p25","type":"m","value":"Conca de Dalt"},{"code":"corbins","id":"m78-p25","type":"m","value":"Corbins"},{"code":"cubells","id":"m79-p25","type":"m","value":"Cubells"},{"code":"l-espluga-calba","id":"m81-p25","type":"m","value":"L' Espluga Calba"},{"code":"espot","id":"m82-p25","type":"m","value":"Espot"},{"code":"estamariu","id":"m88-p25","type":"m","value":"Estamariu"},{"code":"estaras","id":"m85-p25","type":"m","value":"Estaràs"},{"code":"esterri-d-aneu","id":"m86-p25","type":"m","value":"Esterri d'Àneu"},{"code":"esterri-de-cardos","id":"m87-p25","type":"m","value":"Esterri de Cardós"},{"code":"farrera","id":"m89-p25","type":"m","value":"Farrera"},{"code":"figols-i-alinya","id":"m908-p25","type":"m","value":"Fígols i Alinyà"},{"code":"la-floresta","id":"m92-p25","type":"m","value":"La Floresta"},{"code":"fondarella","id":"m93-p25","type":"m","value":"Fondarella"},{"code":"foradada","id":"m94-p25","type":"m","value":"Foradada"},{"code":"la-fuliola","id":"m96-p25","type":"m","value":"La Fuliola"},{"code":"fulleda","id":"m97-p25","type":"m","value":"Fulleda"},{"code":"gavet-de-la-conca","id":"m98-p25","type":"m","value":"Gavet de la Conca"},{"code":"gimenells-i-el-pla-de-la-font","id":"m912-p25","type":"m","value":"Gimenells i el Pla de la Font"},{"code":"golmes","id":"m99-p25","type":"m","value":"Golmés"},{"code":"gosol","id":"m100-p25","type":"m","value":"Gósol"},{"code":"la-granadella","id":"m101-p25","type":"m","value":"La Granadella"},{"code":"la-granja-d-escarp","id":"m102-p25","type":"m","value":"La Granja d'Escarp"},{"code":"granyanella","id":"m103-p25","type":"m","value":"Granyanella"},{"code":"granyena-de-les-garrigues","id":"m105-p25","type":"m","value":"Granyena de les Garrigues"},{"code":"granyena-de-segarra","id":"m104-p25","type":"m","value":"Granyena de Segarra"},{"code":"guimera","id":"m109-p25","type":"m","value":"Guimerà"},{"code":"la-guingueta-d-aneu","id":"m903-p25","type":"m","value":"La Guingueta d'Àneu"},{"code":"guissona","id":"m110-p25","type":"m","value":"Guissona"},{"code":"guixers","id":"m111-p25","type":"m","value":"Guixers"},{"code":"isona-i-conca-della","id":"m115-p25","type":"m","value":"Isona i Conca Dellà"},{"code":"ivars-de-noguera","id":"m112-p25","type":"m","value":"Ivars de Noguera"},{"code":"ivars-d-urgell","id":"m113-p25","type":"m","value":"Ivars d'Urgell"},{"code":"ivorra","id":"m114-p25","type":"m","value":"Ivorra"},{"code":"josa-i-tuixen","id":"m910-p25","type":"m","value":"Josa i Tuixén"},{"code":"juncosa","id":"m118-p25","type":"m","value":"Juncosa"},{"code":"juneda","id":"m119-p25","type":"m","value":"Juneda"},{"code":"les","id":"m121-p25","type":"m","value":"Les"},{"code":"linyola","id":"m122-p25","type":"m","value":"Linyola"},{"code":"lladorre","id":"m123-p25","type":"m","value":"Lladorre"},{"code":"lladurs","id":"m124-p25","type":"m","value":"Lladurs"},{"code":"llardecans","id":"m125-p25","type":"m","value":"Llardecans"},{"code":"llavorsi","id":"m126-p25","type":"m","value":"Llavorsí"},{"code":"lleida","id":"m120-p25","type":"m","value":"Lleida"},{"code":"lles-de-cerdanya","id":"m127-p25","type":"m","value":"Lles de Cerdanya"},{"code":"llimiana","id":"m128-p25","type":"m","value":"Llimiana"},{"code":"llobera","id":"m129-p25","type":"m","value":"Llobera"},{"code":"maials","id":"m133-p25","type":"m","value":"Maials"},{"code":"malda","id":"m130-p25","type":"m","value":"Maldà"},{"code":"massalcoreig","id":"m131-p25","type":"m","value":"Massalcoreig"},{"code":"massoteres","id":"m132-p25","type":"m","value":"Massoteres"},{"code":"menarguens","id":"m134-p25","type":"m","value":"Menàrguens"},{"code":"miralcamp","id":"m135-p25","type":"m","value":"Miralcamp"},{"code":"mollerussa","id":"m137-p25","type":"m","value":"Mollerussa"},{"code":"la-molsosa","id":"m136-p25","type":"m","value":"La Molsosa"},{"code":"montella-i-martinet","id":"m139-p25","type":"m","value":"Montellà i Martinet"},{"code":"montferrer-i-castellbo","id":"m140-p25","type":"m","value":"Montferrer i Castellbò"},{"code":"montgai","id":"m138-p25","type":"m","value":"Montgai"},{"code":"montoliu-de-lleida","id":"m142-p25","type":"m","value":"Montoliu de Lleida"},{"code":"montoliu-de-segarra","id":"m141-p25","type":"m","value":"Montoliu de Segarra"},{"code":"montornes-de-segarra","id":"m143-p25","type":"m","value":"Montornès de Segarra"},{"code":"nalec","id":"m145-p25","type":"m","value":"Nalec"},{"code":"naut-aran","id":"m25-p25","type":"m","value":"Naut Aran"},{"code":"naves","id":"m146-p25","type":"m","value":"Navès"},{"code":"oden","id":"m148-p25","type":"m","value":"Odèn"},{"code":"oliana","id":"m149-p25","type":"m","value":"Oliana"},{"code":"oliola","id":"m150-p25","type":"m","value":"Oliola"},{"code":"olius","id":"m151-p25","type":"m","value":"Olius"},{"code":"les-oluges","id":"m152-p25","type":"m","value":"Les Oluges"},{"code":"els-omellons","id":"m153-p25","type":"m","value":"Els Omellons"},{"code":"els-omells-de-na-gaia","id":"m154-p25","type":"m","value":"Els Omells de na Gaia"},{"code":"organya","id":"m155-p25","type":"m","value":"Organyà"},{"code":"os-de-balaguer","id":"m156-p25","type":"m","value":"Os de Balaguer"},{"code":"osso-de-sio","id":"m157-p25","type":"m","value":"Ossó de Sió"},{"code":"el-palau-d-anglesola","id":"m158-p25","type":"m","value":"El Palau d'Anglesola"},{"code":"penelles","id":"m164-p25","type":"m","value":"Penelles"},{"code":"peramola","id":"m165-p25","type":"m","value":"Peramola"},{"code":"pinell-de-solsones","id":"m166-p25","type":"m","value":"Pinell de Solsonès"},{"code":"pinos","id":"m167-p25","type":"m","value":"Pinós"},{"code":"els-plans-de-sio","id":"m911-p25","type":"m","value":"Els Plans de Sió"},{"code":"el-poal","id":"m168-p25","type":"m","value":"El Poal"},{"code":"la-pobla-de-cervoles","id":"m169-p25","type":"m","value":"La Pobla de Cérvoles"},{"code":"la-pobla-de-segur","id":"m171-p25","type":"m","value":"La Pobla de Segur"},{"code":"el-pont-de-bar","id":"m30-p25","type":"m","value":"El Pont de Bar"},{"code":"el-pont-de-suert","id":"m173-p25","type":"m","value":"El Pont de Suert"},{"code":"ponts","id":"m172-p25","type":"m","value":"Ponts"},{"code":"la-portella","id":"m174-p25","type":"m","value":"La Portella"},{"code":"prats-i-sansor","id":"m175-p25","type":"m","value":"Prats i Sansor"},{"code":"preixana","id":"m176-p25","type":"m","value":"Preixana"},{"code":"preixens","id":"m177-p25","type":"m","value":"Preixens"},{"code":"prullans","id":"m179-p25","type":"m","value":"Prullans"},{"code":"puiggros","id":"m180-p25","type":"m","value":"Puiggròs"},{"code":"puigverd-d-agramunt","id":"m181-p25","type":"m","value":"Puigverd d'Agramunt"},{"code":"puigverd-de-lleida","id":"m182-p25","type":"m","value":"Puigverd de Lleida"},{"code":"rialp","id":"m183-p25","type":"m","value":"Rialp"},{"code":"ribera-d-ondara","id":"m905-p25","type":"m","value":"Ribera d'Ondara"},{"code":"ribera-d-urgellet","id":"m185-p25","type":"m","value":"Ribera d'Urgellet"},{"code":"riner","id":"m186-p25","type":"m","value":"Riner"},{"code":"riu-de-cerdanya","id":"m913-p25","type":"m","value":"Riu de Cerdanya"},{"code":"rossello","id":"m189-p25","type":"m","value":"Rosselló"},{"code":"salas-de-pallars","id":"m190-p25","type":"m","value":"Salàs de Pallars"},{"code":"sanauja","id":"m191-p25","type":"m","value":"Sanaüja"},{"code":"sant-esteve-de-la-sarga","id":"m196-p25","type":"m","value":"Sant Esteve de la Sarga"},{"code":"sant-guim-de-freixenet","id":"m192-p25","type":"m","value":"Sant Guim de Freixenet"},{"code":"sant-guim-de-la-plana","id":"m197-p25","type":"m","value":"Sant Guim de la Plana"},{"code":"sant-llorenc-de-morunys","id":"m193-p25","type":"m","value":"Sant Llorenç de Morunys"},{"code":"sant-marti-de-riucorb","id":"m902-p25","type":"m","value":"Sant Martí de Riucorb"},{"code":"sant-ramon","id":"m194-p25","type":"m","value":"Sant Ramon"},{"code":"sarroca-de-bellera","id":"m201-p25","type":"m","value":"Sarroca de Bellera"},{"code":"sarroca-de-lleida","id":"m200-p25","type":"m","value":"Sarroca de Lleida"},{"code":"senterada","id":"m202-p25","type":"m","value":"Senterada"},{"code":"la-sentiu-de-sio","id":"m35-p25","type":"m","value":"La Sentiu de Sió"},{"code":"seros","id":"m204-p25","type":"m","value":"Seròs"},{"code":"la-seu-d-urgell","id":"m203-p25","type":"m","value":"La Seu d'Urgell"},{"code":"sidamon","id":"m205-p25","type":"m","value":"Sidamon"},{"code":"el-soleras","id":"m206-p25","type":"m","value":"El Soleràs"},{"code":"solsona","id":"m207-p25","type":"m","value":"Solsona"},{"code":"soriguera","id":"m208-p25","type":"m","value":"Soriguera"},{"code":"sort","id":"m209-p25","type":"m","value":"Sort"},{"code":"soses","id":"m210-p25","type":"m","value":"Soses"},{"code":"sudanell","id":"m211-p25","type":"m","value":"Sudanell"},{"code":"sunyer","id":"m212-p25","type":"m","value":"Sunyer"},{"code":"talarn","id":"m215-p25","type":"m","value":"Talarn"},{"code":"talavera","id":"m216-p25","type":"m","value":"Talavera"},{"code":"tarrega","id":"m217-p25","type":"m","value":"Tàrrega"},{"code":"tarres","id":"m218-p25","type":"m","value":"Tarrés"},{"code":"tarroja-de-segarra","id":"m219-p25","type":"m","value":"Tarroja de Segarra"},{"code":"termens","id":"m220-p25","type":"m","value":"Térmens"},{"code":"tirvia","id":"m221-p25","type":"m","value":"Tírvia"},{"code":"tiurana","id":"m222-p25","type":"m","value":"Tiurana"},{"code":"tora","id":"m223-p25","type":"m","value":"Torà"},{"code":"els-torms","id":"m224-p25","type":"m","value":"Els Torms"},{"code":"tornabous","id":"m225-p25","type":"m","value":"Tornabous"},{"code":"la-torre-de-cabdella","id":"m227-p25","type":"m","value":"La Torre de Cabdella"},{"code":"torrebesses","id":"m226-p25","type":"m","value":"Torrebesses"},{"code":"torrefarrera","id":"m228-p25","type":"m","value":"Torrefarrera"},{"code":"torrefeta-i-florejacs","id":"m907-p25","type":"m","value":"Torrefeta i Florejacs"},{"code":"torregrossa","id":"m230-p25","type":"m","value":"Torregrossa"},{"code":"torrelameu","id":"m231-p25","type":"m","value":"Torrelameu"},{"code":"torres-de-segre","id":"m232-p25","type":"m","value":"Torres de Segre"},{"code":"torre-serona","id":"m233-p25","type":"m","value":"Torre-serona"},{"code":"tremp","id":"m234-p25","type":"m","value":"Tremp"},{"code":"la-vall-de-boi","id":"m43-p25","type":"m","value":"La Vall de Boí"},{"code":"vall-de-cardos","id":"m901-p25","type":"m","value":"Vall de Cardós"},{"code":"vallbona-de-les-monges","id":"m238-p25","type":"m","value":"Vallbona de les Monges"},{"code":"vallfogona-de-balaguer","id":"m240-p25","type":"m","value":"Vallfogona de Balaguer"},{"code":"les-valls-d-aguilar","id":"m906-p25","type":"m","value":"Les Valls d'Aguilar"},{"code":"les-valls-de-valira","id":"m239-p25","type":"m","value":"Les Valls de Valira"},{"code":"la-vansa-i-fornols","id":"m909-p25","type":"m","value":"La Vansa i Fórnols"},{"code":"verdu","id":"m242-p25","type":"m","value":"Verdú"},{"code":"vielha-e-mijaran","id":"m243-p25","type":"m","value":"Vielha e Mijaran"},{"code":"vilagrassa","id":"m244-p25","type":"m","value":"Vilagrassa"},{"code":"vilaller","id":"m245-p25","type":"m","value":"Vilaller"},{"code":"vilamos","id":"m247-p25","type":"m","value":"Vilamòs"},{"code":"vilanova-de-bellpuig","id":"m248-p25","type":"m","value":"Vilanova de Bellpuig"},{"code":"vilanova-de-la-barca","id":"m254-p25","type":"m","value":"Vilanova de la Barca"},{"code":"vilanova-de-l-aguda","id":"m249-p25","type":"m","value":"Vilanova de l'Aguda"},{"code":"vilanova-de-meia","id":"m250-p25","type":"m","value":"Vilanova de Meià"},{"code":"vilanova-de-segria","id":"m251-p25","type":"m","value":"Vilanova de Segrià"},{"code":"vila-sana","id":"m252-p25","type":"m","value":"Vila-sana"},{"code":"el-vilosell","id":"m253-p25","type":"m","value":"El Vilosell"},{"code":"vinaixa","id":"m255-p25","type":"m","value":"Vinaixa"},{"code":"aiguamurcia","id":"m1-p43","type":"m","value":"Aiguamúrcia"},{"code":"albinyana","id":"m2-p43","type":"m","value":"Albinyana"},{"code":"l-albiol","id":"m3-p43","type":"m","value":"L' Albiol"},{"code":"alcanar","id":"m4-p43","type":"m","value":"Alcanar"},{"code":"alcover","id":"m5-p43","type":"m","value":"Alcover"},{"code":"l-aldea","id":"m904-p43","type":"m","value":"L' Aldea"},{"code":"aldover","id":"m6-p43","type":"m","value":"Aldover"},{"code":"l-aleixar","id":"m7-p43","type":"m","value":"L' Aleixar"},{"code":"alfara-de-carles","id":"m8-p43","type":"m","value":"Alfara de Carles"},{"code":"alforja","id":"m9-p43","type":"m","value":"Alforja"},{"code":"alio","id":"m10-p43","type":"m","value":"Alió"},{"code":"almoster","id":"m11-p43","type":"m","value":"Almoster"},{"code":"altafulla","id":"m12-p43","type":"m","value":"Altafulla"},{"code":"l-ametlla-de-mar","id":"m13-p43","type":"m","value":"L' Ametlla de Mar"},{"code":"l-ampolla","id":"m906-p43","type":"m","value":"L' Ampolla"},{"code":"amposta","id":"m14-p43","type":"m","value":"Amposta"},{"code":"l-arboc","id":"m16-p43","type":"m","value":"L' Arboç"},{"code":"arboli","id":"m15-p43","type":"m","value":"Arbolí"},{"code":"l-argentera","id":"m17-p43","type":"m","value":"L' Argentera"},{"code":"arnes","id":"m18-p43","type":"m","value":"Arnes"},{"code":"asco","id":"m19-p43","type":"m","value":"Ascó"},{"code":"banyeres-del-penedes","id":"m20-p43","type":"m","value":"Banyeres del Penedès"},{"code":"barbera-de-la-conca","id":"m21-p43","type":"m","value":"Barberà de la Conca"},{"code":"batea","id":"m22-p43","type":"m","value":"Batea"},{"code":"bellmunt-del-priorat","id":"m23-p43","type":"m","value":"Bellmunt del Priorat"},{"code":"bellvei","id":"m24-p43","type":"m","value":"Bellvei"},{"code":"benifallet","id":"m25-p43","type":"m","value":"Benifallet"},{"code":"benissanet","id":"m26-p43","type":"m","value":"Benissanet"},{"code":"la-bisbal-de-falset","id":"m27-p43","type":"m","value":"La Bisbal de Falset"},{"code":"la-bisbal-del-penedes","id":"m28-p43","type":"m","value":"La Bisbal del Penedès"},{"code":"blancafort","id":"m29-p43","type":"m","value":"Blancafort"},{"code":"bonastre","id":"m30-p43","type":"m","value":"Bonastre"},{"code":"les-borges-del-camp","id":"m31-p43","type":"m","value":"Les Borges del Camp"},{"code":"bot","id":"m32-p43","type":"m","value":"Bot"},{"code":"botarell","id":"m33-p43","type":"m","value":"Botarell"},{"code":"brafim","id":"m34-p43","type":"m","value":"Bràfim"},{"code":"cabaces","id":"m35-p43","type":"m","value":"Cabacés"},{"code":"cabra-del-camp","id":"m36-p43","type":"m","value":"Cabra del Camp"},{"code":"calafell","id":"m37-p43","type":"m","value":"Calafell"},{"code":"camarles","id":"m903-p43","type":"m","value":"Camarles"},{"code":"cambrils","id":"m38-p43","type":"m","value":"Cambrils"},{"code":"la-canonja","id":"m907-p43","type":"m","value":"La Canonja"},{"code":"capafonts","id":"m39-p43","type":"m","value":"Capafonts"},{"code":"capcanes","id":"m40-p43","type":"m","value":"Capçanes"},{"code":"caseres","id":"m41-p43","type":"m","value":"Caseres"},{"code":"castellvell-del-camp","id":"m42-p43","type":"m","value":"Castellvell del Camp"},{"code":"el-catllar","id":"m43-p43","type":"m","value":"El Catllar"},{"code":"colldejou","id":"m45-p43","type":"m","value":"Colldejou"},{"code":"conesa","id":"m46-p43","type":"m","value":"Conesa"},{"code":"constanti","id":"m47-p43","type":"m","value":"Constantí"},{"code":"corbera-d-ebre","id":"m48-p43","type":"m","value":"Corbera d'Ebre"},{"code":"cornudella-de-montsant","id":"m49-p43","type":"m","value":"Cornudella de Montsant"},{"code":"creixell","id":"m50-p43","type":"m","value":"Creixell"},{"code":"cunit","id":"m51-p43","type":"m","value":"Cunit"},{"code":"deltebre","id":"m901-p43","type":"m","value":"Deltebre"},{"code":"duesaigues","id":"m53-p43","type":"m","value":"Duesaigües"},{"code":"l-espluga-de-francoli","id":"m54-p43","type":"m","value":"L' Espluga de Francolí"},{"code":"falset","id":"m55-p43","type":"m","value":"Falset"},{"code":"la-fatarella","id":"m56-p43","type":"m","value":"La Fatarella"},{"code":"la-febro","id":"m57-p43","type":"m","value":"La Febró"},{"code":"la-figuera","id":"m58-p43","type":"m","value":"La Figuera"},{"code":"figuerola-del-camp","id":"m59-p43","type":"m","value":"Figuerola del Camp"},{"code":"flix","id":"m60-p43","type":"m","value":"Flix"},{"code":"fores","id":"m61-p43","type":"m","value":"Forès"},{"code":"freginals","id":"m62-p43","type":"m","value":"Freginals"},{"code":"la-galera","id":"m63-p43","type":"m","value":"La Galera"},{"code":"gandesa","id":"m64-p43","type":"m","value":"Gandesa"},{"code":"garcia","id":"m65-p43","type":"m","value":"Garcia"},{"code":"els-garidells","id":"m66-p43","type":"m","value":"Els Garidells"},{"code":"ginestar","id":"m67-p43","type":"m","value":"Ginestar"},{"code":"godall","id":"m68-p43","type":"m","value":"Godall"},{"code":"gratallops","id":"m69-p43","type":"m","value":"Gratallops"},{"code":"els-guiamets","id":"m70-p43","type":"m","value":"Els Guiamets"},{"code":"horta-de-sant-joan","id":"m71-p43","type":"m","value":"Horta de Sant Joan"},{"code":"el-lloar","id":"m72-p43","type":"m","value":"El Lloar"},{"code":"llorac","id":"m73-p43","type":"m","value":"Llorac"},{"code":"llorenc-del-penedes","id":"m74-p43","type":"m","value":"Llorenç del Penedès"},{"code":"marca","id":"m76-p43","type":"m","value":"Marçà"},{"code":"margalef","id":"m75-p43","type":"m","value":"Margalef"},{"code":"mas-de-barberans","id":"m77-p43","type":"m","value":"Mas de Barberans"},{"code":"masdenverge","id":"m78-p43","type":"m","value":"Masdenverge"},{"code":"masllorenc","id":"m79-p43","type":"m","value":"Masllorenç"},{"code":"la-maso","id":"m80-p43","type":"m","value":"La Masó"},{"code":"maspujols","id":"m81-p43","type":"m","value":"Maspujols"},{"code":"el-masroig","id":"m82-p43","type":"m","value":"El Masroig"},{"code":"el-mila","id":"m83-p43","type":"m","value":"El Milà"},{"code":"miravet","id":"m84-p43","type":"m","value":"Miravet"},{"code":"el-molar","id":"m85-p43","type":"m","value":"El Molar"},{"code":"montblanc","id":"m86-p43","type":"m","value":"Montblanc"},{"code":"montbrio-del-camp","id":"m88-p43","type":"m","value":"Montbrió del Camp"},{"code":"montferri","id":"m89-p43","type":"m","value":"Montferri"},{"code":"el-montmell","id":"m90-p43","type":"m","value":"El Montmell"},{"code":"mont-ral","id":"m91-p43","type":"m","value":"Mont-ral"},{"code":"mont-roig-del-camp","id":"m92-p43","type":"m","value":"Mont-roig del Camp"},{"code":"mora-d-ebre","id":"m93-p43","type":"m","value":"Móra d'Ebre"},{"code":"mora-la-nova","id":"m94-p43","type":"m","value":"Móra la Nova"},{"code":"el-morell","id":"m95-p43","type":"m","value":"El Morell"},{"code":"la-morera-de-montsant","id":"m96-p43","type":"m","value":"La Morera de Montsant"},{"code":"la-nou-de-gaia","id":"m97-p43","type":"m","value":"La Nou de Gaià"},{"code":"nulles","id":"m98-p43","type":"m","value":"Nulles"},{"code":"els-pallaresos","id":"m100-p43","type":"m","value":"Els Pallaresos"},{"code":"la-palma-d-ebre","id":"m99-p43","type":"m","value":"La Palma d'Ebre"},{"code":"passanant-i-belltall","id":"m101-p43","type":"m","value":"Passanant i Belltall"},{"code":"pauls","id":"m102-p43","type":"m","value":"Paüls"},{"code":"perafort","id":"m103-p43","type":"m","value":"Perafort"},{"code":"el-perello","id":"m104-p43","type":"m","value":"El Perelló"},{"code":"les-piles","id":"m105-p43","type":"m","value":"Les Piles"},{"code":"el-pinell-de-brai","id":"m106-p43","type":"m","value":"El Pinell de Brai"},{"code":"pira","id":"m107-p43","type":"m","value":"Pira"},{"code":"el-pla-de-santa-maria","id":"m108-p43","type":"m","value":"El Pla de Santa Maria"},{"code":"la-pobla-de-mafumet","id":"m109-p43","type":"m","value":"La Pobla de Mafumet"},{"code":"la-pobla-de-massaluca","id":"m110-p43","type":"m","value":"La Pobla de Massaluca"},{"code":"la-pobla-de-montornes","id":"m111-p43","type":"m","value":"La Pobla de Montornès"},{"code":"poboleda","id":"m112-p43","type":"m","value":"Poboleda"},{"code":"el-pont-d-armentera","id":"m113-p43","type":"m","value":"El Pont d'Armentera"},{"code":"pontils","id":"m141-p43","type":"m","value":"Pontils"},{"code":"porrera","id":"m114-p43","type":"m","value":"Porrera"},{"code":"pradell-de-la-teixeta","id":"m115-p43","type":"m","value":"Pradell de la Teixeta"},{"code":"prades","id":"m116-p43","type":"m","value":"Prades"},{"code":"prat-de-comte","id":"m117-p43","type":"m","value":"Prat de Comte"},{"code":"pratdip","id":"m118-p43","type":"m","value":"Pratdip"},{"code":"puigpelat","id":"m119-p43","type":"m","value":"Puigpelat"},{"code":"querol","id":"m120-p43","type":"m","value":"Querol"},{"code":"rasquera","id":"m121-p43","type":"m","value":"Rasquera"},{"code":"renau","id":"m122-p43","type":"m","value":"Renau"},{"code":"reus","id":"m123-p43","type":"m","value":"Reus"},{"code":"la-riba","id":"m124-p43","type":"m","value":"La Riba"},{"code":"riba-roja-d-ebre","id":"m125-p43","type":"m","value":"Riba-roja d'Ebre"},{"code":"la-riera-de-gaia","id":"m126-p43","type":"m","value":"La Riera de Gaià"},{"code":"riudecanyes","id":"m127-p43","type":"m","value":"Riudecanyes"},{"code":"riudecols","id":"m128-p43","type":"m","value":"Riudecols"},{"code":"riudoms","id":"m129-p43","type":"m","value":"Riudoms"},{"code":"rocafort-de-queralt","id":"m130-p43","type":"m","value":"Rocafort de Queralt"},{"code":"roda-de-bera","id":"m131-p43","type":"m","value":"Roda de Berà"},{"code":"rodonya","id":"m132-p43","type":"m","value":"Rodonyà"},{"code":"roquetes","id":"m133-p43","type":"m","value":"Roquetes"},{"code":"el-rourell","id":"m134-p43","type":"m","value":"El Rourell"},{"code":"salomo","id":"m135-p43","type":"m","value":"Salomó"},{"code":"salou","id":"m905-p43","type":"m","value":"Salou"},{"code":"sant-carles-de-la-rapita","id":"m136-p43","type":"m","value":"Sant Carles de la Ràpita"},{"code":"sant-jaume-dels-domenys","id":"m137-p43","type":"m","value":"Sant Jaume dels Domenys"},{"code":"sant-jaume-d-enveja","id":"m902-p43","type":"m","value":"Sant Jaume d'Enveja"},{"code":"santa-barbara","id":"m138-p43","type":"m","value":"Santa Bàrbara"},{"code":"santa-coloma-de-queralt","id":"m139-p43","type":"m","value":"Santa Coloma de Queralt"},{"code":"santa-oliva","id":"m140-p43","type":"m","value":"Santa Oliva"},{"code":"sarral","id":"m142-p43","type":"m","value":"Sarral"},{"code":"savalla-del-comtat","id":"m143-p43","type":"m","value":"Savallà del Comtat"},{"code":"la-secuita","id":"m144-p43","type":"m","value":"La Secuita"},{"code":"la-selva-del-camp","id":"m145-p43","type":"m","value":"La Selva del Camp"},{"code":"senan","id":"m146-p43","type":"m","value":"Senan"},{"code":"la-senia","id":"m44-p43","type":"m","value":"La Sénia"},{"code":"solivella","id":"m147-p43","type":"m","value":"Solivella"},{"code":"tarragona","id":"m148-p43","type":"m","value":"Tarragona"},{"code":"tivenys","id":"m149-p43","type":"m","value":"Tivenys"},{"code":"tivissa","id":"m150-p43","type":"m","value":"Tivissa"},{"code":"la-torre-de-fontaubella","id":"m151-p43","type":"m","value":"La Torre de Fontaubella"},{"code":"la-torre-de-l-espanyol","id":"m152-p43","type":"m","value":"La Torre de l'Espanyol"},{"code":"torredembarra","id":"m153-p43","type":"m","value":"Torredembarra"},{"code":"torroja-del-priorat","id":"m154-p43","type":"m","value":"Torroja del Priorat"},{"code":"tortosa","id":"m155-p43","type":"m","value":"Tortosa"},{"code":"ulldecona","id":"m156-p43","type":"m","value":"Ulldecona"},{"code":"ulldemolins","id":"m157-p43","type":"m","value":"Ulldemolins"},{"code":"vallclara","id":"m158-p43","type":"m","value":"Vallclara"},{"code":"vallfogona-de-riucorb","id":"m159-p43","type":"m","value":"Vallfogona de Riucorb"},{"code":"vallmoll","id":"m160-p43","type":"m","value":"Vallmoll"},{"code":"valls","id":"m161-p43","type":"m","value":"Valls"},{"code":"vandellos-i-l-hospitalet-de-l-infant","id":"m162-p43","type":"m","value":"Vandellòs i l'Hospitalet de l'Infant"},{"code":"el-vendrell","id":"m163-p43","type":"m","value":"El Vendrell"},{"code":"vespella-de-gaia","id":"m164-p43","type":"m","value":"Vespella de Gaià"},{"code":"vilabella","id":"m165-p43","type":"m","value":"Vilabella"},{"code":"vilalba-dels-arcs","id":"m175-p43","type":"m","value":"Vilalba dels Arcs"},{"code":"vilallonga-del-camp","id":"m166-p43","type":"m","value":"Vilallonga del Camp"},{"code":"vilanova-de-prades","id":"m168-p43","type":"m","value":"Vilanova de Prades"},{"code":"vilanova-d-escornalbou","id":"m167-p43","type":"m","value":"Vilanova d'Escornalbou"},{"code":"vilaplana","id":"m169-p43","type":"m","value":"Vilaplana"},{"code":"vila-rodona","id":"m170-p43","type":"m","value":"Vila-rodona"},{"code":"vila-seca","id":"m171-p43","type":"m","value":"Vila-seca"},{"code":"vilaverd","id":"m172-p43","type":"m","value":"Vilaverd"},{"code":"la-vilella-alta","id":"m173-p43","type":"m","value":"La Vilella Alta"},{"code":"la-vilella-baixa","id":"m174-p43","type":"m","value":"La Vilella Baixa"},{"code":"vimbodi-i-poblet","id":"m176-p43","type":"m","value":"Vimbodí i Poblet"},{"code":"vinebre","id":"m177-p43","type":"m","value":"Vinebre"},{"code":"vinyols-i-els-arcs","id":"m178-p43","type":"m","value":"Vinyols i els Arcs"},{"code":"xerta","id":"m52-p43","type":"m","value":"Xerta"},{"code":"provincia-barcelona","id":"p8","type":"p","value":"Provincia Barcelona"},{"code":"provincia-girona","id":"p17","type":"p","value":"Provincia Girona"},{"code":"provincia-lleida","id":"p25","type":"p","value":"Provincia Lleida"},{"code":"provincia-tarragona","id":"p43","type":"p","value":"Provincia Tarragona"},{"code":"catalunya","id":"c9","type":"c","value":"Cataluña"}];
	var parties = {"SOMVAL":{"shortname":"SOMVAL","slug":"somval"},"COMPROMISO CON ARAGON":{"color":"#c95410","shortname":"COMPROMISO CON ARAGON","slug":"compromiso-con-aragon"},"Diàleg":{"shortname":"Diàleg","slug":"dialeg"},"UPN":{"shortname":"UPN","slug":"upn"},"EB":{"shortname":"EB","slug":"eb"},"Cs":{"color":"#ef7a36","shortname":"Cs","slug":"cs"},"LN":{"shortname":"LN","slug":"ln"},"FAC":{"shortname":"FAC","slug":"fac"},"DRe":{"shortname":"DRe","slug":"dre"},"CompromísFormentera":{"color":"#c95410","shortname":"CompromísFormentera","slug":"compromisformentera"},"Es.C.":{"shortname":"Es.C.","slug":"esc"},"IU-EQUO":{"color":"#019944","shortname":"IU-EQUO","slug":"iu-equo"},"C.ME UPCM":{"shortname":"C.ME UPCM","slug":"cme-upcm"},"F.I.A.":{"shortname":"F.I.A.","slug":"fia"},"EUPV-VERDS-ERPV-AS:AC":{"color":"#019944","shortname":"EUPV-VERDS-ERPV-AS:AC","slug":"eupv-verds-erpv-as:ac"},"JxSí":{"color":"#41bab5","shortname":"JxSí","slug":"jxsi"},"ANDECHA":{"color":"#ABCABC","shortname":"ANDECHA","slug":"andecha"},"EUPV-EV-ERPV-AS:AC":{"color":"#019944","shortname":"EUPV-EV-ERPV-AS:AC","slug":"eupv-ev-erpv-as:ac"},"GUANYEM ILLES BALEARS":{"color":"#612d62","shortname":"GUANYEM ILLES BALEARS","slug":"guanyem-illes-balears"},"PCAS-UdCA":{"shortname":"PCAS-UdCA","slug":"pcas-udca"},"CatComú":{"color":"#612d62","shortname":"CatComú","slug":"catcomu"},"CCN-UNIDOS":{"shortname":"CCN-UNIDOS","slug":"ccn-unidos"},"ULEG":{"shortname":"ULEG","slug":"uleg"},"CHA":{"shortname":"CHA","slug":"cha"},"PAL-UL":{"shortname":"PAL-UL","slug":"pal-ul"},"LA COALICIÓN NACIONAL":{"shortname":"LA COALICIÓN NACIONAL","slug":"la-coalicion-nacional"},"Otros":{"color":"#777a77","shortname":"Otros","slug":"otros"},"PSOE-SIEX":{"color":"#ef1920","shortname":"PSOE-SIEX","slug":"psoe-siex"},"DRCyL":{"shortname":"DRCyL","slug":"drcyl"},"AHORA DECIDE/AS":{"shortname":"AHORA DECIDE/AS","slug":"ahora-decide/as"},"AGRUPACIÓN ELECTORAL RECORTES CERO":{"shortname":"AGRUPACIÓN ELECTORAL RECORTES CERO","slug":"agrupacion-electoral-recortes-cero"},"P.R.E.F.":{"shortname":"P.R.E.F.","slug":"pref"},"EM-EU":{"shortname":"EM-EU","slug":"em-eu"},"PSeDE":{"shortname":"PSeDE","slug":"psede"},"GANEMOS":{"color":"#612d62","shortname":"GANEMOS","slug":"ganemos"},"IUCyL-EQUO":{"color":"#019944","shortname":"IUCyL-EQUO","slug":"iucyl-equo"},"PU M+J":{"shortname":"PU M+J","slug":"pu-m+j"},"eX":{"shortname":"eX","slug":"ex"},"ASG":{"shortname":"ASG","slug":"asg"},"RECORTES CERO ALICANTE":{"shortname":"RECORTES CERO ALICANTE","slug":"recortes-cero-alicante"},"PxL - Con las Manos Limpias":{"shortname":"PxL - Con las Manos Limpias","slug":"pxl---con-las-manos-limpias"},"GxF+PSIB":{"shortname":"GxF+PSIB","slug":"gxf+psib"},"LIM":{"shortname":"LIM","slug":"lim"},"MpM":{"shortname":"MpM","slug":"mpm"},"MÉS":{"shortname":"MÉS","slug":"mes"},"CILUS":{"shortname":"CILUS","slug":"cilus"},"AL-in":{"shortname":"AL-in","slug":"al-in"},"RECORTES CERO MALLORCA":{"shortname":"RECORTES CERO MALLORCA","slug":"recortes-cero-mallorca"},"SÍ":{"shortname":"SÍ","slug":"sí"},"CUP":{"color":"#f2e919","shortname":"CUP","slug":"cup"},"OTROS":{"shortname":"OTROS","slug":"otros"},"P.C.P.C.":{"shortname":"P.C.P.C.","slug":"pcpc"},"RECORTES CERO CASTELLÓN":{"shortname":"RECORTES CERO CASTELLÓN","slug":"recortes-cero-castellon"},"MEC":{"shortname":"MEC","slug":"mec"},"Pirata.cat":{"shortname":"Pirata.cat","slug":"piratacat"},"PH":{"shortname":"PH","slug":"ph"},"RECORTES CERO TENERIFE":{"shortname":"RECORTES CERO TENERIFE","slug":"recortes-cero-tenerife"},"I-E":{"shortname":"I-E","slug":"i-e"},"COMPROMÍS":{"color":"#c95410","shortname":"COMPROMÍS","slug":"compromis"},"RECORTES CERO MENORCA":{"shortname":"RECORTES CERO MENORCA","slug":"recortes-cero-menorca"},"PCAS-TC":{"shortname":"PCAS-TC","slug":"pcas-tc"},"AVANT":{"shortname":"AVANT","slug":"avant"},"P.R.C.":{"shortname":"P.R.C.","slug":"prc"},"PREPAL":{"shortname":"PREPAL","slug":"prepal"},"CCa-AHI":{"shortname":"CCa-AHI","slug":"cca-ahi"},"AES":{"shortname":"AES","slug":"aes"},"URAS":{"shortname":"URAS","slug":"uras"},"ANC":{"shortname":"ANC","slug":"anc"},"MC CARTAGENA":{"shortname":"MC CARTAGENA","slug":"mc-cartagena"},"Geroa Bai":{"shortname":"Geroa Bai","slug":"geroa-bai"},"m.c.EPIC":{"shortname":"m.c.EPIC","slug":"mcepic"},"MSR":{"shortname":"MSR","slug":"msr"},"Recortes Cero-Els Verds":{"shortname":"Recortes Cero-Els Verds","slug":"recortes-cero-els-verds"},"JxCAT":{"color":"#014984","shortname":"JxCAT","slug":"jxcat"},"CCa-PNC":{"shortname":"CCa-PNC","slug":"cca-pnc"},"UxV":{"shortname":"UxV","slug":"uxv"},"Cat.Sí que es Pot":{"color":"#612d62","shortname":"Cat.Sí que es Pot","slug":"catsi-que-es-pot"},"PUM+J":{"shortname":"PUM+J","slug":"pum+j"},"RCN-NOK":{"shortname":"RCN-NOK","slug":"rcn-nok"},"IP":{"shortname":"IP","slug":"ip"},"ESPAÑA-2000":{"shortname":"ESPAÑA-2000","slug":"espana-2000"},"IpH-IUC-LV-ALTER":{"color":"#019944","shortname":"IpH-IUC-LV-ALTER","slug":"iph-iuc-lv-alter"},"D.N.":{"shortname":"D.N.","slug":"dn"},"PCPE":{"shortname":"PCPE","slug":"pcpe"},"SAIn":{"shortname":"SAIn","slug":"sain"},"IU":{"color":"#019944","shortname":"IU","slug":"iu"},"BA":{"shortname":"BA","slug":"ba"},"PSOE":{"color":"#ef1920","shortname":"PSOE","slug":"psoe"},"Guanyem":{"shortname":"Guanyem","slug":"guanyem"},"JUNTS":{"shortname":"JUNTS","slug":"junts"},"A.S.I.":{"shortname":"A.S.I.","slug":"asi"},"GUANYEM":{"color":"#612d62","shortname":"GUANYEM","slug":"guanyem"},"ER-EIVISSA SÍ":{"color":"#deae40","shortname":"ER-EIVISSA SÍ","slug":"er-eivissa-si"},"PAR":{"shortname":"PAR","slug":"par"},"IUCM - LV":{"color":"#019944","shortname":"IUCM - LV","slug":"iucm---lv"},"UNIDOS":{"shortname":"UNIDOS","slug":"unidos"},"LCN":{"shortname":"LCN","slug":"lcn"},"PP":{"color":"#00a3df","shortname":"PP","slug":"pp"},"C's":{"color":"#ef7a36","shortname":"C's","slug":"c-s"},"AMD":{"shortname":"AMD","slug":"amd"},"CIVES":{"shortname":"CIVES","slug":"cives"},"PSC":{"color":"#ef1920","shortname":"PSC","slug":"psoe"},"U.P.L.":{"shortname":"U.P.L.","slug":"upl"},"AMF":{"shortname":"AMF","slug":"amf"},"P.C.P.E.":{"shortname":"P.C.P.E.","slug":"pcpe"},"UCIN":{"shortname":"UCIN","slug":"ucin"},"MOVIMIENTO RED":{"shortname":"MOVIMIENTO RED","slug":"movimiento-red"},"RECORTES CERO TERUEL":{"shortname":"RECORTES CERO TERUEL","slug":"recortes-cero-teruel"},"PSN":{"color":"#ef1920","shortname":"PSN","slug":"psn"},"A.Ex":{"shortname":"A.Ex","slug":"aex"},"EL PI":{"shortname":"EL PI","slug":"el-pi"},"P.LI.E.":{"shortname":"P.LI.E.","slug":"plie"},"P-LIB":{"shortname":"P-LIB","slug":"p-lib"},"CI-CCD":{"shortname":"CI-CCD","slug":"ci-ccd"},"CB":{"shortname":"CB","slug":"cb"},"PACMA":{"shortname":"PACMA","slug":"pacma"},"UPyD":{"color":"#e40082","shortname":"UPyD","slug":"upyd"},"CCD":{"shortname":"CCD","slug":"ccd"},"RECORTES CERO LA PALMA":{"shortname":"RECORTES CERO LA PALMA","slug":"recortes-cero-la-palma"},"FE de las JONS":{"shortname":"FE de las JONS","slug":"fe-de-las-jons"},"ADEIZA":{"shortname":"ADEIZA","slug":"adeiza"},"IUC-LV-Unidad del Pueblo-ALTER":{"color":"#019944","shortname":"IUC-LV-Unidad del Pueblo-ALTER","slug":"iuc-lv-unidad-del-pueblo-alter"},"NCa":{"shortname":"NCa","slug":"nca"},"EH Bildu":{"shortname":"EH Bildu","slug":"eh-bildu"},"PFyV":{"shortname":"PFyV","slug":"pfyv"},"RECORTES CERO":{"shortname":"RECORTES CERO","slug":"recortes-cero"},"GANEMOS-IU-LV":{"color":"#612d62","shortname":"GANEMOS-IU-LV","slug":"ganemos-iu-lv"},"GANEMOS-LV-IU":{"color":"#612d62","shortname":"GANEMOS-LV-IU","slug":"ganemos-lv-iu"},"IU-IX":{"color":"#019944","shortname":"IU-IX","slug":"iu-ix"},"FDEE":{"shortname":"FDEE","slug":"fdee"},"EQUO":{"shortname":"EQUO","slug":"equo"},"POBLE":{"shortname":"POBLE","slug":"poble"},"A.EX":{"shortname":"A.EX","slug":"aex"},"GxE":{"shortname":"GxE","slug":"gxe"},"LOS VERDES-GRUPO VERDE":{"shortname":"LOS VERDES-GRUPO VERDE","slug":"los-verdes-grupo-verde"},"EV-AE":{"shortname":"EV-AE","slug":"ev-ae"},"P.R.B.":{"shortname":"P.R.B.","slug":"prb"},"ERC":{"color":"#deae40","shortname":"ERC","slug":"erc"},"CRA":{"shortname":"CRA","slug":"cra"},"+XT":{"shortname":"+XT","slug":"+xt"},"LEM":{"shortname":"LEM","slug":"lem"},"Recortes Cero":{"color":"#369732","shortname":"Recortes Cero","slug":"recortes-cero"},"EXTREMADURA UNIDA":{"shortname":"EXTREMADURA UNIDA","slug":"extremadura-unida"},"GANEMOS AL FRACKING":{"color":"#612d62","shortname":"GANEMOS AL FRACKING","slug":"ganemos-al-fracking"},"Unió":{"color":"#0152ad","shortname":"Unió","slug":"unio"},"PODEMOS":{"color":"#612d62","shortname":"PODEMOS","slug":"podemos"},"MUPC":{"shortname":"MUPC","slug":"mupc"},"VOX":{"shortname":"VOX","slug":"vox"},"CYD":{"shortname":"CYD","slug":"cyd"},"BAR":{"shortname":"BAR","slug":"bar"},"P.C.P.C":{"shortname":"P.C.P.C","slug":"pcpc"}};
	var colors = ["#5d8aa8","#00308f","#72a0c1","#a32638","#ccc","#e32636","#c46210","#efdecd","#e52b50","#ffbf00","#ff7e00","#ff033e","#96c","#a4c639","#f2f3f4","#cd9575","#915c83","#841b2d","#faebd7","#008000","#8db600","#fbceb1","#0ff","#7fffd4","#4b5320","#3b444b","#e9d66b","#b2beb5","#87a96b","#f96","#a52a2a","#fdee00","#6e7f80","#568203","#007fff","#f0ffff","#89cff0","#a1caf1","#f4c2c2","#21abcd"];
	var codes = {};
	var tableResults = {};
	var home = false;

	function buildCodesMap() {
		$.each(regions, function(i, val) {
			codes[val.code] = val;
		});
	}

	function getWidth() {
        var xWidth = null;
        if(window.screen !== null) {
            xWidth = window.screen.availWidth;
        }
        
        if(window.innerWidth !== null) {
            xWidth = window.innerWidth;
        }
        
        if(document.body !== null) {
            xWidth = document.body.clientWidth;
        }
        
        return xWidth;
    }

    function isPhone() {
        if (getWidth() <  768) {
            return true;
        }
        
        return false;
    }

    function getParameterByName(name) {
	    var url = window.location.href;
	    name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

    function drawResults(region) {
    	if (!region) {
    		return;
    	}

    	getResults($("#chart-container-1"), year1, region, true);
    	getResults($("#chart-container-2"), year2, region, false);

    	drawTableResults(region);
    }

    function getResults($container, year, region, enableFooter) {
    	var objectRegion = codes[region];

    	var url = JSON_BASE_PATH + "/" + year;
    	if (objectRegion.type == "c") {
    		home = true;
    		url += "/" + objectRegion.id + "/data.json";
    	} else if (objectRegion.type == "p") {
    		url += "/c9/" + objectRegion.id + "/";
    	} else if (objectRegion.type == "m") {
    		var aux = objectRegion.id.split("-");
    		url += "/c9/" + aux[1] + "/" + aux[0] + "/";
    	} else {
    		return;
    	}

    	getAjax(url, $container, year, objectRegion, enableFooter, false);
    }

    function getAjax(url, $container, year, objectRegion, enableFooter, fromBackup) {
    	$.ajax({
		    url: url,
		    dataType: "json",
		    timeout: 5000
		}).done(function(data) {
			if (!data.transversales || !data.resultados || data.transversales['escrutado'] <= 0) {
				$container.find(".chart-group").addClass("chart-group-error");
				$container.find(".chart-group").find(".chart-legend").css({"margin-top":"15px"});
				$container.find("#chart-title").html("<p>Resultados de " + objectRegion.value + " (" + year + ")</p>");
				$container.find("#chart").removeClass("chart");
				$container.find("#chart").html('<div class="waiting-results bg-danger text-center">Esperando resultados de ' + year + '</div>');
			} else {
				tableResults[year] = data;
				handleQueryResponse($container, objectRegion, year, data, enableFooter);
			}
		}).fail(function(jqXHR, textStatus, errorThrown) {
			//if fail then get from backup
			if (!fromBackup && BACKUP_BASE_PATH) {
				var backupUrl = BACKUP_BASE_PATH + "/" + year + "/" + objectRegion.code + ".json";
				getAjax(backupUrl, $container, year, objectRegion, enableFooter, true);
			} else {
				$container.find(".chart-group").addClass("chart-group-error");
				$container.find(".chart-group").find(".chart-legend").css({"margin-top":"20px"});
				$container.find("#chart-title").html("<p>Resultados de " + objectRegion.value + " (" + year + ")</p>");
				$container.find("#chart").removeClass("chart");
				$container.find("#chart").html('<div class="waiting-results bg-danger text-center">Esperando resultados de ' + year + '</div>');
			}
		});
    }

    function eventHandler(chart, values, total, e) {
    	chart.setSelection([e]);
    	try {
			selection = chart.getSelection();
			sliceid = selection[0].row;
		} catch(err) {}

    	$(".google-visualization-tooltip-item-list li:eq(1)").hide();    	
    	var $el = $(".google-visualization-tooltip-item-list li:eq(0)");
    	$el.html($el.html() + "<br><strong>" + parseFloat((100*values[sliceid + 1][1]/total)).toFixed(2) + "%</strong>");
  	}

  	function containsParty(party, parties) {
  		for (var j = 0; j < parties.length; j++) {
  			if (party == parties[j]) {
  				return true;
  			}
  		}

  		return false;
  	}

  	function prepareParties(resultados, parties) {
  		var obj = {
  			"v1" : [],
  			"v2" : [],
  			"v3" : []
  		};

  		for (var i = 0; i < resultados.length; i++) {
  			var v = resultados[i];

  			if (containsParty(v['p'], parties)) {
  				obj["v1"].push(v);
  			} else {
  				obj["v2"].push(v);
  			}
  		}

  		for (var i = 0; i < parties.length; i++) {
  			for (var j = 0; j < obj["v1"].length; j++) {
  				if (parties[i] == obj["v1"][j]["p"]) {
  					obj["v3"].push(obj["v1"][j]);
  					break;
  				}
  			}
  		}

  		return obj["v3"].concat(obj["v2"]);
  	}

    function handleQueryResponse($container, region, year, response, enableFooter) {
    	var $chartTitle = $container.find("#chart-title");

    	$chartTitle.html("<p>Resultados de " + region.value + " (" + year + ")</p>");

    	var values = [];
    	var resultados;

    	if (home && year == year1) {
    		var order = ["ERC", "JxCAT", "CUP", "CatComú", "Cs", "PSC", "PP"];
	    	var resultados = prepareParties(response.resultados, order);
    	} else {
    		resultados = response.resultados;
	    }

	    if (region.type == "m") {
    		//mirem votos
    		values.push(["Partidos", "Votos"]);
    		var count = 0;
	        for (var i = 0; i < resultados.length; i++) {
	        	var v = resultados[i];
	        	values.push([v['p'], parseInt(v['v'])]);
	        	count += parseInt(v['v']);
	        }
	        values.push(["Hide", count]);
    	} else {
    		//mirem escaños
    		values.push(["Partidos", "Escaños"]);
    		var count = 0;
	        for (var i = 0; i < resultados.length; i++) {
	        	var v = resultados[i];
	        	values.push([v['p'], parseInt(v['e'])]);
	        	count += parseInt(v['e']);
	        }
	        values.push(["Hide", count]);
    	}

    	var chartColors = [];
    	var j = 0;
    	var $chartLegend = $container.find("#chart-legend");
    	for (var i = 0; i < resultados.length; i++) {
    		var v = resultados[i];
    		var party = parties[v["p"]];
    		var color = party['color'];
    		if (!color) {
    			color = colors[j];
    			j++;
    		}
    		chartColors.push(color);
    		if (i < 8) {
    			$chartLegend.append('<span class="party"><span class="party-color" style="background:' + color + '"></span>' + party.shortname + '</span>');
    		}
    	}
    	chartColors.push("transparent");

        var pieData = google.visualization.arrayToDataTable(values);
        var chart = new google.visualization.PieChart($container.find("#chart")[0]);
		var options = {
			legend:'none',
		    width: '100%',
		    height: '100%',
		    tooltip: { isHtml: true },
		    chartArea: {left: "3%",top: "3%",height: "94%",width: "94%"},
		    pieHole: 0.40,
		    pieStartAngle: -90,
		    is3D: false,
			pieSliceText: 'value',
			fontSize: 16,
			colors: chartColors
		};
		chart.draw(pieData, options);
		google.visualization.events.addListener(chart, 'onmousedown', function(e) {
			eventHandler(chart, values, count, e);
		});
		google.visualization.events.addListener(chart, 'onmouseover', function(e) {
			eventHandler(chart, values, count, e);
		});
		$container.find("#chart").css({"min-height":"auto"});

		if (home) {
			setTimeout(function() {
				$container.find("#chart").prepend('<div class="chart-separator"></div>');
			}, 250);
		}

		var $chartInfo = $container.find("#chart-info");

		if (enableFooter) {
			var $chartFooter = $container.find("#chart-footer");
			var date = new Date();
			var footer = '<p class="text-center">';
			footer += response['transversales']['escrutado'] + '% Escrutado, actualidado a ' + date.toLocaleDateString() + " " + response['transversales']['hora'];
			footer += '</p>';
			$chartFooter.html(footer);
		}

		var html = '<div class="">';
		html += '<table class="table-summary table table-hover table-bordered">';

		html += '<thead>';
		html += '<tr><td colspan="2" class="info"><strong>Resumen escrutinio ' + region.value + ' (' + year + ')</strong></td></tr>' 
		html += '</thead>';

		html += '<tbody>';
		html += '<tr>';
			html += '<td>Escrutado</td>';
			if(response['transversales']['escrutado']) {
				html += '<td>' + response['transversales']['escrutado'] + '%</td>';
			} else {
				html += '<td>-</td>';
			}
		html += '</tr>';
		if(response['transversales']['eJuego'] && response['transversales']['eJuego'] > 0) {
			html += '<tr>';
			html += '<td>Escaños</td>';
			html += '<td>' + response['transversales']['eJuego'] + '</td>';
			html += '</tr>';
		}
		html += '<tr>';
			html += '<td>Censo</td>';
			html += '<td>' + parseInt(response['transversales']['censo_escrutinio']).toLocaleString() + '</td>';
		html += '</tr>';
		html += '<tr>';
			html += '<td>Participación</td>';
			html += '<td>' + response['transversales']['participacion'] + '%</td>';
		html += '</tr>';

		var abstenciones = response['transversales']['censo_escrutinio'] - response['transversales']['vTotal'];

		html += '<tr>';
			html += '<td>Votos Totales</td>';
			html += '<td>' + parseInt(response['transversales']['vTotal']).toLocaleString() + '</td>';
		html += '</tr>';
		html += '<tr>';
			html += '<td>Abstenciones</td>';
			html += '<td>' + parseInt(abstenciones).toLocaleString() + '</td>';
		html += '</tr>';
		html += '<tr>';
			html += '<td>Votos Nulos</td>';
			html += '<td>' + parseInt(response['transversales']['vNulos']).toLocaleString() + '</td>';
		html += '</tr>';
		html += '<tr>';
			html += '<td>Votos Blancos</td>';
			html += '<td>' + parseInt(response['transversales']['vBlancos']).toLocaleString() + '</td>';
		html += '</tr>';
		html += '</tbody>';

		html += '</table>';
		html += '</div>';

		$chartInfo.html(html);
	}

	function drawTableResults(region) {
		if (tableResults[year1] && tableResults[year2]) {
			var objectRegion = codes[region];

			var $container = $("#chart-container-3");

			$container.find("#chart-title").html('<p>Resultados Totales de ' + objectRegion.value + ' (' + year1 + ' / ' + year2 + ')</p><div class="horitzontal-scroll-icon" style="display:none;"><img src="img/hscroll.png"></div>');

			var results1 = tableResults[year1].resultados;
			var results2 = tableResults[year2].resultados;

			var list = {};
			var map1 = {};
			var map2 = {};

			for (var i = 0; i < results1.length; i++) {
				list[results1[i].p] = results1[i].p;
				map1[results1[i].p] = results1[i];
			}

			for (var i = 0; i < results2.length; i++) {
				list[results2[i].p] = results2[i].p;
				map2[results2[i].p] = results2[i];
			}

			var html = '<div class="text-center table-responsive">';
			html += '<table class="table-results table table-hover table-bordered">';

			html += '<thead>';
			html += '<tr>';
				html += '<th></th>';
				html += '<th></th>';
				if (objectRegion.type !== "m") {
					html += '<th colspan="3" class="text-center info">' + year1 + '</th>';
					html += '<th colspan="3" class="text-center active">' + year2 + '</th>';
				} else {
					html += '<th colspan="2" class="text-center info">' + year1 + '</th>';
					html += '<th colspan="2" class="text-center active">' + year2 + '</th>';
				}
			html += '</tr>';
			html += '<tr>';
				html += '<th></th>';
				html += '<th class="text-left">Partidos</th>';

				if (objectRegion.type !== "m") {
					html += '<th class="text-center info">Escaños</th>';
				}
				html += '<th class="text-center info">Nº votos</th>';
				html += '<th class="text-center info">% votos</th>';

				if (objectRegion.type !== "m") {
					html += '<th class="text-center active">Escaños</th>';
				}
				html += '<th class="text-center active">Nº votos</th>';
				html += '<th class="text-center active">% votos</th>';
			html += '</tr>';
			html += '</thead>';

			html += '<tbody>';
			$.each(list, function(i, item) {
				html += '<tr>';
					html += '<td>';
					if (map1[item] && !map2[item]) {
						html += '<span class="text-muted"><i class="fa fa-minus"></i></span>';
					} else if (map1[item] && map2[item]) {
						var index = "e";
						if (objectRegion.type == "m") {
							index = "v";
						}

						var value1 = parseInt(map1[item][index]);
						var value2 = parseInt(map2[item][index]);

						if (value1 == value2) {
							html += '<span class="text-muted"><i class="fa fa-minus"></i></span>';
						} else if (value1 > value2) {
							var prt = "";
							if (value2 > 0) {
								var p = 100*((value1/value2)-1);
								prt = "+" + p.toFixed(0) + "%";
							}
							html += '<span class="text-success"><i class="fa fa-arrow-up"></i> ' + prt + '</span>';
						} else if (value1 < value2) {
							var prt = "";
							if (value2 > 0) {
								var p = 100*((value1/value2)-1);
								prt = p.toFixed(0) + "%";
							}
							html += '<span class="text-danger"><i class="fa fa-arrow-down"></i> ' + prt +'</span>';
						} else {
							html += '<span class="text-muted"><i class="fa fa-minus"></i></span>';
						}
					}
					html += '</td>';
					html += '<td class="text-left">' + item + '</td>';

					if (map1[item]) {
						if (objectRegion.type !== "m") {
							html += '<td class="info">' + parseInt(map1[item]['e']) + '</td>';
						}
						html += '<td class="info">' + parseInt(map1[item]['v']).toLocaleString() + '</td>';
						html += '<td class="info">' + map1[item]['v100'] + '</td>';
					} else {
						if (objectRegion.type !== "m") {
							html += '<td class="info">-</td>';
						}
						html += '<td class="info">-</td>';
						html += '<td class="info">-</td>';
					}

					if (map2[item]) {
						if (objectRegion.type !== "m") {
							html += '<td class="active">' + parseInt(map2[item]['e']) + '</td>';
						}
						html += '<td class="active">' + parseInt(map2[item]['v']).toLocaleString() + '</td>';
						html += '<td class="active">' + map2[item]['v100'] + '</td>';
					} else {
						if (objectRegion.type !== "m") {
							html += '<td class="active">-</td>';
						}
						html += '<td class="active">-</td>';
						html += '<td class="active">-</td>';
					}
				html += '</tr>';
			});
			html += '</tbody>';

			html += '</table>';
			html += '</div>';

			$container.find("#chart-info").html(html);
		} else {
			window.setTimeout(function() {
				drawTableResults(region);
			}, 250);
		}
	}

	function init() {
		buildCodesMap();

		controlIframe();

		$('#autocomplete').autocomplete({
		    lookup: regions,
		    //triggerSelectOnValidInput: false,
		    lookupLimit:5,
		    lookupFilter: function(suggestion, originalQuery, queryLowerCase) {
	            var re = new RegExp('\\b' + $.Autocomplete.utils.escapeRegExChars(queryLowerCase), 'gi');
	            return re.test(suggestion.value);
	        },
		    onSelect: function (suggestion) {
		    	if (suggestion.code == "catalunya") {
		    		top.location.href = BASE_PATH;
		    	} else {
		    		top.location.href = BASE_PATH + "/resultados-" + suggestion.code + ".html";
		    	}
		    }
		});

		google.charts.load('current', {'packages':['table','corechart'], 'language': 'es'});
      	google.charts.setOnLoadCallback(function() {
      		DRTEleccionesCat.chartsEnabled = true;

      		var code = getParameterByName("code");
      		if (code) {
      			DRTEleccionesCat.drawResults(code);

      			setInterval(function() {
	      			window.parent.postMessage({
						sentinel: 'amp',
						type: 'embed-size',
						height: document.body.scrollHeight
					}, '*');
				}, 1000);
      		}
      	});
    }

    function controlIframe() {
    	var code = getParameterByName("code");
      	if (!code) {
	    	if ('parentIFrame' in window) {
	            if (!initiated) {
					initiated = true;
					//notify load iframe
	                window.parentIFrame.sendMessage('iframe loaded');
	            }
	        } else {
	            window.setTimeout(controlIframe, 50);
	        }
	    }
    }

    function controlCharts(region) {
    	if (DRTEleccionesCat.chartsEnabled) {
			DRTEleccionesCat.drawResults(region);
		} else {
			window.setTimeout(function() {
				controlCharts(region);
			}, 50);
		}
    }

	return {
        init:init,
        drawResults: drawResults,
        chartsEnabled: chartsEnabled,
        controlCharts: controlCharts
    };
}());

$(document).ready(function() {
	DRTEleccionesCat.init();
});

var iFrameResizer = {
	messageCallback: function(code) {
		DRTEleccionesCat.controlCharts(code);
	}
};