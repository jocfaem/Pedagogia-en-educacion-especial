// Datos de la malla: cada ramo tiene un id, nombre completo, semestre, y requisitos (array de ids)
const ramos = [
  // Semestre 1
  {id:"EDE140", nombre:"Paradigmas y Políticas en Educación Especial", semestre:1, requisitos: []},
  {id:"EDE142", nombre:"Desarrollo Neurobiológico", semestre:1, requisitos: []},
  {id:"EDE146", nombre:"Ámbitos, Saberes e Intereses de la Educación Especial", semestre:1, requisitos: []},
  {id:"EDE145", nombre:"Vivencia Vocacional y Profesional en Educación Especial", semestre:1, requisitos: []},
  {id:"LCL122", nombre:"Estrategias Discursivas para Acceder al Conocimiento Disciplinar", semestre:1, requisitos: []},
  {id:"PSI311", nombre:"Taller de Psicología del Aprendizaje", semestre:1, requisitos: []},
  {id:"ANT001", nombre:"Antropología Cristiana", semestre:1, requisitos: []},

  // Semestre 2
  {id:"EDE150", nombre:"Diversidad y Necesidades de Apoyo", semestre:2, requisitos: []},
  {id:"EDE153", nombre:"Neurociencias y Aprendizaje en Educación Especial", semestre:2, requisitos: []},
  {id:"EDE155", nombre:"Vivencia de la Educación Especial en Contextos Educativos", semestre:2, requisitos: ["EDE145"]},
  {id:"EDE166", nombre:"Aprendices en Contextos Familiares y Educativos", semestre:2, requisitos: []},
  {id:"PSI196", nombre:"Psicología de la Niñez y Adolescencia", semestre:2, requisitos: []},
  {id:"ING9001", nombre:"Inglés 1", semestre:2, requisitos: []},
  {id:"FF001", nombre:"Formación Fundamental 1", semestre:2, requisitos: []},

  // Semestre 3
  {id:"EDE161", nombre:"Vivencia de la Educación Especial en Contextos de Aulas", semestre:3, requisitos: ["EDE145"]},
  {id:"EDE163", nombre:"Bases del Aprendizaje y Desarrollo Cognitivo en Educación Especial", semestre:3, requisitos: []},
  {id:"EDE169", nombre:"Desarrollo Profesional en Educación Especial I", semestre:3, requisitos: []},
  {id:"EDE210", nombre:"Evaluación y Apoyos a la Comunicación y el Lenguaje en Educación Especial", semestre:3, requisitos: []},
  {id:"EDE212", nombre:"Evaluación y Apoyos de los Lenguajes Artísticos", semestre:3, requisitos: []},
  {id:"ING9002", nombre:"Inglés 2", semestre:3, requisitos: ["ING9001"]},

  // Semestre 4
  {id:"EDE214", nombre:"Mediación en Educación Especial I", semestre:4, requisitos: ["EDE145","EDE155","EDE161"]},
  {id:"EDE345", nombre:"Bases Psicopedagógicas y Mediación para Personas con Necesidades de Apoyo", semestre:4, requisitos: []},
  {id:"EPE1118", nombre:"Fundamentos Filosóficos y Sociales de la Educación", semestre:4, requisitos: []},
  {id:"PRA101", nombre:"Práctica Docente Inicial", semestre:4, requisitos: []},
  {id:"PSI275", nombre:"Psicología Social Aplicada en la Escuela y su Comunidad", semestre:4, requisitos: []},
  {id:"PSI331", nombre:"Taller de Aprendizaje y Desarrollo Adolescente", semestre:4, requisitos: []},

  // Semestre 5
  {id:"EDE220", nombre:"Evaluación y Apoyos al Pensamiento Matemático y Científico (CN-CS)", semestre:5, requisitos: []},
  {id:"EDE222", nombre:"Diversidad y Necesidades de Apoyo Psicoeducativo", semestre:5, requisitos: []},
  {id:"EDE224", nombre:"Mediación en Educación Especial II", semestre:5, requisitos: ["EDE214"]},
  {id:"EPE1132", nombre:"Tecnologías Digitales para el Aprendizaje y el Desarrollo Profesional Docente", semestre:5, requisitos: []},
  {id:"EPE1303", nombre:"Teoría y Planificación Curricular", semestre:5, requisitos: []},
  {id:"ING9003", nombre:"Inglés 3", semestre:5, requisitos: ["ING9002"]},

  // Semestre 6
  {id:"EDE520", nombre:"Evaluación e Intervención en Dificultades del Aprendizaje: Lectura y Escritura", semestre:6, requisitos: ["EDE345"]},
  {id:"EDE521", nombre:"Evaluación e Intervención en Dificultades del Aprendizaje: Cálculo, Lenguaje y Pensamiento Matemático", semestre:6, requisitos: ["EDE345"]},
  {id:"EDE522", nombre:"Evaluación e Intervención en Dificultades del Aprendizaje: Funciones Ejecutivas, Atención y Memoria", semestre:6, requisitos: ["EDE345"]},
  {id:"EDE523", nombre:"Mediación en Educación Especial III: Dificultades del Aprendizaje", semestre:6, requisitos: ["EDE224"]},
  {id:"LCL465", nombre:"Estrategias Discursivas para Comunicar y Enseñar el Conocimiento Disciplinar", semestre:6, requisitos: []},

  // Semestre 7
  {id:"EDE349", nombre:"Familia, Escuela y Comunidad en Educación Especial", semestre:7, requisitos: []},
  {id:"EDE518", nombre:"Desarrollo de Habilidades Académicas en Jóvenes y Adultos con Necesidades de Apoyo", semestre:7, requisitos: ["EDE345"]},
  {id:"EPE1302", nombre:"Evaluación del y para el Aprendizaje", semestre:7, requisitos: ["EPE1303"]},
  {id:"PSI404", nombre:"Psicología del Adulto", semestre:7, requisitos: []},
  {id:"ING9004", nombre:"Inglés 4", semestre:7, requisitos: ["ING9003"]},
  {id:"PRA301", nombre:"Práctica Docente Intermedia", semestre:7, requisitos: ["PRA101","PSI331","EPE1303"]},

  // Semestre 8
  {id:"EDE344", nombre:"Desarrollo Profesional en Educación Especial II", semestre:8, requisitos: []},
  {id:"EDE528", nombre:"Mediación en Educación Especial IV: Socioeducativa", semestre:8, requisitos: ["EDE523"]},
  {id:"EPE1400", nombre:"Políticas Públicas Educativas y Gestión Escolar", semestre:8, requisitos: []},
  {id:"EPE1130", nombre:"Identidad Profesional Docente", semestre:8, requisitos: ["PRA301"]},
  {id:"EDE529", nombre:"Perfiles Excepcionales", semestre:8, requisitos: []},
  {id:"FF002", nombre:"Formación Fundamental 2", semestre:8, requisitos: []},
  {id:"OPT001", nombre:"Optativo 1", semestre:8, requisitos: []},

  // Semestre 9
  {id:"EPE400", nombre:"Investigación Educativa y Pedagógica", semestre:9, requisitos: []},
  {id:"EDE345",
// Datos de la malla: cada ramo tiene un id, nombre completo, semestre, y requisitos (array de ids)
const ramos = [
  
  
