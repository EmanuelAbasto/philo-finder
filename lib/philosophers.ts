export interface Philosopher {
  id: string
  name: string
  period: string
  era: string
  birthYear: number
  deathYear: number
  nationality: string
  schoolOfThought: "Presocrático" | "Socrático"
  mainIdeas: string[]
  biography: string
  philosophy: string
  curiosities: string[]
  quotes: Array<{ text: string; interpretation: string }>
  keyWorks: Array<{ title: string; description: string; pdfUrl?: string }>
  summary: string
  image: string
  multimedia: Array<{ title: string; url: string; type: "tiktok" | "video" | "resource" }>
}

export const philosophers: Philosopher[] = [
  {
    id: "socrates",
    name: "Sócrates",
    period: "470–399 a.C.",
    era: "Antigua Grecia - Clásico",
    birthYear: 470,
    deathYear: 399,
    nationality: "Griega",
    schoolOfThought: "Socrático",
    mainIdeas: [
      "Solo sé que nada sé",
      "La virtud es conocimiento",
      "Método socrático (Mayéutica)",
      "La ignorancia como punto de partida",
      "Vida ética y virtuosa",
    ],
    biography:
      "Sócrates (470–399 a.C.) fue uno de los filósofos más importantes de la antigua Grecia y es considerado el padre de la filosofía occidental. No dejó ninguna obra escrita, por lo que todo lo que sabemos de él proviene de sus discípulos, especialmente Platón y Jenofonte. Fue condenado a muerte en el año 399 a.C. por las autoridades de Atenas, acusado de corromper a la juventud y no creer en los dioses de la ciudad. Aunque sus amigos le ofrecieron escapar de la prisión, Sócrates rechazó la huida porque creía que debía respetar las leyes de su ciudad, incluso si estas eran injustas con él.",
    philosophy:
      "La búsqueda de la verdad a través de la aceptación de la ignorancia que tiene cada uno. Su famosa frase 'Solo sé que nada sé' no significa ausencia total de conocimiento, sino una actitud humilde frente a la verdad. Propone el método llamado Mayéutica, a través de preguntas profundas que lleven a la reflexión y cuestionamiento de conocimientos previos. Su filosofía de vida estaba enfocada en tener una vida ética, formar seres virtuosos y que obren por el bien común.",
    curiosities: [
      "En la antigua Grecia los acusados podían proponer su propio castigo. Cuando Sócrates fue llevado a juicio, en vez de suplicar compasión, propuso irónicamente que lo premiaran por su dedicación a educar y mejorar moralmente a los ciudadanos de Atenas.",
      "Afirmó que merecía ser alimentado gratuitamente en el Pritaneo, un lugar reservado para los héroes y ciudadanos más honorables.",
      "Su forma de mostrar que no se arrepentía de nada, que no temía al castigo y que creía firmemente en su misión filosófica fue revolucionaria.",
    ],
    quotes: [
      {
        text: "Solo sé que nada sé.",
        interpretation:
          "La verdadera sabiduría empieza cuando reconocemos nuestros límites. Saber que no lo sabemos todo nos vuelve más humildes y más abiertos a aprender.",
      },
      {
        text: "Una vida sin examen no merece ser vivida.",
        interpretation:
          "Para Sócrates, vivir bien significa reflexionar sobre nuestras acciones, pensamientos y decisiones. Sin reflexión, la vida se vuelve mecánica y sin sentido.",
      },
      {
        text: "Conócete a ti mismo.",
        interpretation:
          "El autoconocimiento es clave para actuar con sabiduría. Entender quién somos, qué queremos y cuáles son nuestras debilidades nos permite crecer como personas.",
      },
      {
        text: "La virtud es conocimiento.",
        interpretation:
          "Si una persona sabe realmente qué es el bien, actuará de manera correcta. El mal surge de la ignorancia, no de la intención de dañar.",
      },
      {
        text: "El hombre es su alma.",
        interpretation:
          "Para él, lo más importante no es el cuerpo sino el alma, entendida como la mente, la conciencia y los valores que definen lo que realmente somos.",
      },
      {
        text: "Prefiero sufrir una injusticia que cometerla.",
        interpretation:
          "Sócrates valoraba la justicia por encima del beneficio personal. Hacer daño es peor que recibirlo porque afecta nuestra integridad moral.",
      },
      {
        text: "Habla para que yo te conozca.",
        interpretation:
          "La forma en que una persona se expresa revela quién es realmente: su carácter, su sabiduría y su forma de pensar.",
      },
      {
        text: "No puedo enseñar nada a nadie; solo puedo hacerles pensar.",
        interpretation:
          "Su método se basaba en hacer preguntas para que cada persona descubra la verdad por sí misma. El aprendizaje real nace del interior.",
      },
    ],
    keyWorks: [
      {
        title: "Diálogos de Platón",
        description: "Documentación de sus enseñanzas a través de Platón",
        pdfUrl: "https://example.com/dialogos-platon.pdf",
      },
    ],
    summary:
      "Filósofo griego considerado padre de la filosofía occidental. Desarrolló el método socrático y enfatizó la búsqueda de la verdad a través del diálogo y la reflexión crítica.",
    image: "https://biblioteca.acropolis.org/wp-content/uploads/2019/07/Socrates.jpg",
    multimedia: [
      {
        title: "La mayéutica",
        url: "https://www.tiktok.com/@aprendiz.financiero/video/7312706884832628001",
        type: "tiktok",
      },
      {
        title: "Virtud y conocimiento",
        url: "https://www.tiktok.com/@aprendiz.financiero/video/7312706884832628001",
        type: "tiktok",
      },
      {
        title: "El arte de existir",
        url: "https://www.tiktok.com/@aprendiz.financiero/video/7312706884832628001",
        type: "tiktok",
      },
    ],
  },
  {
    id: "plato",
    name: "Platón",
    period: "427–347 a.C.",
    era: "Antigua Grecia - Clásico",
    birthYear: 427,
    deathYear: 347,
    nationality: "Griega",
    schoolOfThought: "Socrático",
    mainIdeas: [
      "Teoría de las Ideas",
      "Mundo sensible vs mundo inteligible",
      "La educación como formación del alma",
      "Justicia y virtud",
      "El filósofo como gobernante ideal",
    ],
    biography:
      "Platón (427–347 a.C.) fue un filósofo griego nacido en Atenas y uno de los pensadores más influyentes de la historia occidental. Discípulo directo de Sócrates y maestro de Aristóteles, su pensamiento marcó el inicio de la filosofía idealista. La muerte de Sócrates lo impactó profundamente y lo llevó a abandonar su interés por la política ateniense para dedicarse de lleno a la filosofía. Platón viajó por varios lugares del mundo griego, incluyendo Egipto y el sur de Italia. A su regreso a Atenas fundó la Academia, una escuela dedicada al estudio de la filosofía, la política, las matemáticas y la ética, donde enseñó durante más de 40 años.",
    philosophy:
      "La filosofía platónica gira alrededor de la existencia de dos mundos: el mundo sensible (cambiante e imperfecto) y el mundo inteligible o de las ideas (perfecto, verdadero y eterno). Solo se puede acceder al conocimiento verdadero comprendiendo las ideas, no confiando en los sentidos. Propone los conceptos de Doxa (opinión sin argumentación) y Episteme (conocimiento validado por la razón). Para Platón el alma es inmortal y se divide en tres partes: racional, irascible y apetitiva. La educación es la formación del alma, liberando a las personas de la ignorancia.",
    curiosities: [
      "¡Su verdadero nombre era Aristocles! El apodo 'Platón' en griego significa 'el ancho'.",
      "Algunos dicen que tenía hombros enormes, otros que era un luchador fuerte, y hay quienes creen que era porque tenía una forma de hablar tan amplia y poderosa que impresionaba a cualquiera.",
      "Uno de los filósofos más famosos del mundo usaba un sobrenombre digno de un héroe griego.",
    ],
    quotes: [
      {
        text: "El principio es la parte más importante del trabajo.",
        interpretation: "Todo gran logro comienza con un primer paso; empezar con decisión es clave para avanzar.",
      },
      {
        text: "La música es para el alma lo que la gimnasia es para el cuerpo.",
        interpretation: "La mente también necesita alimento: el arte y la belleza fortalecen nuestro interior.",
      },
      {
        text: "La ignorancia es la raíz de todos los males.",
        interpretation: "La mayoría de los errores humanos se deben a no conocer o no comprender lo que hacemos.",
      },
      {
        text: "La justicia consiste en el equilibrio del alma.",
        interpretation: "Ser justo significa mantener armonía entre razón, emociones y deseos.",
      },
      {
        text: "El sabio querrá estar siempre con quien sea mejor que él.",
        interpretation: "Buscar personas que nos superen nos ayuda a crecer y mejorar.",
      },
      {
        text: "Lo que hacemos tiene repercusiones en la eternidad.",
        interpretation: "Nuestros actos dejan huellas más grandes de lo que imaginamos.",
      },
      {
        text: "El mayor error del ser humano es creer que sabe lo que no sabe.",
        interpretation: "La falsa seguridad es un enemigo del aprendizaje.",
      },
      {
        text: "La educación es el encendido de una llama, no el llenado de un recipiente.",
        interpretation: "Educar no es imponer información, sino despertar el deseo de aprender.",
      },
      {
        text: "El cuerpo es la cárcel del alma.",
        interpretation: "La parte material limita nuestra capacidad de comprender la verdad profunda.",
      },
      {
        text: "No hay hombre tan cobarde que el amor no haga valiente.",
        interpretation: "El amor inspira fuerza y coraje incluso en quienes temen actuar.",
      },
    ],
    keyWorks: [
      {
        title: "El Banquete",
        description: "Diálogos sobre el amor, su origen y su naturaleza",
        pdfUrl: "https://drive.google.com/file/d/1Bc-saB0LUiwUVdtBitfBXcPGKkcazJnM/view",
      },
      {
        title: "Platón y la Atlántida",
        description: "Relato sobre una civilización poderosa y avanzada",
        pdfUrl: "https://drive.google.com/file/d/1IaIC5uCnx3Xk5XIYOxKkvWdeksyCni65/view",
      },
      {
        title: "La República",
        description: "Obra completa sobre la justicia, la educación, el alma y el Estado ideal",
        pdfUrl: "https://drive.google.com/file/d/1WnD5TYs2YdDyLxRz6BIZtiIPHDLDw-Pa/view",
      },
      {
        title: "Platón: El mito de la caverna",
        description: "Explica la diferencia entre la apariencia y la verdad",
        pdfUrl: "https://drive.google.com/file/d/1ZogMoi9BdJq-LWUs_cwZ_TygraJAtgJd/view",
      },
      {
        title: "Fedón",
        description: "Habla sobre la inmortalidad del alma y los últimos momentos de Sócrates",
        pdfUrl: "https://drive.google.com/file/d/19mCF_B9hPnYL3OufUBShjGblHM5OH0tc/view",
      },
      {
        title: "La República de Platón",
        description: "Análisis completo de la obra maestra platónica",
        pdfUrl: "https://drive.google.com/file/d/1Crqm5c15GllEPPDKQkCW7DOpAxeXapbj/view",
      },
    ],
    summary:
      "Filósofo griego influyente que desarrolló la teoría de las ideas. Fundó la Academia y enfatizó que la educación es fundamental para liberar a las personas de la ignorancia.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Plato_Pio-Clemetino_Inv305.jpg",
    multimedia: [
      {
        title: "Teoría de las ideas",
        url: "https://www.tiktok.com/@aprendiz.financiero/video/7312706884832628001",
        type: "tiktok",
      },
      {
        title: "Mito de la caverna",
        url: "https://www.tiktok.com/@aprendiz.financiero/video/7312706884832628001",
        type: "tiktok",
      },
      {
        title: "Niveles de conocimiento",
        url: "https://www.tiktok.com/@aprendiz.financiero/video/7312706884832628001",
        type: "tiktok",
      },
    ],
  },
  {
    id: "aristotle",
    name: "Aristóteles",
    period: "384–322 a.C.",
    era: "Antigua Grecia - Clásico",
    birthYear: 384,
    deathYear: 322,
    nationality: "Griega (Macedonia)",
    schoolOfThought: "Socrático",
    mainIdeas: [
      "Hilomorfismo (materia y forma)",
      "Lógica formal y silogismos",
      "Eudaimonía (felicidad verdadera)",
      "El hombre como animal político",
      "Tres tipos de alma",
    ],
    biography:
      "Aristóteles (384–322 a.C.) fue un filósofo griego considerado uno de los pensadores más influyentes de la historia occidental. Nació en Estagira, en la región de Macedonia, en una familia relacionada con la medicina, lo que despertó en él un temprano interés por la observación. A los 17 años fue enviado a Atenas para estudiar en la Academia de Platón, donde permaneció cerca de veinte años. Tras la muerte de Platón, viajó por varias regiones, fue invitado por el rey Filipo II para convertirse en tutor de Alejandro Magno. Regresó a Atenas donde fundó su propia escuela filosófica, el Liceo, donde creó la tradición del peripatetismo (enseñar mientras se caminaba).",
    philosophy:
      "A diferencia de Platón, para Aristóteles la realidad no es un mundo aparte sino la unión de la materia y la forma (hilomorfismo). Todo conocimiento inicia con los sentidos y la experiencia. Desarrolló la lógica formal, especialmente los silogismos, para razonar de forma correcta. Su objetivo era que el ser humano busque la felicidad (eudaimonía) a través de la virtud, no la riqueza. Consideraba al ser humano como 'un animal político' que necesita vivir en sociedad. Planteaba la existencia de tres tipos de almas: vegetativa, sensitiva y racional.",
    curiosities: [
      "Aristóteles fue uno de los primeros 'biólogos' de la historia, clasificando más de 500 especies de animales simplemente observándolos a ojo sin herramientas modernas.",
      "Sus descripciones de pulpos, caballitos de mar, abejas y peces fueron tan detalladas que muchos científicos actuales se sorprenden al ver lo precisas que eran.",
      "Se dice que fundó el primer 'zoológico' educativo, donde estudiaba animales vivos para entender cómo funcionaba la naturaleza.",
    ],
    quotes: [
      {
        text: "La virtud está en el término medio.",
        interpretation: "Ser virtuoso significa evitar los extremos y actuar con equilibrio.",
      },
      {
        text: "El hombre es un animal político.",
        interpretation: "Las personas necesitan vivir en sociedad para desarrollarse plenamente.",
      },
      {
        text: "La amistad es un alma que habita en dos cuerpos.",
        interpretation: "La verdadera amistad une profundamente a las personas en sentimientos y valores.",
      },
      {
        text: "Somos lo que hacemos repetidamente. La excelencia, entonces, no es un acto, sino un hábito.",
        interpretation: "Mejorar depende de la constancia: lo que repetimos forma nuestro carácter.",
      },
      {
        text: "La educación es el mejor recurso para la vejez.",
        interpretation: "Aprender nos prepara para la vida y nos da recursos para enfrentar el futuro.",
      },
      {
        text: "La raíz del sufrimiento es el deseo insaciable.",
        interpretation: "Querer siempre más genera frustración; la moderación da paz.",
      },
      {
        text: "La felicidad depende de nosotros mismos.",
        interpretation: "La verdadera felicidad no viene de afuera, sino de nuestras decisiones y forma de vivir.",
      },
      {
        text: "El ignorante afirma; el sabio duda y reflexiona.",
        interpretation: "Pensar antes de hablar es una señal de sabiduría.",
      },
      {
        text: "La esperanza es el sueño del hombre despierto.",
        interpretation: "Esperar algo bueno es imaginar el futuro mientras seguimos actuando.",
      },
      {
        text: "La prueba del carácter de un hombre es su conducta.",
        interpretation: "Lo que hacemos dice más de quién somos que lo que decimos.",
      },
    ],
    keyWorks: [
      {
        title: "Ética a Nicómaco",
        description: "Explica la virtud, el justo medio y la felicidad",
        pdfUrl: "https://drive.google.com/file/d/1FO-tEUhMTqUiuFVpyKsWaBZ2z5yuZ_a6/view",
      },
      {
        title: "Metafísica",
        description: "Reflexiona sobre la realidad, el ser, la causa y la sustancia",
        pdfUrl: "https://drive.google.com/file/d/1OcC5U865oG-L4FOjBARfqWewOZaNUPqu/view",
      },
      {
        title: "Tratados de Lógica",
        description: "Introducción a la lógica formal y los silogismos",
        pdfUrl: "https://drive.google.com/file/d/1_FIUyF3fCOg-SK3kCTDQFD0C_4yisW2g/view",
      },
    ],
    summary:
      "Filósofo griego que desarrolló la lógica formal y la metafísica. Enfatizó la experiencia como base del conocimiento y la virtud como camino hacia la felicidad.",
    image:
      "https://static.wixstatic.com/media/cfaf79_d3b5ff4ab58443158a0ed22b8929057b~mv2_d_1700_2275_s_2.jpg/v1/fill/w_350,h_468,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/cfaf79_d3b5ff4ab58443158a0ed22b8929057b~mv2_d_1700_2275_s_2.jpg",
    multimedia: [
      {
        title: "Explicación del hilomorfismo",
        url: "https://www.tiktok.com/@ivansson24/video/7425325893943414049",
        type: "tiktok",
      },
      {
        title: "Las cuatro causas para Aristóteles",
        url: "https://www.tiktok.com/@donfilosofo/video/7378326180241427718",
        type: "tiktok",
      },
      {
        title: "La eudaimonía",
        url: "https://www.tiktok.com/@serieelchavodel8/video/7092245719599418629",
        type: "tiktok",
      },
    ],
  },
  {
    id: "tales",
    name: "Tales de Mileto",
    period: "624–546 a.C.",
    era: "Antigua Grecia - Presocrático",
    birthYear: 624,
    deathYear: 546,
    nationality: "Griega (Jonia)",
    schoolOfThought: "Presocrático",
    mainIdeas: [
      "El agua como principio de todas las cosas",
      "Explicación racional del universo",
      "Observación y razón sobre mitos",
      "Búsqueda del arjé (principio fundamental)",
      "Sabiduría práctica",
    ],
    biography:
      "Tales de Mileto (624–546 a.C.) fue un filósofo, matemático y astrónomo griego, considerado por muchos como el primer filósofo de la historia y fundador de la Escuela de Mileto. Es reconocido como el iniciador del pensamiento racional, ya que buscó explicar la naturaleza sin recurrir a mitos o dioses, sino mediante la observación y la razón. Viajó por Egipto y Babilonia donde aprendió geometría, astronomía y técnicas de medición. A su regreso a Mileto aplicó estos conocimientos para desarrollar innovaciones científicas. Su legado fue enorme: abrió el camino para filósofos posteriores.",
    philosophy:
      "Tales es considerado el iniciador de la filosofía occidental porque fue el primero en intentar explicar el origen del mundo recurriendo a la razón y la observación, dejando de lado las interpretaciones mitológicas. Sostiene que el universo posee un orden natural que puede ser conocido por el ser humano mediante el estudio, la reflexión e investigación. Su afirmación de que el agua es el principio de todas las cosas representa el esfuerzo por encontrar un elemento fundamental que explique la unidad del mundo. En lo moral propone una vida basada en la prudencia, la mesura y la sabiduría práctica.",
    curiosities: [
      "Tales fue tan observador que, según la tradición, predijo un eclipse solar en el año 585 a.C., algo que para su época parecía casi magia.",
      "Este suceso fue tan impactante que provocó que dos ejércitos en plena batalla detuvieran la guerra al ver el cielo oscurecerse.",
      "¡Un solo cálculo de Tales měl lo que nadie esperaba: detener una guerra con la ciencia!",
    ],
    quotes: [
      {
        text: "El principio es la parte más importante del trabajo.",
        interpretation: "Empezar correctamente es fundamental para cualquier empresa.",
      },
    ],
    keyWorks: [
      {
        title: "Tratados de la Naturaleza",
        description: "Obras sobre filosofía natural (fragmentos conservados)",
        pdfUrl: "https://example.com/tratados-naturaleza.pdf",
      },
    ],
    summary:
      "Filósofo presocrático considerado el primer filósofo de la historia. Propuso que el agua es el principio fundamental del universo y enfatizó la observación racional sobre las explicaciones mitológicas.",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjW14SF4l0tRUQ5BtBZW-muqZHT1DBttR7z-f2ydLoVrCbGn9g_kT7BTb2u6kKdblkAqBafLPXxY9KKVyIIa7DjSm1WZiO3Q1sBP3PfQbw_t07GtlxXAO8WdOKAKW-kmJF0WbzjlPPIMg8/s400/tales+de+mileto.jpg",
    multimedia: [
      {
        title: "El principio de todo",
        url: "https://www.tiktok.com/@donfilosofo/video/7402412058639256837",
        type: "tiktok",
      },
      {
        title: "El precio de la sabiduría",
        url: "https://www.tiktok.com/@filosofias_para_vivir/video/7412857279688477958",
        type: "tiktok",
      },
    ],
  },
  {
    id: "anaxímenes",
    name: "Anaxímenes",
    period: "585–528 a.C.",
    era: "Antigua Grecia - Presocrático",
    birthYear: 585,
    deathYear: 528,
    nationality: "Griega (Jonia)",
    schoolOfThought: "Presocrático",
    mainIdeas: [
      "El aire como principio fundamental",
      "Rarefacción y condensación",
      "Procesos físicos sin mitos",
      "Relación microcosmos-macrocosmos",
      "Aire como sustancia viva",
    ],
    biography:
      "Anaxímenes de Mileto (aprox. 585–528 a.C.) fue un filósofo griego perteneciente a la Escuela de Mileto, discípulo o continuador de Anaximandro y heredero del pensamiento de Tales de Mileto. Vivió en la ciudad de Mileto, un centro cultural y comercial donde surgió la primera filosofía racional. Continuó la búsqueda del arjé (elemento fundamental) y aportó una explicación más concreta y observable. Fue un pensador que combinó razonamiento lógico con observación de la naturaleza.",
    philosophy:
      "Anaxímenes representa un paso decisivo en el nacimiento del pensamiento racional. Heredó de Tales y Anaximandro la idea de que el universo debe tener un principio fundamental, pero quiso identificarlo en algo cercano, visible y presente: el aire. Para él, el aire no era solo un elemento físico, sino la sustancia viva que sostiene la existencia. Los cambios naturales no son mágicos sino transformaciones físicas. Al observar cómo el aire caliente se vuelve más ligero y escapa hacia arriba, imaginó que todo el universo funciona por rarefacción y condensación. Veía al aire como símbolo de vida y cohesión: así como el aliento humano cambia al contraerse o expandirse, también el aire del universo se comprime y se expande para crear todas las cosas.",
    curiosities: [
      "Anaxímenes fue el primero en explicar los fenómenos naturales con procesos físicos, sin recurrir a mitos o dioses.",
      "Decía que, así como el aliento humano cambia al contraerse o expandirse, también el aire del universo se comprime y se expande para crear todas las cosas.",
      "Con solo observar su propia respiración, ¡intentó explicar el funcionamiento del cosmos!",
    ],
    quotes: [
      {
        text: "El aire es el principio de todas las cosas",
        interpretation:
          "Así como el aliento sostiene la vida humana, el aire cósmico es la sustancia fundamental del universo.",
      },
    ],
    keyWorks: [
      {
        title: "Sobre la Naturaleza",
        description: "Tratados sobre filosofía natural (fragmentos conservados)",
        pdfUrl: "https://example.com/sobre-naturaleza.pdf",
      },
    ],
    summary:
      "Filósofo presocrático que propuso el aire como principio fundamental del universo. Explicó los cambios naturales mediante procesos de rarefacción y condensación.",
    image: "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photos/10290923/Anaximenes.png",
    multimedia: [
      {
        title: "Resumen general",
        url: "https://www.tiktok.com/@miguel_villanueva98/video/7271746800388705542",
        type: "tiktok",
      },
    ],
  },
  {
    id: "anaximandro",
    name: "Anaximandro",
    period: "610–546 a.C.",
    era: "Antigua Grecia - Presocrático",
    birthYear: 610,
    deathYear: 546,
    nationality: "Griega (Jonia)",
    schoolOfThought: "Presocrático",
    mainIdeas: [
      "El ápeiron (lo infinito indefinido)",
      "Primer cosmógrafo conocido",
      "Orden natural y equilibrio",
      "Origen evolutivo de la vida",
      "Razonamiento lógico sobre la naturaleza",
    ],
    biography:
      "Anaximandro de Mileto (610–546 a.C.) fue un filósofo, geógrafo, astrónomo y científico griego perteneciente a la Escuela de Mileto. Fue discípulo y continuador de Tales. Nació en la ciudad de Mileto, un centro comercial y cultural en Jonia (actual Turquía), donde surgió el primer pensamiento racional de Occidente. Fue uno de los primeros pensadores en proponer explicaciones del mundo basadas en principios naturales y no en mitos. Es considerado un pionero de la cosmología, la geología, la biología y la filosofía científica.",
    philosophy:
      "La filosofía de Anaximandro representa uno de los momentos más audaces de la historia del pensamiento. Propuso que el principio de todas las cosas es el ápeiron, una realidad infinita, eterna y sin forma definida. Con esta idea, Anaximandro abrió las puertas a una reflexión más compleja sobre el universo. Para Anaximandro, el universo se organiza según leyes propias que mantienen el equilibrio de la naturaleza. Los elementos que entran en conflicto 'pagan justicia' regresando al ápeiron, lo que significa que la naturaleza se regula por sí misma. Esta idea muestra un pensamiento sorprendentemente moderno, pues entiende el mundo como un sistema dinámico.",
    curiosities: [
      "Anaximandro fue el primer ser humano en dibujar un mapa del mundo conocido, mucho antes de que existieran brújulas o instrumentos modernos.",
      "Con pura observación y razonamiento, elaboró un mapa que permitió a los griegos imaginar la Tierra como un espacio ordenado y comprensible.",
      "¡Fue un geógrafo adelantado miles de años a su época!",
    ],
    quotes: [
      {
        text: "De donde las cosas tienen su origen, allí tienen también su destrucción",
        interpretation: "Todo lo que existe viene del ápeiron y a él regresa, en un ciclo eterno de transformación.",
      },
    ],
    keyWorks: [
      {
        title: "Sobre la Naturaleza",
        description: "Tratados sobre cosmología y filosofía natural (fragmentos conservados)",
        pdfUrl: "https://example.com/anaximandro-naturaleza.pdf",
      },
    ],
    summary:
      "Filósofo presocrático que propuso el ápeiron (lo infinito) como principio fundamental. Hizo contribuciones pioneras a la cosmología, geografía y teoría evolutiva.",
    image: "https://tse2.mm.bing.net/th/id/OIP.f2q2uAg6X3Z4c3N2gbBFHQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
    multimedia: [
      {
        title: "Teoría del ápeiron",
        url: "https://www.tiktok.com/@unfilosofo__/video/7290956898625457413",
        type: "tiktok",
      },
      {
        title: "La cosmogonía",
        url: "https://www.tiktok.com/@donfilosofo/video/7480238600840301830",
        type: "tiktok",
      },
    ],
  },
  {
    id: "heraclito",
    name: "Heráclito de Efeso",
    period: "540–480 a.C.",
    era: "Antigua Grecia - Presocrático",
    birthYear: 540,
    deathYear: 480,
    nationality: "Griega (Jonia)",
    schoolOfThought: "Presocrático",
    mainIdeas: [
      "El cambio constante (flux)",
      "El Logos (razón universal)",
      "Unidad de los opuestos",
      "El fuego como principio",
      "La importancia del conflicto",
    ],
    biography:
      "Heráclito de Éfeso (aprox. 540–480 a.C.) fue un filósofo griego presocrático nacido en la ciudad de Éfeso, en la región de Jonia (actual Turquía). Provenía de una familia noble, pero rechazó privilegios y cargos políticos porque prefería dedicarse a la reflexión filosófica. A diferencia de los filósofos milesios, desarrolló una filosofía más profunda y difícil, centrada en el cambio constante y en la tensión entre opuestos. Vivió de manera aislada, con fama de ser serio, reservado y crítico de la sociedad de su tiempo. Escribió un libro titulado 'Sobre la naturaleza', del cual solo se conservan fragmentos.",
    philosophy:
      "La filosofía de Heráclito de Éfeso es una de las más originales y poderosas de la antigüedad. Rompe con la idea de que la realidad es fija y estable. Observó la naturaleza, el movimiento de los ríos, el fuego, el cielo y la vida humana, y concluyó que la característica esencial del universo es el cambio constante. Nada permanece: todo se transforma a cada instante. Pero Heráclito no veía el cambio como caos sin sentido, sino como un proceso ordenado por una ley universal llamada Logos. Esta Logos es la razón profunda que explica por qué las cosas cambian y cómo se mantiene la armonía del cosmos.",
    curiosities: [
      "Heráclito decía que nadie se baña dos veces en el mismo río, porque tanto el agua como la persona cambian constantemente.",
      "Con esa frase quería mostrar que todo en el universo está en movimiento.",
      "¡Para él, vivir es cambiar!",
    ],
    quotes: [
      {
        text: "Nadie se baña dos veces en el mismo río.",
        interpretation:
          "Todo está en constante cambio y transformación. Ni el río ni la persona son los mismos en cada momento.",
      },
      {
        text: "El conflicto es el padre de todas las cosas.",
        interpretation:
          "La tensión y la lucha entre opuestos es lo que genera el movimiento y mantiene vivo el universo.",
      },
    ],
    keyWorks: [
      {
        title: "Sobre la Naturaleza",
        description: "Tratado sobre la filosofía natural del cambio y el Logos (fragmentos conservados)",
        pdfUrl: "https://example.com/heraclito-naturaleza.pdf",
      },
    ],
    summary:
      "Filósofo presocrático que enfatizó el cambio constante y la unidad de los opuestos. Su Logos representa la razón universal que ordena el cosmos.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/24/Heraclitus_b_4_compressed.jpg",
    multimedia: [
      {
        title: "Nadie se baña dos veces en el mismo río",
        url: "https://www.tiktok.com/@faridieck/video/6982253486796705025",
        type: "tiktok",
      },
      {
        title: "Resumen general",
        url: "https://www.tiktok.com/@miguel_villanueva98/video/7276932511874157829",
        type: "tiktok",
      },
      {
        title: "Fragmentos de Heráclito",
        url: "https://www.tiktok.com/@facuviola14/video/7466545849758207237",
        type: "tiktok",
      },
    ],
  },
]

export function getPhilosopherById(id: string): Philosopher | undefined {
  // Accept both decoded and encoded route params and normalize Unicode forms
  try {
    const decoded = decodeURIComponent(id)
    const normalize = (s: string) => (s && typeof (s as any).normalize === "function" ? (s as any).normalize("NFC") : s)
    const targetA = normalize(id)
    const targetB = normalize(decoded)
    return philosophers.find((p) => {
      const pid = normalize(p.id)
      return pid === targetA || pid === targetB
    })
  } catch (e) {
    return philosophers.find((p) => p.id === id)
  }
}

export function getPhilosophersByEra(era: string): Philosopher[] {
  return philosophers.filter((p) => p.era === era)
}

export function getPhilosophersSortedByTime(): Philosopher[] {
  return [...philosophers].sort((a, b) => a.birthYear - b.birthYear)
}

export interface AboutUs {
  organization: string
  mission: string
  vision: string
  objective: string
  justification: string
  importance: string
  commitment: string
  values: string[]
  contact: {
    name: string
    phone: string
    email: string
    facebook: string
  }
  secondContact: {
    name: string
    phone: string
    email: string
    facebook: string
    instagram: string
    tiktok: string
    image: string
  }
  finalMessage: string
}

export const aboutUsData: AboutUs = {
  organization:
    "Somos un grupo de estudiantes del tercer año de formación de la especialidad de Cosmovisiones, Filosofías y Psicología de la Escuela Superior de Formación de Maestros 'Manuel Ascencio Villarroel'.",
  mission:
    "Formarnos como docentes capaces de promover el análisis, la reflexión y la comprensión filosófica en los jóvenes, utilizando recursos pedagógicos accesibles y significativos que impulsen su desarrollo integral.",
  vision:
    "Convertirnos en educadores que generen espacios de diálogo, cuestionamiento y pensamiento crítico, contribuyendo a una educación transformadora que fortalezca el vivir bien y la formación de ciudadanos reflexivos.",
  objective:
    "Facilitar el acceso a información clara, organizada y confiable sobre diversos filósofos, permitiendo que los estudiantes de secundaria desarrollen habilidades para buscar información, comprender conceptos filosóficos y mejorar su interpretación de las posturas de cada pensador.",
  justification:
    "Muchos estudiantes de secundaria enfrentan dificultades al interpretar textos filosóficos o al identificar las ideas centrales de los pensadores clásicos. Por ello, surge la necesidad de un recurso educativo que presente los contenidos de manera más accesible, contextualizada y atractiva.",
  importance:
    "La filosofía es fundamental en la formación de los adolescentes, ya que fomenta el pensamiento crítico, fortalece la argumentación, promueve el diálogo, impulsa la reflexión personal y ayuda a comprender la realidad desde múltiples perspectivas. Educar en filosofía es educar para la vida.",
  commitment:
    "Como futuros maestros, asumimos la responsabilidad de formar estudiantes capaces de cuestionar, analizar y comprender el mundo que los rodea. Nos comprometemos a desarrollar estrategias pedagógicas innovadoras que despierten el interés por el conocimiento y que fomenten la libertad de pensamiento, el respeto y la búsqueda de la verdad.",
  values: [
    "Responsabilidad",
    "Respeto",
    "Solidaridad",
    "Honestidad intelectual",
    "Colaboración",
    "Reflexión crítica",
    "Amor por la educación",
  ],
  contact: {
    name: "Roberto Pereyra Gutiérrez",
    phone: "64930144",
    email: "pereyragutirrezroberto@gmail.com",
    facebook: "https://www.facebook.com/share/1BRiFqCtwu/",
  },
  secondContact: {
    name: "Efrain Coca Cotrina",
    phone: "76964819",
    email: "Cothri17@gmail.com",
    facebook: "https://www.facebook.com/share/1BRiFqCtwu/",
    instagram: "https://www.instagram.com/cothri?igsh=M3EyYTRtNmM2ejlx",
    tiktok: "https://www.tiktok.com/@cothri?_r=1&_t=ZM-91bIaLZsFnI",
    image: "https://drive.google.com/file/d/10VvY_TY8D8cm6--h08BAOjQpQVqRC1H7/view?usp=sharing",
  },
  finalMessage:
    "Creemos firmemente que la educación transforma vidas y que cada estudiante posee un potencial único que puede desarrollarse cuando se le brinda orientación adecuada. Que esta aplicación sea una herramienta que motive, inspire y abra caminos hacia el conocimiento y la reflexión.",
}
